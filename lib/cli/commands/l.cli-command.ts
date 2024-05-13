import { ok } from "assert";
import getServiceById from "../../modules/services/getServiceById";
import getServiceByAlias from "../../modules/services/getServiceByAlias";
import executeCLICommand from "../../../plugins/cli/lib/modules/commands/executeCLICommand";
import getHostById from "../../modules/hosts/getHostById";
import executeSSHCommand from "../../modules/sh/executeSSHCommand";

interface IOptions {
    
}

export default async function lREPLCommand ([ service ]: string[], options: IOptions) {
    ok(service, "Usage: vm l <service>");

    const serviceConfig = await getServiceById(service) ?? await getServiceByAlias(service);

    ok(serviceConfig, `Service "${service}" not found`);

    const host = await getHostById(serviceConfig.host);

    ok(host, `Host "${serviceConfig.host}" not found`);

    executeSSHCommand(host, `tail -f "${serviceConfig.logs}"`);
}