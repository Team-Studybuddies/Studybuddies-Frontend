import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformToTutorComponent } from './transform-to-tutor.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('TransformToTutorComponent', () => {
  let component: TransformToTutorComponent;
  let fixture: ComponentFixture<TransformToTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, FormsModule, RouterTestingModule],
      declarations: [ TransformToTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransformToTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});