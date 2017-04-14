import { HomeComponent } from './home.component';
import {Routes,RouterModule} from "@angular/router";

import {ModuleWithProviders} from "@angular/core";

const APP_ROUTES: Routes = [{
    path:'',
    component : HomeComponent
}];

export const routing = RouterModule.forRoot(APP_ROUTES);