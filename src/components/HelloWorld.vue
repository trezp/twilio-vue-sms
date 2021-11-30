<template>
  <div>
    <button v-on:click="handleClick">Say Hello via SMS!</button>
    <p>{{ status }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      status: '',
    }
  },
  methods: {
    async handleClick(){
      const response = await fetch('https://vue-sms-1652.twil.io/sms');
      const data = await response.json();
      console.log(data.status)
      this.status = data.status;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    color: #000;
    padding: 15px 10px;
    border: 1px solid black; 
    border-radius: 3px;
  }
  button:hover {
    color: #fff;
    background: navy;
  }
</style>
