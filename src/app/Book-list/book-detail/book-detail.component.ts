import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/book.service';
import { ModalService } from 'src/app/shared/modal/modal.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  @Input() book?: Book;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.getBook();
    });
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe((book) => (this.book = book));
  }

  onOpenModal(id: string) {
    this.modalService.open(id);
  }

  onCloseModal(id: string) {
    this.modalService.close(id);
  }
}
