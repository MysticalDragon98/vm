import { config } from "dotenv";
import { join } from "path";

config();

export const $HOME = process.env.HOME;
export const $CONF_FILE= join($HOME, "/.vm/config.toml");