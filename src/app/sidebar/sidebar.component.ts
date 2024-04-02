import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule,],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
al(){
  alert('hi')
}
}
