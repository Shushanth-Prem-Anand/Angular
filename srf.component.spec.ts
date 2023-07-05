import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrfComponent } from './srf.component';

describe('SrfComponent', () => {
  let component: SrfComponent;
  let fixture: ComponentFixture<SrfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrfComponent]
    });
    fixture = TestBed.createComponent(SrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
