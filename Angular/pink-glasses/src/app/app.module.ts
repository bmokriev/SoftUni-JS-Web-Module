import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { SmallpostComponent } from './posts/smallpost/smallpost.component';
import { BigpostComponent } from './posts/bigpost/bigpost.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SmallpostComponent, BigpostComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
