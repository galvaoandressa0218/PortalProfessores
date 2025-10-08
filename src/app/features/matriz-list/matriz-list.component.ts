import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Interfaces para definir a estrutura dos nossos dados
interface Discipline {
  nome: string;
  codigo: string;
  bes: string; // Não ficou claro o que era, usei 'bes'
  cargaHoraria: string;
  modalidade: string;
  tipo: string;
}

interface Semester {
  nome: string;
  disciplines: Discipline[];
}

interface Matrix {
  nome: string;
  habilitacao: string;
  campus: string;
  turno: string;
  semesters: Semester[];
  componentesComplementaresCH: number;
}

@Component({
  selector: 'app-matriz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matriz-list.component.html',
  styleUrls: ['./matriz-list.component.css']
})
export class MatrizListComponent {
  // Esta variável controla qual aba do accordion está aberta.
  // null = nenhuma aberta.
  openSemesterIndex: number | null = null;

  // Dados de exemplo para a Matriz Curricular
  matrix: Matrix = {
    nome: 'Engenharia de software',
    habilitacao: 'BACHARELADO',
    campus: 'Pitaçu',
    turno: 'MATUTINO',
    componentesComplementaresCH: 320,
    semesters: [
      { nome: '1 Semestre', disciplines: [] },
      { nome: '2 Semestre', disciplines: [] },
      { nome: '3 Semestre', disciplines: [] },
      { nome: '4 Semestre', disciplines: [] },
      {
        nome: '5 Semestre',
        disciplines: [
          { nome: 'Arquitetura de Software', codigo: 'ARQS-20002', bes: 'Bes', cargaHoraria: '60h', modalidade: 'presencial', tipo: 'Pratica' },
          { nome: 'Arquitetura de Software', codigo: 'ARQS-20002', bes: 'Bes', cargaHoraria: '60h', modalidade: 'presencial', tipo: 'Pratica' },
          { nome: 'Arquitetura de Software', codigo: 'ARQS-20002', bes: 'Bes', cargaHoraria: '60h', modalidade: 'presencial', tipo: 'Pratica' },
          { nome: 'Arquitetura de Software', codigo: 'ARQS-20002', bes: 'Bes', cargaHoraria: '60h', modalidade: 'presencial', tipo: 'Pratica' },
        ]
      },
      { nome: '6 Semestre', disciplines: [] },
      { nome: '7 Semestre', disciplines: [] },
      { nome: '8 Semestre', disciplines: [] },
      { nome: 'Opcionais / Eletivas', disciplines: [] }
    ]
  };

  /**
   * Função que abre ou fecha uma aba do accordion.
   * @param index O índice do semestre que foi clicado.
   */
  toggleSemester(index: number): void {
    // Se o índice clicado já for o que está aberto, feche-o (definindo como null).
    // Caso contrário, abra o novo índice.
    if (this.openSemesterIndex === index) {
      this.openSemesterIndex = null;
    } else {
      this.openSemesterIndex = index;
    }
  }
}