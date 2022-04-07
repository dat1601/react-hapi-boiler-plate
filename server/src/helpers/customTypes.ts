import { Request as HapiRequest, Server as HapiServer } from "@hapi/hapi"
import { StatesType } from "./states"

export type ExtendedAppState = {
    app: {
        states?: StatesType
    }
}

export type RequestExtendedAppState = HapiRequest & {
    server: ExtendedAppState
}

export type HapiServerExtendedAppState = HapiServer & ExtendedAppState
