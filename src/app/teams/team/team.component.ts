import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent  {

  team$ = this.route.params.pipe(map(params => params.id))

  constructor(private route: ActivatedRoute) {
  }

}
