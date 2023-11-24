
# Plano de Testes de Software

Os requisitos para realização dos testes de software são:
<ul><li>Site publicado na internet;</li>
<li>Navegador da internet: Chrome, Firefox ou Edge.</li>
</ul>

Os testes funcionais a serem realizados na aplicação são descritos a seguir.

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o redirecionamento dos cards</td>
  <td>
   <ul>
   <li>RF-002:	O card deve permitir ao usuário navegar para um site de vaga selecionada.</li>
   <li>RF-005:	O card deve permitir ao usuário navegar para um site de vaga selecionada.</li>
    <li>RF-006:	O card deve permitir ao usuário navegar para um site de vaga selecionada.</li>
      <li>RF-007:	O card deve permitir ao usuário navegar para um site de vaga selecionado </li>
   </ul>
  </td>
  <td>Verificar se os cards do projeto estão encaminhando para as respectivas páginas corretamente</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos cards da página Home.</li>
        <li>Visualizar a página Empregos</li>
    <li>Clicar nos cards da página Empregos.</li>
   </ol>
   </td>
  <td>Todos os cards da página Home e Empregos devem encaminhar os usuários para as páginas descritas.</td>
  <td>Enzo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar o funcionamento do filtro de pesquisa</td>
  <td>
   <ul>
    <li>RF-003:	O site deve oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar as vagas de acordo com suas preferencias e disciplinas das tutorias      disponíveis.</li>
   </ul>
  </td>
  <td>Verificar se o filtro de pesquisa está trazendo os dados pedidos pelo usuário</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar na página Empregos.</li>
    <li>Clicar no filtro de pesquisa do topico <strong>Tipo de Vaga</strong> e verificar se é retornado corretamente.</li>
      <li>Clicar no filtro de pesquisa do topico <strong>Salário</strong> e verificar se é retornado corretamente.</li>
        <li>Clicar no filtro de pesquisa do topico <strong>Data do anúncio</strong> e verificar se é retornado corretamente.</li>
          <li>Clicar no filtro de pesquisa do topico <strong>Experiência necessária</strong> e verificar se é retornado corretamente.</li>
   </ol>
   </td>
  <td>Os dados inseridos no filtro de pesquisa devem mostrar o card onde há o dado informado.</td>
  <td>Enzo</td>
 </tr>
</table>

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>  
 </tr>
 <tr>
  <td>CT-03: Verificar funcionamento header e footer</td>
  <td>
   <ul>
    <li>RF-001:	O site deve apresentar um header com opções de navegação.</li>
    <li>RF-004:	O site deve apresentar um footer com opções de navegação para as redes sociais.</li>
   </ul>
  </td>
  <td>Verificar se todas as informações referentes aos livros estão disponíveis na página Livros</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nas opções de navegação do navBar.</li>
    <li>Visualizar as informações referentes as paginas escolhidas.</li>
      <li>Clicar nas opções de navegação do Footer.</li>
    <li>Visualizar as informações referentes as paginas escolhidas.</li>
   </ol>
   </td>
  <td>A navegação deve ocorrer corretamente para a pagina correta</td>
  <td>Enzo</td>
 </tr>
</table>
