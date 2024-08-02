import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleriaModule} from "primeng/galleria";
import {DockModule} from "primeng/dock";
import {HttpClientModule} from "@angular/common/http";
import {TranslocoRootModule} from "../components/transloco/transloco.module";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";
import {Button} from "primeng/button";

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
    ToastModule,
    MenuModule,
    Button,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
