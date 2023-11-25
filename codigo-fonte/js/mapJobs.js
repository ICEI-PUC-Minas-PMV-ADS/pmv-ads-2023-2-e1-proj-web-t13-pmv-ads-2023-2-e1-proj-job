const vagas = [
  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Analista de Sistemas",
    empresa: "Empresa XYZ",
    local: "Belo Horizonte - MG",
    tipoDeVaga: "Presencial",
    salarioMaximo: 8000,
    salarioMinimo: 6000,
    dataPostagem: 1,
    senioridade: "Estagio",
    descricao:
      "Estamos à procura de um analista de sistemas experiente para melhorar nossos sistemas. Se você é apaixonado por tecnologia e resolução de problemas, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Desenvolvedor Web",
    empresa: "Empresa ABC",
    local: "São Paulo - SP",
    tipoDeVaga: "Remoto",
    salarioMaximo: 9000,
    salarioMinimo: 7000,
    dataPostagem: 2,
    senioridade: "Pleno",
    descricao:
      "Procuramos um desenvolvedor web talentoso para se juntar à nossa equipe. Se você tem experiência em criar sites incríveis, venha trabalhar conosco.",
  },
  {
    logoSrc: "./images/enterpriselogo3.png",
    vaga: "Engenheiro de Software",
    empresa: "Empresa 123",
    local: "Rio de Janeiro - RJ",
    tipoDeVaga: "Híbrido",
    salarioMaximo: 10000,
    salarioMinimo: 8000,
    dataPostagem: 3,
    descricao:
      "Estamos em busca de um engenheiro de software experiente para liderar projetos de desenvolvimento. Se você é apaixonado por programação, esta vaga é para você.",
  },

  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Analista de Sistemas",
    empresa: "Empresa XYZ",
    local: "Belo Horizonte - MG",
    tipoDeVaga: "Presencial",
    salarioMaximo: 8000,
    salarioMinimo: 6000,
    dataPostagem: 1,
    senioridade: "Pleno",
    descricao:
      "Estamos à procura de um analista de sistemas experiente para melhorar nossos sistemas. Se você é apaixonado por tecnologia e resolução de problemas, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Desenvolvedor Web",
    empresa: "Empresa ABC",
    local: "São Paulo - SP",
    tipoDeVaga: "Remoto",
    salarioMaximo: 9000,
    salarioMinimo: 7000,
    dataPostagem: 2,
    senioridade: "Pleno",
    descricao:
      "Procuramos um desenvolvedor web talentoso para se juntar à nossa equipe. Se você tem experiência em criar sites incríveis, venha trabalhar conosco.",
  },
  {
    logoSrc: "./images/enterpriselogo4.png",
    vaga: "Engenheiro de Software",
    empresa: "Empresa 123",
    local: "Rio de Janeiro - RJ",
    tipoDeVaga: "Híbrido",
    salarioMaximo: 10000,
    salarioMinimo: 8000,
    dataPostagem: 3,
    senioridade: "Junior",
    descricao:
      "Estamos em busca de um engenheiro de software experiente para liderar projetos de desenvolvimento. Se você é apaixonado por programação, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo3.png",
    vaga: "Engenheiro de Dados",
    empresa: "Empresa ABCD",
    local: "Porto Alegre - RS",
    tipoDeVaga: "Remoto",
    salarioMaximo: 11000,
    salarioMinimo: 9000,
    dataPostagem: 4,
    senioridade: "Senior",
    descricao:
      "Procuramos um engenheiro de dados para trabalhar em nosso time de ciência de dados. Se você é especializado em coleta e análise de dados, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Designer Gráfico",
    empresa: "Empresa Gráfica",
    local: "Curitiba - PR",
    tipoDeVaga: "Presencial",
    salarioMaximo: 7500,
    salarioMinimo: 5500,
    dataPostagem: 5,
    senioridade: "Junior",
    descricao:
      "Estamos em busca de um designer gráfico talentoso para criar designs incríveis. Se você é criativo e apaixonado por design, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Analista de Sistemas",
    empresa: "Empresa XYZ",
    local: "Belo Horizonte - MG",
    tipoDeVaga: "Presencial",
    salarioMaximo: 8000,
    salarioMinimo: 6000,
    dataPostagem: 1,
    senioridade: "Estagio",
    descricao:
      "Estamos à procura de um analista de sistemas experiente para melhorar nossos sistemas. Se você é apaixonado por tecnologia e resolução de problemas, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo4.png",
    vaga: "Desenvolvedor Web",
    empresa: "Empresa ABC",
    local: "São Paulo - SP",
    tipoDeVaga: "Remoto",
    salarioMaximo: 9000,
    salarioMinimo: 7000,
    dataPostagem: 2,
    senioridade: "Pleno",
    descricao:
      "Procuramos um desenvolvedor web talentoso para se juntar à nossa equipe. Se você tem experiência em criar sites incríveis, venha trabalhar conosco.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Engenheiro de Software",
    empresa: "Empresa 123",
    local: "Rio de Janeiro - RJ",
    tipoDeVaga: "Híbrido",
    salarioMaximo: 10000,
    salarioMinimo: 8000,
    dataPostagem: 3,
    senioridade: "Senior",
    descricao:
      "Estamos em busca de um engenheiro de software experiente para liderar projetos de desenvolvimento. Se você é apaixonado por programação, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Engenheiro de Dados",
    empresa: "Empresa ABCD",
    local: "Porto Alegre - RS",
    tipoDeVaga: "Remoto",
    salarioMaximo: 11000,
    salarioMinimo: 9000,
    dataPostagem: 4,
    senioridade: "Junior",
    descricao:
      "Procuramos um engenheiro de dados para trabalhar em nosso time de ciência de dados. Se você é especializado em coleta e análise de dados, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Designer Gráfico",
    empresa: "Empresa Gráfica",
    local: "Curitiba - PR",
    tipoDeVaga: "Presencial",
    salarioMaximo: 7500,
    salarioMinimo: 5500,
    dataPostagem: 5,
    senioridade: "Pleno",
    descricao:
      "Estamos em busca de um designer gráfico talentoso para criar designs incríveis. Se você é criativo e apaixonado por design, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo2.png",
    vaga: "Gerente de Marketing",
    empresa: "Empresa de Marketing",
    local: "Salvador - BA",
    tipoDeVaga: "Remoto",
    salarioMaximo: 12000,
    salarioMinimo: 9000,
    senioridade: "Senior",
    dataPostagem: 6,
    descricao:
      "Procuramos um gerente de marketing experiente para liderar nossa equipe de marketing. Se você é criativo e tem um histórico de sucesso em marketing, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo3.png",
    vaga: "Analista de Dados",
    empresa: "Empresa de Análise",
    local: "Brasília - DF",
    tipoDeVaga: "Presencial",
    salarioMaximo: 9500,
    salarioMinimo: 7000,
    dataPostagem: 7,
    senioridade: "Estagio",
    descricao:
      "Estamos procurando um analista de dados talentoso para ajudar a extrair insights valiosos de nossos dados. Se você é apaixonado por análise de dados, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Engenheiro de Redes",
    empresa: "Empresa de TI",
    local: "Fortaleza - CE",
    tipoDeVaga: "Presencial",
    salarioMaximo: 10000,
    salarioMinimo: 7500,
    senioridade: "Junior",
    dataPostagem: 8,
    descricao:
      "Procuramos um engenheiro de redes para gerenciar e otimizar nossa infraestrutura de rede. Se você tem experiência em redes de computadores, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo1.png",
    vaga: "Desenvolvedor Mobile",
    empresa: "Empresa MobileTech",
    local: "Porto Velho - RO",
    tipoDeVaga: "Remoto",
    salarioMaximo: 9500,
    salarioMinimo: 7500,
    dataPostagem: 10,
    senioridade: "Senior",
    descricao:
      "Estamos em busca de um desenvolvedor mobile talentoso para criar aplicativos móveis inovadores. Se você é apaixonado por desenvolvimento mobile, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo4.png",
    vaga: "Analista de Suporte Técnico",
    empresa: "Empresa de Suporte",
    local: "Manaus - AM",
    tipoDeVaga: "Presencial",
    salarioMaximo: 8000,
    salarioMinimo: 6000,
    dataPostagem: 11,
    senioridade: "Senior",
    descricao:
      "Procuramos um analista de suporte técnico para auxiliar nossos clientes com problemas técnicos. Se você é hábil em resolver questões de suporte, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo3.png",
    vaga: "Analista de Marketing Digital",
    empresa: "Agência de Marketing",
    local: "Florianópolis - SC",
    tipoDeVaga: "Remoto",
    salarioMaximo: 8500,
    salarioMinimo: 6500,
    dataPostagem: 12,
    descricao:
      "Estamos em busca de um analista de marketing digital para criar estratégias de marketing online. Se você é especializado em marketing digital, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo4.png",
    vaga: "Engenheiro de Segurança da Informação",
    empresa: "Empresa de Segurança",
    local: "Curitiba - PR",
    tipoDeVaga: "Presencial",
    salarioMaximo: 11000,
    salarioMinimo: 9000,
    dataPostagem: 13,
    senioridade: "Pleno",
    descricao:
      "Procuramos um engenheiro de segurança da informação para proteger nossos sistemas e dados. Se você é especializado em segurança da informação, esta vaga é para você.",
  },
  {
    logoSrc: "./images/enterpriselogo3.png",
    vaga: "Analista de Recursos Humanos",
    empresa: "Empresa RH",
    local: "João Pessoa - PB",
    tipoDeVaga: "Presencial",
    salarioMaximo: 8000,
    salarioMinimo: 6000,
    dataPostagem: 14,
    senioridade: "Pleno",
    descricao:
      "Estamos em busca de um analista de recursos humanos para gerenciar nossos processos de recrutamento e seleção. Se você tem experiência em RH, esta vaga é para você.",
  },
];

