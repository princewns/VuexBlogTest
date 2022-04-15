<template>
  <div class="write">
    <h1>글을 작성하는 공간입니다</h1>
    <form>
      <input type="text" v-model="title"><br>
      <textarea v-model="memo" cols="30" rows="10">
      </textarea>
    </form>
    <br>
    <button @click="addboard">완료</button>
  </div>
</template>

<script>
export default {
  data : ()=>({
    title : '',
    memo : ''
  }),
  methods : {
    addboard(){
      const board = {title : this.title, memo : this.memo}
      this.$store.commit('addmemo',board);
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