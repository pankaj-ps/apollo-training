const Query = {
      Trainee: async (_source, args, { dataSources }, info) => {
            const dataValue = await dataSources.traineeApi.getTrainee();
            const { data } = dataValue;
            return data;
      }
}
export default Query;