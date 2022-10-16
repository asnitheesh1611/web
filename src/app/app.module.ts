import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { IOTComponent } from './iot/iot.component';
import { AgileComponent } from './agile/agile.component';
import { DemopipesComponent } from './demopipes/demopipes.component';
import { CustompipesPipe } from './custompipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InnovativeComponent,
    IOTComponent,
    AgileComponent,
    DemopipesComponent,
    CustompipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
