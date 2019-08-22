import { Query as userQuery } from './user';
import { Query as traineeQuery } from './trainee';


const resolvers = {
    Query: {
       ...userQuery,
       ...traineeQuery
    }
}
export default resolvers;
