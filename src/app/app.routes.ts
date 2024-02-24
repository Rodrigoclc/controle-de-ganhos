import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PricipalComponent } from './pages/compartilhado/pricipal/pricipal.component';
import path from 'path';
import { HomeComponent } from './pages/home/home.component';
import { NovaAtividadeComponent } from './pages/novo-registro/nova-atividade/nova-atividade.component';
import { NovaAtividade2Component } from './pages/novo-registro/nova-atividade2/nova-atividade2.component';
import { RendimentosComponent } from './pages/novo-registro/rendimentos/rendimentos.component';
import { GastosComponent } from './pages/novo-registro/gastos/gastos.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'principal', component: PricipalComponent},
    {path: 'nova-atididade', component: NovaAtividadeComponent},
    {path: 'nova-atividade2', component: NovaAtividade2Component},
    {path: 'rendimentos', component: RendimentosComponent},
    {path: 'gastos', component: GastosComponent},
    // {
    //     path: '', component: PricipalComponent,
    //     children: [
    //         {path: '', component: HomeComponent}
    //     ],
    // },
];
