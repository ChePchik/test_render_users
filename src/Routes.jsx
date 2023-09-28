import React from "react"
import { Outlet, useRoutes } from "react-router-dom"
import NotFound from "./NotFound";
import Users from "./Users";
import Home from "./Home";
import User from "./User";

export default function Routes() {

    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            // /users
            path: 'users',
            element: <>
                Пользователи:
                {/* Тег для шаблона под все дочерние элементы */}
                <Outlet />
            </>,
            children: [
                {
                    // /users
                    path: '',
                    element: <Users />
                },
                {
                    // /users/1
                    path: ':id',
                    element: <User />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        },
    ])
    return routes;
}