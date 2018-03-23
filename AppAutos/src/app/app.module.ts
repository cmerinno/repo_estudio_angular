import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { PersonaComponent } from './persona/persona.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
