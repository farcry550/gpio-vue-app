<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="toggleLed">{{ buttonText }}</button>
  </div>
</template>

<script>
import Api from '../api/Pi.api'

export default {
  name: 'HelloWorld',
  computed: {
    buttonText() {
      return this.loading ? 'Loading...' : `Turn ${this.ledIsOn ? 'OFF':'ON'} LED`;
    },
  },
  data() {
    return {
      msg: 'Click the button!',
      ledIsOn: false,
      loading: true
    }
  },
  methods: {
    async toggleLed() {
      if (this.ledIsOn)
        this.msg = await this.turnOffLed();

      else
        this.msg = await this.turnOnLed();
      
    },
    async turnOnLed() {
      let response = await Api.turnOnLed();
      let responseData = response.data; 
      this.ledIsOn = responseData.success ? true : this.ledIsOn;

      return responseData.message;
    },
    async turnOffLed() {
      let response = await Api.turnOffLed();
      let responseData = response.data; 
      this.ledIsOn = responseData.success ? false : this.ledIsOn;

      return responseData.message;
    },
  },
  async created() {
      let response = await Api.readLed();
      let responseData = response.data;
      this.ledIsOn = responseData.value;

      this.loading = false;
  }
}
</script>

<style scoped lang="scss">
button {
  margin: 30px auto;
  font-size: 22px;
  padding: 20px 50px;
  border-radius: 8px;
  border: solid 2px rgb(122, 103, 103);
  background: #e04ce0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-width: 10%;
  cursor: pointer;

  &:hover {
    background: rgb(233, 135, 152);
  }
}
</style>
