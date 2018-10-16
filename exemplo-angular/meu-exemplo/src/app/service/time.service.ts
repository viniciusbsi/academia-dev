import { environment } from './../../environments/environment';
import { Time } from './../model/time';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  buscarTime(): Observable<Object> {
    return this.httpClient
      .get(environment.ip + 'api/time');
  }

  incluirTime(id: Number, nome: String, dataCriacao: String, corUniformePrincipal: String, corUniformeSecundario: String): Observable<Object> {

    const params = new HttpParams()
      .set('id', id + '')
      .set('nome', nome.toString())
      .set('dataCriacao', dataCriacao.toString())
      .set('corUniformePrincipal', corUniformePrincipal.toString())
      .set('corUniformeSecundario', corUniformeSecundario.toString());

    return this.httpClient.post(environment.ip + 'api/time', params)
  }

}
