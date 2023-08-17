import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  @Input() key: any;
  @Input() aboutTitle: any;
  @Input() aboutText: any;
  @Input() aboutStyle: any;
  @Input() dataCollapse: any;

  public toggle = false;
   public heightEl: any;
   public arrayaboutText: any[] = [];
   refHeight: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.aboutStyle);
    // console.log(this.dataCollapse);
    this.setHeightEl();
    // this.arrayaboutText = this.aboutText.split(1, ',');
    console.log(this.arrayaboutText);
    console.log(this.aboutText);
  }

  // tslint:disable-next-line:typedef
  toggleState() {
    this.setToggle();
    // this.refHeight = this.toggle;
  }
  // tslint:disable-next-line:typedef
  setToggle() {
    this.toggle = !this.toggle;
  }
  // tslint:disable-next-line:typedef
  setHeightEl() {
    // console.log(this.refHeight);
    // @ts-ignore
    // this.heightEl = `${this.refHeight.current.scrollHeight}px`;
    // this.heightEl = this.refHeight;
    // console.log(this.heightEl);
  }

}
