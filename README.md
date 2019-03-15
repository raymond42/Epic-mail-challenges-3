# Epic Mail
[![Build Status](https://travis-ci.com/raymond42/Epic-mail.svg?branch=develop)](https://travis-ci.com/raymond42/Epic-mail) [![Coverage Status](https://coveralls.io/repos/github/raymond42/Epic-mail/badge.svg?branch=develop)](https://coveralls.io/github/raymond42/Epic-mail?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/5255f9e12d267f8e0f05/maintainability)](https://codeclimate.com/github/raymond42/Epic-mail/maintainability) 

This is a web app that helps people to send messages through mail

------------------------------------------------------------------------------

## UI

## User Interface (UI)
* HTML
* CSS
* Javascript

### GitHub Pages link for UI
[Epic Mail/UI link](https://raymond42.github.io/Epic-mail/UI/)

---------------------------------------------------------------------

## SERVER

## API ENDPOINTS

| Ressource URL | Methods  | Description  |
| ------- | --- | --- |
| /api/v1/users/signup| POST | Get the user to signup |
| /api/v1/users/login | POST | Get the user to login |
| /api/v1/users/contact/:id | Get | Get a specific user |
| /api/v1/users/contacts | GET | Get all users |
| /api/v1/messages| POST | Compose an email |
| /api/v1/messages| GET | Get all messages |
| /api/v1/messages/:id | GET | Get a specific message|
| /api/v1/messages/read | GET | Get read messages |
| /api/v1/messages/sent | GET | Get sent messages |
| /api/v1/messages/received | GET | Get received messages |
| /api/v1/messages | DELETE | Delete a message |


## Used Tools

### Language
```
*Javascript*
```
### Server Environment
```
 *NodeJS* (run time Environment for running JS codes)
 ```
### Framework
```
 *Express* (used for building fast APIs)
 ```
### Testing Framework and assertion library
```
 *Mocha* and *Chai*
 ```
### Continuous Integration
```
Travis CI
```
### Test Coverage
```
nyc
```
### Git badge
```
coveralls
```
### Deployment
```
Heroku
```
### Heroku link Example

[EPIC Email link](https://raymond-epic-mail.herokuapp.com/)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites
To install the software on your local machine, you need first to clone the repository or download the zip file and once this is set up you are going to need this packages. [NodeJS]

```
 [Node Package Installer - NPM] this usually comes with Node or YARN in case NPM doesn't work.
```

## Installing
The installation of this application is fairly straightforward, After cloning this repository to your local machine,CD into the package folder using your terminal and run the following

```
> npm install
```

It will install the node_modules which will help you run the project on your local machine.

## Run the server
```
> npm start
```
## Run the test
```
> npm test
```

## Contributor
- Raymond Gakwaya <raymond42@gmail.com>

---
