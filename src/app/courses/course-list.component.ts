import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {

    courses: Course[] = [];

    constructor(private couseService: CourseService) { }

    ngOnInit(): void {
        this.courses = this.couseService.retrieveAll();
        

    }

}