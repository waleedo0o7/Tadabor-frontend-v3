import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/core/shared.service';

@Component({
  selector: 'app-course-navbar',
  templateUrl: './course-navbar.component.html',
  styleUrls: ['./course-navbar.component.scss']
})
export class CourseNavbarComponent {


  @Input() topicName = '';
  @Input() coursesId = '';
  @Input() topicId = '';

  constructor(private sharedService:SharedService , private router:Router) {}


  navText():void {
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${this.topicId}/text-list`]);
  }

  navMedia():void {
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${this.topicId}/media-list`]);
  }

  ngOnInit(){
    // alert(this.coursesId);
    // alert(this.topicId);
  }
  
}
