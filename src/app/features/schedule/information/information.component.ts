import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from '../../../app.component';

import { SidebarComponent } from '../../reusable/sidebar/sidebar.component';


@Component({
  imports: [CommonModule, RouterModule, SidebarComponent], // If SidebarComponent is not standalone, use SidebarModule instead
  standalone: true,
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

}
