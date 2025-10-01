import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Update the import path below to the correct relative path for SidebarComponent
import { SidebarComponent } from '../../features/reusable/sidebar/sidebar.component';

@Component({
  selector: 'app-internal-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './internal-layout.component.html',
  styleUrls: ['./internal-layout.component.css']
})
export class InternalLayoutComponent { }