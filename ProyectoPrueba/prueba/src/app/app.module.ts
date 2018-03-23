import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { PerroComponent } from './perro/perro.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    PerroComponent,
    ImageComponent
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
