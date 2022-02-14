import logger from "pino";
import pretty from 'pino-pretty';

// TODO: Fix type error
const log = logger(pretty({
  customPrettifiers: {
    // TODO: Remove ts ignore
    // @ts-ignore
    time: timestamp => `${new Date(timestamp).toISOString()}`,
  }
}));

export default log