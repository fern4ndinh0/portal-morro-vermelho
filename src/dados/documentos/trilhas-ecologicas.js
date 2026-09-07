/* ==========================================================================
   TRILHAS ECOLÓGICAS
   Atrações · 20
   --------------------------------------------------------------------------
   Vale a mesma regra dura de "Cachoeiras e Cascatas": trilha publicada sem
   acesso verificado, sem autorização e sem descrição honesta de dificuldade
   manda gente real para um lugar real. Aqui há um agravante — trilha longa
   em serra, sem sinal de celular, com sol de meio-dia em campo rupestre.
   ========================================================================== */

export default {
  slug: 'trilhas-ecologicas',
  numero: '20',
  titulo: 'Trilhas Ecológicas',
  olho: 'Atrações · 20',
  tom: 'var(--serra-800)',
  estado: 'A levantar · publicação condicionada a acesso e segurança',
  resumo: 'Caminhos de esportes e lazer. Alguns são de mineiro do século XVIII, outros de tropeiro, outros de gado, e quase todos continuam de pé porque alguém nunca parou de usá-los.',
  resumoSeo: 'Trilhas ecológicas de Morro Vermelho, distrito de Caeté (MG): o levantamento em curso, os caminhos históricos e as regras de publicação responsável.',
  secoes: [
    {
      id: 'caminhos-antigos', titulo: 'Trilha nova quase nunca é nova',
      blocos: [
        { abertura: 'Num distrito com trezentos anos de mineração, transporte e roça, quase todo caminho de serra <strong>já era caminho antes de virar lazer</strong>. Isso muda o que uma trilha é: ela não é só percurso, é documento em uso.' },
        'Vale a pena registrar essa camada enquanto se faz o levantamento, porque ela é o que distingue uma trilha daqui de uma trilha de qualquer lugar bonito:',
        { lista: [
          '<strong>Caminhos coloniais:</strong> trechos de calçamento, muros de arrimo, cortes em rocha. Ver <a href="estrada-real.html">Estrada Real</a>.',
          '<strong>Caminhos de serviço da mineração:</strong> acesso a lavras, levadas e engenhos. Ver <a href="fazenda-do-cutao.html">Fazenda do Cutão</a>.',
          '<strong>Caminhos de tropa e de gado:</strong> os que ligavam sítios, currais e o núcleo do povoado.',
          '<strong>Caminhos devocionais:</strong> os que levam a capelas, cruzeiros e pontos de romaria.',
        ] },
        { nota: 'Um percurso sinalizado que conte o que era cada trecho vale muito mais (para o visitante, para a escola e para a proteção do próprio caminho) do que um percurso que só informa distância e desnível. E custa a mesma caminhada.', titulo: 'A oportunidade específica deste distrito' },
      ],
    },
    {
      id: 'a-regra', titulo: 'A regra desta página',
      blocos: [
        'A mesma que vale para as cachoeiras, com um item a mais. Nenhuma trilha é publicada aqui sem:',
        { lista: [
          '<strong>Acesso verificado em campo</strong>, com coordenada de início e de fim.',
          '<strong>Autorização registrada</strong> de quem é dono da terra atravessada, e trilha longa atravessa a terra de várias pessoas.',
          '<strong>Dificuldade descrita honestamente:</strong> distância real, desnível acumulado, tempo médio, exposição ao sol, trechos expostos, disponibilidade de água e de sombra.',
          '<strong>Condições de resgate:</strong> onde há sinal de celular, por onde entra veículo, qual é o ponto de apoio mais próximo. É o item que trilha em serra exige e que quase nenhum portal publica.',
        ] },
        { lacuna: 'O que falta: <strong>o inventário dos caminhos.</strong> Quais existem, para onde vão, de quem é a terra, em que estado estão e quais podem receber visitante. Enquanto não existir, esta página descreve o conjunto e não indica percurso.' },
      ],
    },
    {
      id: 'como-marcar', titulo: 'Como se abre uma trilha sem estragar o lugar',
      blocos: [
        'Duas coisas se decidem antes da primeira placa, e errar qualquer uma custa caro depois.',
        { sub: 'Onde o caminho passa' },
        'Em campo rupestre ferruginoso (vegetação que ocorre nesta serra e em quase nenhum outro lugar), o solo é raso e a recuperação é lenta. Trilha mal traçada vira erosão em uma estação de chuva, e o atalho que os visitantes abrem sozinhos vira o novo caminho. Traçado que acompanha curva de nível e aproveita percurso já consolidado resolve quase todo o problema.',
        { sub: 'Quem cuida depois' },
        'Trilha sinalizada e não mantida fica pior que trilha sem sinalização: a placa dá confiança que o caminho já não merece. Definir quem faz a manutenção (associação de moradores, prefeitura, condutores locais) é parte da decisão de abrir, e não um detalhe para depois.',
        { nota: 'Onde a trilha entrar no Parque Nacional da Serra do Gandarela ou na sua zona de amortecimento, as regras são do ICMBio e não do distrito. Confirmar antes de planejar qualquer percurso.', titulo: 'Quando a decisão não é local' },
        { figura: 'Trecho de trilha, com autorização de quem detém a terra.', arquivo: 'figura-trilhas.jpg', legenda: '<strong>Caminhantes em trilha no distrito.</strong> Nenhuma trilha é publicada aqui com traçado ou GPS antes de acesso, autorização do proprietário e segurança conferidos, e esta fotografia não é exceção à regra.', alt: 'Grupo de caminhantes num trecho de trilha de terra entre mata e capim alto.', credito: 'Acervo de pesquisa Geraldo Lopes e Viviane Pinheiro · autoria a confirmar' },
      ],
    },
  ],
  fontes: [
    'Moradores, condutores locais e proprietários rurais: quem conhece os caminhos e quem autoriza a passagem.',
    'ICMBio: regras de visitação e trilhas oficiais no Parque Nacional da Serra do Gandarela.',
    'Instituto Estrada Real: traçados reconhecidos, para identificar quais trilhas são trechos históricos.',
    'IEPHA-MG e IPHAN: caminhos coloniais inventariados ou tombados na região.',
    'Prefeitura de Caeté, Secretarias de Turismo e Meio Ambiente: projetos de sinalização e manutenção.',
    'Corpo de Bombeiros: histórico de ocorrências e pontos críticos de resgate.',
    'Levantamento de campo com GPS: traçado, desnível, tempo real e pontos de água.',
  ],
  relacionadas: [
    { nome: 'Cachoeiras e Cascatas', href: 'cachoeiras-e-cascatas.html', txt: 'Aonde boa parte das trilhas chega.', olho: '16' },
    { nome: 'Estrada Real', href: 'estrada-real.html', txt: 'O caminho mais antigo de todos.', olho: '08' },
    { nome: 'Parque do Gandarela', href: 'parque-do-gandarela.html', txt: 'A serra e as regras que valem dentro dela.', olho: '15' },
  ],
};
