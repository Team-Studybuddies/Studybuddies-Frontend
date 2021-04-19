import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyclassesListStudentComponent } from './myclasses-list-student.component';

describe('MyclassesListStudentComponent', () => {
  let component: MyclassesListStudentComponent;
  let fixture: ComponentFixture<MyclassesListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyclassesListStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});