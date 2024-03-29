import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUsuario } from '../interfaces/IUsuario';

const apiUrlUsuario = 'linkDaApi/' + "Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  
}
