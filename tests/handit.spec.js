describe("Teste de lógica - Handit Sistemas - Dev Junior", function () {
  const lista_produtos = [
    {
      nome: "Geladeira",
      selecionado: true,
      preco_unitario: 2500,
      quantidade_estoque: 50
    },
    {
      nome: "Micro-ondas",
      selecionado: false,
      preco_unitario: 700,
      quantidade_estoque: 45
    },
    {
      nome: "Forno",
      selecionado: false,
      preco_unitario: 500,
      quantidade_estoque: 30
    },
    {
      nome: "Fogão",
      selecionado: true,
      preco_unitario: 350,
      quantidade_estoque: 40
    },
    {
      nome: "Lavadoura",
      selecionado: true,
      preco_unitario: 1300,
      quantidade_estoque: 35
    }
  ];

  it("Retornar uma lista com os produtos selecionados", () => {
    function get_produtos_selecionados(lista) {
      return [];
    }

    let produtos_selecionados = get_produtos_selecionados(lista_produtos);

    expect(produtos_selecionados.length).toBe(3);
    expect(produtos_selecionados[0].selecionado).toBeTruthy();
    expect(produtos_selecionados[0].nome).toBe("Geladeira");
    expect(produtos_selecionados[1].selecionado).toBeTruthy();
    expect(produtos_selecionados[1].nome).toBe("Fogão");
    expect(produtos_selecionados[2].selecionado).toBeTruthy();
    expect(produtos_selecionados[2].nome).toBe("Lavadoura");
  });

  it("Somar o preço unitário de TODOS os produtos", () => {
    function get_soma_preco_unitario(lista) {
      return 0;
    }

    let soma_preco_unitario = get_soma_preco_unitario(lista_produtos);
    expect(soma_preco_unitario).toBe(5350);
  });

  it("Somar o preço unitário dos produtos com preço unitário maior que 600", () => {
    function get_soma_preco_unitario_maior_600(lista) {
      return 0;
    }

    let soma_preco_unitario_maior_600 = get_soma_preco_unitario_maior_600(
      lista_produtos
    );
    expect(soma_preco_unitario_maior_600).toBe(4500);
  });

  it("Retornar uma lista de strings concatenando o nome do produto e o preço unitário", () => {
    function concatenar_nome_e_preco_unitario(lista) {
      return [];
    }

    let lista_concatenada = concatenar_nome_e_preco_unitario(lista_produtos);

    expect(lista_concatenada.length).toBe(5);
    expect(lista_concatenada[0]).toBe("Geladeira_2500");
    expect(lista_concatenada[1]).toBe("Micro-ondas_700");
    expect(lista_concatenada[2]).toBe("Forno_500");
    expect(lista_concatenada[3]).toBe("Fogão_350");
    expect(lista_concatenada[4]).toBe("Lavadoura_1300");
  });

  it("Somar o preço total (quantidade_estoque * preco_unitario) dos produtos que começam com 'F'", () => {
    function get_soma_preco_total_produtos_F(lista) {
      return 0;
    }

    let preco_total_produtos_f = get_soma_preco_total_produtos_F(
      lista_produtos
    );
    expect(preco_total_produtos_f).toBe(29000);
  });
});
