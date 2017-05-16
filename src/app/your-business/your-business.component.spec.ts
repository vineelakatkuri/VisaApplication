import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourBusinessComponent } from './your-business.component';

describe('YourBusinessComponent', () => {
  let component: YourBusinessComponent;
  let fixture: ComponentFixture<YourBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
