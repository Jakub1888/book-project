import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Reviews } from '../reviews.model';
import { ReviewService } from '../review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/modal/modal.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss'],
})
export class ReviewAddComponent implements OnInit {
  @ViewChild('usernameInput') usernameInputRef: ElementRef;
  @ViewChild('reviewTextInput') reviewTextInputRef: ElementRef;
  reviewForm: FormGroup;

  onSubmit() {
    let revUsername = this.usernameInputRef.nativeElement.value;
    let revText = this.reviewTextInputRef.nativeElement.value;
    const revDate = new Date();
    const newReview = new Reviews(revUsername, revText, revDate);
    this.reviewService.addReview(newReview);
    this.reviewForm.reset();
  }

  constructor(private reviewService: ReviewService) {}

  ngOnInit() {
    this.reviewForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
    });
  }
}
