import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCocheComponent } from './get-coche.component';

describe('GetCocheComponent', () => {
  let component: GetCocheComponent;
  let fixture: ComponentFixture<GetCocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetCocheComponent]
    });
    fixture = TestBed.createComponent(GetCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
