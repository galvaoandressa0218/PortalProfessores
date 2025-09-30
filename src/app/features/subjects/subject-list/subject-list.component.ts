import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../reusable/sidebar/sidebar.component';
import { AddSubjectsComponent } from '../../../modals/add-subjects/add-subjects.component';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule, SidebarComponent, AddSubjectsComponent], 
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  isSubjectsModalVisible = false;

  // Função para abrir o modal (chamada pelo clique do botão)
  openSubjectsModal(): void {
    this.isSubjectsModalVisible = true;
  }

  // 👇 ADICIONE ESTA FUNÇÃO PARA FECHAR O MODAL 👇
  // Ela será chamada pelo evento (close) do seu componente de modal
  closeSubjectsModal(): void {
    this.isSubjectsModalVisible = false;
  }

  disciplinaExpandida: number | null = 0;

  disciplinas = [
    {
      nome: 'Arquitetura de Software (ARQS-20002)',
      curso: 'Bes',
      cargaHoraria: '60h',
      tipo: 'presencial',
      classificacao: 'Pratica',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      nome: 'Engenharia de Requisitos (ENGR-10001)',
      curso: 'Bes',
      cargaHoraria: '60h',
      tipo: 'presencial',
      classificacao: 'Pratica',
      descricao: 'Descrição da disciplina de Engenharia de Requisitos...'
    }
  ];

  toggleDisciplina(index: number): void {
    if (this.disciplinaExpandida === index) {
      this.disciplinaExpandida = null;
    } else {
      this.disciplinaExpandida = index;
    }
  }
}