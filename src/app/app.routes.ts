import { Routes } from '@angular/router';
import { Dashboard } from './page/dashboard/dashboard';
import { Login } from './page/login/login';
import { Item } from './page/dashboard/item/item';
import { Order } from './page/dashboard/order/order';

export const routes: Routes = [
    {
        path:"dashboard",
        component:Dashboard,
        children:[
            {
                path:"customer",
                component:Dashboard
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
    }
];
