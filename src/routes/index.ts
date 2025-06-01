import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();
const routesPath = __dirname;

fs.readdirSync(routesPath).forEach((file) => {
  if (
    file.endsWith("Routes.ts") &&
    file !== "index.ts"
  ) {
    const route = require(path.join(routesPath, file));
    
    const baseRoute = "/" + file
      .replace("Routes.ts", "")
      .toLowerCase(); 

    if (route.default) {
      router.use(baseRoute, route.default);
    }
  }
});

export default router;
