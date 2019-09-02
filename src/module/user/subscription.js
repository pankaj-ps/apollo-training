import {  UPDATE_USER } from '../../subscription';
const Subscription = {
    UpdateUserSub: {
        // Additional event labels can be passed to asyncIterator creation
        subscribe: (parent, args, context, info) => pubsub.asyncIterator(UPDATE_USER)
    }
}

export default Subscription;