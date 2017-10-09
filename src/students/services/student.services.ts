import { Injectable } from '@angular/core';

import {Http, Response, RequestOptions, Headers} from '@angular/http'

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Student} from '../interfaces/Student'


@Injectable()
export class StudentService {

apiUrl : string = 'http://localhost:9000';
constructor( private http :Http) {
}
   getStudentsList() :Observable<Student[]> {

        return this.http.get(this.apiUrl+'/students')
                  .map((response : Response ) => response.json())
                  .catch( (error : any) => Observable.throw(error.json().error || 'server error'))

   }

    createStudent(student) :Observable<Student> {

      const headers= new Headers ({'Content-Type':'application/json', 'charset':'UTF-8'});
      const options = new RequestOptions({ headers });

        return this.http.post(this.apiUrl+'/students',student, options)
                  .map((response : Response ) => { console.log(response.json());response.json()})
                  .catch( (error : any) => {
                     console.log(error);
                     return Observable.throw(error.json().error || 'server error')}
                    )

   }

}
