import { Component, OnInit } from '@angular/core';
import { dataAbout } from '../../datas/DataAbout';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public dataAbout: any;
  constructor() { }

  ngOnInit(): void {
    this.dataAbout = dataAbout;
  }

}
