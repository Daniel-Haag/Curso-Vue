const ListagemDeTarefas = {
  data() {
    return {
      titulo: "Lista de Tarefas",
      listaTarefas: [],
      novaTarefa: {
        descricaoTarefa: null,
        finalizada: false,
      },
    };
  },

  methods: {
    adicionarTarefa: function () {
      if (this.novaTarefa.descricaoTarefa) {
        this.listaTarefas.push(this.novaTarefa);
        this.novaTarefa = {};
        window.localStorage.setItem(
          "tarefas",
          JSON.stringify(this.listaTarefas)
        );
      } else {
        alert("Nada informado!");
      }
    },
    limparTudo: function () {
      while (this.listaTarefas.length) {
        this.listaTarefas.pop();
      }
    },
  },
  created() {
    this.listaTarefas = localStorage.getItem("tarefas")
      ? JSON.parse(localStorage.getItem("tarefas"))
      : this.listaTarefas;
  },
};

Vue.createApp(ListagemDeTarefas).mount("#app");
