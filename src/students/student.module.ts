import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {FormsModule} from '@angular/forms';

import {StudentComponent} from './student.component'
import {StudentService} from './services/student.services'
import {StudentFilterComponent} from './studentfilter/studentfilter.component'
import {StudentFormComponent} from './studentform/studentform.component'
import {StudentRoutingModule} from './student.router.module'

@NgModule({
    declarations: [StudentComponent, StudentFilterComponent, StudentFormComponent],
    imports: [ CommonModule,FormsModule, StudentRoutingModule ],
    exports: [StudentComponent],
    providers: [StudentService],
})
export class StudentModule {}