#!/usr/bin/env node

import loadConfig from "./lib/modules/config/loadConfig";
import initCLI from "./plugins/cli/initCLI";

//* Imports

async function main () {
    await Promise.all([
        initCLI({ boolean: [] })
    ]);

    //* Post Main
}

main();

process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);