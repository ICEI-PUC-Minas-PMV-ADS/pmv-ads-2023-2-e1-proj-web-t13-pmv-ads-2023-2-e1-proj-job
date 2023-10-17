const vagasRecentes = [
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/enterpriselogo4.png",
  },
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/netlogo.png",
  },
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/enterpriselogo3.png",
  },
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/enterpriselogo2.png",
  },
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/enterpriselogo1.png",
  },
  {
    titulo: "Product Designer",
    localizacao: "Belo Horizonte - MG",
    tags: ["Remoto", "Senior", "Designer"],
    logoSrc: "./images/netlogo.png",
  },
];

const vagasRecentesHtml = vagasRecentes
  .map(
    (vaga) => `
    <div class="vagas-recentes-card">
        <div class="vagas-recentes-row">
          <img src="${vaga.logoSrc}" alt="Logo" />
          <div class="vagas-recentes-text">
            <h2>${vaga.titulo}</h2>
            <p>${vaga.localizacao}</p>
          </div>
        </div>
        <div class="vagas-recentes-tags">
          ${vaga.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
`
  )
  .join("");

document.querySelector(".vagas-recentes-row").innerHTML = vagasRecentesHtml;
