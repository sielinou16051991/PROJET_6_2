import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() slides: any;
  public length: any;
  public current = 0;
  constructor() { }

  ngOnInit(): void {
    this.length = this.slides.length;
    console.log(this.slides);
  }

  // tslint:disable-next-line:typedef
  nextSlide() {
    // on part au premier slide quand on arrive au dernier
    // this.current = this.current === this.length - 1 ? 0 : this.current + 1;
    if (this.current === this.length - 1) {
      this.current = 0;
    }else {
      this.current = this.current + 1;
    }
    console.log(this.current);
  }
  // tslint:disable-next-line:typedef
  prevSlide() {
    // on part au dernier slide quand est au premier
    // this.current = this.current === 0 ? this.length - 1 : this.current - 1;
    if (this.current === 0) {
      this.current = this.length - 1;
    }else {
      this.current = this.current - 1;
    }
    console.log(this.current);

  }

}
