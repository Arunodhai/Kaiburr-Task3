import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'show', component: ShowComponent },
  { path: 'search', component: SearchComponent },
  { path: 'delete', component: DeleteComponent },
  { path: '', redirectTo: '/create', pathMatch: 'full' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
