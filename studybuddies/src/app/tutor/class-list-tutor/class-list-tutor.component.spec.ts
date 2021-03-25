import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListTutorComponent } from './class-list-tutor.component';

describe('ClassListTutorComponent', () => {
  let component: ClassListTutorComponent;
  let fixture: ComponentFixture<ClassListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassListTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
