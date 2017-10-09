import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {StudentFormComponent} from './studentform/studentform.component'
import {StudentComponent} from './student.component'

const routes: Routes = [
    
    { path: 'students', component: StudentComponent },
    { path: 'students/create', component: StudentFormComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule {}
