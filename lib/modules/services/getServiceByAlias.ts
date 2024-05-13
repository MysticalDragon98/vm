import { readdir } from "fs/promises";
import loadConfig from "../config/loadConfig";
import normalizePath from "../fs/normalizePath";
import readTomlFile from "../fs/readTomlFile";
import { join } from "path";
import { ServiceConfig } from "../../types/ServiceConfig.type";
import normalizeService from "./normalizeService";

export default async function getServiceByAlias (alias: string) {
    const config = await loadConfig();
    const servicesFolder = config.services;

    for (const folder of servicesFolder) {
        const path = normalizePath(folder);
        const files = await readdir(path);

        for (const file of files) {
            const serviceConfig = await readTomlFile<ServiceConfig>(join(path, file));

            if (serviceConfig.alias?.includes(alias)) {
                return normalizeService(serviceConfig);
            }
        }
    }

    return null;
}