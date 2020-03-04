[![Build Status](https://travis-ci.com/adobe/aio-cli-setup-action.svg?branch=master)](https://travis-ci.com/adobe/aio-cli-setup-action)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# aio-cli-setup-action
AIO CLI support for GitHub actions. This action supports installing AIO CLI to various enviornments.

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
 ```
 Once setup you can use adobe/aio-app github action to perform app build ,test and deployment. Alternatively you can directly execuite AIO CLI commands in run block of your workflow files.

 ## Contributing

Contributions are welcomed! Read the [Contributing Guide](./.github/CONTRIBUTING.md) for more information.

## Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
