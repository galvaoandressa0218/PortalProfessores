import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../reusable/sidebar/sidebar.component';

import { EditProgramComponent } from '../../modals/edit-program/edit-program.component';
import { EditCourseComponent } from '../../modals/edit-course/edit-course.component';
import { EditAssessmentComponent } from '../../modals/edit-assessment/edit-assessment.component';
import { EditLearningComponent } from '../../modals/edit-learning/edit-learning.component';
import { EditMethodologyComponent } from '../../modals/edit-methodology/edit-methodology.component';

// (Opcional, mas recomendado) Define os tipos de modais para segurança e autocompletar
type ActiveModal = 'program' | 'course' | 'learning' | 'methodology' | 'assessment';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    EditProgramComponent,
    EditCourseComponent,
    EditAssessmentComponent,
    EditLearningComponent,
    EditMethodologyComponent 
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  // Apenas uma propriedade para controlar todos os modais
  activeModal: ActiveModal | null = null;

  // Um método genérico para abrir qualquer modal
  openModal(modalName: ActiveModal): void {
    this.activeModal = modalName;
  }

  // Um método único para fechar o modal ativo
  closeModal(): void {
    this.activeModal = null;
  }
}