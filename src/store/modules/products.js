import { asyncGetCategories, asyncGetProducts } from "../../api/data";
import { SET_CATEGORIES, SET_PRODUCTS } from "../mutation-types";

const state = {
  all: [],
  categories: [],
};

const mutations = {
  [SET_CATEGORIES](state, categories) {
    state.categories = categories;
  },

  [SET_PRODUCTS](state, products) {
    state.all = products;
  },
};

const actions = {
  getAllCategories({ commit }) {
    commit(SET_CATEGORIES, asyncGetCategories());
  },
  getAllProducts({ commit }) {
    commit(SET_PRODUCTS, asyncGetProducts());
  },
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
