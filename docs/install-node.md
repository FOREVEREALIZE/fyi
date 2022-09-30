# Installing Node.JS
## Windows
Bruh, use [the website](https://nodejs.org/en/)

## Linux / MacOS
To use NodeJS on Unix-like OS' your best option is NVM (Node Version Manager).

To install NVM run the following command:
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`
Restart your terminal and run:
`nvm install node` to install the latest version or `nvm ls-remote` and `nvm install XX.X.X` (or an alias) to install a custom version.

Now `node --version` should work. If it does not run `nvm use XX.X.X`