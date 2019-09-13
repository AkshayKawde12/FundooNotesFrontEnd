import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/note-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NoteId } from 'src/app/model/note-id';
import { UpdateNotes } from 'src/app/model/update-notes';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-shownotes',
  templateUrl: './shownotes.component.html',
  styleUrls: ['./shownotes.component.scss']
})
export class ShownotesComponent implements OnInit {
  httpservice: any;

  constructor(
    private noteService: NoteServiceService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  allNotes: any = []

  ngOnInit() {
    var data = {
      path: "getAllNotes",
      token: localStorage.getItem('token')
    } 
    this.noteService.getRequest(data).subscribe(
      (Response: any) => {
        console.log("get all Label api hitted");
        console.log("--->", Response);
        this.allNotes = Response;
        console.log("all notes -->", this.allNotes);
      }
    )
  }

  onDelete(i) {

    console.log("note Id is--->", i);
    const path = "delete?noteId=" + i.noteId
    console.log("NoteId", i.noteId);
    this.noteService.putRequestDelete(path).subscribe(
      (response: any) => {
        console.log("note deleted --->", response);
        console.log(response.statusMessage);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  popUp(i): void {
    const dialogRef = this.dialog.open(UpdateNotesComponent, {
      width: '570px',
      height: '170px',
      panelClass: 'mayapp-no-padding-dialog',
      data: i
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}





