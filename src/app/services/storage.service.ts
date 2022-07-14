import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  find(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
