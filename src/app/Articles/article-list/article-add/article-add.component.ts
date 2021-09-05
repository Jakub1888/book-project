import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../article.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss', '../article-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ArticleAddComponent implements OnInit {
  articleForm: FormGroup;
  isValid: boolean = true;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (!this.articleForm.valid) {
      this.isValid = false;
      return false;
    } else {
      this.isValid = true;
      this.articleService.addArticle(this.articleForm.value);
      this.articleService.storeArticles();
      this.router.navigate(['./articles']);
      this.articleService.displayButton(true);
    }
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
    this.articleService.displayButton(true);
  }

  private initForm() {
    let title = '';
    let author = '';
    let articleText = '';
    let date = new Date();

    this.articleForm = this.formBuilder.group({
      author: new FormControl(author, Validators.required),
      title: new FormControl(title, Validators.required),
      articleText: new FormControl(articleText, Validators.required),
      date: new FormControl(date),
    });
  }
}
