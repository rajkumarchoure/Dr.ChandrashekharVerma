import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  }

  OnInit(){

  } 

  GetUrlForAppImage(){
    return "url('../assets/HospitalImage.jpg')";
  }
 
  title = 'Ch-Hospital';
}
