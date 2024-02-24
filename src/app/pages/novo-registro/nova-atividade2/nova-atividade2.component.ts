import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nova-atividade2',
  standalone: true,
  imports: [
    MaterialModule,
    RouterLink
  ],
  templateUrl: './nova-atividade2.component.html',
  styleUrl: './nova-atividade2.component.scss'
})
export class NovaAtividade2Component {

}
