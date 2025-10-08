import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// (Opcional, mas recomendado) Define a estrutura de um objeto de Curso
interface Course {
  nome: string;
  turno: string;
  campus: string;
  habilitacao: string;
  ch: string;
}

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule], // Importa o CommonModule para usar *ngFor
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  // Lista de cursos (mock data, que viria de uma API no futuro)
  courses: Course[] = [
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Direito', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.700' },
    { nome: 'Engenharia de Software', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.550' },
    { nome: 'Engenharia de Software', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.550' },
    { nome: 'Engenharia de Software', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.550' },
    { nome: 'Engenharia de Software', turno: 'Matutino', campus: 'Pitaçu', habilitacao: 'Bacharelado', ch: '3.550' }
  ];

  // Função para adicionar um novo curso (será chamada pelo botão)
  addCourse() {
    console.log('Botão "Adicionar curso" clicado. Abrir modal ou navegar para formulário.');
    // Aqui você adicionaria a lógica para navegar para outra página ou abrir um modal
  }

  // Função para ver detalhes de um curso (será chamada ao clicar em uma linha)
  viewCourseDetails(course: Course) {
    console.log('Visualizando detalhes do curso:', course.nome);
    // Aqui você adicionaria a lógica para navegar para a página de detalhes do curso
  }
}