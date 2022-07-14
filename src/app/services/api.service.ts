import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public data$ = this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(tap(() => console.log('reading it again...')));

  constructor(private http: HttpClient) {
  }

  preload() {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe(data => {
      console.log('called api to trigger cache');
    });
  }

}
