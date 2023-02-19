import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPresentationComponent } from './app-presentation.component';

describe('AppPresentationComponent', () => {
  let component: AppPresentationComponent;
  let fixture: ComponentFixture<AppPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
