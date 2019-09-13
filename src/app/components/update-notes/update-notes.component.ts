import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { NoteServiceService } from 'src/app/service/note-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  
  updateNote:FormGroup

  constructor
  (
    private router: Router,
    private noteService: NoteServiceService,
    public formBuilder: FormBuilder,
   
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  title  = new FormControl();
  discription = new FormControl();

  ngOnInit() 
  {
    // this.updateNote = this.formBuilder.group
    // (
    //   {
    //     title: ['', Validators.required],
    //     discription: ['', Validators.required] 
    //   }
    // )
  }

  onSubmit(data)
  {
    console.log(this.title.value,this.discription.value);
    var senddata ={
      "title":this.title.value,
      "discription":this.discription.value,
    }
    console.log("note Id is--->", data);
    // const path = "delete?noteId=" + data.noteId
    const path = "update";
    console.log("path---->",path)
    console.log("NoteId", data.noteId);
    this.noteService.putRequest(path,data.noteId,senddata).subscribe(
      (response: any) => {
        console.log("note updated --->", response);
        console.log(response.statusMessage);
      },
      (error: any) => {
        console.log(error);
      }
    );
  } 
  }


