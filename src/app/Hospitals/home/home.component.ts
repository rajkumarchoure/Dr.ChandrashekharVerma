import {AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 hover:boolean;
  constructor(private renderer: Renderer2) { 
  
  }
  cards = [
    {img: '/../../assets/HospitalImage.jpg',
     name:'ch-hospital1',
    description:'this will show data for chandru'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    name:'ch-hospital2',
    description:'this will show data for chandru'},
    {img: '/../../assets/HospitalImage.jpg',
    name:'ch-hospital3',
    description:'this will show data for chandru'},
    {img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
    name:'ch-hospital4',
    description:'this will show data for chandru'},
    {img: '/../../assets/HospitalImage.jpg',
    name:'ch-hospital5',
    description:'this will show data for chandru'},
  ];

  ngOnInit(): void {
  }



}
