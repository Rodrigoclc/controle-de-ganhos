import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MaterialModule,
    HeaderComponent,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {  

  showFiller = false;
}
