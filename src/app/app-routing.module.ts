import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCocheComponent } from './components/post-coche/post-coche.component';
import { GetCocheComponent } from './components/get-coche/get-coche.component';
import { UpdateCocheComponent } from './components/update-coche/update-coche.component';

const routes: Routes = [
  { path: 'añadir', component: PostCocheComponent },
  { path: "", component: GetCocheComponent },
  { path : "porid/:id", component: UpdateCocheComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
