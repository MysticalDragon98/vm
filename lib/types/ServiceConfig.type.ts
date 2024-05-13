export type ServiceConfig = {
    host: string;
    service: string;
    src: string;
    logs: string;
    alias: string[];
    
    commands: Record<string, string>;
}