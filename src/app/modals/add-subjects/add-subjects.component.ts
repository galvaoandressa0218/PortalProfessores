import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-subjects', // Nome do seletor alterado
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-subjects.component.html', // Arquivo HTML alterado
  styleUrls: ['./add-subjects.component.css']  // Arquivo CSS alterado
})
export class AddSubjectsComponent {
  // A lógica de fechar é idêntica!
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit(); 
  }
}