import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioDoisComponent } from './exercicio-dois.component';

describe('ExercicioDoisComponent', () => {
  let component: ExercicioDoisComponent;
  let fixture: ComponentFixture<ExercicioDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioDoisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
