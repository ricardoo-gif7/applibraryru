import { Component, inject } from '@angular/core';
import { BookItemComponent } from '../../Components/book-item/book-item.component';
import { NgFor } from '@angular/common';
import { BookService } from '../../Services/book.service';
import { Book } from '../../Models/book';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookItemComponent, NgFor],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css',
  providers: [BookService] 
})
export class BooksListComponent {
  bookService = inject(BookService);
  listaLibros: Book[] = this.bookService.getBooks();
}
