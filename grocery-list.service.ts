import { Injectable, Inject, forwardRef } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Config } from './models/config';
import { Grocery } from './models/grocery';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GroceryListService {
  constructor(@Inject(forwardRef(() => Http)) private http: Http) {}

  load(): Observable<Grocery[]> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + Config.token);

    return this.http.get(Config.apiUrl + 'Groceries', {
      headers: headers
    })
    .map(res => res.json())
    .map(data => {
      let groceryList = [];
      data.Result.forEach((grocery) => {
        groceryList.push(new Grocery(grocery.Id, grocery.Name));
      });
      return groceryList;
    })
    .catch(this.handleErrors);
  }

  add(name: string): Observable<Grocery> {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + Config.token);
    headers.append('Content-Type', 'application/json');

    return this.http.post(
      Config.apiUrl + 'Groceries',
      JSON.stringify({ Name: name }),
      { headers: headers }
    )
    .map(res => res.json())
    .map(data => {
      return new Grocery(data.Result.Id, name);
    })
    .catch(this.handleErrors);
  }

  delete(id: string) {
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + Config.token);
    headers.append('Content-Type', 'application/json');

    return this.http.delete(
      Config.apiUrl + 'Groceries/' + id,
      { headers: headers }
    )
    .map(res => res.json())
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
