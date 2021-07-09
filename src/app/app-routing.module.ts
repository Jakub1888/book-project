import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewListComponent } from './Review-list/review-list.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './Book-list/book-detail/book-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { BooksComponent } from './Book-list/books.component';
import { BookStartComponent } from './Book-list/book-start/book-start.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'books',
    component: BooksComponent,
    children: [
      { path: '', component: BookStartComponent },
      { path: ':id', component: BookDetailComponent },
    ],
  },

  { path: 'review', component: ReviewListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
