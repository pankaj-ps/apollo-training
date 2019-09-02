import { Query as userQuery } from './user';
import { Mutation as userMutation } from './user';
import { Subscription as userSubscription } from './user';
import { Query as traineeQuery } from './trainee';

const resolvers = {
    Query: {
       ...userQuery,
       ...traineeQuery
    },

    Mutation: {
        ...userMutation,
       
     },
     Subscription: {
        ...userSubscription,
       
     }
}
export default resolvers;