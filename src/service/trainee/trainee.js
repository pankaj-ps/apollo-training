const { RESTDataSource } = require('apollo-datasource-rest');
import { config } from '../../config';
class Trainee extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = config.service_URL;
    }

    willSendRequest(request) {
        request.headers.set('authorization', this.context.token);
    }

    async getTrainee() {
        return this.get(`trainee`);
    }
}

export default Trainee;