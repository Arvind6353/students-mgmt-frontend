import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'student-filter',
    templateUrl: './studentfilter.component.html',
})
export class StudentFilterComponent implements OnInit {

    @Input()
    countAll : number = 3
    @Input() 
    countMale : number = 2
    @Input()
    countFemale : number = 1
        
    @Output()
    filterSelectedGender : EventEmitter<String> = new EventEmitter<String>();

    selectedGender : string = 'all'

    constructor() { }

    ngOnInit() { }

    updateSelectedGender() {
        this.filterSelectedGender.next(this.selectedGender)
    }
}