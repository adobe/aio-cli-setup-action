[![Build Status](https://travis-ci.com/adobe/aio-cli-setup-action.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-setup-action)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# aio-cli-setup-action
[AIO CLI](https://github.com/adobe/aio-cli) support for GitHub actions. This action supports installing AIO CLI to various environments.

# Getting Started
You can include the action in your workflow as adobe/aio-cli-setup-action@0.0.1 Example :


```
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Setup CLI
        uses: adobe/aio-cli-setup-action@0.0.1
        with:
          os: ubuntu-latest
 ```
Once they are set up you can use adobe/aio-apps-action github action to perform app build, test and deployment. Alternatively, you can directly execute AIO CLI commands in the run block of your workflow files.

 ## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
