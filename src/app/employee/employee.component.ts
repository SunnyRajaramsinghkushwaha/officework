import { Component  } from '@angular/core';

@Component ({
    selector : 'app-employee',
    templateUrl : './employee.component.html',
    styleUrls : ['./employee.component.css']
})

export class EmployeeComponent {
    firstname = 'Sunny';
    lastname = 'Kushwaha';
    gender = 'male';
    age = 20;
    colspan = 2;

}

