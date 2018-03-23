import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PerroComponent} from './perro/perro.component';
import {ImageComponent} from './image/image.component';

const appRoutes: Routes = [
{path: 'perros', component: PerroComponent},
{path: 'images:id', component: ImageComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);