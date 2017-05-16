import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerUsComponent } from './partner-us.component';

describe('PartnerUsComponent', () => {
  let component: PartnerUsComponent;
  let fixture: ComponentFixture<PartnerUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
