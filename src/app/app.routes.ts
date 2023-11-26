import { Routes } from '@angular/router';
import HomeAdminComponent from './views/home-admin/home-admin.component';
// import CarouselComponent from "./views/login/carousel/carousel.component";
import { Component } from '@angular/core';
import LoginComponent from './views/login/login.component';
import DashboardComponent from './views/dashboard/dashboard.component';


// CHECKAR LUEGO LAS RUTAS!!!!!

export const routes: Routes = [
   {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },

    // {
    //     path: '**',
    //     redirectTo: 'login'
    // },
    // // { path: 'login', loadComponent:() => import('./views/login/login.component')  },
    {
        path: 'home-admin',
        component: HomeAdminComponent
    },
    //{ 
    //   path: 'home-admin', 
    //  loadComponent: () => import('./home-admin/home-admin.component'),
    // },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'geo-colaborador',
        component: DashboardComponent
        // loadComponent: () => import ('./home-admin/dashboard/dashboard.component'),
    }

];

