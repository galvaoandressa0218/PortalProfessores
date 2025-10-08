import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-learning.component.html',
  styleUrls: ['./edit-learning.component.css']
})
export class EditLearningComponent {
  @Output() close = new EventEmitter<void>();

  // É uma boa prática ter um método para emitir o evento
  closeModal() {
    this.close.emit();
  }
}