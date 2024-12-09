import { Injectable } from '@angular/core';
import { Book } from '../Models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  listaLibros: Book[] = [
    { id: 1, title:'El Principito', author: 'Antoine de Saint-Exupéry'},
    { id: 2, title:'1984', author: 'George Orwell'},
    { id: 3, title: 'Cien Años de Soledad', author: 'Gariel García Márquez'},
  ];

  constructor() {}


  getBooks(): Book[] {
    return this.listaLibros;
  }


  getBookById(id: number): Book | undefined {
    for (let i=0; i<this.listaLibros.length; i++){
      if (this.listaLibros[i].id === id){
        return this.listaLibros[i];
      }
    }
    return undefined;
  }
}
