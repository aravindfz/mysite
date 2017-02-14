import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class ArticleService {
    private _url = "api/routing.json";
    constructor(private _http: Http) {
    }
    extractdata(res: Response) {
        return <any[]>res.json();
    }
    getTasks(): Observable<any[]> {
        return this._http.get(this._url)
            .map((response: Response) =><any[]>response.json())
            .do(data => console.log("List of articles" + JSON.stringify(data)))
            .catch(this.handleError);

    }
    private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Internal Server error');
    }
}