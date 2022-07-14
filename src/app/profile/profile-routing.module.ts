import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProfilePage} from './profile.page';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {
}
