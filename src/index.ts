import { createExecutor } from "@seekrit/vault-executor";
import config from "../vault.config";

export const {
  default: handler,
  ExecutorIdentity,
  ConnectFlow,
  Connection,
} = createExecutor(config);
export default handler;
