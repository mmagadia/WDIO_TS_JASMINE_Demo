# Introduction

Sample test suite using WebdriverIO, Typescript and Jasmine.

## Angular 7 Test site

https://github.com/mmagadia/AngularApp
See instructions for running locally.

## Run webApp locally

npm start

## Installation

npm install

## To compile

i.e.
tsc --target es5 ./tests/randomMonsterTeam.spec.ts
tsc --target es5 --resolveJsonModule ./tests/randomMonsterTeam.spec.ts

## To run suite

npm test -- wdio.conf.js --suite

i.e.
npm test -- wdio.conf.js --suite smoke
npm test -- wdio.conf.js --suite all
