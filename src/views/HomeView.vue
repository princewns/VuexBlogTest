<template>
  <div class="home">

    <table>
      <tr>
        <td>번호</td>
        <td>제목</td>
        <td>조회수</td>
      </tr>
      <tr v-for="board in $store.state.board" :key="board.id">
        <td>      
          <router-link :to="`/board/${board.id}`">
            <span @click="addviewscommit">{{board.id}}</span>
          </router-link>
        </td>
        <td>
          <router-link :to="`/board/${board.id}`">
            {{board.title}}
          </router-link>
        </td>
        <td>          
           {{board.views}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods : {
    addviews : function(){
      this.$store.state.board.views++;
    },
    addviewscommit : function(){
      this.$store.commit('addviews', this.views);
    }
  }
}
</script>

<style scoped>
table{
  display: inline-block;
}
</style>
