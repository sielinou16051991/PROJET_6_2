import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  @Input() hostName: any;
  @Input() hostPicture: any;
  @Input() hostId: any;
  constructor() { }

  ngOnInit(): void {
  }

}
