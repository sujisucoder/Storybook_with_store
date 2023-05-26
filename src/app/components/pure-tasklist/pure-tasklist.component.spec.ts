import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureTasklistComponent } from './pure-tasklist.component';

describe('PureTasklistComponent', () => {
  let component: PureTasklistComponent;
  let fixture: ComponentFixture<PureTasklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PureTasklistComponent]
    });
    fixture = TestBed.createComponent(PureTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
