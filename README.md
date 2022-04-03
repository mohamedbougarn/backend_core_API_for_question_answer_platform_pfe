<img src="https://mpng.subpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg" width=300 height=300 align="right">
# core

This project was generated with node version 14.17.5.

## Development server

Run `node index` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v14.17.5

    $ npm --version
    6.14.14

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/mohamedbougarn/backend_pfe
    $ cd backend_pfe
    $ yarn install

## Configure app

Open `core/config/` then edit it with your settings. You will need:

- database connection;
- logger setting;
- env.js;

## Running the project

    $ node index

## Simple build for production

    $ node build
