import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PlayListComponent } from './pages/play-list/play-list.component';
import { SongCartComponent } from './components/song-cart/song-cart.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { LoginComponent } from './pages/login/login.component';
import { SongComponent } from './pages/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PlayListComponent,
    SongCartComponent,
    TopNavComponent,
    ButtonsComponent,
    LoginComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
