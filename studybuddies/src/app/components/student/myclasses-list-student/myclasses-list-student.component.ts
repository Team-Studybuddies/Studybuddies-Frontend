import { Component, OnInit } from '@angular/core';
import { SalasService } from 'src/app/services/salas.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-myclasses-list-student',
  templateUrl: './myclasses-list-student.component.html',
  styleUrls: ['./myclasses-list-student.component.css'],
})
export class MyclassesListStudentComponent implements OnInit {
  userId: number;
  rooms = [];
  search: string;

  constructor(
    public roomService: SalasService,
    public authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.userId = this.getId();
    this.getMyRooms();
  }

  getMyRooms() {
    this.roomService.getMyRooms(this.userId).subscribe((res: any) => {
      this.rooms = res.salasEstudio.sort((a: { date: Date; }, b: { date: Date; }) => (a.date > b.date) ? 1 : -1);
    });
  }

  public getId(): number {
    let user = this.tokenStorage.getUser();
    if (user) {
      return user.id;
    }

    return 0;
  }
}
