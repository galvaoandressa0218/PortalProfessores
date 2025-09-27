import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-professor-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-professor-modal.component.html',
  styleUrls: ['./add-professor-modal.component.css']
})
export class AddProfessorModalComponent {
  // O @Output permite que o componente "avise" o componente pai
  @Output() close = new EventEmitter<void>();


  onClose() {
    this.close.emit(); 
  }
}