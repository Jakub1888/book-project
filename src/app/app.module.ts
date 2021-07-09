import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReviewListComponent } from './Review-list/review-list.component';
import { BookListComponent } from './Book-list/book-list/book-list.component';
import { BookDetailComponent } from './Book-list/book-detail/book-detail.component';
import { ReviewAddComponent } from './Review-list/review-add/review-add.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './shared/modal/modal.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './Book-list/books.component';
import { BookStartComponent } from './Book-list/book-start/book-start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewListComponent,
    BookListComponent,
    BookDetailComponent,
    ReviewAddComponent,
    HomeComponent,
    ModalComponent,
    PageNotFoundComponent,
    FooterComponent,
    BooksComponent,
    BookStartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
