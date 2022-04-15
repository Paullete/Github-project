import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search/search.component';
import { UserComponent } from './user/user/user.component';
import { DateCountPipe } from './date-count.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
