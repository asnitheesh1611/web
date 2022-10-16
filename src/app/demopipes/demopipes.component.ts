import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipes',
  templateUrl: './demopipes.component.html',
  styleUrls: ['./demopipes.component.css']
})
export class DemopipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // title="Space"
  // today=Date();

  user={
    id:100,
    name:"Nitheesh",DOB :10-10-2022,Salary:35000
  }

}
