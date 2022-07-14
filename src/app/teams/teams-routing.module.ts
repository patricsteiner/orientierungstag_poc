import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TeamsPage} from './teams.page';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage
  },
  {
    path: ':id',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsPageRoutingModule {
}
