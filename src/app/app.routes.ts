import { Routes } from '@angular/router';
import HomeAdminComponent from './views/home-admin/home-admin.component';
import DashboardComponent from './views/home-admin/dashboard/dashboard.component';
// import CarouselComponent from "./views/login/carousel/carousel.component";
import { Component } from '@angular/core';
import LoginComponent from './views/login/login.component';

// CHECKAR LUEGO LAS RUTAS!!!!!

export const routes: Routes = [
    { 
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
    },
    { path: '**', 
    redirectTo: 'login' },
    // // { path: 'login', loadComponent:() => import('./views/login/login.component')  },
    { 
    path: 'home-admin', 
    component: HomeAdminComponent 
    },
    { 
    path: 'login', 
    component: LoginComponent 
    },
    // // { path: 'carousel', component: CarouselComponent },
    {
    path: 'dashboard', 
    component: DashboardComponent
    // loadComponent: () => import ('./home-admin/dashboard/dashboard.component'),
    }

];

