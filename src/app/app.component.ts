import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'first_project';
  pragati=1;
  constructor(){}
  ngOnInit(){
    this.pragati=2;
  }
}
