import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stud-list',
  templateUrl: './stud-list.component.html',
  styleUrls: ['./stud-list.component.css']
})
export class StudListComponent implements OnInit {
    printing=false;
  listStudent():void{
    this.printing=true;
    console.log('Showing stored students');
  }
  constructor() { }

  ngOnInit() {
  }

}
