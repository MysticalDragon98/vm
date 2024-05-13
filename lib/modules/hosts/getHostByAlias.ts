import { readdir } from "fs/promises";
import loadConfig from "../config/loadConfig";
import readTomlFile from "../fs/readTomlFile";
import { HostConfig } from "../../types/HostConfig.type";
import normalizePath from "../fs/normalizePath";
import normalizeHost from "./normalizeHost";
import { join, normalize } from "path";

export default async function getHostByAlias (alias: string) {
    const config = await loadConfig();
    const hostsFolders = config.hosts;

    for (const folder of hostsFolders) {
        const path = normalizePath(folder);
        const files = await readdir(path);

        for (const file of files) {
            const hostConfig = await readTomlFile<HostConfig>(join(path, file));

            if (hostConfig.alias?.includes(alias)) {
                return normalizeHost(hostConfig);
            }
        }
    }

    return null;
}