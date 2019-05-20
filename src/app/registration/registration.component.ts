import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    userList: User[] = [];
  onSubmit(form) {
    let user: User;
    user = form.value;
    this.userList.push(user);

  }
  constructor() { }

  ngOnInit() { }

}
