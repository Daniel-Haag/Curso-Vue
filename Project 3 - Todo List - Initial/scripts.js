var tarefas = [
  {
    descricaoTarefa: "Tarefa Exemplo",
  },
];

const ListagemDeTarefas = {
  data() {
    return {
      titulo: "Lista de Tarefas",
      listaTarefas: window.tarefas,
    };
  },
};

Vue.createApp(ListagemDeTarefas).mount("#app");
