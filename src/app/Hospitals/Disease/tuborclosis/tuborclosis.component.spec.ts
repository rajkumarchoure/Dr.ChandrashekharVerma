import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuborclosisComponent } from './tuborclosis.component';

describe('TuborclosisComponent', () => {
  let component: TuborclosisComponent;
  let fixture: ComponentFixture<TuborclosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuborclosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuborclosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
