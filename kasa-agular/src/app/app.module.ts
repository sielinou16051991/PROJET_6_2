import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutBannerComponent } from './components/about-banner/about-banner.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardComponent } from './components/card/card.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeaderComponent } from './components/header/header.component';
import { HostComponent } from './components/host/host.component';
import { NavComponent } from './components/nav/nav.component';
import { RateComponent } from './components/rate/rate.component';
import { TagComponent } from './components/tag/tag.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorComponent } from './pages/error/error.component';
import { FicheLogementComponent } from './pages/fiche-logement/fiche-logement.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutBannerComponent,
    BannerComponent,
    CardComponent,
    CollapseComponent,
    ErrorPageComponent,
    FooterComponent,
    GalleryComponent,
    HeaderComponent,
    HostComponent,
    NavComponent,
    RateComponent,
    TagComponent,
    AboutComponent,
    ErrorComponent,
    FicheLogementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
