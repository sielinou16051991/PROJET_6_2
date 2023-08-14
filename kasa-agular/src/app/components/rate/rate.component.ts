import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {

  @Input() score: any;
  public stars = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}
