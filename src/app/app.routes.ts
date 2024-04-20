import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopicsListComponent } from './views/topics-list/topics-list.component';
import { MediaListComponent } from './views/media-list/media-list.component';
import { TextListComponent } from './views/text-list/text-list.component';
 
export const routes: Routes = [

  { path: 'courses-list/:cid/topics-list', component: TopicsListComponent } ,
  
  { path: 'courses-list/:cid/topics-list/:tid/media-list', component: MediaListComponent },

  { path: 'courses-list/:cid/topics-list/:tid/text-list', component: TextListComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }