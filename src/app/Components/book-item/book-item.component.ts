import { Component, Input, inject } from '@angular/core';
import { Book } from '../../Models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-item',
  imports: [],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  route = inject(Router);
  @Input() item!: Book;

  navigateToID(){
    this.route.navigate(['books',this.item.id]);
  }

}
