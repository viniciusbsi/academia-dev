import { HttpClient } from '@angular/common/http';
import { Time } from './model/time';
import { Component, OnInit } from '@angular/core';
import { TimeService } from './service/time.service';
import { HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome'];
  dataSource: Array<Time> = [];

  novoTimeForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
    dataCriacao: new FormControl(''),
    corUniformePrincipal: new FormControl(''),
    corUniformeSecundario: new FormControl(''),
  });

  constructor(
    private timeService: TimeService,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.buscarTimes();
  }

  buscarTimes() {
    this.timeService.buscarTime().subscribe(res => {
      this.dataSource = <Array<Time>>res;
    });
  }

  incluir() {
    let time = this.novoTimeForm.value;
    this.timeService.incluirTime(time.id, time.nome, time.dataCriacao, time.corUniformePrincipal, time.corUniformeSecundario).subscribe(res => {
      alert('incluido com sucesso');
      this.buscarTimes();
    });
  }

}
