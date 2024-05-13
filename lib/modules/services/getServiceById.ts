import { join } from "path";
import loadConfig from "../config/loadConfig";
import fileExists from "../fs/fileExists";
import normalizeService from "./normalizeService";
import readTomlFile from "../fs/readTomlFile";
import { ServiceConfig } from "../../types/ServiceConfig.type";

export default async function getServiceById (id: string) {
    const config = await loadConfig();
    const servicesFolder = config.services;

    for (const folder of servicesFolder) {
        const filepath = join(folder, id + ".toml");

        if (await fileExists(filepath)) {
            return normalizeService(await readTomlFile<ServiceConfig>(filepath));
        }
    }

    return null;
}