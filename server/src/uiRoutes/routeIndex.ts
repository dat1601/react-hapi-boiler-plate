import {ServerRoute} from "@hapi/hapi";
import {reactRoutes, response404WithHtml} from "./reactRoutes";

export const endpointsRoutes: ServerRoute[] = reactRoutes.concat()

export const handle404 = response404WithHtml