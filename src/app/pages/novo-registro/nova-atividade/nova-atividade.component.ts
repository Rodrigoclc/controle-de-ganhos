import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-atividade',
  standalone: true,
  imports: [
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './nova-atividade.component.html',
  styleUrl: './nova-atividade.component.scss'
})
export class NovaAtividadeComponent implements OnInit {

  novaAtividadeform!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.novaAtividadeform = this.formBuilder.group({
      data: [this.obterDataAtualFormatada(),[Validators.required]], // DEPOIS: validar se data for superior a atual
      horasTrabalhadas: ['', [Validators.required]],
      kmRodados: ['', [Validators.required]],
    })
  }

  obterDataAtualFormatada(): string {
    const agora: Date = new Date()
    const ano: number = agora.getFullYear();
    const mes: string = this.formatarData(agora.getMonth() + 1);
    const dia: string = this.formatarData(agora.getDate());
    return `${ano}-${mes}-${dia}`;
  }

  private formatarData(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  submitForm() {
    console.log(this.novaAtividadeform.value);
  }
}

  

