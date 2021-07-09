import { Injectable, EventEmitter } from '@angular/core';
import { Reviews } from './reviews.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviewAdded = new Subject<Reviews[]>();

  constructor() {}

  private reviews: Reviews[] = [];

  getReviews() {
    return this.reviews.slice();
  }

  addReview(review: Reviews) {
    this.reviews.push(review);
    this.reviewAdded.next(this.reviews.slice());
  }
}
