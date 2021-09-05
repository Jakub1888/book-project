import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../article-model';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss'],
})
export class ArticleItemComponent implements OnInit {
  @Input() article: Article;
  @Input() index: number;

  onArticleDelete(index) {
    this.articleService.deleteArticle(index);
    this.articleService.storeArticles();
  }

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {}
}
