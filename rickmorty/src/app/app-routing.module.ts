import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharInfoComponent } from './char-info/char-info.component';
import { CharAddComponent } from './char-add/char-add.component';
import { CharModComponent } from './char-mod/char-mod.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'characters/:id',
    component: CharInfoComponent
  },
  {
    path: 'add',
    component: CharAddComponent
  },
  {
    path: 'mod/:id',
    component: CharModComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
