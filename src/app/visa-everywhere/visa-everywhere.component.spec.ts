import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaEverywhereComponent } from './visa-everywhere.component';

describe('VisaEverywhereComponent', () => {
  let component: VisaEverywhereComponent;
  let fixture: ComponentFixture<VisaEverywhereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaEverywhereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaEverywhereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
