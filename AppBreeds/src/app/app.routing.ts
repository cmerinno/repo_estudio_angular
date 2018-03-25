import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BreedLocalComponent} from './breed-local/breed-local.component';
import {BreedRemotoComponent} from './breed-remoto/breed-remoto.component';

const appRoutes: Routes = [
{path: 'local', component: BreedLocalComponent},
{path: 'remoto', component: BreedRemotoComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
