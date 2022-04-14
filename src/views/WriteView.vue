<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <form>
      <input type="text" v-model="title"><br>
      <textarea v-model="memo" cols="30" rows="10">
      </textarea>
    </form>
    <br>
    <button @click="addmemoMu">완료</button>
  </div>
</template>

<script>
export default {
  data : function () {
    return {
      memo : '',
      title : ''
    }
  },
  methods : {
    addmemo : function () {
      const id = this.$store.state.board.length+1
      this.$store.state.board.push({id : id, title : this.title, memo : this.memo})
    },
    addmemoMu : function () {
      this.$store.commit('addmemo', this.memo);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
form{
  text-align: center;
}
</style>