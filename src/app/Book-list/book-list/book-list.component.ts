import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from 'src/app/book.service';
import { Reviews } from 'src/app/Review-list/reviews.model';
import { ReviewService } from 'src/app/Review-list/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  reviews: Reviews[] = [];
  @Input() index: number;
  private revAddedSub: Subscription;

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

  onReviewDelete(index: number) {
    this.reviews.splice(index, 1);
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  ngOnInit(): void {
    this.getBooks();
    this.reviews = this.reviewService.getReviews();
  }
}
