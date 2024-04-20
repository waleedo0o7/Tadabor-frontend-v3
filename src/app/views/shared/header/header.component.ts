import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { SharedService } from 'src/app/core/shared.service';
import { HttpClient } from '@angular/common/http';

   
  
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  
  private apiUrl = environment.apiUrl;
  constructor(private router:Router,private http: HttpClient, private sharedService: SharedService) {}

  coursesList!:Course[];

  getCoursesList(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/courses`);
  }

  onNavOpenTopics(id:Number){
    this.sharedService.navSubject$.next(id);
    window.location.href = `/courses-list/${id}/topics-list`
  }

  googleSignIn() {
    this.sharedService.googleSignIn()
  }

  ngOnInit() {
    this.getCoursesList().subscribe((data:Course[]) => {
      this.coursesList = data
    });
  }
}
