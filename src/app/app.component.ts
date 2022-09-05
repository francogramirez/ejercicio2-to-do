import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { Item } from './components/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ejercicio2-TO_DO';

  nombreItem = ""
  public items: Item[] = []
  
  guardarItem(){
    const nuevoItem = new Item(this.nombreItem);
    this.items.push(nuevoItem);
    this.nombreItem ="";

  }

eliminarItem(indice: number){
  const confirma = confirm("¿Desea eliminar item?");
  if (confirma){
    this.items.splice(indice, 1);
  }
  return;
}

  ngOnInit(){
  
  }
}

