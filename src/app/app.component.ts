import { Component } from '@angular/core';
// import { IncomingMessage } from 'http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Counter Program';
  counter = 0;
  values = 0;
  fontcolor='red'
  Inc(){
    if(this.counter<this.values)
    this.counter++;
  }
  dec(){
   if(this.counter>0){
    this.counter--;
   }
  }
}



