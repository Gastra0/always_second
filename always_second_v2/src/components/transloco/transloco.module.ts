import {
  provideTransloco,
  TranslocoModule
} from '@jsverse/transloco';
import {isDevMode, NgModule} from '@angular/core';
import {TranslocoHttpLoader} from "./transloco-loader.module";


@NgModule({
  exports: [TranslocoModule],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['en', 'uk'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ],
})
export class TranslocoRootModule {
}
