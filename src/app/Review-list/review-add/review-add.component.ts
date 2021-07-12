import { Component, OnInit, ViewChild } from '@angular/core';

import { Reviews } from '../reviews.model';
import { ReviewService } from '../review.service';

import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BookService } from 'src/app/Book-list/book.service';
import { Book } from 'src/app/Book-list/book.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.scss'],
})
export class ReviewAddComponent implements OnInit {
  @ViewChild('f') bkForm: NgForm;
  books: Book[] = [];
  ratings = ['★', '★ ★', '★ ★ ★', '★ ★ ★ ★', '★ ★ ★ ★ ★'];

  ngOnInit() {
    this.getBooks();
  }

  constructor(
    private reviewService: ReviewService,
    private bookService: BookService,
    private dataStorageService: DataStorageService
  ) {}

  getBooks(): void {
    this.bookService.getBooks().subscribe((books) => (this.books = books));
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const revDate = new Date();
    const newReview = new Reviews(
      value.username,
      value.text,
      value.book,
      value.rating,
      revDate
    );
    this.reviewService.addReview(newReview);
    this.onSaveData();
    form.reset();
  }

  onClear() {
    this.bkForm.reset();
  }

  onSaveData() {
    this.dataStorageService.storeReviews();
  }
}
