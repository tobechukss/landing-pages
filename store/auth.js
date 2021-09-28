export const state = () => ({});

export const getters = {};

export const actions = {
  async signupUser(_, { data }, account) {
    try {
      const url = `signup/${account}`; // SETUP URL
      let query = await axios.post(url, data);
      return query.data;
    } catch (err) {
      return err;
    }
  }
};

export const mutations = {};