function filtrarVagasSimples(
  vagas,
  tipoVaga,
  salarioMaximo,
  dataPostagem,
  senioridade
) {
  return vagas.filter((vaga) => {
    if (
      (!tipoVaga || vaga.tipoDeVaga === tipoVaga) &&
      (!senioridade || vaga.senioridade === senioridade) &&
      (!salarioMaximo || vaga.salarioMaximo >= salarioMaximo) &&
      (!dataPostagem || vaga.dataPostagem <= dataPostagem)
    ) {
      return true;
    }
    return false;
  });
}

const filtrarVagasComSelects = () => {
  const tipoVagaSelecionado = document.querySelector(
    'input[name="tipoDeVaga"]:checked'
  ).id;
  const salarioSelecionado = document.querySelector(
    'input[name="Salário"]:checked'
  ).id;
  const dataAnuncioSelecionado = document.querySelector(
    'input[name="dataAnuncio"]:checked'
  ).id;
  const experienciaSelecionada = document.querySelector(
    'input[name="experiencia"]:checked'
  ).id;

  let tipoVagaFiltrar = null;
  let salarioMaximoFiltrar = null;
  let dataPostagemFiltrar = null;
  let experienciaFiltrar = null;

  if (tipoVagaSelecionado !== "todos") {
    tipoVagaFiltrar = tipoVagaSelecionado;
  }

  if (experienciaSelecionada !== "todos") {
    experienciaFiltrar = experienciaSelecionada;
  }

  if (salarioSelecionado !== "todos") {
    switch (salarioSelecionado) {
      case "3000":
        salarioMaximoFiltrar = 3000;
        break;
      case "5000":
        salarioMaximoFiltrar = 5000;
        break;
      case "7000":
        salarioMaximoFiltrar = 7000;
        break;
      case "10000":
        salarioMaximoFiltrar = 10000;
        break;
    }
  }

  if (dataAnuncioSelecionado !== "todos") {
    switch (dataAnuncioSelecionado) {
      case "24-horas":
        dataPostagemFiltrar = 1;
        break;
      case "ultimos-3-dias":
        dataPostagemFiltrar = 3;
        break;
      case "ultimos-7-dias":
        dataPostagemFiltrar = 7;
        break;
      case "ultimos-15-dias":
        dataPostagemFiltrar = 15;
        break;
    }
  }

  const vagasFiltradas = filtrarVagasSimples(
    vagas,
    tipoVagaFiltrar,
    salarioMaximoFiltrar,
    dataPostagemFiltrar,
    experienciaFiltrar
  );

  atualizarListaDeVagas(vagasFiltradas);
};

