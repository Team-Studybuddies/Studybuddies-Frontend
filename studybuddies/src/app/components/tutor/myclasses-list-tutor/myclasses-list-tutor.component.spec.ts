import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassFilterPipe } from '../../../pipes/class-filter.pipe';


import { MyclassesListTutorComponent } from './myclasses-list-tutor.component';


describe('MyclassesListTutorComponent', () => {
  let component: MyclassesListTutorComponent;
  let fixture: ComponentFixture<MyclassesListTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ MyclassesListTutorComponent,ClassFilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyclassesListTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.ngOnInit()
    expect(component.ngOnInit).toBeTruthy();
  });

  it('getMyRooms', () => {
    component.getMyRooms()
    expect(component.getMyRooms).toBeTruthy();
  });

  it('getId', () => {
    component.getId()
    expect(component.getId).toBeTruthy();
  });
});
