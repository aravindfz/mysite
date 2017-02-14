
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './home/menu/menu.component';
import { AboutComponent } from './personalDetails/about/about.component';
import { WelcomeComponent } from './home/welcome.component';
/** Common components imports */
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
/** Articles components imports */
import { ArticlesComponent } from './articles/articles.component';
import { SetupAngular2TestingComponent } from './articles/angular-2/testing/angular2.testing.component';

import { PotableNodeNpmComponent } from './articles/angular-2/portable-node-npm/portable-node-npm.component';
import { ArticleService } from './articles/article.service';
@NgModule({
  imports: [
    //Angular 2 built in modules goes here
    BrowserModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'portablenodenpm', component: PotableNodeNpmComponent },
      { path: 'angular-2-testing', component: SetupAngular2TestingComponent }
    ]),
  ],
  declarations: [
    AppComponent,
    // home components declarations
    MenuComponent, HeaderComponent, FooterComponent,

    AboutComponent,
    WelcomeComponent,
    // articles component declarations
    ArticlesComponent,
    SetupAngular2TestingComponent,
    PotableNodeNpmComponent,


  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }

