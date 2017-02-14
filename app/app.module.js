"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var menu_component_1 = require("./home/menu/menu.component");
var about_component_1 = require("./personalDetails/about/about.component");
var welcome_component_1 = require("./home/welcome.component");
/** Common components imports */
var header_component_1 = require("./common/header/header.component");
var footer_component_1 = require("./common/footer/footer.component");
/** Articles components imports */
var articles_component_1 = require("./articles/articles.component");
var angular2_testing_component_1 = require("./articles/angular-2/testing/angular2.testing.component");
var portable_node_npm_component_1 = require("./articles/angular-2/portable-node-npm/portable-node-npm.component");
var article_service_1 = require("./articles/article.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //Angular 2 built in modules goes here
            platform_browser_1.BrowserModule, http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', component: welcome_component_1.WelcomeComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'articles', component: articles_component_1.ArticlesComponent },
                { path: 'portablenodenpm', component: portable_node_npm_component_1.PotableNodeNpmComponent },
                { path: 'angular-2-testing', component: angular2_testing_component_1.SetupAngular2TestingComponent }
            ]),
        ],
        declarations: [
            app_component_1.AppComponent,
            // home components declarations
            menu_component_1.MenuComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent,
            about_component_1.AboutComponent,
            welcome_component_1.WelcomeComponent,
            // articles component declarations
            articles_component_1.ArticlesComponent,
            angular2_testing_component_1.SetupAngular2TestingComponent,
            portable_node_npm_component_1.PotableNodeNpmComponent,
        ],
        providers: [article_service_1.ArticleService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map