import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CoursesComponent } from './courses/courses.component';
import { ContentManagementComponent } from './content-management/content-management.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'content', component: ContentManagementComponent },
  { path: 'courses', component: CoursesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

