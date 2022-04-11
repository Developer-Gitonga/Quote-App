import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuoteComponent } from './quote/quote.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteLikeComponent } from './quote-like/quote-like.component';
import { QuoteLikesComponent } from './quote-likes/quote-likes.component';

@NgModule({
  declarations: [
    AppComponent
    QuoteComponent,
    QuoteLikeComponent,
    QuoteLikesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
