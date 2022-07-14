import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {

  teams = ['Artillerie', 'Panzergrenadier', 'Infanterie'];
  result = [];

  constructor(private storage: StorageService) {
  }

  ngOnInit() {
    this.result = this.storage.find('ANSWERS') as Array<number>;
  }

}
