import { ok } from "assert";
import getHostById from "../../modules/hosts/getHostById";
import getHostByAlias from "../../modules/hosts/getHostByAlias";
import executeShellCommand from "../../modules/sh/executeShellCommand";

interface IOptions {
    
}

export default async function cREPLCommand ([ host ]: string[], options: IOptions) {
    ok(host, "Usage: vm c <host>");

    const hostConfig = await getHostById(host) ?? await getHostByAlias(host);

    ok(hostConfig, `Host not found: ${host}`);

    await executeShellCommand(`ssh ${hostConfig.user}@${hostConfig.host} -p ${hostConfig.port} -i ${hostConfig.keyfile}`);
}