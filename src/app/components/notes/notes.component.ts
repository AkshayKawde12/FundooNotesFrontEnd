import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateNote } from 'src/app/model/create-note';
import { NoteServiceService } from 'src/app/service/note-service.service';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteId } from 'src/app/model/note-id';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  user: CreateNote = new CreateNote();
  createNote: FormGroup;

  constructor(
    private snackBar: MatSnackBar, 
    private router: Router,
    private noteService: NoteServiceService, 
    public formBuilder: FormBuilder) { }


  ngOnInit() {
    this.getAllLabels();
    this.createNote = this.formBuilder.group
      (
        {
          title: ['', Validators.required],
          discription: ['', Validators.required],
          NoteId:['',Validators.required]
        }
      )
  }
  getAllLabels() {
    var data = {
      path: "getAllNotes",
      token: localStorage.getItem('token')
      
    }
    this.noteService.getRequest(data).subscribe(
      (Response: any) => {
        console.log("get all Label api hitted")
        this.getAllLabels = Response;
        console.log(Response);
        console.log("label are:" + Response.labelId)
        // console.log("NoteId---->" +Response.NoteId)
      }
    )
  }

  hide: boolean = false;
  popOut() {
    this.hide = true
  }
  onSubmit() {
    var createNote = {
      "title": this.createNote.controls.title.value,
      "discription": this.createNote.controls.discription.value,
      "NoteId":this.createNote.controls.NoteId.value
    }

    console.log("create note data---->", createNote);

    const path = "create"
    console.log("createNote", this.createNote.value);
    this.noteService.postRequest(path, createNote).subscribe(
      (response: any) => {
        console.log("note created --->", response);
        console.log(response.statusMessage);
      },
      (error: any) => {
        console.log(error.error.statusMessage);
      }
    );
  }
}





