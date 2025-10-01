import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  // 👇 1. Corrija o seletor
  selector: 'app-edit-program', 
  standalone: true,
  imports: [],
  // 👇 2. Corrija o caminho para o arquivo HTML
  templateUrl: './edit-program.component.html', 
  // 👇 3. Corrija o caminho para o arquivo CSS (isso vai resolver o erro)
  styleUrls: ['./edit-program.component.css'] 
})
export class EditProgramComponent {
  @Output() close = new EventEmitter<void>();
}

// Remove the misplaced import and keep only one import section at the top

@Component({
  selector: 'app-add-emenda',
  standalone: true,
  imports: [],
  templateUrl: './edit-program.component.html', 
  // 👇 3. Corrija o caminho para o arquivo CSS (isso vai resolver o erro)
  styleUrls: ['./edit-program.component.css']
})
export class AddEmendaComponent {
onClose() {
throw new Error('Method not implemented.');
}
  @Output() close = new EventEmitter<void>();
  @Output() submitEmenda = new EventEmitter<string>(); // Avisa quando o formulário é enviado


  onSubmit() {
  
  }
}