import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Topic } from 'src/app/core/models/topic.model';
import { SharedService } from 'src/app/core/shared.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent {

  private apiUrl = environment.apiUrl;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute, private sharedService: SharedService) {

    this.coursesId = this.route.snapshot.paramMap.get('cid');

    this.sharedService.navSubject$.next(this.coursesId);

  }


  topicsList: Topic[] = [];
  coursesId: any;


  getTopicsList(id: any): Observable<Topic[]> {

    return this.http.get<Topic[]>(`${this.apiUrl}/courses/${id}/topics`);

  }

  onNavOpenMedia(tid: Number) {
    this.sharedService.navSubject$.next(tid);
    this.router.navigate([`/courses-list/${this.coursesId}/topics-list/${tid}/media-list`]);
  }

  showLoader:boolean = true ;

  ngOnInit() {

    this.sharedService.navSubject$.subscribe(
      e => {
        this.getTopicsList(e).subscribe((data: Topic[]) => {
          this.showLoader = false;
          this.topicsList = data;
        });
      }
    );
    
    this.sharedService.navSubject$.next(this.coursesId);
  }

}