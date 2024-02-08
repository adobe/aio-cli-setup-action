/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
const core = require('@actions/core')
const exec = require('@actions/exec')

const main = async () => {
  try {
    const os = core.getInput('os')
    const version = core.getInput('version')
    console.log(' OS - ' + os)
    await runCommand(os, version)
    console.log('action completed')
  } catch (error) {
    core.setFailed(error.message)
  }
}

/**
 * Install aio-cli
 * @param {string} os OS name
 * @param {string} version Version of aio-cli
 */
async function runCommand (os, version) {
  let commandStr = 'npm install -g @adobe/aio-cli'
  if (version) {
    console.log(' Version - ' + version)
    commandStr = commandStr + '@' + version
  }
  if (os && os.startsWith('ubuntu')) { commandStr = 'sudo ' + commandStr }

  await exec.exec(commandStr)
  await exec.exec('aio --version')
}

module.exports = main() // Run the action
