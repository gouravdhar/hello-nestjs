# hello-nestjs
 Steps to create a new project from scratch
 -  To generate a package.json: npm init -y 
 -  Download basic dependencies: npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
 -  create src folder and create main.ts
 -  To start rhe app run: npx ts-node-dev src/main.ts

Set up nestjs project using nest cli
- sudo npm install -g @nestjs/cli
- To create an application: nest new hello-nestJs
- To create a new module: nest generate module messages
- To create controller for the above: nest generate controller messages/messages --flat