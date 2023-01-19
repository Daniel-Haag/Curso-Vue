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
      guardarTarefas();
    },
    limparTudo: function () {
      while (this.listaTarefas.length) {
        this.listaTarefas.pop();
      }
      guardarTarefas();
    },
    guardarTarefas: function () {
      window.localStorage.setItem("tarefas", JSON.stringify(this.listaTarefas));
    },
  },
  created() {
    this.listaTarefas = localStorage.getItem("tarefas")
      ? JSON.parse(localStorage.getItem("tarefas"))
      : this.listaTarefas;
  },
  updated() {},
};

Vue.createApp(ListagemDeTarefas).mount("#app");
