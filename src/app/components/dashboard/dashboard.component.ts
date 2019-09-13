import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LabelComponent } from '../label/label.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) 
  {}


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
  popUp(i): void {
      const dialogRef = this.dialog.open(LabelComponent, {
        width: '300px',
        height: '230px',
        panelClass: 'mayapp-no-padding-dialog',
        data: i
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
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
