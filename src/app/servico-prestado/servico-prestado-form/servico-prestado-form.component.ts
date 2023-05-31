import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';




@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent  {

  clientes: Cliente[] = []
  servico: ServicoPrestado;
  success: boolean = false;
  errors: String[];

  constructor(
    private ClientesService : ClientesService,
    private  service :ServicoPrestadoService
    ){
    this.servico = new ServicoPrestado

  }
  ngOnInit(): void {
    this.ClientesService
    .getClientes()
    .subscribe(response => this.clientes = response)
  }

  onSubmit(){
    this.service
    .salvar(this.servico)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.servico = new ServicoPrestado;
    } , errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    })

}

}
