import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: [
      { id: 1, title : "첫번쨰 제목", memo: "첫번째 작성된 내용입니다", views : 0},
      { id: 2, title : "두번째 제목", memo: "두번째 작성된 내용입니다", views : 0},
    ],
  },
  getters: {},
  mutations: {
    addmemo : function(state, memo) {
      const id = state.board.length + 1;
      state.board.push({ id: id, title : memo.title, memo : memo.memo, views : 0});
    },
    views : function(state, id){
      state.board[id-1].views++;
    }
  },
  actions: {},
  modules: {},
});
