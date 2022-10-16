import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-iot',
  templateUrl: './iot.component.html',
  styleUrls: ['./iot.component.css']
})
export class IOTComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="Gadgeon"
  hello(){
    const service=new myservice();
    service.onclickbtn(this.title);
  }

}
