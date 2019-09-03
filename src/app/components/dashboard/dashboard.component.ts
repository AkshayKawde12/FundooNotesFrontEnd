import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Notes()
  {
    alert("Notes are here");
  }
  Reminders()
  {
    alert("pop up Reminder");
  }
  Edit_labels()
  {
    alert("create labels");
  }
  Archive()
  {
    alert("Archive");
  }
  Trash()
  {
    alert("you are in trash");
  }

}
