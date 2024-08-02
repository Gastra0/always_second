import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleriaModule} from "primeng/galleria";
import {DockModule} from "primeng/dock";
import {HttpClientModule} from "@angular/common/http";
import {TranslocoRootModule} from "../components/transloco/transloco.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GalleriaModule,
    DockModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
