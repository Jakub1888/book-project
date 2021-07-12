import { Injectable } from '@angular/core';
import { Reviews } from './reviews.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private reviews: Reviews[] = [];
  reviewAdded = new Subject<Reviews[]>();

  constructor() {}

  getReviews() {
    return this.reviews.slice();
  }

  addReview(review: Reviews) {
    this.reviews.push(review);
    this.reviewAdded.next(this.reviews.slice());
  }

  deleteReview(index: number) {
    this.reviews.splice(index, 1);
    this.reviewAdded.next(this.reviews.slice());
  }

  setReviews(reviews: Reviews[]) {
    this.reviews = reviews;
    this.reviewAdded.next(this.reviews.slice());
  }
}
