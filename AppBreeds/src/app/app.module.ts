import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { BreedLocalComponent } from './breed-local/breed-local.component';
import { BreedRemotoComponent } from './breed-remoto/breed-remoto.component';


@NgModule({
  declarations: [
    AppComponent,
    BreedLocalComponent,
    BreedRemotoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
