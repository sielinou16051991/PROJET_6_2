import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheLogementComponent } from './fiche-logement.component';

describe('FicheLogementComponent', () => {
  let component: FicheLogementComponent;
  let fixture: ComponentFixture<FicheLogementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheLogementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheLogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
