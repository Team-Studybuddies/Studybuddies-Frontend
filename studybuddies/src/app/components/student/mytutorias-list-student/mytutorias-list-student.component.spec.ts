import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytutoriasListStudentComponent } from './mytutorias-list-student.component';

describe('MytutoriasListStudentComponent', () => {
  let component: MytutoriasListStudentComponent;
  let fixture: ComponentFixture<MytutoriasListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MytutoriasListStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MytutoriasListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});