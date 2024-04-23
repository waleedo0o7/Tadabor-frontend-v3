import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/core/models/course.model';
import { SharedService } from 'src/app/core/shared.service';
import { HttpClient } from '@angular/common/http';
  
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private apiUrl = environment.apiUrl;
  currentLang:string;

  constructor(private router:Router,private http: HttpClient, private sharedService: SharedService , public translate : TranslateService , private route: ActivatedRoute) {
    this.currentLang = localStorage.getItem('currentLang') || 'ar';
    this.translate.use(this.currentLang);
  }

  coursesId: any;
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

  toggleLang() {
    if(this.currentLang == 'ar') {
      this.translate.use('en');
      localStorage.setItem('currentLang' , 'en');
      this.currentLang = 'en';
    } else {
      this.translate.use('ar');
      localStorage.setItem('currentLang' , 'ar');
      this.currentLang = 'ar';
    }
  }

  ngOnInit() {
    this.getCoursesList().subscribe((data:any) => {
      this.coursesList = data;
    });
  }

}
