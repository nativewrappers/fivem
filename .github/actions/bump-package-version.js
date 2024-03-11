import fs from "node:fs"

const newVersion = process.env.RELEASE_VERSION;
if (!newVersion) throw new Error("Couldn't get the new version");

let packageFile = fs.readFileSync("package.json", {encoding: 'utf8'});
packageFile = JSON.parse(packageFile);
packageFile.version = newVersion;

packageFile = JSON.stringify(packageFile, null, 2);

fs.writeFileSync("package.json", packageFile);
