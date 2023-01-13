tarefas = [
  {
    descricaoTarefa: "Tarefa Exemplo",
    finalizada: false,
  },
];

const ListagemDeTarefas = {
  data() {
    return {
      titulo: "Lista de Tarefas",
      listaTarefas: window.tarefas,
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
};

Vue.createApp(ListagemDeTarefas).mount("#app");
