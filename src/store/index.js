import { createStore } from "vuex";
import router from "../router";
import { auth } from "../utils/FireBase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      console.log(state.user, "USER ZAISHOV");
    },
    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (res) {
          context.commit("SET_USER", res.user);
        } else {
          throw new Error("логін не завершився");
        }
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            alert("Такого користувача не знайдено");
            break;
          case "auth/wrong-password":
            alert("не правильний пароль");
            break;
          default:
            alert("Щось пішло не так");
        }
        return;
      }

      commit("SET_USER", auth.currentUser);
      router.push("/");
    },

    async logout({ commit }, details) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/");
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (suer) => {
        if (user === null) {
          commit("CLEAR_USER", user);
        }
      });
    },
  },
});

export default store;
