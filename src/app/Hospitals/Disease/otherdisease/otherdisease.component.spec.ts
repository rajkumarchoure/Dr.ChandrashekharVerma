import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdiseaseComponent } from './otherdisease.component';

describe('OtherdiseaseComponent', () => {
  let component: OtherdiseaseComponent;
  let fixture: ComponentFixture<OtherdiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherdiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherdiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
