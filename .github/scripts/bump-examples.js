const { resolve } = require("path");
const {
  promises: { readdir },
} = require("fs");
const { spawn } = require("child_process");

const getDirectories = async (repo) =>
  (await readdir(resolve(__dirname, repo), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory() && dirent.name.charAt(0) !== ".")
    .map((dirent) => dirent.name);

(async () => {
  try {
    const PATH_TO_EXAMPLES_REPO = "../..";
    const examples = await getDirectories(PATH_TO_EXAMPLES_REPO);

    const installLatestCC = "npm i @esri/calcite-components@latest\n";
    const installLatestCCReact = "npm i @esri/calcite-components-react@latest\n";

    examples.forEach((example) => {
      const child = spawn("bash");
      child.on("exit", (code) => {
        console.log(`${example} bump exit code: ${code}`);
      });

      switch (example) {
        case "vue":
          child.stdin.write(`cd ${example}/vue2\n`);
          child.stdin.write(installLatestCC);
          child.stdin.write(`cd ../vue3\n`);
          child.stdin.write(installLatestCC);
          break;
        case "ember":
          child.stdin.write(`cd ${example}/ember3\n`);
          child.stdin.write(installLatestCC);
          child.stdin.write(`cd ../ember4\n`);
          child.stdin.write(installLatestCC);
          break;
        case "react":
          child.stdin.write(`cd ${example}\n`);
          child.stdin.write(installLatestCCReact);
          break;
        default:
          child.stdin.write(`cd ${example}\n`);
          child.stdin.write(installLatestCC);
      }
      child.stdin.end();
    });
  } catch (e) {
    console.error(e);
  }
})();
