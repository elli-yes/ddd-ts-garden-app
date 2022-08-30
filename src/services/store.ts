import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      garden: {
        user: "",
        name: "",
        plants: [],
      },
    };
  },
  getters: {
    getGarden(state) {
      return state.garden;
    },
  },
});
