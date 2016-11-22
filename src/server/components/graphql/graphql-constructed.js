import graphqlHTTP from 'express-graphql';import {buildSchema} from 'graphql';import * as graphql from 'graphql';const cors = require('cors');/** * GraphQL constructed * - graphql object types in constructed way * tu run examples from this tutorial go to: * > http://localhost:4000/graphql-constructed * and run: {   dice(numSides: 6) {     numSides,     rollOnce     roll,     name   } } */export default class GraphQL {  app;  constructor(app) {    this.app = app;    /**     * Define RandomDie object     * Equal to:       type RandomDie {          name      : String          numSides  : Int!          rollOnce  : Int          roll      : Int        }     */    var typeRandomDie = new graphql.GraphQLObjectType({      name : 'RandomDie',      fields : {        name        : { type: graphql.GraphQLString },        numSides    : { type: graphql.GraphQLInt },        rollOnce    : { type: graphql.GraphQLInt },        roll        : { type: graphql.GraphQLInt }      }    });    /**     * Define Query object     * Equal to:      type Query {        dice(numSides: Int): RandomDie      }     */    var typeQuery = new graphql.GraphQLObjectType({      name: 'Query',      fields: {        dice: {          type: typeRandomDie,          args: {            numSides: { type: graphql.GraphQLInt }          },          resolve: function(_, args){            return {              name: 'adssad',              roll: 5,              rollOnce: 6,              numSides: args.numSides            }          }        }      }    });    var schema = new graphql.GraphQLSchema({query: typeQuery});    // register graphql-constructed    // example is using cors() to allow calls from :3000 to :4000    // schema - defines schema    // rootValue - defines root schema values    this.app.use('/graphql-constructed', cors(), graphqlHTTP({      schema: schema,      graphiql: true,    }));  }}