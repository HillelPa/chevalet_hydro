import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaquetteComponent } from './plaquette.component';

describe('PlaquetteComponent', () => {
  let component: PlaquetteComponent;
  let fixture: ComponentFixture<PlaquetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaquetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
