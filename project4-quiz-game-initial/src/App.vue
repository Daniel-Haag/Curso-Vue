<template>
  <div>
    <h1 v-html="question"></h1>

    <input type="radio" name="options" value="True" /><label>True</label
    ><br /><input type="radio" name="options" value="False" /><label
      >False</label
    ><br />

    <button class="send" type="button">Send</button>
  </div>
</template>

<script>
export default {
  name: "App",

  //definição das propriedades deste componente
  data() {
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswers: undefined,
    };
  },

  //life cycle hook (created)
  created() {
    this.axios
      .get("https://opentdb.com/api.php?amount=1&category=18")
      .then((response) => {
        this.question = response.data.results[0].question;
        this.incorrectAnswers = response.data.results[0].incorrect_answers;
        this.correctAnswers = response.data.results[0].correct_answer;
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
