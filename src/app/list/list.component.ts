import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title!: string;
  message!: string;
  styleClass!: string;
  now!: Date;
  
    
  constructor() { 
  setInterval(
        () => { this.now = new Date(); }, 1000);
    }
  ngOnInit() {
    this.title = 'Todo-list';
    this.message = 'This is My First Component!!';
    this.styleClass = 'lightpink';
  }

  today() {
    return new Date().toLocaleString();
  }
}
