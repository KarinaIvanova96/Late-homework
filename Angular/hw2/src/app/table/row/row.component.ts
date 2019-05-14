import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  visible: boolean = true;

  del() {
    this.visible = false;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
