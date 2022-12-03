const fs = require('fs')

const newVersion = process.env.RELEASE_VERSION;
if (!newVersion) throw new Error("Couldn't get the new version");

let package = fs.readFileSync("package.json", {encoding: 'utf8'});
package = JSON.parse(package);
package.version = newVersion;

package = JSON.stringify(package, null, 2);

fs.writeFileSync("package.json", package);
