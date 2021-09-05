import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Article } from './article-model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [];
  articleAdd = new Subject<Article[]>();
  private showButton = new BehaviorSubject(true);
  toggleButton = this.showButton.asObservable();

  constructor(private http: HttpClient) {}

  getArticles() {
    return this.articles.slice();
  }

  getArticle(index: number) {
    return this.articles[index];
  }

  fetchArticles() {
    this.http
      .get(
        `https://book-articles-default-rtdb.europe-west1.firebasedatabase.app/articles.json`
      )
      .subscribe((articleData: any) => {
        this.setArticles(articleData);
      });
  }

  storeArticles() {
    const articles = this.getArticles();
    this.http
      .put(
        'https://book-articles-default-rtdb.europe-west1.firebasedatabase.app/articles.json',
        articles
      )
      .subscribe((response) => {});
  }

  setArticles(articles: Article[]) {
    this.articles = articles;
    this.articleAdd.next(this.articles.slice());
  }

  addArticle(article: Article) {
    this.articles.push(article);
    this.articleAdd.next(this.articles.slice());
  }

  deleteArticle(index: number) {
    this.articles.splice(index, 1);
    this.articleAdd.next(this.articles.slice());
  }

  displayButton(show: boolean) {
    this.showButton.next(show);
  }
}
