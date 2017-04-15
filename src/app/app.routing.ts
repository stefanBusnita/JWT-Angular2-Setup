import { LoggedService } from './general/logged.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from "@angular/router";

import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: HomeComponent,
    }, {
        path: 'welcome',
        component: WelcomeComponent,
        canActivate: [LoggedService]
    }];

export const routing = RouterModule.forRoot(APP_ROUTES);