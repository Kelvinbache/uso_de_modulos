import { cpus } from "node:os";

export function model() {
  const router = cpus().map((data) => data);
  return router;
}



