import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: false,
      initial: { state: 'app' },
    }),
    NbLayoutModule,
    LayoutModule,
  ] /** Holds dependencies that the declared component(s) need */,
  declarations: [
    AppComponent,
  ] /**declares compnents, directives, or pipes that belong to this module */,
  bootstrap: [AppComponent],
})
export class AppModule {}
