import {init, start} from "./server";

const startBackEnd = async () => {
    await init();
    await start();
}

startBackEnd().then()
