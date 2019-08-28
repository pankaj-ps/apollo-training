const { RESTDataSource } = require('apollo-datasource-rest');
import { config } from '../../config';
class User extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = config.service_URL;
  }
  willSendRequest(request) {
    request.headers.set('authorization', this.context.token);
  }
  async getUser() {
    return this.get(`user/me`);
  }

async updateUser(user) {
    let userData = { ...user };
   
    return this.put(
      `user/me`, userData);
  }

}
export default User;