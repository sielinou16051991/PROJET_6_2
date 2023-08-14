import { Component, OnInit } from '@angular/core';
import { data } from '../../datas/Data';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-fiche-logement',
  templateUrl: './fiche-logement.component.html',
  styleUrls: ['./fiche-logement.component.scss']
})
export class FicheLogementComponent implements OnInit {

  public aboutTitle = 'Équipements';
  public pickedAppart: any;
  public piked: any;
  public dataArray: any;
  public params: any;
  public equip: any;
  public slidePics: any;
  public tags: any;
  public equipments: any;
  public description = 'Description';
  public equipements = 'Équipements';
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params;
    this.getData();
    console.log(this.params);
    console.log(this.slidePics);
    console.log(this.pickedAppart);
    this.getData();
    this.initParams();
  }
  // tslint:disable-next-line:typedef
  sePickedAppart(elt: any) {
    this.pickedAppart = elt;
  }
  // tslint:disable-next-line:typedef
  getData() {
    this.dataArray = data;
    console.log(this.dataArray);
    this.piked = this.dataArray.find((elt: any) => elt.id === this.params.id);
    console.log(this.piked);
    this.dataArray.map(() => this.sePickedAppart(this.piked));
  }

  // tslint:disable-next-line:typedef
  initParams() {
    this.slidePics = this.pickedAppart.pictures;
    this.tags = this.pickedAppart.tags;
    this.equipments = this.pickedAppart.equipments;

    this.equip = this.equipments.forEach((item: any, index: any) => (
      `<li
        key=${index}
    class='equipList'
      >
      ${item}
      </li>
      `
    ));
  }
}
