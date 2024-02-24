import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rendimentos',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink
  ],
  templateUrl: './rendimentos.component.html',
  styleUrl: './rendimentos.component.scss'
})
export class RendimentosComponent {

}
