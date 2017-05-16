import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaTravelComponent } from './visa-travel.component';

describe('VisaTravelComponent', () => {
  let component: VisaTravelComponent;
  let fixture: ComponentFixture<VisaTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
