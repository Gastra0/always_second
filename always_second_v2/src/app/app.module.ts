import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GalleriaModule} from "primeng/galleria";
import {DockModule} from "primeng/dock";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GalleriaModule,
    DockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
