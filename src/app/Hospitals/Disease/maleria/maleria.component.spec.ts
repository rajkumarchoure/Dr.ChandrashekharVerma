import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaleriaComponent } from './maleria.component';

describe('MaleriaComponent', () => {
  let component: MaleriaComponent;
  let fixture: ComponentFixture<MaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
