const produtos = [
  /*UNIFORMES*/
  /*Uniformes Masculinos*/
  {
    nome: "Uniforme Mecânico",
    img: "images/produtos/uniforme/pro-img1.png",
    codigo: "5522",
    detalhes: "Uniforme mecânico padrão reforçado, confeccionado em tecido 100% algodão. Um bolso na altura do peito, gola italiana e faixas refletivas.",
    camposExtras: [
      { label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"] }
    ]
  },
  {
    nome: "Conjunto Brim com Faixa",
    img: "images/produtos/uniforme/pro-img2.png",
    codigo: "5524",
    detalhes: "Conjunto Brim com Faixa padrão reforçado, confeccionado em tecido 100% algodão. Um bolso na altura do peito, gola italiana e faixas refletivas.",
    camposExtras: [
      { label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"] }
    ]
  },
  {
    nome: "Conjunto Brim com Faixa",
    img: "images/produtos/uniforme/pro-img-3.png",
    codigo: "5525",
    detalhes: "Conjunto Brim com Faixa padrão reforçado, confeccionado em tecido 100% algodão. Um bolso na altura do peito, gola italiana e faixas refletivas.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  {
    nome: "Conjunto Brim Simples",
    img: "images/produtos/uniforme/pro-img-4.png",
    codigo: "5528",
    detalhes: "Conjunto Brim Simples reforçado, confeccionado em tecido 100% algodão. Um bolso na altura do peito, gola italiana e faixas refletivas.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  {
    nome: "Conjunto Brim Simples",
    img: "images/produtos/uniforme/pro-img-5.png",
    codigo: "5529",
    detalhes: "Conjunto Brim Simples padrão reforçado, confeccionado em tecido 100% algodão.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  {
    nome: "Jaleco Branco",
    img: "images/produtos/uniforme/pro-img-6.png",
    codigo: "5526",
    detalhes: "Jaleco Branco confeccionado em tecido 100% algodão. Com bolso na altura do peito.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  /* UNIFORME COZINHEIRO
  {
    nome: "",
    img: "images/produtos/uniforme/pro-img-7.png",
    codigo: "",
    detalhes: "",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: []}
    ]
  },
  */
 /*Uniformes Femininos*/
  {
    nome: "Avental Limpeza",
    img: "images/produtos/uniforme/uni-f_01.png",
    codigo: "6020",
    detalhes: "Uniforme Limpeza padrão",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","G","GG","EXG"]}
    ]
  },
  {
    nome: "Avental Limpeza",
    img: "images/produtos/uniforme/uni-f_02.png",
    codigo: "6021",
    detalhes: "Uniforme Limpeza padrão",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","G","GG","EXG"]}
    ]
  },
  {
    nome: "Avental Gola de Padre",
    img: "images/produtos/uniforme/uni-f_03.png",
    codigo: "6022",
    detalhes: "Avental Gola de Padre",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  /*Camisas*/
  {
    nome: "Polo Amarela",
    img: "images/produtos/uniforme/camisa-01.png",
    codigo: "8022",
    detalhes: "A camisa polo confeccionada pela Total Proteção é produzida em tecido piquet 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade. Você pode personalizar a camisa polo para sua empresa com diferentes tecidos, modelos, cores e logotipos. Consulte nossos REPRESENTANTE",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]},
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Padrão", "Personalizada"]}
    ]
  },
  {
    nome: "Polo Laranja",
    img: "images/produtos/uniforme/camisa-03.png",
    codigo: "8023",
    detalhes: "A camisa polo confeccionada pela Total Proteção é produzida em tecido piquet 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade. Você pode personalizar a camisa polo para sua empresa com diferentes tecidos, modelos, cores e logotipos. Consulte nossos REPRESENTANTE",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]},
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Padrão", "Personalizada"]}
    ]
  },
  {
    nome: "Polo Preta com Detalhe",
    img: "images/produtos/uniforme/camisa-04.png",
    codigo: "8021",
    detalhes: "A camisa polo confeccionada pela Total Proteção é produzida em tecido piquet 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade. Você pode personalizar a camisa polo para sua empresa com diferentes tecidos, modelos, cores e logotipos. Consulte nossos REPRESENTANTE",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]},
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Padrão", "Personalizada"]}
    ]
  },
  {
    nome: "Polo Preta Simples",
    img: "images/produtos/uniforme/camisa-05.png",
    codigo: "8024",
    detalhes: "A camisa polo confeccionada pela Total Proteção é produzida em tecido piquet 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade. Você pode personalizar a camisa polo para sua empresa com diferentes tecidos, modelos, cores e logotipos. Consulte nossos REPRESENTANTE",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]},
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Padrão", "Personalizada"]}
    ]
  },
  {
    nome: "Camisa Branca",
    img: "images/produtos/uniforme/camisa-08.png",
    codigo: "8025",
    detalhes: "Camisa confeccionada pela Total Proteção é produzida em 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  {
    nome: "Camisa Azul",
    img: "images/produtos/uniforme/camisa-09.png",
    codigo: "8026",
    detalhes: "Camisa na cor azul confeccionada pela Total Proteção é produzida em 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "G", "GG", "EXG"]}
    ]
  },
  {
    nome: "Camisa Manga Longa",
    img: "images/produtos/uniforme/camisa-07.png",
    codigo: "8027",
    detalhes: "Camisa manga longa confeccionada pela Total Proteção é produzida em 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","G","GG","EXG"]}
    ]
  },
  {
    nome: "Camiseta Manga Longa",
    img: "images/produtos/uniforme/camisa-06.png",
    codigo: "8028",
    detalhes: "Camiseta manga longa confeccionada pela Total Proteção é produzida em 100% algodão. Este produto é  direcionado à aquelas pessoas que querem obter um ar de formalidade no vestuário, sem perder a maleabilidade.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","G","GG","EXG"]}
    ]
  },
  /*Calças*/
  {
    nome: "Calça Brim Cargo Branca",
    img: "images/produtos/uniforme/Calc_01.png",
    codigo: "4020",
    detalhes: "Calça Brim Cargo",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["38","40","42","44","46","48","50","52","54","56"]}
    ]
  },
  {
    nome: "Calça Brim Azul com Faixa",
    img: "images/produtos/uniforme/Calc_02.png",
    codigo: "4021",
    detalhes: "Calça Brim com Faixa",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["38","40","42","44","46","48","50","52","54","56"]}
    ]
  },
  {
    nome: "Calça Elanca",
    img: "images/produtos/uniforme/Calc_03.png",
    codigo: "4022",
    detalhes: "Calça Elanca",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["38","40","42","44","46","48","50","52","54","56"]}
    ]
  },
  {
    nome: "Calça Social",
    img: "images/produtos/uniforme/Calc_04.png",
    codigo: "4024",
    detalhes: "Calça Social",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["38","40","42","44","46","48","50","52","54","56"]}
    ]
  },
  /*EQUIPAMENTOS DE SEGURANÇA*/
  /* Aventais */
  {
    nome: "Avental Térmico Impermeabilizado",
    img: "images/produtos/seguranca/aventais/avental_01.png",
    codigo: "tp0022",
    detalhes: "Avental de segurança confeccionado em tecido de algodão com tratamento impermeabilizante em silicone, ajustável através de tiras nas costas, sem forro. Tamanho: 0,60 cm larg. x 0,90 cm comp. Produto Sob Encomenda",
  },
  {
    nome: "Avental de Raspa",
    img: "images/produtos/seguranca/aventais/avental_02.png",
    codigo: "tp0023",
    detalhes: "Vestimenta de segurança tipo avental, confeccionado em raspa, tiras de raspa no pescoço e na cintura presas por meio de fivelas para ajuste. Proteção do usuário contra agentes abrasivos, escoriantes e respingos de solda.",
    camposExtras: [
      {label: "Medida", id: "medida", tipo: "select", opcoes: ["1.00m x 0.60m", "1.20m x 0.60m"]}
    ]
  },
  {
    nome: "Avental de Raspa Barbeiro",
    img: "images/produtos/seguranca/aventais/avental_03.png",
    codigo: "tp0024",
    detalhes: "Vestimenta de segurança tipo avental barbeiro confeccionado em raspa, mangas em raspa, elástico nas costas e fivela para ajuste na cintura. Tamanho: 1.20m x 0.60m Proteção do usuário contra agentes abrasivos, escoriantes e respingos de solda.",
  },
  {
    nome: "Avental Malha de Aço",
    img: "images/produtos/seguranca/aventais/avental_07.png",
    codigo: "tp0025",
    detalhes: "Avental em aço inoxidável, com suspensórios em nylon e presilhas plásticas. Possui ótima durabilidade, oferecendo excelente relação entre custo e benefício. Resistente a cortes de faca, proporcionando ao usuário 100% de segurança.Tamanho: 55cm x 60cm. Para as atividades onde a ação da faca direciona-se para o corpo do usuário.",
  },
  {
    nome: "Avental de Trevira",
    img: "images/produtos/seguranca/aventais/avental_04.png",
    codigo: "tp0026",
    detalhes: "Avental de segurança confeccionado em tela sintética (tecido PVC trevira), revestido de PVC em ambas as faces, com três tiras do mesmo material, soldadas eletronicamente e utilizadas para ajuste. Seu tamanho é 1.20m x 0.65m Proteção do usuário e de suas vestimentas contra umidade proveniente de operações com uso de água, óleo ou produtos químicos.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Laranja e Preto", "Branco"]}
    ]
  },
  {
    nome: "Avental de Vinil",
    img: "images/produtos/seguranca/aventais/avental_05.png",
    codigo: "tp0027",
    detalhes: "Avental impermeável confeccionado em laminado transparente, ilhóis e cordão do mesmo material, por este motivo não detém fungos nem bactérias, não resseca, não trinca e não fragmenta prematuramente. Excelente vida útil. Tamanho: 1.20m x 0.60m Proteção do usuário e de suas vestimentas contra umidade proveniente de operações com uso de água.",
  },
  {
    nome: "Avental Impermeável de PVC",
    img: "images/produtos/seguranca/aventais/avental_06.png",
    codigo: "tp0028",
    detalhes: "Avental impermeável de PVC com forro em tecido de poliéster, com alça no pescoço e tiras para regulagem soldadas eletronicamente e utilizadas para ajuste nas costas. Tamanho: 1.20m x 0.60m Proteção do usuário e de suas vestimentas contra umidade proveniente de operações com uso de água ou produto químico leve.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Amarelo","Azul","Branco","Cinza","Marrom","Preto","Verde","Vermelho"]}
    ]
  },
  /*Calçados de Segurança*/
  {
    nome: "Bota Proteção Couro",
    img: "images/produtos/seguranca/calçados/cal-02.png",
    codigo: "tp0029",
    detalhes: "Botina proteção em couro, em vaqueta nobuck, marrom, solado em PU bidensidade injetado direto no cabedal, fechamento em cadarço.",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Sapato Vichi Nobuck",
    img: "images/produtos/seguranca/calçados/cal-20.png",
    codigo: "tp0030",
    detalhes: "Sapato de couro Vichi, em vaqueta nobuck, marrom, solado em PU bidensidade injetado direto no cabedal, fechamento em cadarço, sem bico de aço. Fabricante: Vichi",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Botina Vichi Nobuck",
    img: "images/produtos/seguranca/calçados/cal-18.png",
    codigo: "tp0031",
    detalhes: "Botina de couro Vichi, em vaqueta nobuck, marrom, solado em PU bidensidade injetado direto no cabedal, fechamento em cadarço, sem bico de aço. Fabricante: Vichi",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Botina Marluvas Vulcaflex Elástico com Bico de Aço",
    img: "images/produtos/seguranca/calçados/cal-03.png",
    codigo: "tp0032",
    detalhes: "Botina de segurança com elástico coberto, cabedal confeccionado em couro curtido ao cromo, solado PU Bidensidade preto injetado diretamente ao cabedal. Fabricante: Marluvas",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Sapato Vichi Work Elástico",
    img: "images/produtos/seguranca/calçados/cal-04.png",
    codigo: "tp0033",
    detalhes: "Botina de segurança com elástico coberto, cabedal confeccionado em couro curtido ao cromo, solado PU Bidensidade preto injetado diretamente ao cabedal. Fabricante: Marluvas",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Bico de Aço","Bico de PVC"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Botina Vichi Eletricista",
    img: "images/produtos/seguranca/calçados/cal-16.png",
    codigo: "tp0035",
    detalhes: "Botina de amarrar em couro, sem componentes metálicos, solado em PU bidensidade, para uso eletricista. Fabricante: Vichi",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Bota de PVC Calfor Modelo Flex Stivaletto",
    img: "images/produtos/seguranca/calçados/cal-22.png",
    codigo: "tp0036",
    detalhes: "Calçado ocupacional tipo bota, confeccionado em PVC injetado e impermeável, solado antiderrapante, forração interna em meia de poliéster, superfície espelhada, com cano curto de 13,5cm*. A medida do cano é feita com base na bota de número 42. Fabricante: Italbotas",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]},
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Branco","Preto"]}
    ]
  },
  {
    nome: "Botina Vichi Branca",
    img: "images/produtos/seguranca/calçados/cal-22.png",
    codigo: "tp0037",
    detalhes: "Botina de couro Vichi Work branca, solado em PU bidensidade injetado direto no cabedal, elástico, com ou sem bico de aço. Fabricante: Vichi",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Sapato Vichi Branco",
    img: "images/produtos/seguranca/calçados/cal-19.png",
    codigo: "tp0038",
    detalhes: "Sapato de couro Vichi Work, branco, solado em PU bidensidade injetado direto no cabedal, elástico, com ou sem bico de aço. Fabricante: Vichi",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Bota Branca para Câmara Fria",
    img: "images/produtos/seguranca/calçados/cal-07.png",
    codigo: "tp0039",
    detalhes: "Botina de couro branca, solado em látex, elástico, com ou sem bico de aço.",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Bico de Aço", "Sem Biqueira"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Bota de PVC (até a virilha)",
    img: "images/produtos/seguranca/calçados/cal-09.png",
    codigo: "tp0040",
    detalhes: "A Bota de PVC até a virilha é  confeccionada em PVC R10,  revestida com tela sintética e com botas soldadas eletronicamente. Cor: Preta",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  {
    nome: "Bota de PVC Calfor Modelo Supermax - Preta",
    img: "images/produtos/seguranca/calçados/cal-24.png",
    codigo: "tp0041",
    detalhes: "Calçado ocupacional tipo bota, confeccionado em PVC injetado com adição de plastificantes e nitrílicos, impermeável, solado antiderrapante, sem forro, com superfície fosca. Este produto é mais flexível e leve em relação às tradicionais “botas de borracha”. Cano curto com 29,5cm*, Cano Extra Longo com 39cm. A medida do cano é feita com base na bota de número 42. Fabricante: Italbotas",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Cano Curto","Cano Extra Longo"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["33","34","35","36","37","38","39","40","41","42","43","44","45","46"]}
    ]
  },
  /*Capacetes*/
  {
    nome: "Capacete MSA",
    img: "images/produtos/seguranca/capacetes/Capacete_12.png",
    codigo: "tp0042",
    detalhes: "Os capacetes classe A e B são para uso geral inclusive para trabalhos com energia elétrica. O Capacete M.S.A V-Gard é formado por dois componentes básicos : Casco: rígido, leve, balanceado para um dia inteiro de uso confortável, injetado numa única peça em polietileno de alta densidade, sem porosidade, não sendo condutor de corrente elétrica e com alta resistência dielétrica. Possui fendas laterais (Slot) para que sejam acoplados protetores faciais e auditivos. Aplicação:Proteção do usuário contra impactos de quedas de objetos sobre o crânio e contra choques elétricos. Fabricante: MSA",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Branco","Amarelo","Amarelo Manga","Azul","Azul Marinho","Azul Pastel","Bege","Cinza","Cinza Alumínio","Laranja","Marrom","Verde","Vermehlo"]}
    ]
  },
  {
    nome: "Capacete Duráveis - Classe A e B",
    img: "images/produtos/seguranca/capacetes/Capacete_11.png",
    codigo: "tp0043",
    detalhes: "Os capacetes classe A e B são para uso geral inclusive para trabalhos com energia  elétrica.Capacete de segurança, classe B, tipo aba frontal, com casco de polietileno, com fendas laterais para acoplamento de acessórios, possuindo amortecimento através de suspensão composta por duas tiras de tecidos cruzadas com catraca ou duas tiras plásticas cruzadas com ajuste simples, e presas a quatro suportes plásticos em forma de “W”, cujas extremidades superiores externas se encaixam em oito pontos no casco, com regulagem da suspensão feita por meio de cinta com ajuste simples ou com catraca. Sistema frontal da carneira (cinta) dotado de tira sintética absorvedora de suor e jugular. Aplicação:Proteção do usuário contra impactos de quedas de objetos sobre o crânio e contra choques elétricos. Fabricante: Duráveis",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Branco","Amarelo","Amarelo Manga","Azul","Azul Marinho","Azul Pastel","Bege","Cinza","Cinza Alumínio","Laranja","Marrom","Verde","Vermehlo"]}
    ]
  },
  {
    nome: "Capacete Ultra Master - Classe A",
    img: "images/produtos/seguranca/capacetes/Capacete_09.png",
    codigo: "tp0044",
    detalhes: "Os capacetes classe A são para uso geral, exceto em trabalhos com energia elétrica. Capacete de segurança tipo aba frontal, casco com três nervuras injetado em polietileno de baixa e alta densidade, com fendas laterais para acoplagem de acessórios, com suspensão fixa ao casco através de oito pontos de encaixe, suspensão injetada em plástico, com ou sem jugular ajustável, confeccionada em tira de tecido sintético e fixada na carneira e/ou separada. Aplicação: Proteção do usuário contra impactos de quedas de objetos sobre o crânio. Fabricante: Ultra Master Plug",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Branco","Amarelo","Azul Bic","Azul Pastel","Bege","Cinza","Laranja","Marrom","Verde","Vermehlo"]}
    ]
  },
  {
    nome: "Capacete Ultra Master - Classe A",
    img: "images/produtos/seguranca/capacetes/Capacete_08.png",
    codigo: "tp0045",
    detalhes: "Os capacetes classe A e B são para uso geral inclusive para trabalhos com energia  elétrica. Capacete de Segurança, tipo Aba Frontal, com nervura no casco e com fendas laterais para acoplagem de acessórios – protetor auditivo e protetor facial, com suspensão e carneira plástica, regulagem de tamanho com ajuste simples e tira absorvedora de suor em espuma coberta de material sintético, com ou sem jugular ajustável, confeccionada em tira de tecido sintético e fixada na carneira e/ou separada com fechamento com velcro. Aplicação: Proteção do usuário contra impactos de quedas de objetos sobre o crânio e contra choques elétricos. Fabricante: Ultra Master Plug",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Branco","Amarelo","Azul Bic","Azul Pastel","Bege","Cinza","Laranja","Marrom","Verde","Vermehlo"]}
    ]
  },
  {
    nome: "Carneira para Capacete Ultra Master Plug - Classe A",
    img: "images/produtos/seguranca/capacetes/Capacete_06.png",
    codigo: "tp0046",
    detalhes: "Carneira Ultra Master para capacete classe A. Fabricante: Ultra Master Plug",
  },
  {
    nome: "Carneira Duráveis",
    img: "images/produtos/seguranca/capacetes/Capacete_01.png",
    codigo: "tp0047",
    detalhes: "As carneiras Duráveis são fabricadas em tiras cruzadas de tecido poliéster ou em polietileno de alta e baixa densidade com sistema de amortecimento com duplo estágio. Aparador de suor substituível em espuma dublada com poliéster . Fabricante: Duráveis",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["Com Jugular", "Sem Jugular"]}
    ]
  },
  {
    nome: "Carneira Ultra Master I",
    img: "images/produtos/seguranca/capacetes/Capacete_05.png",
    codigo: "tp0048",
    detalhes: "Carneira Ultra Master I para capacete classe B, possui coroa injetada em plástico de alta tecnologia, é macia, fixada em quatro pontos da carneira e o seu centro é revestido com espuma macia, garantindo maior conforto. Fabricante: Ultra Master Plug",
  },
  {
    nome: "Carneira Master M.S.A",
    img: "images/produtos/seguranca/capacetes/Capacete_03.png",
    codigo: "tp0049",
    detalhes: "As carneiras da M.S.A possuem um sistema “inteligente de amortecimento”, que atua no momento do impacto, fazendo com que a carneira trabalhe em conjunto com a cinta dupla amortecedora. Esta cinta em forma de cruz recebe o impacto e desliza entre as fendas dos clips de fixação, da carneira ao capacete. A carneira e a cinta dupla amortecem o impacto apoiando-se no casco e não na cabeça, formando um eficiente sistema de proteção. Fabricante: MSA",
  },
    /*Repetição de Códigos*/
  {
    nome: "Jugular Ultra Master Plug",
    img: "images/produtos/seguranca/capacetes/Capacete_02.png",
    codigo: "tp0049.1",
    detalhes: "Jugular em tecido com velcro. Fabricante: Ultra Master Plug",
  },
  /*Cordas*/
  {
    nome: "Corda de Poliamida (nylon) 12mm",
    img: "images/produtos/seguranca/cordas/corda-02.png",
    codigo: "tp0050",
    detalhes: "A Corda de nylon trançada que a Total proteção comercializa é produzida em poliamida12 mm, suportam 2, 100 toneladas, sendo ideal para trabalhos em altura e uso de cadeira suspensa. Produto vendido por quilo. Cada quilo corresponde a mais ou menos 10 metros.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Preta","Vermelha","Azul","Branca"]}
    ]
  },
  /*Coletes*/
  {
    nome: "Colete X",
    img: "images/produtos/seguranca/coletes/sinal_01.png",
    codigo: "tp0051",
    detalhes: "Este Colete para sinalização modelo em x que a Total Proteção comercializa, possui refletivo e ajuste em velcro sendo uma excelente opção em sinalização.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Amarelo","Laranja","Verde"]}
    ]
  },
  {
    nome: "Colete tipo Jaleco",
    img: "images/produtos/seguranca/coletes/sinal_02.png",
    codigo: "tp0052",
    detalhes: "Colete de proteção de alta visibilidade, confeccionado em tecido 100% poliéster, combinado retrorrefletivo em conjunto com material fluorescente, repelente a água.",
  },
  {
    nome: "Colete tipo Jaleco",
    img: "images/produtos/seguranca/coletes/sinal_03.png",
    codigo: "tp0053",
    detalhes: "Colete de proteção de alta visibilidade, confeccionado em tecido 100% poliéster, combinado retrorrefletivo em conjunto com material fluorescente, repelente a água, fechamento frontal em zíper, com faixas refletivas em X nas costas e duplo H na parte frontal. Fabricante:Vicsa",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Verde", "Laranja"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["M","G","GG"]}
    ]
  },
  /*Cones*/
  {
    nome: "Cone de PVC Rígido",
    img: "images/produtos/seguranca/cones/cone_01.png",
    codigo: "tp0054",
    detalhes: "Conheça mais esta opção que a Total Proteção coloca à sua disposição, este Cone de PVC rígido é a opção ideal para sinalização viária.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Preto/Amarelo", "Branco/Laranja"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["50cm", "75cm"]}
    ]
  },
  {
    nome: "Cone de PVC Flexível Norma ABNT 15071",
    img: "images/produtos/seguranca/cones/cone_02.png",
    codigo: "tp0055",
    detalhes: "Cone de PVC flexível para sinalização viária, esta opção que a Tuiuti comercializa é produzido conforme norma ABNT 15071 garantindo maior qualidade. Fabricante: Merk Bak",
  },
  /*Luvas*/
  {
    nome: "Luva Tricotada 3 fios pigmentada",
    img: "images/produtos/seguranca/luvas/Luvas_01.png",
    codigo: "tp0056",
    detalhes: "Luva tricotada em 3 fios 100% algodão, acabamento em overloque, palma com pigmentos. Ultilização:Agricultura; Carga e descarga de materiais; Manutenção industrial; Montadoras e autopeças; Construção civil; Indústria metal-mecânica.",
  },
  {
    nome: "Luva de Cobertura",
    img: "images/produtos/seguranca/luvas/Luvas_05.png",
    codigo: "tp0057",
    detalhes: "Luva confeccionada em vaqueta com punho em raspa natural, com protetor arterial em raspa e tira de ajuste em vaqueta e fivela plástica para ajuste. Utilizada para proteger as luvas isolantes de perfurações ou material agressivo que possa comprometer a isolação.",
  },
  {
    nome: "Luva de PVC para Jacista com Punho de PVC",
    img: "images/produtos/seguranca/luvas/Luvas_07.png",
    codigo: "tp0058",
    detalhes: "Luva de segurança de PVC, fabricada com suporte têxtil com fios 100% algodão, garante maior absorção do suor. O revestimento de PVC de alta qualidade garante impermeabilidade química e resistência mecânica. O acabamento áspero na palma garante maior aderência no manuseio de materiais. O design ergonômico proporciona mais conforto ao usuário. Possui punho total de PVC medindo 76 cm.",
  },
  {
    nome: "Luva de Malha de Aço",
    img: "images/produtos/seguranca/luvas/Luvas_09.png",
    codigo: "tp0059",
    detalhes: "Esta luva possui alta resistência à cortes de faca, proporcionando ao usuário total segurança. Confeccionada em aço inoxidável, é extremamente durável, oferecendo uma excelente relação custo-benefício. É muito maleável, permitindo ao usuário exercer sua função normalmente. Com fechamento em garras que permite total higienização sem deixar resíduos. Utilização:Atividades que envolvam corte com faca ou estilete.",
    camposExtras: [
      {label: "Medida", id: "medida", tipo: "select", opcoes: ["Punho 7.5cm", "Punho 15cm", "Punho 21cm"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P", "M","G","GG"]}
    ]
  },
  {
    nome: "Luva de Helanca",
    img: "images/produtos/seguranca/luvas/Luvas_14.png",
    codigo: "tp0060",
    detalhes: "O excepcional tato desta luva permite o manuseio de peças pequenas com óleos ou graxas, livre de pelos, possui resistência mecânica excelente e evita a transpiração das mãos. Utilização:Indústria automobilística; Indústria de precisão; Indústria eletrônica; Indústria farmacêutica; Indústria peças; Indústria agropecuária; Indústria de brinquedos; Indústria gráfica, entre outros. Tamanho Único",
  },
  {
    nome: "Luva de Látex Sanro Plus",
    img: "images/produtos/seguranca/luvas/Luvas_18.png",
    codigo: "tp0061",
    detalhes: "Luva leve fabricada com látex de borracha natural de alta qualidade, mais durável e resistente. Internamente forrada com flocos de algodão, antiderrapante e dispensa o uso do talco.  Ela é ideal para tarefas de longa duração. Espessura: 0,45mm / Comprimento: 31cm. Cor: Laranja. Utilização: Manuseio de alimentos; Indústrias em geral; Produtos agrícolas; Higienização; Serviços gerais. Fabricante: Sanro",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","M","G"]}
    ]
  },
  {
    nome: "Luva de Látex Sanro Top",
    img: "images/produtos/seguranca/luvas/Luvas_19.png",
    codigo: "tp0062",
    detalhes: "Elaborada com látex de borracha natural, mais durável e resistente. Internamente forrada com flocos de algodão, proporciona maior conforto e maleabilidade. Ela é antiderrapante, clorada e dispensa o uso do talco. Espessura: 0,60mm / Comprimento: 31cm. Utilização:Manuseio de alimentos; Indústrias em geral; Produtos agrícolas; Higienização; Serviços gerais. Fabricante: Sanro",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Amarelo","Verde"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P","M","G"]}
    ]
  },
  {
    nome: "Luva Isolante",
    img: "images/produtos/seguranca/luvas/Luvas_33.png",
    codigo: "tp0063",
    detalhes: "Com a finalidade exclusiva de oferecer proteção pessoal contra choques elétricos, as luvas isolantes de borracha atendem  normas específicas ASTM DI120/ NBR 1066, e apresentam resistência de até 40.000 V ( tensão de uso 36.000 volts). Disponível na cor preta e nas classes 00, 0, 1, 2, 3 e 4. Utilização:Trabalhos que envolvam energia elétrica. Fabricante: Orion",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Classe 0 (5kV - 1.000V)","Classe 1 (10kV - 7.500V)","Classe 2 (20kV - 17.000V)","Classe 3 (30kV - 26.500V)","Classe 4 (40kV - 36.000V)"]}
    ]
  },
  {
    nome: "Luva Nitrilon Amarela 681",
    img: "images/produtos/seguranca/luvas/Luvas_25.png",
    codigo: "tp0064",
    detalhes: "As luvas Nitrilon AM/PT 681 foram desenvolvidas com tecnologia totalmente nacional e se adéquam a diversas necessidades possibilitando excelente conforto e proteção. Produzidas em látex nitrílico, possuem formato anatômico e suporte têxtil antialérgico em malha 100% algodão. As luvas modelo Nitrilon AM possuem revestimento com propriedades mais maleáveis para garantir melhor tato e aderência. Tamanho: G. Utilização:Indústria metal-mecânica; Montadoras e autopeças; Indústria Química; Manutenção industrial; Manuseio de peças úmidas ou oleosas; Manuseio de agentes abrasivos. Fabricante: Promat",
  },
  {
    nome: "Luva Nitrilon Amarela 688",
    img: "images/produtos/seguranca/luvas/Luvas_26.png",
    codigo: "tp0065",
    detalhes: "Suporte têxtil em algodão oferece conforto ao usuário, resistência ao rasgamento e flexibilidade. O revestimento em composto nitrílico de alta qualidade garante maior resistência química no manuseio de solventes, óleos e graxas. Possui dorso ventilado e Punho em malha. Tamanho: G. Utilização: Indústria metal-mecânica; Montadoras e autopeças; Indústria Química; Manutenção industrial; Manuseio de peças úmidas ou oleosas; Manuseio de agentes abrasivos.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Amarelo","Preta"]}
    ]
  },
  {
    nome: "Luva Nitrilon Verde 611",
    img: "images/produtos/seguranca/luvas/Luvas_29.png",
    codigo: "tp0066",
    detalhes: "Luvas fabricadas com suporte têxtil em algodão, proporciona maior conforto ao usuário e resistência a rasgamentos. O revestimento em látex natural corrugado de alta qualidade garante maior durabilidade, mais resistência mecânica e ótima aderência no manuseio de materiais secos ou úmidos. Possui dorso ventilado, forma anatômica e punho em malha de algodão. Tamanho: G. Utilização:Coleta de resíduos urbana, industrial e coleta seletiva; Inspeção e manuseio de materiais secos ou úmidos; Manuseio de ferramentas manuais e utensílios; Carga e descarga de materiais; Manutenção, limpeza e serviços em geral; Atividades abrasivas com pedras, blocos, cimento e concreto; Indústria de vidro; Colheita de frutos e similares.",
  },
  {
    nome: "Luva Nitrilon Azul 656",
    img: "images/produtos/seguranca/luvas/Luvas_27.png",
    codigo: "tp0067",
    detalhes: "As luvas Nitrilon ZL 656 foram desenvolvidas com tecnologia totalmente nacional e se adequam a diversas necessidades, possibilitando excelente conforto e proteção. Produzidas em látex sintético nitrílico, possuem formato anatômico, suporte têxtil antialérgico em malha 100% algodão e punho em lona de algodão. São fabricadas com revestimento mais espesso e maleável para garantir além da resistência química e mecânica a maleabilidade. Tamanho: G. Utilização: Indústria petroquímica; Indústria metal-mecânica; Manutenção industrial; Manuseio de peças úmidas ou oleosas; Manuseio de agentes abrasivos; Construção civil. Fabricante:Promat",
  },
  /*Máscaras*/
  {
    nome: "Filtro 5N11 - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-01.png",
    codigo: "tp0068",
    detalhes: "Filtro mecânico para respirador série 6000. Utilizado para proteção contra poeiras, névoas e fumos (P2/P95). Necessário uso com retentor 501. Aplicações Sugeridas: Desbaste, Perfuração, Escarificação, Operações de Fornos de Fundição, Moagem, Operações de Equipamento Pesado, Usinagem, Moldagem, Prensagem, Rebitagem, Lixamento, Serragem, Solda. Fabricante:3M",
  },
  {
    nome: "Respirador Semifacial Série 6000 - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-02.png",
    codigo: "tp0069",
    detalhes: "Respirador reutilizável 3M série 6000 é o mais vendido no mundo e seu nível de satisfação ultrapassa todas as expectativas. Possui tirantes deslizantes que permitem maior ajuste e proteção ao usuário. Recursos: Ótima relação custo/benefício. Diversidade de cartuchos e filtros – Proteção para grande número de contaminantes. Tirantes deslizantes, que permitem ao usuário colocar e retirar o respirador do rosto sem remover o capacete ou protetor facial. Fabricante:3M",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["P(6001)","M(6002)","G(6003)"]}
    ]
  },
  {
    nome: "Filtro Químico 6001 - Vapores Orgânicos - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-03.png",
    codigo: "tp0070",
    detalhes: "Cartucho Químico indicado para Vapores Orgânicos. Fabricante:3M",
  },
  {
    nome: "Respirador Semifacial Air San - Air Safety",
    img: "images/produtos/seguranca/mascaras/Mascara-13.png",
    codigo: "tp0071",
    detalhes: "A máscara semifacial AIR SAN é um respirador purificador de ar tipo peça semifacial, composta de duas partes: a parte inferior confeccionada em polipropileno e a parte superior em elastômero termoplástico. A parte inferior é dotada de duas aberturas: uma na parte frontal inferior onde se localiza a válvula de exalação e uma na parte frontal central dotada de uma rosca interna com anel de vedação para fixação de filtros, tendo na sua parte interna uma válvula de inalação.",
  },
  {
    nome: "Filtro Químico - Amônia - Destra",
    img: "images/produtos/seguranca/mascaras/Mascara-14.png",
    codigo: "tp0072",
    detalhes: "Filtro químico indicado para amônia e metilamina. Fabricante: Destra",
  },
  {
    nome: "Respirador Semifacial para 1 Filtro - Destra",
    img: "images/produtos/seguranca/mascaras/Mascara-15.png",
    codigo: "tp0073",
    detalhes: "Respirador purificador de ar tipo peça semi-facial, com corpo confeccionado em elastômero na cor azul, dotado de quatro hastes, onde são fixadas quatro fivelas plásticas, através das quais passam as pontas de dois tirantes elásticos ajustáveis na cor preta. Fabricante: Destra",
  },
  {
    nome: "Máscara Facial Inteira - Full Face - Air Safety",
    img: "images/produtos/seguranca/mascaras/Mascara-17.png",
    codigo: "tp0074",
    detalhes: "A máscara facial Full Face RB é um respirador de ar de segurança, tipo peça facial inteira, confeccionada em silicone, nas cores azul ou amarelo, ou em neoprene, na cor preta. Possui um visor panorâmico, de material plástico rígido transparente, fixo na máscara por um aro de metal ou plástico. A parte frontal inferior do corpo da máscara possui uma abertura para fixação de um bocal dotado de um suporte para válvula de exalação, diafragma de voz (exceto no modelo STD Standard), uma válvula de inalação que é presa na parte traseira do suporte onde é rosqueado o filtro, e uma mascarilha interna. O filtro é vendido separadamente.",
  },
  {
    nome: "Respirador PFF1 com Válvula",
    img: "images/produtos/seguranca/mascaras/Mascara-19.png",
    codigo: "tp0075",
    detalhes: "A máscara facial Full Face RB é um respirador de ar de segurança, tipo peça facial inteira, confeccionada em silicone, nas cores azul ou amarelo, ou em neoprene, na cor preta. Possui um visor panorâmico, de material plástico rígido transparente, fixo na máscara por um aro de metal ou plástico. A parte frontal inferior do corpo da máscara possui uma abertura para fixação de um bocal dotado de um suporte para válvula de exalação, diafragma de voz (exceto no modelo STD Standard), uma válvula de inalação que é presa na parte traseira do suporte onde é rosqueado o filtro, e uma mascarilha interna. O filtro é vendido separadamente.",
  },
  {
    nome: "Respirador PFF1 9901 - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-12.png",
    codigo: "tp0076",
    detalhes: "O respirador descartável 3M 9901 é uma eficaz indicação contra poeiras e névoas. Seu formato dobrável é prático de usar e armazenar. Fabricante:3M.",
  },
  {
    nome: "Filtros 6002 - Gases Ácidos - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-04.png",
    codigo: "tp0077",
    detalhes: "Cartucho Químico indicado para Gases Ácidos. Fabricante:3M.",
  },
  {
    nome: "Filtro Químico 6003 - Vapores Org. e Gases Ácidos - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-05.png",
    codigo: "tp0078",
    detalhes: "Cartucho Químico indicado para Vapores Orgânicos/Gases Ácidos. Fabricante:3M.",
  },
  {
    nome: "Filtro Multigases 6006 - 3M",
    img: "images/produtos/seguranca/mascaras/Mascara-07.png",
    codigo: "tp0079",
    detalhes: "Multigases¹: Vapores Orgânicos, Cloro, Ácido Clorídrico, Dióxido de Cloro, Dióxido de Enxofre, Sulfeto de Hidrogênio (apenas para fuga), Amônia/Metilamina, Formaldeído e Fluoreto de Hidrogênio. Fabricante:3M.",
  },
  /*Óculos*/
  {
    nome: "Óculos Ampla Visão K2",
    img: "images/produtos/seguranca/oculos/oculos_04.png",
    codigo: "tp0080",
    detalhes: "Óculos de segurança ampla visão, com lente de proteção em policarbonato, com tratamento anti-risco, antiembaçante e UV, ventilação direta, armação em silicone, elástico de memoria ajustável. Acompanha bolsa em nylon para armazenagem. Fabricante: Vicsa",
  },
  {
    nome: "Óculos Sparrow - MSA",
    img: "images/produtos/seguranca/oculos/oculos_05.png",
    codigo: "tp0081",
    detalhes: " Design moderno, com proteção frontal e parcialmente lateral; Formato leve que envolve a face e permite boa aderência; Lente formada por uma única peça; Protetor nasal universal; Excelente relação custo x benefício; Filtra 99,9% de radiação UV. Fabricante: MSA",
  },
  {
    nome: "Óculos Ampla Visão Perfurado",
    img: "images/produtos/seguranca/oculos/oculos_01.png",
    codigo: "tp0082",
    detalhes: "Óculos ampla visão, confeccionado em armação única de PVC incolor flexível, com orifícios na parte lateral e na parte superior.Possui elástico ajustável. óFabricante: Carbografite",
  },
  {
    nome: "Óculos Ampla Visão Perfurado com Válvulas",
    img: "images/produtos/seguranca/oculos/oculos_02.png",
    codigo: "tp0083",
    detalhes: "Óculos ampla visão, feita em armação única em PVC com válvulas para ventilação indireta. Possui elástico ajustável. Fabricante: Carbografite",
  },
  {
    nome: "Óculos de Proteção SS-1",
    img: "images/produtos/seguranca/oculos/oculos_06.png",
    codigo: "tp0084",
    detalhes: "Óculos de proteção em policarbonato resistente a impactos e choques físicos de materiais sólidos e líquidos como: fragmentos de madeira, ferro, respingos de produtos ácidos, cáusticos, entre outros. Possui armação preta e haste regulável e proteção antirrisco",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Incolor","Fumê"]}
    ]
  },
  {
    nome: "Óculos de Sobrepor",
    img: "images/produtos/seguranca/oculos/oculos_07.png",
    codigo: "tp0085",
    detalhes: "Os Óculos de proteção fumê sobrepor coloca à sua disposição, possui haste dobrável e lente em policarbonato garantindo mais qualidade e resistência ao produto.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Incolor","Fumê"]}
    ]
  },
  {
    nome: "Óculos de Proteção SS-2",
    img: "images/produtos/seguranca/oculos/oculos_08.png",
    codigo: "tp0086",
    detalhes: "Óculos de proteção Incolor são indispensáveis para diversas atividades como as industriais. Possui haste dobrável e lente em policarbonato.",
    camposExtras: [
      {label: "Cor", id: "cor", tipo: "select", opcoes: ["Incolor","Fumê"]}
    ]
  },
  /*Proteção em Altura*/
  {
    nome: "Cinto Paraquedista Multi-Ajustável com Proteção Lombar",
    img: "images/produtos/seguranca/pAltura/protecao_01.png",
    codigo: "tp0087",
    detalhes: "Confeccionado em fita de poliéster; 02 meia-argolas para posicionamento, na cintura; 01 meia-argola, para risco de queda, nas costas; 05 fivelas duplas, para ajuste, nas pernas, na cintura e nos ombros; 02 laços frontais para ancoragem; Ajuste peitoral; Almofada para proteção lombar; Porta ferramentas. Ideal para utilização em torres, serviços de manutenção de telefonia e eletricidade. Fabricante:MG Cinto",
  },
  {
    nome: "Cinto Paraquedista Cemig – Engate Simples",
    img: "images/produtos/seguranca/pAltura/protecao_05.png",
    codigo: "tp0088",
    detalhes: "Confeccionado em fita de poliéster; 02 meia-argolas para posicionamento, na cintura; 01 meia-argola nas costas, para risco de queda; 07 fivelas duplas para ajuste nas pernas, cintura e ombro; 04 laços frontais para ancoragem; Ajuste peitoral; Porta-ferramentas; Almofada de 130 mm para proteção lombar; Almofada de 50 mm para proteção das pernas. Ideal para utilização em torres, serviços de manutenção de telefonia e eletricidade. Fabricante:MG Cinto",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Engate Simples","Engate Rápido"]}
    ]
  },
  {
    nome: "Talabarte em Y Com Absorvedor de Impacto – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_07.png",
    codigo: "tp0089",
    detalhes: "Talabarte em Y, fita lisa ou corrugada, com absorvedor de energia, dois ganchos, dupla trava em aço 55 mm, um mosquetão e dupla trava em aço 18 mm. Fabricante:Athenas",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Fita Lisa","Fita Enrugada"]}
    ]
  },
  {
    nome: "Trava Queda Aço Inox para Corda – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_16.png",
    codigo: "tp0090",
    detalhes: "Trava queda para corda 12 mm, prolongador de material sintético de 22 cm, duplo travamento. Fabricante:Athenas",
  },
  {
    nome: "Trava Queda Aço Inox para Cabo de Aço para Corda – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_15.png",
    codigo: "tp0091",
    detalhes: "Travaqueda para cabo de aço de 8 mm. Fabricante:Athenas",
  },
  {
    nome: "Trava Queda Aço Inox para Cabo de Aço – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_02.png",
    codigo: "tp0092",
    detalhes: "Travaqueda para cabo de aço de 8 mm. Fabricante:Athenas",
  },
  {
    nome: "Cadeira suspensa para descida",
    img: "images/produtos/seguranca/pAltura/protecao_03.png",
    codigo: "tp0093",
    detalhes: "Cadeira suspensa para trabalho em altura, utiliza-se com corda de poliamida 12mm. Trava-queda e corda são vendidos separadamente.Fabricante: Fibranfer",
  },
  {
    nome: "Cinturão de Segurança Abdominal Eletricista",
    img: "images/produtos/seguranca/pAltura/protecao_06.png",
    codigo: "tp0094",
    detalhes: "Cinturão confeccionado em fita poliéster; Revestimento em espuma; 02 meia-argola; Porta-ferramentas; 01 fivela dupla para ajuste; Medida: 90 mm de largura. Fabricante: MG Cinto",
  },
  {
    nome: "Trava Quedas Retrátil – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_13.png",
    codigo: "tp0095",
    detalhes: "Confeccionado em material sintético (poliéster), possui 2,5 metros de comprimento e 45 mm de largura, mosquetão oval em aço com fechamento em rosca e indicador de stress. Fabricante: Athenas",
  },
  {
    nome: "Talabarte de Posicionamento – Athenas",
    img: "images/produtos/seguranca/pAltura/protecao_14.png",
    codigo: "tp0096",
    detalhes: "Talabarte de posicionamento, confeccionado em corda de poliamida, com mangueira de 70 cm,  regulador em aço, mosquetão oval de aço dupla trava, mosquetão tipo gancho em aço e uma anilha plástica. Fabricante: Athenas",
  },
  {
    nome: "Cadeira Suspensa para Descida e Subida",
    img: "images/produtos/seguranca/pAltura/protecao_04.png",
    codigo: "tp0097",
    detalhes: "Esta cadeira foi desenvolvida para atender as áreas de construção civil e industrial em serviços de pintura, limpeza de fachadas, instalação de antenas, montagem e manutenção de tubulações externas e reparos gerais. É o equipamento ideal para trabalhar em espaços exíguos e confinados. Cadeira acompanha 60 metros de cabo de aço. Fabricante: Apport",
  },
  {
    nome: "Talabarte em Y Com Absorvedor de Impacto",
    img: "images/produtos/seguranca/pAltura/protecao_17.png",
    codigo: "tp0098",
    detalhes: "Talabarte em Y, fita lisa ou corrugada, com absorvedor de energia, dois ganchos, dupla trava em aço 55 mm, um mosquetão e dupla trava em aço 18 mm.",
  },
  /*Protetores Auriculares */
  {
    nome: "Protetor Auricular Plug Silicone",
    img: "images/produtos/seguranca/pAuriculares/protetor-01.png",
    codigo: "tp0099",
    detalhes: "Protetor auricular tipo plug, confeccionado em silicone, formato cônico com três flanges e cordão de algodão. Atenuação 13 dB.",
  },
  {
    nome: "Protetor Auditivo 3M – 1100",
    img: "images/produtos/seguranca/pAuriculares/protetor-02.png",
    codigo: "tp00100",
    detalhes: "Protetores auditivos de inserção de espuma. Indicados para proteção auditiva em locais com excesso de ruído Protetores auditivos de inserção de espuma. Indicados para proteção auditiva em locais com excesso de ruído (acima de 85dB), causado por serra elétrica, britadeira, furadeira, bate-estaca ou outros ruídos. O protetor de espuma mais conhecido do Brasil e consagrado pelo uso. Possui formato anatômico para maximizar o conforto do usuário. Atenuação: 15 dB (NRRsf). Fabricante: 3M",
  },
  {
    nome: "Protetor Auditivo 3M – 1110",
    img: "images/produtos/seguranca/pAuriculares/protetor-03.png",
    codigo: "tp00101",
    detalhes: "Protetores auditivos de inserção de espuma. Indicados para proteção auditiva em locais com excesso de ruído (acima de 85dB), causado por serra elétrica, britadeira, furadeira, bate-estaca ou outros ruídos. O protetor de espuma mais conhecido do Brasil e consagrado pelo uso. Possui formato anatômico para maximizar o conforto do usuário. Atenuação: 15 dB (NRRsf). Fabricante: 3M",
  },
  {
    nome: "Protetor Auditivo Agena – ARS 24dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-04.png",
    codigo: "tp00102",
    detalhes: "Constituído por dois abafadores em forma de concha, montados simetricamente em haste-suporte ajustável, em forma de arco, permitindo que cada abafador se aplique sob pressão aos pavilhões auriculares.  Haste em borracha moldada.  Produto de extremo conforto. Atenuação (NRRsf): 24 dB. Fabricante: Agena",
  },
  {
    nome: "Protetor Auditivo Agena – ARS-N 22dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-05.png",
    codigo: "tp00104",
    detalhes: "Constituído por dois abafadores em forma de concha, montados simetricamente em haste-suporte ajustável, em forma de arco, permitindo que cada abafador se aplique sob pressão aos pavilhões auriculares.  Haste em borracha moldada.  Produto de extremo conforto.Atenuação: NRRsf -22dB Fabricante: Agena",
  },
  {
    nome: "Protetor Auditivo Agena – ATR 18dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-06.png",
    codigo: "tp00105",
    detalhes: "Protetor auditivo, constituído por dois abafadores em forma de concha, montados simetricamente nas extremidades de uma haste-suporte ajustável, em forma de arco, adaptável a cabeça humana, permitindo que cada abafador se aplique sob pressão, aos respectivos pavilhões auriculares. Atenuação (NRRsf): 18 dB. Fabricante: Agena",
  },
  {
    nome: "Protetor Auditivo",
    img: "images/produtos/seguranca/pAuriculares/protetor-07.png",
    codigo: "tp00106",
    detalhes: "Abafador de ruídos tipo concha, confeccionado em plástico rígido. Possui almofadas externas produzidas em espuma com revestimento em PVC emborrachado, sendo fixadas nas bordas das conchas para conforto e abafamento da orelha do usuário. Atenuação 11 dB.",
  },
  {
    nome: "Protetor Auricular Plug Copolímero",
    img: "images/produtos/seguranca/pAuriculares/protetor-08.png",
    codigo: "tp00107",
    detalhes: "Protetor auricular Tipo Plug, confeccionado em copolímero, formato cônico com três flanges. Atenuação 13 dB.",
  },
  {
    nome: "KIT Abafador Agena para Capacete – ARS 24dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-09.png",
    codigo: "tp00108",
    detalhes: "Protetor auditivo acoplável ao capacete, encaixe por slots, constituído por dois abafadores em forma de concha, adaptável a cabeça humana, permitindo que cada abafador se aplique sob pressão, aos respectivos pavilhões auriculares. Atenuação NRRsf -24dB.",
  },
  {
    nome: "KIT Abafador Agena para Capacete – SPR 14 dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-10.png",
    codigo: "tp00109",
    detalhes: "Protetor auditivo acoplável ao capacete, encaixe por slots, constituído por dois abafadores em forma de concha, adaptável a cabeça humana, permitindo que cada abafador se aplique sob pressão, aos respectivos pavilhões auriculares. Atenuação NRRsf -18dB. Frabicante: Agena",
  },
  {
    nome: "KIT Abafador Agena para Capacete – SPR 14 dB",
    img: "images/produtos/seguranca/pAuriculares/protetor-11.png",
    codigo: "tp001010",
    detalhes: "Protetor auditivo acoplável ao capacete, encaixe por slots, constituído por dois abafadores em forma de concha, adaptável a cabeça humana, permitindo que cada abafador se aplique sob pressão, aos respectivos pavilhões auriculares. Atenuação NRRsf -18dB. Frabicante: Agena",
  },
  {
    nome: "Protetor Auditivo 3M – Pomp Plus",
    img: "images/produtos/seguranca/pAuriculares/protetor-12.png",
    codigo: "tp001011",
    detalhes: "3M Pomp Plus é um protetor auditivo de inserção de silicone. É um dos produtos mais conhecidos e bem aceitos do mercado. Existem duas opções de cordão: polipropileno e de PVC (mais fácil de higienizar). Ambos possuem uma caixa com clipe para armazenar o produto e assim diminuir o risco de perda do protetor. Atenuação: 17 dB (NRRsf). Frabicante: 3M",
  },
  /*Placas de Aviso*/
  {
    nome: "Cavalete “Perigo Afaste-se”",
    img: "images/produtos/seguranca/placas/placa-06.png",
    codigo: "tp001012",
    detalhes: "Outro importante cavalete de proteção da Total Proteção, a placa dobrável compacta produzida em PVC “Perigo afaste-se”, é de alta visibilidade, fácil de transportar e possui estampa nos dois lados. Armação tipo “A”.",
  },
  {
    nome: "Cavalete “Banheiro fora de uso”",
    img: "images/produtos/seguranca/placas/placa-01.png",
    codigo: "tp001013",
    detalhes: "Placa dobrável, compacta, produzida em PVC “Cuidado banheiro fora de uso”, alta visibilidade, fácil de transportar, estampa nos dois lados. Armação tipo “A”, sendo mais uma excelente opção da Total Proteção em sinalização. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Desculpe o Transtorno Estamos em Reforma”",
    img: "images/produtos/seguranca/placas/placa-02.png",
    codigo: "tp001014",
    detalhes: "Placa dobrável, compacta, produzida em PVC “Cuidado banheiro fora de uso”, alta visibilidade, fácil de transportar, estampa nos dois lados. Armação tipo “A”, sendo mais uma excelente opção da Tuiuti em sinalização. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Homens trabalhando T”",
    img: "images/produtos/seguranca/placas/placa-03.png",
    codigo: "tp001015",
    detalhes: "Este cavalete (“Cuidado, homens trabalhando”) da Total Proteção é produzido em PVC, em uma placa dobrável compacta. Proporciona alta visibilidade é fácil de transportar e possui estampa nos dois lados. Armação tipo “A”. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Homens trabalhando”",
    img: "images/produtos/seguranca/placas/placa-04.png",
    codigo: "tp001016",
    detalhes: "Este cavalete (“Cuidado, homens trabalhando”) da Total Proteção é produzido em PVC, em uma placa dobrável compacta. Proporciona alta visibilidade é fácil de transportar e possui estampa nos dois lados. Armação tipo “A”. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Não entre, banheiro em manutenção”",
    img: "images/produtos/seguranca/placas/placa-05.png",
    codigo: "tp001017",
    detalhes: "Encontre na Total Proteção o cavalete “Cuidado não entre, banheiro em manutenção. Produzido em placa dobrável compacta produzida em PVC, este produto oferece alta visibilidade, além de ser fácil de transportar e possuir estampa nos dois lados. Armação tipo “A”. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Piso escorregadio risco de queda T”",
    img: "images/produtos/seguranca/placas/placa-07.png",
    codigo: "tp001018",
    detalhes: "Placa dobrável compacta produzida em PVC (“Cuidado, piso escorregadio risco de queda”) possui alta visibilidade, estampa nos dois lados e é fácil de transportar. Armação tipo “A”. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Piso Molhado”",
    img: "images/produtos/seguranca/placas/placa-08.png",
    codigo: "tp001019",
    detalhes: "Conheça mais este cavalete que a Total Proteção coloca à sua disposição a placa “Cuidado, piso molhado” é dobrável, compacta e produzida em PVC, além disso, possui alta visibilidade, estampa nos dois lados e é  fácil de transportar. Armação tipo “A”. Fabricante:Encartale",
  },
  {
    nome: "Cavalete “Piso Molhado”",
    img: "images/produtos/seguranca/placas/placa-09.png",
    codigo: "tp001020",
    detalhes: "Placa dobrável compacta produzida em PVC “Cuidado tinta fresca”, alta visibilidade, fácil de transportar, estampa nos dois lados. Armação tipo “A”. Fabricante:Encartale",
  },
  /*Telas*/
  {
    nome: "Tela Tapume Laranja",
    img: "images/produtos/seguranca/telas/tela_01.png",
    codigo: "tp001021",
    detalhes: "A Tela tapume laranja que a Tuiuti comercializa é ideal para atividades de cercamento e delimitação de áreas de trabalho. A medida dela é 1,20 x 50 m.",
  },
  {
    nome: "Tela Tapume Tecida",
    img: "images/produtos/seguranca/telas/tela_02.png",
    codigo: "tp001022",
    detalhes: "A Tela Tapume tecida é produzida por Polietileno de alta densidade (PEAD) 100 % monofilado, o que proporciona uma maior resistência da tela em relação às telas tapume comum. A medida dela é 1,20 x 50 m.",
  },
  /* FERRAMENTAS */
  /*Alicates*/
  {
    nome: "Alicate Bico Meia Cana Eletricista Vonder",
    img: "images/produtos/ferramentas/Alicates/Alicates_01.png",
    codigo: "tp001023",
    detalhes: "Alicate bico meia-cana reto 6” com isolação de 1000 Volts.",
  },
  {
    nome: "Alicate Bico Meia Cana Isolado Vonder VDE",
    img: "images/produtos/ferramentas/Alicates/Alicates_02.png",
    codigo: "tp001024",
    detalhes: "Alicate bico meia- cana reto 6”  isolado VDE Vonder. Os alicates VONDER linha VDE estão em conformidade com os requisitos de segurança da norma europeia EM 60900:2004.",
  },
  {
    nome: "Alicate Bomba D’Água Vonder",
    img: "images/produtos/ferramentas/Alicates/Alicates_03.png",
    codigo: "tp001025",
    detalhes: "Alicate bomba d’água 10”, fosfatizado preto, com abertura do mordente de 35 mm, ajustável em 7 posições e cabo plastificado. Fabricante:Vonder",
  },
  {
    nome: "Alicate de Corte Diagonal Isolado",
    img: "images/produtos/ferramentas/Alicates/Alicates_04.png",
    codigo: "tp001026",
    detalhes: "Alicate de corte diagonal 6” com isolação de 1000 Volts. Fabricante:Vonder",
  },
  {
    nome: "Alicate de Corte Diagonal Isolado Vonder VDE",
    img: "images/produtos/ferramentas/Alicates/Alicates_05.png",
    codigo: "tp001027",
    detalhes: "Alicate de corte diagonal 6” com isolação de 1000 Volts. Fabricante:Vonder",
  },
  {
    nome: "Alicate de Corte Frontal",
    img: "images/produtos/ferramentas/Alicates/Alicates_06.png",
    codigo: "tp001028",
    detalhes: "O Alicate de corte frontal que a Total Proteção comercializa possui corpo forjado em aço carbono especial e temperado, além de acabamento com pintura eletrostática e cabos com revestimentos especiais. Fabricante:Tramontina",
  },
  {
    nome: "Alicate de pressão mordente reto Vonder",
    img: "images/produtos/ferramentas/Alicates/Alicates_07.png",
    codigo: "tp001029",
    detalhes: "Alicate de pressão 10”, mordente reto, niquelado, para uso geral. Fabricante:Vonder",
  },
  {
    nome: "Alicate Universal 8” Eletricista Vonder",
    img: "images/produtos/ferramentas/Alicates/Alicates_08.png",
    codigo: "tp001030",
    detalhes: "Alicate universal 8”,em aço cromo vanádio, polido com cabo isolado para 1.000V. Fabricante:Vonder",
  },
  {
    nome: "Alicate Universal 8” Isolado Vonder VDE",
    img: "images/produtos/ferramentas/Alicates/Alicates_09.png",
    codigo: "tp001031",
    detalhes: "Alicate universal 8”,em aço cromo vanádio, polido com cabo isolado VDE para 1.000V. Os alicates VONDER linha VDE estão em conformidade com os requisitos de segurança da norma europeia EM 60900:2004. Fabricante:Vonder",
  },
  {
    nome: "Alicate Universal Tramontina Master",
    img: "images/produtos/ferramentas/Alicates/Alicates_10.png",
    codigo: "tp001032",
    detalhes: "Mais uma excelente opção quando se fala em Alicates, o Alicate universal possui corpo em aço carbono especial e temperado, acabamento fosfatizado, cabeça e articulação lixadas, têmpera especial no gume de corte e isolação elétrica de 1.000V C.A Além disso, é produzido em conformidade com a NBR 9699 e NR10. Fabricante:Tramontina",
  },
  {
    nome: "Alicate Universal EDA",
    img: "images/produtos/ferramentas/Alicates/Alicates_11.png",
    codigo: "tp001033",
    detalhes: "Alicate Universar EDA 8”. Útilizado para puxar, cortar arames, deformar, chapas finas e pregos.",
  },
  {
    nome: "Alicate Universal 8” Premium",
    img: "images/produtos/ferramentas/Alicates/Alicates_12.png",
    codigo: "tp001034",
    detalhes: "Alicate universal Premium 8”, com tipo de corte diagonal reduz risco de choque elétrico.",
  },
  /*Arcos de Serra */
  {
    nome: "Arco de Serra Fixo Tramontina Master",
    img: "images/produtos/ferramentas/Arco de Serra/Arco-01.png",
    codigo: "tp001035",
    detalhes: "O Arco de serra fixo Tramontina máster, possui lâmina de 12″, acabamento com pintura eletrostática na cor preta e cabo ergonômico injetado.",
  },
  {
    nome: "Arco De Serra Regulável Tramontina Master",
    img: "images/produtos/ferramentas/Arco de Serra/Arco-02.png",
    codigo: "tp001036",
    detalhes: "O Arco de serra regulável Tramontina máster, possui lâmina de 12″, permite o uso de lâminas de 10″ e 12″, acabamento cromado e cabo ergonômico injetado. Fabricante: Tramontina",
  },
  {
    nome: "Arco de Serra Regulável Vonder",
    img: "images/produtos/ferramentas/Arco de Serra/Arco-03.png",
    codigo: "tp001037",
    detalhes: "Arco de serra com estrutura metálica, com regulagem de 10″ a 12″. Acompanha lâmina de serra de aço carbono apenas para referência. Fabricante: Volder",
  },
  {
    nome: "Arco de Serra Vonder Construtor",
    img: "images/produtos/ferramentas/Arco de Serra/Arco-04.png",
    codigo: "tp001038",
    detalhes: "Arco de serra com estrutura em aço tubular e cabo em plástico ABS de alta resistência com empunhadura em borracha termoplástica. Possui bastão tensionador com ajuste angular de 45° e 90°, cabo removível. Permite armazenar 03 lâminas sobressalentes na base tubular. Não acompanha lâmina de serra. Fabricante: Volder",
  },
  {
    nome: "Mini Arco de Serra Starret – Mod. 146",
    img: "images/produtos/ferramentas/Arco de Serra/Arco-05.png",
    codigo: "tp001039",
    detalhes: "Ideal para executar trabalhos leves de corte. Este arco possibilita o uso de lâminas de 200mm (8″), 250mm (10″) e 300mm (12″).Indicado para cortes em locais de difícil acesso onde o arco de serra convencional não pode ser usado. Fornecido com uma lâmina Starrett. Fabricante: Starret",
  },
  /*Brocas*/
  {
    nome: "Broca Chata para Madeira Vonder",
    img: "images/produtos/ferramentas/Brocas/Broca_01.png",
    codigo: "tp001040",
    detalhes: "Broca chata para madeira em aço carbono, indicada para lâminas/chapas finas. Fabricante:Vonder",
    camposExtras: [
      { label: "Medida", id: "medida", tipo: "select", opcoes: ["1/4 \"6\" x 150 mm", "5/16 \"6\" x 150 mm", "3/8 \"6\" x 150 mm", "7/16 \"6\" x 150 mm", "1/2 \"6\" x 150 mm", "9/16 \"6\" x 150 mm", "5/8 \"6\" x 150 mm", "11/16 \"6\" x 150 mm", "3/4 \"6\" x 150 mm", "7/8 \"6\" x 150 mm", "1 \"6\" x 150 mm", "1.1/8 \"6\" x 150 mm", "1.1/4 \"6\" x 150 mm", "1.1/2 \"6\" x 150 mm"] }
    ]
  },
  {
    nome: "Broca de aço rápido – Longa Vonder",
    img: "images/produtos/ferramentas/Brocas/Broca_02.png",
    codigo: "tp001041",
    detalhes: "Broca de aço rápido para metais ferrosos e não ferrosos indicada para furações em locais de difícil acesso ou maior profundidade, possui haste paralela/cilíndrica e canal helicoidal. Fabricante:Vonder",
    camposExtras: [
      { label: "Medida", id: "medida", tipo: "select", opcoes: ["2.0 mm", "2.5 mm", "3.0 mm", "3.5 mm", "4.0 mm", "4.5 mm", "5.0 mm", "5.5 mm", "6.0 mm", "6.5 mm", "7.0 mm", "7.5 mm", "8.0 mm", "8.5 mm", "9.0 mm", "9.5 mm", "10.0 mm", "10.5 mm", "11.0 mm"] }
    ]
  },
  {
    nome: "Broca para Mourão e Fibrocimento Vonder",
    img: "images/produtos/ferramentas/Brocas/Broca_03.png",
    codigo: "tp001042",
    detalhes: "Broca utilizada para perfuração de concreto e alvenaria. Jogos disponíveis: Estojo Plástico com 3 peças: 5.0 mm, 6.0 mm, 8.0 mm; Estojo Plástico com 5 peças: 4.0 mm, 5.0 mm, 6.0 mm, 8.0 mm, 10.0 mm. Fabricante: Vonder",
    camposExtras: [
      { label: "Medida", id: "medida", tipo: "select", opcoes: ["9/32 \" 10\" 254 mm", "5/16 \" 10\" X 254 mm", "3/8 \" 10\" X 254 mm", "1/8 \" 12\" X 300 mm", "5/16 \" 12\" X 300 mm", "3/8 \" 12\" X 300 mm", "1/1 \" 12 \" X 300 mm", "1/4 \" 18\" X 455 mm", "5/16 \" 18\" X 455 mm", "3/8 \" 18\" X 455 mm", "1/2 \" 18\" X 455 mm"] }
    ]
  },
  {
    nome: "Broca de aço rápido Vonder- Jogo Estojo Plástico",
    img: "images/produtos/ferramentas/Brocas/Broca_04.png",
    codigo: "tp001043",
    detalhes: "Broca de aço rápido para metais ferrosos e não ferrosos, possui haste paralela/cilíndrica e canal helicoidal. Jogos disponíveis: 13 peças (1,5 mm a 6,5 mm): 1,5 mm, 2,0 mm, 2,5 mm, 3,0 mm, 3,2 mm, 3,5 mm, 4,0 mm, 4,5 mm, 4,8 mm, 5,0 mm, 5,5 mm, 6,0 mm, 6,5 mm; 13 peças (1/16″ a 1/4”): 1/16″, 5/64″, 3/32″, 7/64″, 1/8″, 9/64″, 5/32″, 11/64″, 3/16″, 13/64″, 7/32″, 15/64″, 1/4”. Fabricante:Vonder",
    camposExtras: [
      { label: "Modelo", id: "modelo", tipo: "select", opcoes: ["13 peças (1.5 mm a 6.5 mm)", "13 peças (1/16\" a 1/4\")"] }
    ]
  },
  {
    nome: "Jogo de Brocas Combinadas Vonder",
    img: "images/produtos/ferramentas/Brocas/Broca_05.png",
    codigo: "tp001044",
    detalhes: "Jogo de brocas para furar madeira,metais, concreto e alvenaria. Este jogo contém 9 peças. Composição: Aço Rápido: 5 mm/ 6mm/8 mm; 03 Pontas: 5 mm/ 6mm/8 mm; Concreto: 5 mm/ 6mm/8 mm. Fabricante: Vonder",
  },
  {
    nome: "Broca para concreto Vonder- Jogo Estojo Plástico",
    img: "images/produtos/ferramentas/Brocas/Broca_06.png",
    codigo: "tp001045",
    detalhes: "Broca utilizada para perfuração de concreto e alvenaria. Jogos disponíveis: Estojo Plástico com 3 peças: 5.0 mm, 6.0 mm, 8.0 mm; Estojo Plástico com 5 peças: 4.0 mm, 5.0 mm, 6.0 mm, 8.0 mm, 10.0 mm. Fabricante: Vonder",
    camposExtras: [
      { label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Estojo Plástico com 3 peças", "Estojo Plástico com 5 peças"] }
    ]
  },
  {
    nome: "Jogo de Broca Chata para Madeira Vonder",
    img: "images/produtos/ferramentas/Brocas/Broca_07.png",
    codigo: "tp001046",
    detalhes: "Broca chata para madeira em aço carbono, indicada para lâminas/chapas finas. Jogos disponíveis:3 Peças: 3/8”, 1/2”, 5/8”; 7 Peças: 1/4”, 5/16”, 3/8”, 1/2”, 5/8” – 3/4”, 1”. Fabricante: Vonder",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["3 peças","7 peças"]}
    ]
  },
  {
    nome: "Broca para concreto Vonder- Jogo Caixa Metálica",
    img: "images/produtos/ferramentas/Brocas/Broca_08.png",
    codigo: "tp001047",
    detalhes: "Broca utilizada para perfuração de concreto e alvenaria. Jogos disponíveis: Caixa Metálica com 7 Peças: 3.0 mm, 4.0 mm, 5.0 mm, 6.0 mm, 7.0 mm, 8.0 mm, 9.0 mm, 10.0 mm; Caixa Metálica com 8 peças: 3.0 mm, 4.0 mm, 5.0 mm, 6.0 mm, 7.0 mm, 8.0 mm, 9.0 mm, 10.0 mm. 12.0 mm. Fabricante: Vonder",
    camposExtras: [
      { label: "Modelo", id: "modelo", tipo: "select", opcoes: ["Caixa metálica com 7 peças", "Caixa Metálica com 8 peças"] }
    ]
  },
  {
    nome: "Broca de aço rápido Vonder – Jogo Caixa Metálica",
    img: "images/produtos/ferramentas/Brocas/Broca_09.png",
    codigo: "tp001048",
    detalhes: "Broca de aço rápido para metais ferrosos e não ferrosos, possui haste paralela/cilíndrica e canal helicoidal.Jogos disponíveis: 25 peças (1,0 mm a 13,0 mm): 1,0 mm, 1,5 mm, 2,0 mm, 2,5 mm, 3,0 mm, 3,5 mm, 4,0 mm, 4,5 mm, 5,0 mm, 5,5 mm, 6,0 mm, 6,5 mm, 7,0 mm, 7,5 mm, 8,0 mm, 8,5 mm, 9,0 mm, 9,5 mm, 10,0 mm, 10,5 mm, 11,0 mm, 11,5 mm, 12,0 mm, 12,5 mm, 13,0 mm; 29 peças (1/16″ a 1/2”): 1/16″, 5/64″, 3/32″, 7/64″, 1/8″, 9/64″, 5/32″, 11/64″, 3/16″, 13/64″, 7/32″, 15/64″, 1/4″, 17/64″, 9/32″, 19/64″, 5/16″, 21/64″, 11/32″, 23/64″, 3/8″, 25/64″, 13/32″, 27/64″, 7/16″, 29/64″, 15/32″, 31/64″ e 1/2”. Fabricante:Vonder",
    camposExtras: [
      { label: "Modelo", id: "modelo", tipo: "select", opcoes: ["25 peças ( 1,0 mm a 13.0 mm)", "29 peças (1/16\" a 1/2\"0"] }
    ]
  },
  /*Furadeiras*/
  {
    nome: "Furadeira Bosch 1.150W GBM 23-2",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_01.png",
    codigo: "tp001049",
    detalhes: "Conheça aqui a furadeira Bosh que a Total proteção comercializa. Esta ferramenta é extremamente robusta e potente, ale, de sua incrível versatilidade. Possui empunhadeira em cruz e encosto para ombro, garantindo melhor apoio e transmissão de força ao operador, um potente motor de 1.150 watts que permite perfurações de até 23 mm em aço, encaixe cônico de brocas (Cone Morse 2). Além disso, apresenta alta durabilidade graças à robustez dos componentes, como engrenagens, rolamentos e carcaça metálica. É adaptável em suporte magnético e o acionamento e desligamento do interruptor são muito fáceis. (Acompanha: Empunhadeira auxiliar e chave de mandril.)",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de Impacto Bosch 700 w GSB 16",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_02.png",
    codigo: "tp001050",
    detalhes: "Conheça aqui mais um excelente modelo de furadeira de impacto que a Bosch e a Tuiuti colocam à sua disposição. A mais moderna e potente da categoria, possui um potente motor de 700 watts. (Acompanha: Empunhadeira auxiliar, chave de mandril, limitador de profundidade). Outros diferenciais: Perfeito balanceamento e ergonomia, graças ao moderno design; Empunhadeira Soft Grip, permitindo trabalho fácil e de menor fadiga ao operador;Sistema de engrenamento helicoidal; Sistema de perfuração com e sem impacto; Botão-trava para trabalhos contínuos; Empunhadeira auxiliar e limitador de profundidade, proporcionando maior praticidade e precisão. Fabricante: Bosch",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de impacto Skil 600 w 6462",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_03.png",
    codigo: "tp001051",
    detalhes: "Conheça aqui mais um excelente modelo de furadeira de impacto que a Bosch e a Tuiuti colocam à sua disposição. A mais moderna e potente da categoria, possui um potente motor de 700 watts. (Acompanha: Empunhadeira auxiliar, chave de mandril, limitador de profundidade). Outros diferenciais: Perfeito balanceamento e ergonomia, graças ao moderno design; Empunhadeira Soft Grip, permitindo trabalho fácil e de menor fadiga ao operador; Sistema de engrenamento helicoidal; Sistema de perfuração com e sem impacto; Botão-trava para trabalhos contínuos; Empunhadeira auxiliar e limitador de profundidade, proporcionando maior praticidade e precisão. Fabricante: Bosch",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de Impacto Skil 6400 700 w",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_04.png",
    codigo: "tp001052",
    detalhes: "Este modelo de furadeira que a Total Proteção comercializa possui maior potência, mandril de aperto rápido, agilidade na troca de acessórios, além de função reversível, comutador deslizante de troca rápida de sistema (impacto/sem impacto), empunhadeira auxiliar, preciso limitador de profundidade e Soft-Grip para maior conforto no uso. (Acompanha: Maleta plástica, chave de mandril e empunhadeira).Características Técnicas: Potência: 700 watts; Rotação: 3000 min.; Mandril: 1/2 (13 mm); Peso: 1,7 Kg. Capacidade de perfuração: Concreto: 13 mm; Aço: 10 mm; Madeira: 25 mm. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de Impacto Skil 6455 700 w",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_05.png",
    codigo: "tp001053",
    detalhes: "A furadeira de impacto 6654 estabelece rendimento máximo em perfurações, 500 w de potência que garantem excelente perfomance, eletrônica e reversível- mandril 3/8″ (10 mm). Possui também velocidade variável e rotação reversível, motor de maior rendimento, botão-trava para trabalhos contínuos, design moderno, resistente e ergonômica e suporte para chave de mandril. (Acompanha chave de mandril e empunhadeira) Características técnicas: Potência: 500 W; Mandril: 3/8″ (10 mm); Peso: 1,3 Kg; Rotação: 0-3. 000 mim¹. Capacidade de Perfuração: Aço: 10 mm; Madeira: 20 mm; Concreto: 10 mm. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de Impacto Skil 6652 700 w",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_06.png",
    codigo: "tp001057",
    detalhes: "A furadeira de impacto 6654 estabelece rendimento máximo em perfurações, 500 w de potência que garantem excelente perfomance, eletrônica e reversível- mandril 3/8″ (10 mm). Possui também velocidade variável e rotação reversível, motor de maior rendimento, botão-trava para trabalhos contínuos, design moderno, resistente e ergonômica e suporte para chave de mandril. (Acompanha chave de mandril e empunhadeira) Características técnicas: Potência: 500 W; Mandril: 3/8″ (10 mm); Peso: 1,3 Kg; Rotação: 0-3. 000 mim¹. Capacidade de Perfuração: Aço: 10 mm; Madeira: 20 mm; Concreto: 10 mm. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira de Impacto Skil 6654 700 w",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_07.png",
    codigo: "tp001054",
    detalhes: "A furadeira de impacto 6654 estabelece rendimento máximo em perfurações, 500 w de potência que garantem excelente perfomance, eletrônica e reversível- mandril 3/8″ (10 mm). Possui também velocidade variável e rotação reversível, motor de maior rendimento, botão-trava para trabalhos contínuos, design moderno, resistente e ergonômica e suporte para chave de mandril. (Acompanha chave de mandril e empunhadeira)Características técnicas: Potência: 500 W; Mandril: 3/8″ (10 mm); Peso: 1,3 Kg; Rotação: 0-3. 000 mim¹. Capacidade de Perfuração: Aço: 10 mm; Madeira: 20 mm; Concreto: 10 mm. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Furadeira | Parafusadeira Bat. Skil 14,4 v 2144",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_08.png",
    codigo: "tp001055",
    detalhes: "Furadeira | Parafusadeira 14,4 com velocidade variável e reversível, 15 níveis de torque para parafusar e um para perfurar, bateria de íons de lítio, carregador rápido de 1 hora, led indicador de direção, soft grip para diminuir a vibração e proporcionar melhor pega, além de iluminação no local de trabalho e indicador do nível da bateria através LEDs. Características Técnicas: Voltagem: 14,4 v; Mandril: 10 mm; Rotação: 0-800 min¹; Torque máximo: 32 Nm; Peso: 1,1 kg; Bateria; 1,3 ah li-lon. Capacidade de perfuração: Madeira: 25 mm; Aço: 10 mm. Acompanha: Carregador, bateria, bit duplo e manual de instruções.",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Kit Parafusadeira Skil 2248 4,8V",
    img: "images/produtos/ferramentas/Furadeiras/furadeira_09.png",
    codigo: "tp001056",
    detalhes: "Este equipamento é Mais leve e potente e possui trava automática do eixo permite parafusar e desparafusar manualmente tem punho articulado para parafusar e desparafusar em lugares de difícil acesso. Além disso, tem botão de reversão fácil de operar e punho antideslizante que permite maior conforto ao usuário. Acompanha: maleta plástica, 10 pontas para parafusar, bit ponta dupla, adaptador magnético, ponta para perfurar e carregador. Características Técnicas: Bateria: 4,8V; Rotação: 220 min.; Torque máximo: 5 Nm; Parafusos: 6mm; Tempo de carga: 3 a 5 horas; Peso: 0,5 Kg",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  /*Parafusadeiras */
  {
    nome: "Parafusadeira Bosch 127 v 3,6 V GSR Pro Drive",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_01.png",
    codigo: "tp001058",
    detalhes: "A menor parafusadeira a bateria profissional do mundo, possui bateria removível e carregador multi-charger (3,6v a 10,8v) para trabalho sem interrupções. Além disso, tem ótima autonomia e alto desempenho: 110 parafusos (3,5x30mm) em madeira macia com uma só carga de bateria, led de iluminação integrado para perfeita visualização da área de trabalho, freio do motor: trabalhos precisos e alta produtividade para parafusamentos em série e Sistema ECP (Electronic Cell Protection). Acompanha: Carregador multi-charger de 60` AL 1115CV, kit de bits, extensor, broca, bolsa de transporte. Fabricante: Bosch",
  },
  {
    nome: "Parafusadeira Bosch 127 v 701 w GSR 6-45TE",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_02.png",
    codigo: "tp001059",
    detalhes: "A opção ideal para pré-fabricados e acabamento como drywall, esta parafusadeira possui alta rotação de até 4.500 RPM, para maior produtividade no trabalho, é extremamente ergonômica e leve, com empunhadeira Sofl Grip, permitindo trabalho fácil e de menor fadiga ao operador. Além disso, tem velocidade variável para maior controle em materiais diferentes, clip para cinta, proporcionando maior acessibilidade e armazenagem, é de fácil ajuste de profundidade e sua carcaça metálica estabelece maior tempo de vida útil. Fabricante: Bosch",
  },
  {
    nome: "Parafusadeira Bosch 127 v 701 w GSR6-25TE",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_03.png",
    codigo: "tp001060",
    detalhes: "A Parafusadeira Bosh GSR6-25TE que a Total Proteção comercializa é um excelente ferramenta para aplicações que exigem até 20 Nm, e é ideal para trabalhos em metal, madeira e drywall. Outros Diferenciais: Extremamente ergonômica e leve; Empunhadeira Soft Grip para trabalho mais fácil e menos fadiga ao trabalhador; Velocidade variável para maior controle em materiais diferentes; Clip para cinta, proporcionando maior acessibilidade e armazenagem; Fácil ajuste de profundidade; Carcaça metálica para maior tempo de vida útil. Fabricante: Bosch",
  },
  {
    nome: "Parafusadeira Skil 2100 2,4 v",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_04.png",
    codigo: "tp001061",
    detalhes: "A Parafusadeira 2,4v é reversível e articulada, possui punho articulado para parafusar e desparafusar em lugares de difícil acesso, bateria NICd, botão de reversão fácil de operar, design robusto integrado com frente metálica, além de ser leve e prática. Além disso, é a ferramenta ideal para técnicos em informática e eletrodomésticos. (Ergonômico tipo de encaixe hexagonal (1/4″).) Características Técnicas: Bateria: 2,4 v; Rotação: 180 min¹; Torque máximo: 2,3 Nm; Tempo de carga: 3 a 5 horas; Peso: 0,4 kg; Dimensões: 272x44x44mm; Inclinação: 0° e 120°. Acompanha: Carregador de bateria e 2 bits de ponta dupla. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Parafusadeira Skil Li-lon 2336 3,6 v",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_05.png",
    codigo: "tp001062",
    detalhes: "A parafusadeira 3,6 v Li-lon é a reversível mais leve do mercado e utiliza tecnologia de íons de lítio dando assim maior vida útil da bateria, sem perda da capacidade quando não estiver em uso. Tem novo design ergonômico para maior conforto ao operador, interruptor eletrônico que permite rotação variável, indicação da rotação através de display luminoso e comutador de sentido giro. Características Técnicas: Bateria: 3,6 V; Rotação: 200 min¹; Torque Máximo: 2,75 Nm; Parafusos: 5 mm; Tempo de carga: 3 horas; Peso: 0,3 kg; Acompanham: Lata promocional, 10 bits, dois bits ponta dupla, uma ponta dupla, uma ponta para perfurar e um adaptador magnético. Fabricante: Skil",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Parafusadeira Skil Twister 2000 3,6 v",
    img: "images/produtos/ferramentas/Parafusadeiras/paraf_06.png",
    codigo: "tp001063",
    detalhes: "Garanta excelente desempenho para tarefas do dia a dia com a Parafusadeira 3,6v- Twister reversível.  Pequena, leve e compacta para trabalhos em áreas de difícil acesso, bateria NICd, maior conforto e ergonomia através de uma empunhadeira emborrachada/soft grip, tipo de encaixe hexagonal (1/4″), carregador bivolt, é a ferramenta ideal para profissional que tem que trabalhar em espaços reduzidos, botão de reversão permite parafusar e desparafusar. Características Técnicas: Bateria: 3,6 V; Rotação: 200 min¹; Torque máximo: 3 Nm; Tempo de carga: 3 a 5 horas; Peso: 0,3 kg. Voltagem: bivolt; Acompanham: 1 carregador de bateria, 2 pontas e 1 adaptador magnético. Fabricante: Skil",
  },
  /*Lixadeiras*/
  {
    nome: "Disco de lixa Disflex",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_01.png",
    codigo: "tp001064",
    detalhes: "Disco de lixa Disflex",
    camposExtras: [
      {label: "Medida", id: "medida", tipo: "select", opcoes: ["7x24"]},
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: ["7x24"]}
    ]
  },
  {
    nome: "Lixadeira Combinada Skil 400",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_02.png",
    codigo: "tp001065",
    detalhes: "Lixadeira combinada 400 w 3375 é praticidade 2 em 1 para você! Possui um potente e robusto motor de 400 w, duas lixas de trabalho, cinta e disco de lixar, oferecendo versatilidade, além de ser 100% rolamentada. Sua estrutura é toda construída em ferro e alumínio com mesa de trabalho em alumínio e inclinação de 45°, régua de medição, permitindo ajustar as peças de trabalho em diversos ângulos de trabalhos. (Acompanha: disco de lixar, cinta de lixar, chave de ajuste e régua de trabalho.) Características Técnicas: Potência: 400 W; Velocidade do disco: 3.450 RPM. Velocidade da cinta: 2.150 RPM; Dimensão do disco: 152,4 mm (6″); Dimensão da cinta: 101,6 x 914 mm (4″ x 36″); Inclinação da mesa: 0-45°; Inclinação da cinta: 0- 90°; Peso: 17 kg",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Lixadeira de Cinta Skil 900 w 7640",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_03.png",
    codigo: "tp001066",
    detalhes: "Garanta mais velocidade em todos os trabalhos com esta ferramenta que possui um potente motor de 900 w, velocidade variável para remoção controlada de materiais em diferentes superfícies, base estabilizadora “equalizer” para acertar as superfícies com precisão, além de interruptor eletrônico com ajuste de velocidade e ajuste para uso estacionário. (Acompanham dois grampos para uso estacionário). Características Técnicas: Potência: 900 W; Peso: 3,6 kg; Dimensões da cinta de lixa: 76 x 533 mm; Superfície de trabalho: 76 x 130 mm; Velocidade da cinta s/ carga: 180-330 m/min. Acompanham: 1 maleta plástica, 3 lixas, 1 saco coletor de pó, 2 grampos, 1 adaptador para coletor de pó.",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Lixadeira de Palma Skil 200 w 7232",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_04.png",
    codigo: "tp001067",
    detalhes: "Com motor 30% mais potente, 200 w, base de lixa branca, maior resistência, interruptor selado internamente, design compacto e ergonômico, sistema de grampos para facilitar a troca da lixa, lixa de 114×140 mm (1/4), esta lixadeira é a opção ideal em potência e durabilidade de vida útil. Características Técnicas: Potência: 220 W; OPM: 14.000 min¹; Dimensão da lixa: 114 x 140 mm; Peso: 1,3 kg. Acompanham: 1 lixa.",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Lixadeira Orbital Skil 240 w 7366",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_05.png",
    codigo: "tp001068",
    detalhes: "Garanta maior rendimento com menor esforço com esta lixadeira orbital que possui motor com 240 w de potência, sistema de controle de pressão com LED (a luz indica se você está usando a força certa para o melhor rendimento), sistema coletor e pó, fixação das lixas por grampo ou velcro, além de proporcionar manuseio confortável com design ergonômico e soft grip. (Acompanham  coletor de pó e três lixas). Características Técnicas: Potência: 240 w; OPM: 26.000 min¹; Dimensão da lixa: 93 x 185 mm; Peso: 2,3 kg",
    camposExtras: [
      {label: "Modelo", id: "modelo", tipo: "select", opcoes: ["127V","220V"]}
    ]
  },
  {
    nome: "Lixadeira para Concreto Bosch 1400 w GBR 14CA",
    img: "images/produtos/ferramentas/Lixadeiras/lixa_06.png",
    codigo: "tp001069",
    detalhes: "A Lixadeira Angular para Concreto possui um sistema especial patenteado de proteção contra poeira e atualmente é a única real lixadeira para concreto do mercado. É indicada para desbaste e acabamento de concreto aparente, nivelação de superfícies de concreto. Possui também Constant Electronic (velocidade e força constantes) e service display e sistema de segurança integrado. (Acompanha: Prato diamantado cinza, maleta de transporte, flange, porca, empunhadeira auxiliar, chave pinos e três escovas). Modelo: 220V",
  },
  
];

export default produtos;

/*
{
    nome: "",
    img: "images/produtos/uniforme/",
    codigo: "",
    detalhes: "",
    camposExtras: [
      {label: "Tamanho", id: "tamanho", tipo: "select", opcoes: []}
    ]
  },
*/