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
    // this.getAllNotes();
    this.createNote = this.formBuilder.group
      (
        {
          title: ['', Validators.required],
          discription: ['', Validators.required]
        }
      )
  }
  getAllNotes() {
    var data = {
      path: "getAllNotes",
      token: localStorage.getItem('token')

    }
    this.noteService.getRequest(data).subscribe(
      (Response: any) => {
        console.log("get all notes api hitted")
        this.getAllNotes = Response;
        console.log(Response);
        console.log("Notes are:" + Response.NoteId)
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
      "setcolour":this.paint 
       }

    console.log("create note data---->", createNote);

    const path = "create";
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

  colorCodes = ['#ffffff', '#f28b82','#f7bc04','#faf474','##cbff90','#a7ffeb','#cbf0f8','#adcbfa','#d7aefb','#fdcfe8','#cbb294','#e8eaed'];
  paint : any ;

    color(color) {
      this.paint = color
      console.log("color selected", this.paint);
    }
      
        // { name: "white", hexcode: "#ffffff" },
        // { name: "lightGreen", hexcode: "#f28b82" },
        // { name: "purple", hexcode: "#f7bc04" },
        // { name: "red", hexcode: "#faf474" },
      
      
        // { name: "Teal", hexcode: "#cbff90" },
        // { name: "pink", hexcode: "#a7ffeb" },
        // { name: "orange", hexcode: "#cbf0f8" },
        // { name: "blue", hexcode: "#adcbfa" },
      
      
        // { name: "brown", hexcode: "#d7aefb" },
        // { name: "yellow", hexcode: "#fdcfe8" },
        // { name: "darkBlue", hexcode: "#cbb294" },
        // { name: "gray", hexcode: "#e8eaed" }
      
    // ]
}




