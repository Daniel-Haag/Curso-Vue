<template>
  <div><h1>Pergunta exemplo.</h1></div>
  <input type="radio" name="options" value="True" /><label>True</label
  ><br /><input type="radio" name="options" value="False" /><label>False</label
  ><br />

  <button class="send" type="button">Send</button>
</template>

<script>
export default {
  name: "App",

  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&category=18")
      .then((response) => {
        console.log(response.data.results[0]);
      });
  },
};

//Vue.axios.get(api).then(response);

//https://opentdb.com/api.php?amount=1&category=18
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type="radio"] {
    margin: 12px 4px;
  }

  button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: #1867c0;
    cursor: pointer;
  }
}
</style>