function atualizarListaDeVagas(vagasFiltradas) {
  const cardVagas = vagasFiltradas
    .map(
      (vaga) => `
      <div class="jobCard">
        <div>
          <img src="${vaga.logoSrc}" alt="${vaga.empresa}" />
        </div>
        <div class="content">
        <h3>${vaga.empresa}</h3>
        <a href='https://portal.gupy.io/job-search/term=${vaga.vaga}'> 
        <h2>${vaga.vaga}</h2>
          </a>
          <div class="infoCard">
            <h4>${vaga.local}</h4>
            <h4>${vaga.tipoDeVaga}</h4>
            <h4>R$ ${vaga.salarioMinimo} - R$ ${vaga.salarioMaximo}</h4>
            <h4>${vaga.dataPostagem} dia atrás</h4>
          </div>
          <h4>${vaga.descricao}</h4>
        </div>
      </div>
    `
    )
    .join("");

  const vagasHTML = `
    <div>
      <h1>${vagasFiltradas.length} vagas</h1>
      ${cardVagas}
    </div>
  `;

  document.querySelector(".filler").innerHTML = vagasHTML;
}

atualizarListaDeVagas(vagas);

const radioInputs = document.querySelectorAll(".radio");

radioInputs.forEach((input) => {
  input.addEventListener("change", function () {
    filtrarVagasComSelects();
  });
});
