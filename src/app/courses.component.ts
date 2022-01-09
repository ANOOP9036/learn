import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
        <h2>{{getTitle()}}</h2>
        <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
        <ul>
    `
})
export class CoursesComponent{
    title = "Lord of the Rings";
    courses;

    getTitle(){
        return this.title;
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}