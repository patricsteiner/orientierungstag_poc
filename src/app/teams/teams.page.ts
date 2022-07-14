import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  data$ = this.api.data$;
  teams = ['Artillerie', 'Panzergrenadier', 'Infanterie'];

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
