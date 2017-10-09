import { Component, OnInit } from '@angular/core';
import {Student} from './interfaces/Student'
import {StudentService} from './services/student.services'

@Component({
    selector: 'student-app',
    templateUrl: './student.component.html'
})
export class StudentComponent implements OnInit{
    constructor(private studentService: StudentService) { }

    students : Student[] = [
            // {age : 23, name : 'arvind', address :'address1', hobbies :'hobby1', gender:'male'},
            // {age : 22, name : 'gayu', address :'address2', hobbies :'hobby2', gender:'female'},
            // {age : 20, name : 'sssad', address :'address3', hobbies :'hobby3', gender:'male'}
        ]

    statusMessage = 'Fetching students list'

    filterString = 'all';

    ngOnInit() {

        this.studentService.getStudentsList()
            .subscribe( (data) => {
                                    if(data && data.length === 0) this.statusMessage = 'No records found';
                                    else this.students  = data;
                                  },
                        (error) => this.statusMessage = 'some error occured' + error
                      );
    }

    editStudent(id : string) {
    }

    deleteStudent(id : string) {
    }

    getAllStudentsCount() : number {
        return this.students.length;
    }

    getMaleStudentsCount() : number {
        return this.students.filter( f => f.gender.toLowerCase() === 'male' ).length;
    }

    getFemaleStudentsCount() : number {
        return this.students.filter( f => f.gender.toLowerCase() === 'female' ).length;
    }

    filterByGender(gen) {
        this.filterString = gen;
    }
}
