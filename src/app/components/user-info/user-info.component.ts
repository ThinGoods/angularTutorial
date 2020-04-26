import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user-interfaces';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }
  @Input() username;

  multiple(a, b) {
    return a * b;
  }

  ngOnInit(): void {
    this.getCurrentUser(this.username);
  }

  isLoaded: boolean = false;
  user: IUser;

  getCurrentUser(username): void {
    setTimeout(() => {
      this.isLoaded = true;
      this.user = {
        name: username,
        avatar: '../../assets/avatar.png',
        id: 1
      }
    }, 500)
  }

}
