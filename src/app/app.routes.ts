import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Login } from './page/login/login';
import { Item } from './page/dashboard/item/item';
import { Order } from './page/dashboard/order/order';
import { Customer } from './page/dashboard/customer/customer';
import { DashboardRoot } from './page/dashboard/dashboard-root/dashboard-root';
import { Home } from './page/home/home';

export const routes: Routes = [
    {
        path:"dashboard",
        component:Dashboard,
        children:[
            {
                path:"",
                component:DashboardRoot
            },
            {
                path:"customer",
                component:Customer
            },
            {
                path:"item",
                component:Item
            },
            {
                path:"order",
                component:Order
            }
        ]
    },
    {
        path:"login",
        component:Login
    },
    {
        path:"home",
        component:Home
    }
];
