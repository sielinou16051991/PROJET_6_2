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

  public toggle = false;
   refHeight: boolean | undefined;
   public heightEl: any;

  constructor() { }

  ngOnInit(): void {
    this.setHeightEl();
  }

  // tslint:disable-next-line:typedef
  toggleState() {
    this.toggle = !this.toggle;
    this.refHeight = this.toggle;
  }
  // tslint:disable-next-line:typedef
  setHeightEl() {
    // @ts-ignore
    this.heightEl = `${this.refHeight.current.scrollHeight}px`;
  }

}
