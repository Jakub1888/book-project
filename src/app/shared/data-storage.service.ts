import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookService } from '../Book-list/book.service';
import { ReviewService } from '../Review-list/review.service';
import { Reviews } from '../Review-list/reviews.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private reviewService: ReviewService,
    private bookService: BookService
  ) {}

  storeReviews() {
    const reviews = this.reviewService.getReviews();
    this.http
      .put(
        'https://book-review-project-b4409-default-rtdb.europe-west1.firebasedatabase.app/reviews.json',
        reviews
      )
      .subscribe((response) => {});
  }

  fetchReviews() {
    this.http
      .get<Reviews[]>(
        'https://book-review-project-b4409-default-rtdb.europe-west1.firebasedatabase.app/reviews.json'
      )
      .subscribe((reviews) => {
        this.reviewService.setReviews(reviews);
      });
  }
}
