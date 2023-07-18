import { createStore } from "vuex";
import router from "../router";
import { auth } from "../utils/FireBase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    isLogged: false,
  },
  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      console.log(state.user, "USER ZAISHOV");
    },
    SET_IS_LOGGED(state, payload) {
      state.isLoggedIn = payload;
    },
  },
  actions: {
    async login(context, { email, password }) {
      try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        if (res) {
          context.commit("SET_USER", res.user);
          router.push("/");
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

    async logout(context) {
      await signOut(auth);
      context.commit("SET_USER", null);
      router.push("/");
    },
  },
});

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit("SET_IS_LOGGED", true);
  store.commit("SET_USER", user);
  unsub();
});

export default store;
