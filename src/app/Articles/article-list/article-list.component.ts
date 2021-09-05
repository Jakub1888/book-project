import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article-model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  showButton: boolean;
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.populateArticleArr();
    this.articleService.fetchArticles();
    this.subscription = this.articleService.toggleButton.subscribe(
      (show) => (this.showButton = show)
    );
    this.showButton = true;
  }

  populateArticleArr() {
    this.subscription = this.articleService.articleAdd.subscribe(
      (articleData: Article[]) => {
        this.articles = articleData;
      }
    );
  }

  onAddArticle() {
    this.articleService.displayButton(false);
    this.router.navigate(['add-article'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
