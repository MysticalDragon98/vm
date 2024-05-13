import { access } from "fs/promises";
import loadConfig from "../config/loadConfig";
import { join } from "path";
import fileExists from "../fs/fileExists";
import readTomlFile from "../fs/readTomlFile";
import { HostConfig } from "../../types/HostConfig.type";
import normalizeHost from "./normalizeHost";

export default async function getHostById (id: string) {
    const config = await loadConfig();
    const hostsFolders = config.hosts;

    for (const folder of hostsFolders) {
        const filepath = join(folder, id + ".toml");

        if (await fileExists(filepath)) {
            return normalizeHost(await readTomlFile<HostConfig>(filepath));
        }
    }

    return null;
}