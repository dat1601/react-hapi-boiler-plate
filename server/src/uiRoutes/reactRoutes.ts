import {Request, ResponseToolkit, ServerRoute} from "@hapi/hapi";
import joi from "joi";

const getUIOptions = {
    validate: {
        query: joi.object().max(0),
    }
}

// Explanation here: https://stackoverflow.com/questions/55649840/react-routing-with-hapi
export const reactRoutes: ServerRoute[] = [
    {
        method: "GET",
        path: "/ui/{path*}",
        options: getUIOptions,
        handler: {
            directory: {
                path: process.env.UIPATH || './client/build',
                redirectToSlash: false,
                index: true,
            }
        }
    }
]

export const response404WithHtml = (request: Request, h: ResponseToolkit) => {
    const response = request.response;
    // @ts-ignore
    if (response.isBoom && response.output.statusCode === 404) {
        return h.file('./client/build/index.html').code(200);
    }

    return h.continue;
}