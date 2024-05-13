import { HostConfig } from "../../types/HostConfig.type";
import executeShellCommand from "./executeShellCommand";

export default async function executeSSHCommand (host: HostConfig, command: string) {
    await executeShellCommand(`ssh ${host.user}@${host.host} -p ${host.port} -i ${host.keyfile} -y "${command.replace(/"/g, '\\"')}"`)
}