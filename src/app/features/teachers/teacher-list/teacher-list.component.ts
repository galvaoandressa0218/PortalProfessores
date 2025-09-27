import { Component } from '@angular/core';
import { SidebarComponent } from "../../reusable/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { AddProfessorModalComponent } from '../../../modals/add-professor-modal/add-professor-modal.component';
// import { AddProfessorModalComponent } from '../../modals/add-professor-modal/add-professor-modal.component';

@Component({
  selector: 'app-teacher-list',
  standalone: true,
  imports: [SidebarComponent, CommonModule, AddProfessorModalComponent],
  templateUrl: './teacher-list.component.html',
  styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent {
  // 3. Crie a variável de controle
  isModalVisible = false;

  // 4. Crie os métodos para controlar a visibilidade
  openModal() {
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}