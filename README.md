# CPSC2221-Database_Final_Project
Final Project for CPSC 2221 - Database Systems - Langara College - Fall of 2018

Group Members:
* Griffin
* Damian
* Leo
* Jason

## Downloading, installing and launching website
Currently to configure and run the website you will need to have the following programs installed:
* Node.JS
* Yarn
* SQLite3
* Git

### Installing Node.JS
Go to their website at https://nodejs.org/en/

### Installing Yarn
You can download and install it from https://yarnpkg.com/lang/en/docs/install/#windows-stable

### Installing SQLite3
You can download and install it from https://www.sqlite.org/index.html

### Installing Git
You can download and install it from https://www.atlassian.com/git/tutorials/install-git

### Once all these things are installed
* Open up a git terminal, right click desktop and new git terminal or launch from start menu
* Type the following command: git clone https://github.com/gpfenniger/CPSC2221-Database_Final_Project
* Then type: cd CPSC2221-Database_Final_Project
* Then: yarn install
* Lastly: yarn start
* Now to view the website go to your browser and go to localhost:3000

### How to make changes to the database
* Download the project unto your computer
* Open up git bash and go into the project folder using cd
* use the command sqlite3 restaurant.db this will put you inside the database shell
* you can type all your sql commands here
* after you're done press ctrl+c to exit
* Now type: git add .
* git commit -m "Database Changes"
* git push origin database

### To syncronize your copy of the project with the master copy
* go to the folder in git bash
* type: git pull
