import { pubsub, UPDATE_USER } from '../../subscription';
const Subscription = {
    UpdateUserSub: {
        // Additional event labels can be passed to asyncIterator creation
        subscribe: () => pubsub.asyncIterator(UPDATE_USER)
    }
}

export default Subscription;