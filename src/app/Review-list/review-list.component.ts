import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ReviewService } from './review.service';
import { Reviews } from './reviews.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
})
export class ReviewListComponent implements OnInit, OnDestroy {
  reviews: Reviews[] = [];
  private revAddedSub: Subscription;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.reviews = this.reviewService.getReviews();
    this.revAddedSub = this.reviewService.reviewAdded.subscribe(
      (reviews: Reviews[]) => {
        this.reviews = reviews;
      }
    );
  }

  ngOnDestroy() {
    this.revAddedSub.unsubscribe();
  }
}
