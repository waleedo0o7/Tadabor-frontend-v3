import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoLesson } from 'src/app/core/models/video-lesson.model';
import { SharedService } from 'src/app/core/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent {


  private apiUrl = environment.apiUrl;


  constructor(private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {
    this.coursesId = this.route.snapshot.paramMap.get('cid');
    this.topicId = this.route.snapshot.paramMap.get('tid');
  }


  
  mediaList: VideoLesson[] = [];
  coursesId: any;
  topicId: any;
  topicName:any;
  mediaListId: any;



  
  convertSeconds(time: any) {
    let seconds = parseInt(time);

    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;

    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    let result = '';

    if (time < 60) {
      // only seconds show
      result = this.pad(seconds, 2);
    } else if (time > 60 && time < 3600) {
      // only minutes and seconds show
      result = this.pad(minutes, 2) + ':' + this.pad(seconds, 2);
    } else {
      // hours and  minutes  and seconds show

      result =
        this.pad(hours, 2) +
        ':' +
        this.pad(minutes, 2) +
        ':' +
        this.pad(seconds, 2);
    }

    return result;
  }

  pad(num: any, size: any) {
    var s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  getVideoLessonsList(): Observable<VideoLesson[]> {
    return this.http.get<VideoLesson[]>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}/lessons/media`
    );
  }

  getTopicName() {
    this.http.get<any>(
      `${this.apiUrl}/courses/${this.coursesId}/topics/${this.topicId}`).subscribe(e=>{this.topicName = e.name});
  }

  ngOnInit() {
 

    this.getTopicName()

    this.getVideoLessonsList().subscribe((data: any) => {
      this.mediaList = data.data;
      this.mediaList.forEach((e) => {
        e.durationMinutes = this.convertSeconds(e.durationSec);
      });
    });
  }
  
}
