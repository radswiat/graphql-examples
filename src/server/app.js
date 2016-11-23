var express = require('express');import GraphQL from './components/graphql/graphql';import GraphQLSimple from './components/graphql/graphql-simple';import GraphQLObjects from './components/graphql/graphql-objects';import GraphQLConstructed from './components/graphql/graphql-constructed';import GraphQLMongo from './components/graphql/graphql-mongodb';class App {  app;  constructor() {    this.app = express();    this.app.use(function(req, res, next) {      res.header("Access-Control-Allow-Origin", "*");      next();    });    this.register();  }  static start() {    return new App();  }  register() {    new GraphQL(this.app);    new GraphQLSimple(this.app);    new GraphQLObjects(this.app);    new GraphQLConstructed(this.app);    new GraphQLMongo(this.app);  }  runServer() {    this.app.listen(4000);    console.log('Running a GraphQL API server at localhost:4000/graphql');  }}const app = App.start();app.runServer();