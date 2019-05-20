import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Details';
  imagepath = 'http://www.pragimtech.com/Images/Logo.JPG';
  firstname = 'Akshit';
  lastname = 'Singh';
  isDisable = false;
  getFullName(){
    return this.firstname +  ' ' + this.lastname;
  }
}
