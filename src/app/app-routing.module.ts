import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/category/1', pathMatch: 'full' },
  { path: 'category/:id', component: MainComponent },
  { path: '**', redirectTo: '/category/1' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
