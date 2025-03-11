import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCocheComponent } from './post-coche.component';

describe('PostCocheComponent', () => {
  let component: PostCocheComponent;
  let fixture: ComponentFixture<PostCocheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCocheComponent]
    });
    fixture = TestBed.createComponent(PostCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
