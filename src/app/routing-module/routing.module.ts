
import { NgModule } from '@angular/core';

import { ProductListComponent } from '../components/product-list/product-list.component';


import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../components/not-found/not-found.component';
import { WelcomeComponent } from '../components/welcome/welcome.component';

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'list', component: ProductListComponent},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
]; // Routes table

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class RoutingModule { }
