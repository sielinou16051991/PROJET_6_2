import { Component, OnInit } from '@angular/core';
import { data } from '../../datas/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public data: any;
  constructor() { }

  ngOnInit(): void {
    this.data = data;
  }

}
