import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharInfoComponent } from './char-info/char-info.component';
import { CharAddComponent } from './char-add/char-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HomeComponent,
    AboutComponent,
    CharInfoComponent,
    CharAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
