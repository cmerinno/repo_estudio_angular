import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarComponent} from './car/car.component';
import {PersonaComponent} from './persona/persona.component';

const appRoutes: Routes = [
{path: 'cars', component: CarComponent},
{path: 'persona', component: PersonaComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
