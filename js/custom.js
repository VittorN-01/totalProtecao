// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// Tela Treinamentos
function showContent(contentType) {
    // Ocultar todos os conteúdos
    document.getElementById('treinamento').style.display = 'none';
    document.getElementById('programas').style.display = 'none';
  
    // Mostrar o conteúdo correto baseado no link clicado
    if (contentType === 'treinamento') {
      document.getElementById('treinamento').style.display = 'flex';
    } else if (contentType === 'programas') {
      document.getElementById('programas').style.display = 'flex';
    }
  }
  
// TELA PRODUTOS 
function showContentProdutos(contentType) {
  // Oculta todos os conteúdos
  document.getElementById('uniformes').style.display = 'none';
  document.getElementById('seguranca').style.display = 'none';
  document.getElementById('ferramentas').style.display = 'none';

  // Mostra o conteúdo selecionado
  const selected = document.getElementById(contentType);
  if (selected) {
    selected.style.display = 'block';
  }

  // Oculta a navegação
  const nav = document.querySelector('nav.nav');
  if (nav) {
    nav.style.display = 'none';
  }

  // Atualiza o título da seção
  const titulo = document.getElementById('titulo-secao');
  if (titulo) {
    const nomes = {
      'uniformes': 'Uniformes',
      'seguranca': 'Equipamentos de Segurança',
      'ferramentas': 'Ferramentas'
    };
    titulo.textContent = nomes[contentType] || 'Selecione uma categoria';
  }

  // Altera a URL sem recarregar a página
  history.pushState(null, '', '?categoria=' + contentType);
}

window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const categoria = params.get('categoria');
  if (categoria) {
    showContentProdutos(categoria);
  }
};


let clickCount = 0;
  const link = document.getElementById('navbarDropdown');

  link.addEventListener('click', function (event) {
    clickCount++;

    if (clickCount === 1) {
      // Impede o redirecionamento no primeiro clique
      event.preventDefault();

      // Reseta o contador depois de um tempo (ex: 1 segundo)
      setTimeout(() => {
        clickCount = 0;
      }, 1000);
    } else if (clickCount === 2) {
      // Permite o redirecionamento no segundo clique
      window.location.href = this.href;
    }
  });

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function ativarLink(element, imgNormal, imgHover) {
    // Desativa todos
    document.querySelectorAll('a.d-block').forEach(function(el) {
      el.classList.remove('ativo');
      el.style.backgroundColor = 'transparent';
      if (el.children[0]) {
        // Corrige a imagem de cada um
        if (el.onclick && el.onclick.toString().includes('uniformes')) el.children[0].src = './images/uniforme.png';
        if (el.onclick && el.onclick.toString().includes('seguranca')) el.children[0].src = './images/capacete.png';
        if (el.onclick && el.onclick.toString().includes('ferramentas')) el.children[0].src = './images/manutencao.png';
      }
    });

    // Ativa o clicado
    element.classList.add('ativo');
    element.style.backgroundColor = '#002C5F';
    if (element.children[0]) element.children[0].src = imgHover;
  }
