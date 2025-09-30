import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLoginComponent } from './features/page-login/page-login.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { SubjectListComponent } from './features/subjects/subject-list/subject-list.component';
import { TeacherListComponent } from './features/teachers/teacher-list/teacher-list.component'; 
import { ScheduleComponent } from './features/schedule/schedule.component';

export const routes: Routes = [
    { path: 'login', component: PageLoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path:'forgot-password', component: ForgotPasswordComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'subjects', component: SubjectListComponent },
    { path: 'teachers', component: TeacherListComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);

NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


