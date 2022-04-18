'use strict';

import Hapi, { Server } from "@hapi/hapi";
import { states } from "./helpers/states";
import { HapiServerExtendedAppState } from "./helpers/customTypes";
import path from "path";
import inert from "@hapi/inert";
import {endpointsRoutes, handle404} from "./uiRoutes/routeIndex";

export let server: HapiServerExtendedAppState;

export const init = async (): Promise<Server> => {
    server = Hapi.server({
        port: process.env.PORT || 4000,
        host: process.env.HOST || '0.0.0.0',
        routes: {
            files: {
                relativeTo: path.join(__dirname, '../../') // project root dir
            }
        }
    });

    server.app = {
        ...server.app, 
        states
    };

    await server.register(inert);

    server.route(endpointsRoutes);
    server.ext('onPreResponse', handle404);

    return server;
}

export const start = async (): Promise<void> => {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
}

process.on('unhandledRejection', (err) => {
    console.log('unhandledRejection');
    console.log(err);
    process.exit(1);
})

process.on('warning', e => console.warn(e.stack))
