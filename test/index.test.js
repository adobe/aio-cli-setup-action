/*
Copyright 2024 Adobe. All rights reserved.
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

jest.mock('@actions/core', () => ({
    getInput: jest.fn(),
    setFailed: jest.fn()
}))

jest.mock('@actions/exec', () => ({
    exec: jest.fn()
}))

beforeEach(() => {
    core.getInput.mockClear()
})

describe('Install aio cli', () => {
    test('Success - aio cli install at latest', async () => {
        const os = 'macos-latest'
        const version = ''
        core.getInput.mockReturnValueOnce(os)
        core.getInput.mockReturnValueOnce(version)
        await jest.isolateModulesAsync(async () => {
            await require('../index') // run the action
        })
        expect(exec.exec).toHaveBeenCalledTimes(2)
        expect(exec.exec).toHaveBeenCalledWith('npm install -g @adobe/aio-cli')
        expect(exec.exec).toHaveBeenCalledWith('aio --version')
    })

    test('Success - aio cli install at specific version', async () => {
        const os = 'macos-latest'
        const version = '9.0.0'
        core.getInput.mockReturnValueOnce(os)
        core.getInput.mockReturnValueOnce(version)
        await jest.isolateModulesAsync(async () => {
            await require('../index') // run the action
        })
        expect(exec.exec).toHaveBeenCalledTimes(2)
        expect(exec.exec).toHaveBeenCalledWith('npm install -g @adobe/aio-cli@9.0.0')
        expect(exec.exec).toHaveBeenCalledWith('aio --version')
    })

    test('Success - aio cli install at latest on ubuntu', async () => {
        const os = 'ubuntu-latest'
        const version = ''
        core.getInput.mockReturnValueOnce(os)
        core.getInput.mockReturnValueOnce(version)
        await jest.isolateModulesAsync(async () => {
            await require('../index') // run the action
        })
        expect(exec.exec).toHaveBeenCalledTimes(2)
        expect(exec.exec).toHaveBeenCalledWith('sudo npm install -g @adobe/aio-cli')
        expect(exec.exec).toHaveBeenCalledWith('aio --version')
    })

    test('Success - aio cli install at specific version on ubuntu', async () => {
        const os = 'ubuntu-latest'
        const version = '9.0.0'
        core.getInput.mockReturnValueOnce(os)
        core.getInput.mockReturnValueOnce(version)
        await jest.isolateModulesAsync(async () => {
            await require('../index') // run the action
        })
        expect(exec.exec).toHaveBeenCalledTimes(2)
        expect(exec.exec).toHaveBeenCalledWith('sudo npm install -g @adobe/aio-cli@9.0.0')
        expect(exec.exec).toHaveBeenCalledWith('aio --version')
    })

    test('Failure - exec throws error', async () => {
        const os = 'macos-latest'
        const version = '90.1.1'
        core.getInput.mockReturnValueOnce(os)
        core.getInput.mockReturnValueOnce(version)
        exec.exec.mockRejectedValue(new Error('No matching version found for @adobe/aio-cli@90.1.1'))
        await jest.isolateModulesAsync(async () => {
            await require('../index') // run the action
        })
        expect(exec.exec).toHaveBeenCalledTimes(1)
        expect(exec.exec).toHaveBeenCalledWith('npm install -g @adobe/aio-cli@90.1.1')
        expect(core.setFailed).toHaveBeenCalledWith('No matching version found for @adobe/aio-cli@90.1.1')
    })
})
