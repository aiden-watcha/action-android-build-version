const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

const versionNameRegexPattern = /(versionName(?:\s|=)*)(.*)/;

function replaceAll(str, searchStr, replaceStr) {

   return str.split(searchStr).join(replaceStr);
}

try {
    const gradlePath = core.getInput('gradlePath');
    console.log(`Gradle Path : ${gradlePath}`);

    fs.readFile(gradlePath, 'utf8', function (err, data) {
        const versionName = replaceAll(data.match(versionNameRegexPattern)[2],"\"", "");
        console.log(`Version Name : ${versionName}`);
        
        core.setOutput("versionName", `v${versionName}`);
    });

} catch (error) {
    core.setFailed(error.message);
}
