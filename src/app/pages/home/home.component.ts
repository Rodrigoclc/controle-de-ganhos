import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { StreamOptions } from 'stream';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 
}
