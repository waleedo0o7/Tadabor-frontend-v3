import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './core/models/course.model';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './core/shared.service';
import { environment } from 'src/environments/environment';
import { Topic } from './core/models/topic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Tadabor-frontend-v3';

  private apiUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() { }

}
