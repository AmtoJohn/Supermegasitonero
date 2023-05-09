import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitagawaComponent } from './kitagawa.component';

describe('KitagawaComponent', () => {
  let component: KitagawaComponent;
  let fixture: ComponentFixture<KitagawaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitagawaComponent]
    });
    fixture = TestBed.createComponent(KitagawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
