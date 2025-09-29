import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../reusable/sidebar/sidebar.component';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {

  disciplinaExpandida: number | null = 0; // Começa com a primeira linha aberta

 
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
      this.disciplinaExpandida = null; // Fecha a linha se ela já estiver aberta
    } else {
      this.disciplinaExpandida = index; // Abre a nova linha
    }
  }
}