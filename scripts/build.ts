import { exec } from "child_process";

(async () => {
    await exec("yarn tsup && cp ./src/index.css ./dist cp ./tailwind.config.ts ./dist");
})();
