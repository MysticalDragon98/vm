import { ServiceConfig } from "../../types/ServiceConfig.type";

export default async function normalizeService (service: Partial<ServiceConfig>) {
    return <ServiceConfig> {
        host: service.host,
        service: service.service,
        alias: service.alias ?? [],
        commands: service.commands ?? {},
        logs: service.logs,
        src: service.src
    };
}