<template>
  <div>
    <input v-model="txtMsg" type="text" name="msg" id="msg" class="sms-input">
    <button @click="handleClick">Send Text Confirmation</button>
    <p v-if="smsStatus">Sent Status: {{ smsStatus }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      smsStatus: '',
      txtMsg: ''
    }
  },
  methods: {
    async handleClick(){
      try {
        const response = await fetch('https://vue-sms-1652.twil.io/sms', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({Body: this.txtMsg}),
       });
        const data = await response.json();
        this.smsStatus = data.status;
        this.txtMsg = "";
      } catch(err){
        console.log(err);
      }  
    }
  }
}
</script>

<style scoped>
  button {
    color: #000;
    padding: 15px 10px;
    border: 1px solid black; 
    border-radius: 3px;
    margin: 16px;
  }
  button:hover {
    color: #fff;
    background: navy;
  }
  .sms-input {
    margin: auto;
    padding: 14px;
    width: 500px;
  }
</style>
