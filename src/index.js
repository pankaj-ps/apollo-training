import path from 'path';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import resolvers from './module'

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));

const typeDefs = mergeTypes(typesArray, { all: true });
export default {
    typeDefs,
    resolvers
}

