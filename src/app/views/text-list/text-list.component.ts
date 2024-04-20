import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TextLesson } from 'src/app/core/models/text-lesson.model';
import { SharedService } from 'src/app/core/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-text-list',
  templateUrl: './text-list.component.html',
  styleUrls: ['./text-list.component.scss']
})
export class TextListComponent {


  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {
    this.coursesId = this.route.snapshot.paramMap.get('cid');
    this.topicId = this.route.snapshot.paramMap.get('tid');
  }
  
  textList!: TextLesson[];
  textDetails!: TextLesson;

  coursesId: any;
  topicId: any;
  topicName: any;




  getTopicName() {
    this.http.get<any>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}`).subscribe(e => { this.topicName = e.name });
  }

  getTextLessonsList(): Observable<TextLesson[]> {
    return this.http.get<TextLesson[]>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/text`
    );
  }

  getTextLessonDetails(id: Number) {
    this.http.get<TextLesson>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/text/${id}`
    ).subscribe((data: any) => {
      this.textDetails = data.descriptionAr;
    });
  }



  ngOnInit() {

    this.getTopicName();
    console.log('cid', this.coursesId);
    console.log('tid', this.topicId);

    this.getTextLessonsList().subscribe((data: any) => {

      this.textList = data.data;

      this.getTextLessonDetails(this.textList[0].id);

    });



  }
  

}
