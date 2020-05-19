import { ModsModule } from './mods/mods.module';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'elements',
  loadChildren: ( () => import('../app/elements/elements.module').then(m => m.ElementsModule))
},
  {path: 'collections', loadChildren: ( () => import('./collections/collections.module').then(m => m.CollectionsModule))
},
  {path: '', component: HomeComponent},
  {path: 'views', loadChildren: ( () => import('./viewss/viewss.module').then(m => m.ViewssModule))},
  {path: 'modules', loadChildren: ( () => import('./mods/mods.module').then(m => m.ModsModule))},
  {path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
