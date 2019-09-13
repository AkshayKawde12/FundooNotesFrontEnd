import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { LabelServiceService } from 'src/app/service/label-service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  createLabel: FormGroup;

  constructor(
    private labelService: LabelServiceService
  ) { }

  ngOnInit() {
    this.createLabel = new FormGroup({
      labelName: new FormControl('')
    })
  }

  create(): void {
    var labelData =
    {
      "labelName": this.createLabel.controls.labelName.value
    }
    var data = {
      path: "label/create",
    }
    console.log('all data---->', data,labelData);
    this.labelService.postRequest(data,labelData).subscribe((response: any) => {
      console.log("label created --->", response);
    }, (error) => {
      console.log("failed to create label", error);
    });
  }
}
