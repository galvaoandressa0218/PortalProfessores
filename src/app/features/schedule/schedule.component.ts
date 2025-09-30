import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Necessário para [routerLink]

import { SidebarComponent } from '../reusable/sidebar/sidebar.component';

@Component({
  imports: [CommonModule, RouterModule, SidebarComponent], 
  standalone: true, 
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {

  // Dados falsos (mock) para preencher a lista. No futuro, isso virá do seu backend.
  materias = [
    { id: 1, nome: 'Arquitetura de Software (ARQS-20002)', curso: 'Bes', cargaHoraria: '60h', tipo: 'presencial', classificacao: 'Pratica' },
    { id: 2, nome: 'Arquitetura de Software (ARQS-20002)', curso: 'Bes', cargaHoraria: '60h', tipo: 'presencial', classificacao: 'Pratica' },
    { id: 3, nome: 'Arquitetura de Software (ARQS-20002)', curso: 'Bes', cargaHoraria: '60h', tipo: 'presencial', classificacao: 'Pratica' },
    { id: 4, nome: 'Arquitetura de Software (ARQS-20002)', curso: 'Bes', cargaHoraria: '60h', tipo: 'presencial', classificacao: 'Pratica' },
    { id: 5, nome: 'Arquitetura de Software (ARQS-20002)', curso: 'Bes', cargaHoraria: '60h', tipo: 'presencial', classificacao: 'Pratica' }
  ];

}