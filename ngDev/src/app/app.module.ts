import { DevService } from './services/dev.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { IncompletePipe } from './incomplete.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IncompletePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DevService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
