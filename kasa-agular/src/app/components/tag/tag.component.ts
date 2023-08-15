import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {

  @Input() keyFich: any;
  @Input() tagElt: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.keyFich);
    console.log(this.tagElt);
  }

}
