import { $CONF_FILE } from "../../env";
import { VMConfig } from "../../types/VMConfig.type";
import readTomlFile from "../fs/readTomlFile";

let ConfigCache: VMConfig = null;

export default async function loadConfig (): Promise<VMConfig> {
    if (ConfigCache) return ConfigCache;
    
    return ConfigCache = await readTomlFile<VMConfig>($CONF_FILE, {
        services: [],
        hosts: []
    });
}