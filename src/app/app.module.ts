import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseNavbarComponent } from './views/shared/course-navbar/course-navbar.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { TopicsListComponent } from './views/topics-list/topics-list.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app.routes';
import { MediaListComponent } from './views/media-list/media-list.component';
import { TextListComponent } from './views/text-list/text-list.component';
import { SafeHtmlPipe } from "./core/safe-html.pipe";

import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
 
import { SharedInterceptor } from './core/shared.interceptor';
@NgModule({
    declarations: [
        AppComponent,
        CourseNavbarComponent,
        HeaderComponent,
        TopicsListComponent,
        MediaListComponent,
        TextListComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: SharedInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SafeHtmlPipe,
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ]
})
export class AppModule { }
