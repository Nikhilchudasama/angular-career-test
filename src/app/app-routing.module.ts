import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { LoginlayoutComponent } from './components/loginlayout/loginlayout.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const EXTRA_ROUTES = [
    {
        path: "", component: LoginComponent,
    },
    {
        path: "404", component: PagenotfoundComponent,
    },
]

const CONTENT_ROUTES = [
    {
        path: "", component: DashboardComponent,
    }
]

const routes: Routes = [
    {
        path: "", component: LoginlayoutComponent, children: EXTRA_ROUTES
    },
    {
        path: "dashboard", component: NavComponent, children: CONTENT_ROUTES,
        canActivate: [AuthGuard]
    },
    {
        path: "**", redirectTo: "/404",
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
