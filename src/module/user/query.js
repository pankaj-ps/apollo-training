const Query = {
  me: async (_source, args, { dataSources }, info) => {
    const user = await dataSources.userApi.getUser();
    return user.data;
  }
}
export default Query;