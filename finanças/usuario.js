class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
    this.conta = [];
    this.metas = [];
    this.orçamentos = [];
    this.investimentos = [];
  }

  adicionarMeta(meta) {
    this.metas.push(meta);
  }

  adicionarOrçamento(orçamento) {
    this.orçamentos.push(orçamento);
  }

  adicionarInvestimento(investimento) {
    this.investimentos.push(investimento);
  }
  adicionarConta(conta) {
    this.conta.push(conta);
  }
}
