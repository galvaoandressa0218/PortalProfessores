import { Routes } from '@angular/router';

// 1. Importe o seu novo componente de Layout
import { InternalLayoutComponent } from './layouts/internal-layout/internal-layout.component';

// 2. Importe os componentes das suas páginas
import { PageLoginComponent } from './features/page-login/page-login.component';
import { ForgotPasswordComponent } from './features/forgot-password/forgot-password.component';
import { SubjectListComponent } from './features/subjects/subject-list/subject-list.component';
import { TeacherListComponent } from './features/teachers/teacher-list/teacher-list.component'; 
import { ScheduleComponent } from './features/schedule/schedule.component';
import { InformationComponent } from './features/schedule/information/information.component';
import { CourseListComponent } from './features/course-list/course-list.component';
import { MatrizListComponent } from './features/matriz-list/matriz-list.component';

// 3. Exporte apenas a constante 'routes'
export const routes: Routes = [
    // --- ROTAS PÚBLICAS (sem sidebar) ---
    { path: 'login', component: PageLoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // A página inicial é o login

    // --- ROTAS INTERNAS (com sidebar) ---
    {
      path: '', // O caminho base para as rotas internas
      component: InternalLayoutComponent, // Primeiro, carrega a "moldura" com a sidebar...
      children: [
        { path: 'subjects', component: SubjectListComponent },
        { path: 'teachers', component: TeacherListComponent },
        { path: 'schedule', component: ScheduleComponent },
        { path: 'schedule/information/:id', component: InformationComponent },
        { path: 'course-list', component: CourseListComponent },
        { path: 'matriz-list', component: MatrizListComponent },
      ]
    }
];

// As linhas abaixo não são mais necessárias em uma aplicação standalone.
// export const AppRoutes = RouterModule.forRoot(routes);
// NgModule ({...})