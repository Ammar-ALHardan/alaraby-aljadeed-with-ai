import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DynmicPageComponent } from './dynmic-page/dynmic-page.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }, // Set the homepage route
  { path: 'homepage', component: HomepageComponent }, // Set the homepage route
  { path: 'news/blog' , component: BlogComponent },
  { path: 'news/:section' , component: DynmicPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
