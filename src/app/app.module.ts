import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TeacherSigninComponent } from './teacher-signin/teacher-signin.component';
import { StudentSigninComponent } from './student-signin/student-signin.component';
import { ImageCompComponent } from './image-comp/image-comp.component';
import { AppServiceService } from './app-service.service';
const appRoutes: Routes = [
  { path: 'student', component: StudentSigninComponent },
  { path: 'teacher', component: TeacherSigninComponent },
  { path: '',   component: ImageCompComponent}]

@NgModule({
  declarations: [
    AppComponent,
    TeacherSigninComponent,
    StudentSigninComponent,
    ImageCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes // <-- debugging purposes only
    ),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
