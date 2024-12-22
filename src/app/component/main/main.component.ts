import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/libro';
import { Item } from '../../models/item';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  
  ngOnInit(): void {
    this.showClient();
  }

  libro1: Libro = {
    nombre: 'algebra 1',
    autor: 'porrua',
    precio: 750
  }

  libro2: Libro = {
    nombre: 'trigonometria 1',
    autor: 'porrua',
    precio: 550
  }

  libros = [this.libro1, this.libro2];
  numeroFicha = 0
  item: Item = {
    libro: this.libros,
    tax: .16
  }

  cliente: Cliente = {
    compra: this.item,
    ficha: this.numeroFicha+1
  }

  cliente2: Cliente = {
    compra: this.item,
    ficha: this.numeroFicha+1
  }

  clientes = [this.cliente, this.cliente2]

  showClient() {
    let libro
    this.clientes.forEach(({compra, ficha}) =>{
      console.table(compra.libro)
    })
  }

}