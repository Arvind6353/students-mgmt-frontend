import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {StudentService} from '../services/student.services'
@Component({
    selector: 'student-form',
    templateUrl: './studentform.component.html',
})
export class StudentFormComponent implements OnInit {
    constructor(private studentService : StudentService, private router:Router) { }

    name : string ;
    age: number;
    address : string;
    gender : string;
    hobbies : string;


    ngOnInit() { }

    createStudent(){
        var payload = {
            name : this.name,
            age: this.age,
            address: this.address,
            hobbies : this.hobbies,
            gender : this.gender
        }
        this.studentService.createStudent(payload)
            .subscribe( (data) =>   {
              console.log('inside',data);
               this.router.navigate(['/students'])
            },
                        (error) =>{              console.log('error', error);
                      }
                      )
    }
}
