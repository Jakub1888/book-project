import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from 'src/app/Book-list/book.service';
import { Reviews } from 'src/app/Review-list/reviews.model';
import { ReviewService } from 'src/app/Review-list/review.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  reviews: Reviews[] = [];
  @Input() index: number;
  filteredBook = '';

  constructor(
    private bookService: BookService,
    private reviewService: ReviewService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectedBook?: Book;

  onReviewRedirect() {
    this.router.navigate(['/review'], { relativeTo: this.route });
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  ngOnInit(): void {
    this.getBooks();
    this.reviews = this.reviewService.getReviews();
  }
}
