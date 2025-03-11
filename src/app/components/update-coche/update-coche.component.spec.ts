import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCocheComponent } from './update-coche.component';

describe('UpdateCocheComponent', () => {
  let component: UpdateCocheComponent;
  let fixture: ComponentFixture<UpdateCocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCocheComponent]
    });
    fixture = TestBed.createComponent(UpdateCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
