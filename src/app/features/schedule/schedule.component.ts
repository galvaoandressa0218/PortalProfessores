import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../reusable/sidebar/sidebar.component';

import { EditProgramComponent } from '../../modals/edit-program/edit-program.component';
import { EditCourseComponent } from '../../modals/edit-course/edit-course.component';
import { EditAssessmentComponent } from '../../modals/edit-assessment/edit-assessment.component';
import { EditLearningComponent } from '../../modals/edit-learning/edit-learning.component';
import { EditMethodologyComponent } from '../../modals/edit-methodology/edit-methodology.component';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [
    CommonModule,
    EditProgramComponent,
    EditCourseComponent,
    EditAssessmentComponent,
    EditLearningComponent,
    EditMethodologyComponent // 2. VERIFIQUE SE O COMPONENTE ESTÁ AQUI
  ],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  // Variáveis de controle para CADA modal
  isEditProgramModalVisible = false;
  isEditCourseModalVisible = false;
  isEditLearningModalVisible = false;
  isEditMethodologyModalVisible = false;
  isEditAssessmentModalVisible = false;

  // --- Funções para o modal 'edit-program' (Ementa) ---
  openEditProgramModal(): void { this.isEditProgramModalVisible = true; }
  closeEditProgramModal(): void { this.isEditProgramModalVisible = false; }

  // --- Funções para o modal 'edit-course' (Objetivos) ---
  openEditCourseModal(): void { this.isEditCourseModalVisible = true; }
  closeEditCourseModal(): void { this.isEditCourseModalVisible = false; }
  
  // --- Funções para o modal 'edit-learning' (Conteúdo Programático) ---
  openEditLearningModal(): void { this.isEditLearningModalVisible = true; }
  closeEditLearningModal(): void { this.isEditLearningModalVisible = false; }

  // --- Funções para o modal 'edit-methodology' (Metodologia) ---
  openEditMethodologyModal(): void { this.isEditMethodologyModalVisible = true; }
  closeEditMethodologyModal(): void { this.isEditMethodologyModalVisible = false; }

  // --- Funções para o modal 'edit-assessment' (Sistema de Avaliação) ---
  openEditAssessmentModal(): void { this.isEditAssessmentModalVisible = true; }
  closeEditAssessmentModal(): void { this.isEditAssessmentModalVisible = false; }
}