import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module'
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { LoginComponent } from '../../login/login.component';
import { RelatoriosComponent } from '../../relatorios/relatorios.component';
import { MenuComponent } from '../../menu/menu.component';

@Component({
  selector: 'app-pricipal',
  standalone: true,
  imports: [
    MaterialModule,
    HomeComponent,
    LoginComponent,
    RelatoriosComponent,
    MenuComponent,
  ],
  templateUrl: './pricipal.component.html',
  styleUrl: './pricipal.component.scss'
})
export class PricipalComponent {

}
