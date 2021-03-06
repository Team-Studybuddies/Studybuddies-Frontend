import { TutorService } from 'src/app/services/tutor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tutor',
  templateUrl: './list-tutor.component.html',
  styleUrls: ['./list-tutor.component.css'],
})
export class ListTutorComponent implements OnInit {
  tutores = [];
  search: string;

  constructor(public tutorService: TutorService) {}

  ngOnInit(): void {
    this.getTutores();
  }

  getTutores() {
    this.tutorService.getTutores().subscribe((res: any) => {
      this.tutores = res.tutores;
    });
  }
}
