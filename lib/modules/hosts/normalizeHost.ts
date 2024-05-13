import { HostConfig } from "../../types/HostConfig.type";

export default function normalizeHost (host: Partial<HostConfig>) {
    return <HostConfig>{
        user: host.user ?? process.env.USER,
        host: host.host,
        port: host.port ?? 22,
        keyfile: host.keyfile ?? `${process.env.HOME}/.ssh/id_rsa`,
        alias: host.alias ?? []
    }
}