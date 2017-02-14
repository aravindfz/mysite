import { Component, OnInit, OnChanges } from '@angular/core';
import { Articles } from './articles.model';
import { ArticleService } from './article.service';

@Component({
    selector: 'articles',
    templateUrl: 'app/articles/articles.component.html',
    styleUrls: ['./app/articles/article.module.css']
})
export class ArticlesComponent implements OnInit, OnChanges {

    articlesList: string;
    articles: Array<Articles>;
    errorMessage:string;
    constructor(private articleService:ArticleService) {
    }

    ngOnInit() {
       this.articleService.getTasks()
                    .subscribe(articles => this.articles = articles,
                    error =>this.errorMessage =<any> error)
    }
    ngOnChanges(){
        

    }
}