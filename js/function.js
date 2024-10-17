var produtos = [
  { imagem: 'img/produtos/nativa-spa-rose1.png', titulo: 'Nativa SPA Rosé', subtitulo: 'Hidratante corporal 400ml', preco: 'R$ 82,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/nativa-spa-ameixa-negra.png', titulo: 'Nativa SPA Ameixa Negra', subtitulo: 'Hidratante corporal 400ml', preco: 'R$ 82,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/nativa-spa-flor-de-ameixa.png', titulo: 'Nativa SPA Flor de Ameixa', subtitulo: 'Hidratante corporal 400ml', preco: 'R$ 82,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/nativa-spa-jasmim-sambac.png', titulo: 'Nativa SPA Jasmim Sambac', subtitulo: 'Hidratante corporal 400ml', preco: 'R$ 82,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/cuide-se-bem-boa-noite.png', titulo: 'Cuide-se bem Boa noite', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 69,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/cuide-se-bem-deleite.png', titulo: 'Cuide-se bem Deleite', subtitulo: 'hidratante corporal 400ml', preco: 'R$ 69,90', marca: 'boticario', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/avon-care-erva-doce.png', titulo: 'Avon CARE Erva doce', subtitulo: 'hidratante corporal 700ml', preco: 'R$ 39,99', marca: 'avon', maxQuantidade: 2 },
  { imagem: 'img/produtos/avon-care-frutas-vermelhas.png', titulo: 'Avon CARE Frutas vermelhas', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-care-aveia-extrato-de-baunilha+vitamina.png', titulo: 'Avon CARE aveia extrato de baunilha + vitamina', subtitulo: 'Hidratante corporal 200ml', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-care-frutas-cítricas-e-gengibre.png', titulo: 'Avon CARE frutas cítricas e gengibre', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-care-macadamia.png', titulo: 'Avon CARE macadâmia', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-care-manteiga-de-cacau.png', titulo: 'Avon CARE manteiga de cacau', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/avon-care-oleo-de-coco.png', titulo: 'Avon CARE óleo de coco', subtitulo: 'hidratante corporal 200ml', preco: 'R$ 39,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/NATBRA-andiroba.jpg', titulo: 'Natura EKOS Andiroba', subtitulo: 'Hidratante corporal 200ml', preco: 'R$ 61,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/castanha.png', titulo: 'Natura EKOS castanha', subtitulo: 'Hidratante corporal 200ml', preco: 'R$ 61,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/Sabonete líquido íntimo com Extrato de camomila 20ml.webp', titulo: 'Sabonete líquido Simply', subtitulo: 'íntimo com Extrato de camomila 20ml', preco: 'R$ 19,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/reparador-de-pontas.jpg', titulo: 'Reparador de pontas Avon', subtitulo: 'sérum de tratamento finalizador 30ml', preco: 'R$ 25,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/Antitranspirante-lily.webp', titulo: 'Antitranspirante Lily', subtitulo: 'aerosol jato seco 75g - 125ml', preco: 'R$ 35,90', marca: 'boticario', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/Antitranspirante-linda.webp', titulo: 'Antitranspirante linda', subtitulo: 'aerosol jato seco 75g - 125ml', preco: 'R$ 35,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/hidratante-corporal-liz-intenso.webp', titulo: 'Liz intenso', subtitulo: 'Hidratante corporal', preco: 'R$ 64,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siàge-máscara-cauterização-dos-lisos.webp', titulo: 'máscara cauterização dos lisos', subtitulo: 'Eudora Siàge 250ml', preco: 'R$ 69,90', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/sabonete-mmbb.jpg', titulo: 'Sabonete MMBB', subtitulo: '5 Unidades', preco: 'R$ 43,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/shampoo-mmbb.jpg', titulo: 'Shampoo MMBB', subtitulo: '200ml', preco: 'R$ 39,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/condicionador-mmbb.jpg', titulo: 'Condicionador MMBB', subtitulo: '200ml', preco: 'R$ 39,90', marca: 'natura', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/sabonete-liquido-mmbb.jpg', titulo: 'Sabonete líquido MMBB', subtitulo: '200ml ', preco: 'R$ 47,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-sabonete-líquido-mmbb.jpg', titulo: 'Refil Sabonete líquido MMBB', subtitulo: '200ml', preco: 'R$ 36,40', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/agua-de-colônia-mmbb.jpg', titulo: 'Agua de Colônia MMBB', subtitulo: 'Colônia sem álcool 100ml', preco: 'R$ 98,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/300km-quantum.jpg', titulo: '300km Quantum', subtitulo: '100ml', preco: 'R$ 89,90', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/300km-pulse.jpg', titulo: '300km Pulse', subtitulo: '100ml', preco: 'R$ 89,90', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/creme-acetinado-lily.webp', titulo: 'Creme Acetinado Lily', subtitulo: 'Hidratante corporal 250ml', preco: 'R$ 129,90', marca: 'boticario', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/creme-eudora-indulgente-cream.png', titulo: 'Creme Acetinado Eudora', subtitulo: 'Hidratante corporal indulgente cream 250ml', preco: 'R$ 97,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/sabonete-tododia-feliz-dia.png', titulo: 'Sabonete tododia Feliz dia', subtitulo: '5 Unidades', preco: 'R$ 36,90', marca: 'natura' },
  { imagem: 'img/produtos/sabonete-ekos-castanha-andiroba-acai-maracuja.png', titulo: 'Sabonete EKOS', subtitulo: 'castanha, andiroba, açaí e maracujá', preco: 'R$ 39,50', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/luna-radiante.png', titulo: 'Luna Radiante', subtitulo: 'Hidratante corporal 300ml', preco: 'R$ 80,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/luna-absoluta.png', titulo: 'Luna Absoluta', subtitulo: 'hidratante corporal 300ml', preco: 'R$ 80,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/egeo-blue.png', titulo: 'Egeo BLUE', subtitulo: '90ml', preco: 'R$ 144,90', marca: 'boticario', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/egeo-choc.png', titulo: 'Egeo Choc', subtitulo: '90ml', preco: 'R$ 144,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/egeo-dolce.png', titulo: 'Egeo Dolce', subtitulo: '90ml', preco: 'R$ 144,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/floratta-red.png', titulo: 'Floratta Red', subtitulo: '75ml', preco: 'R$ 144,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/floratta-rose.png', titulo: 'Floratta Rose', subtitulo: '75ml', preco: 'R$ 144,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/sabonete-todo-dia-amora-vermelha.png', titulo: 'Sabonete tododia amora vermelha e Jabuticaba', subtitulo: '5 unidades 90g', preco: 'R$ 31,40', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/sabonete-todo-dia-cereja-avela.png', titulo: 'Sabonete tododia Cereja e avelã', subtitulo: '5 unidades 90g', preco: 'R$ 31,40', marca: 'natura', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/sabonete-encanto-atraente-deslumbrante.png', titulo: 'Sabonete Encanto', subtitulo: 'Atraente e deslumbrante 4 unidades 80g', preco: 'R$ 21,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/luna-radiante-perfume.png', titulo: 'Perfume Luna absoluta', subtitulo: '75ml', preco: 'R$ 169,90', marca: 'natura' , maxQuantidade: 2},
  { imagem: 'img/produtos/shampoo-lily.png', titulo: 'Shampoo Lily', subtitulo: 'Acetinado 250ml', preco: 'R$ 57,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/Sabonete-Ekos-Castanha.png', titulo: 'Sabonete líquido EKOS castanha', subtitulo: '250ml', preco: 'R$ 59,99', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/desedorante-rollon-erva-doce.png', titulo: 'Desodorante Rollon de erva doce', subtitulo: 'antitranspirante 70ml', preco: 'R$ 27,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/polpa-para-mãos-natura-ekos-takuma.png', titulo: 'Polpa para mãos natura EKOS', subtitulo: 'tukumã 75g', preco: 'R$ 55,90', marca: 'natura', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/refil-hidratante-corporal-natura-tododia-capim-limão-hortelã.png', titulo: 'Refil Hidratante corporal Capim, limão e hortelã', subtitulo: 'Natura todoDia 400ml', preco: 'R$ 51,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-hidratante-corporal-natura-tododia-tamara-canela.png', titulo: 'Refil Hidratante corporal Tamara e canela', subtitulo: 'Natura todoDia 400ml', preco: 'R$ 51,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-hidratante-corporal-cuide-se-bem-boa-noite.png', titulo: 'Refil Hidratante corporal Cuide-se bem', subtitulo: 'Boa noite 350ml', preco: 'R$ 54,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-hidratante-corporal-nativa-spa-ameixa-dourada.png', titulo: 'Refil Hidratante corporal Ameixa dourada', subtitulo: 'Nativa SPA 350ml', preco: 'R$ 62,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-hidratante-corporal-nativa-spa-orquídea-noire.png', titulo: 'Refil Hidratante corporal Orquídea noire', subtitulo: 'Nativa SPA 350ml', preco: 'R$ 62,90', marca: 'boticario', maxQuantidade: 2},
  { imagem: 'img/produtos/refil-hidratante-corporal-lily.png', titulo: 'Refil Hidratante Acetinado corporal', subtitulo: 'lily 250ml', preco: 'R$ 94,90', marca: 'boticario' , maxQuantidade: 2},
  // Adicione mais produtos conforme necessário 
  { imagem: 'img/produtos/eudora-siage-shampoo-acelera-o-crescimento.png', titulo: 'shampoo acelera o crescimento', subtitulo: 'Eudora Siàge 250ml', preco: 'R$ 44,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siage-shampoo-combate-frizz.png', titulo: 'shampoo Combate o frizz', subtitulo: 'Eudora Siàge 250ml', preco: 'R$ 44,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siage-shampoo-cauterização-dos-lisos.png', titulo: 'shampoo Cauterização dos lisos', subtitulo: 'Eudora Siàge 250ml', preco: 'R$ 44,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siage-shampoo-Regeneração-pós-química.png', titulo: 'shampoo Regeneração pós química', subtitulo: 'Eudora Siàge 250ml', preco: 'R$ 44,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siage-condicionador-acelera-crescimento.png', titulo: 'condicionador acelera o crescimento', subtitulo: 'Eudora Siàge 200ml', preco: 'R$ 47,99', marca: 'eudora', maxQuantidade: 2},
  { imagem: 'img/produtos/eudora-siage-condicionador-cauterização-dos-lisos.png', titulo: 'condicionador cauterização dos lisos', subtitulo: 'Eudora Siàge 200ml', preco: 'R$ 47,99', marca: 'eudora', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/desodorante-em-spray-kaiak-aventura.png', titulo: 'Desodorante em spray Kaiak aventura', subtitulo: '100ml', preco: 'R$ 47,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/Refil-desodorante-em-spray-kaiak-aventura.png', titulo: 'Refil Desodorante em spray Kaiak aventura', subtitulo: '100ml', preco: 'R$ 35,90', marca: 'natura', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-care-luva-de-silicone-creme-para-mãos.png', titulo: 'luva de silicone creme para mãos', subtitulo: 'Avon care 120g ', preco: 'R$ 19,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/Creme-depilatório-para-corpo.png', titulo: 'Creme depilatório para o corpo', subtitulo: '125g', preco: 'R$ 34,99', marca: 'avon' , maxQuantidade: 2},
  { imagem: 'img/produtos/creme-esfoliante-para-os-pés-com-kiwi-morango.png', titulo: 'Creme esfoliante para os pés', subtitulo: 'com kiwi e morango 80g', preco: 'R$ 19,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/antitranspirante-Rollon-cuide-se-bem-leite-mel.png', titulo: 'Antitranspirante Rollon cuide-se bem', subtitulo: 'leite e mel 55ml', preco: 'R$ 27,90', marca: 'boticario', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
  { imagem: 'img/produtos/avon-CARE-luva-de-silicone-erva-doce-creme-para-mãos.png', titulo: 'luva de silicone erva doce', subtitulo: 'Avon care creme para mãos 75g', preco: 'R$ 14,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/avon-CARE-Sun+Rosto-FPS-30-PROTETOR-SOLAR.png', titulo: 'PROTETOR SOLAR Sun+Rosto', subtitulo: 'Avon CARE FPS 30, 200g', preco: 'R$ 39,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/delineador-líquido-preto-Avon.png', titulo: 'Delineador líquido preto Avon', subtitulo: '3ml', preco: 'R$ 23,99', marca: 'avon', maxQuantidade: 2},
  { imagem: 'img/produtos/delineador-retrátil-preto-Disney-Avon.png', titulo: 'Delineador retrátil preto Coleção Disney', subtitulo: 'Avon', preco: 'R$ 15,99', marca: 'avon', maxQuantidade: 2},
  //{ imagem: "img/produtos/mascara-á-prova-d'água-preto-mega-BFF.png", titulo: "Mega BFF", subtitulo: "Mascara á prova d'água preto 7ml", preco: 'R$ 24,99', marca: 'avon', marca: 'promocao', maxQuantidade: 2},
  // Adicione mais produtos conforme necessário
];


var produtosFiltrados = [];
var produtosCarregados = [];
var itensPorPagina = 18;
var paginaAtual = 0;
var filtroAtivo = 'todos';

function criarCardProduto(produto) {
  var card = document.createElement('div');
  card.classList.add('col-1');
  card.setAttribute('data-marca', produto.marca);

  var img = document.createElement('img');
  img.src = produto.imagem;
  img.alt = produto.titulo;
  img.classList.add('produto-img');

  var tituloElemento = document.createElement('div');
  tituloElemento.classList.add('produto-titulo');
  tituloElemento.textContent = produto.titulo;

  var subtituloElemento = document.createElement('div');
  subtituloElemento.classList.add('produto-subtitulo');
  subtituloElemento.textContent = produto.subtitulo;

  var precoElemento = document.createElement('div');
  precoElemento.classList.add('produto-preco');
  precoElemento.textContent = produto.preco;

  var botaoAdicionar = document.createElement('button');
  botaoAdicionar.classList.add('btn-adicionar');
  botaoAdicionar.textContent = "Adicionar ao Carrinho";

  card.appendChild(img);
  card.appendChild(tituloElemento);
  card.appendChild(subtituloElemento);
  card.appendChild(precoElemento);
  card.appendChild(botaoAdicionar);

  return card;
}

function exibirProdutos() {
  var linha = document.getElementById('linha');
  linha.innerHTML = ''; // Limpa os produtos atuais

  produtosCarregados.forEach(function (produto) {
    if (filtroAtivo === 'todos' || produto.marca === filtroAtivo) {
      var card = criarCardProduto(produto);
      linha.appendChild(card);
    }
  });

  // Chamar a função ready() para reaplicar os eventos
  ready();
}

function carregarProdutos() {
  var inicio = paginaAtual * itensPorPagina;
  var fim = inicio + itensPorPagina;
  var produtosVisiveis = produtosFiltrados.slice(inicio, fim);

  if (paginaAtual === 0) {
    produtosCarregados = produtosVisiveis;
  } else {
    produtosCarregados = produtosCarregados.concat(produtosVisiveis);
  }

  paginaAtual++;

  exibirProdutos();

  if (paginaAtual * itensPorPagina >= produtosFiltrados.length) {
    document.getElementById('carregarMais').style.display = 'none';
  } else {
    document.getElementById('carregarMais').style.display = 'block';
  }
}

function filtrarProdutos(marca) {
  filtroAtivo = marca;
  produtosFiltrados = produtos.filter(function (produto) {
    return marca === 'todos' || produto.marca === marca;
  });

  produtosCarregados = [];
  paginaAtual = 0;

  carregarProdutos();

  var botoes = document.querySelectorAll('.buttons button');
  botoes.forEach(function (botao) {
    botao.classList.remove('active');
  });
  document.getElementById(marca || 'todos').classList.add('active');

  // Reaplicar os eventos após filtrar os produtos
  ready();
}

document.getElementById('todos').addEventListener('click', function () {
  filtrarProdutos('todos');
});
document.getElementById('natura').addEventListener('click', function () {
  filtrarProdutos('natura');
});
document.getElementById('boticario').addEventListener('click', function () {
  filtrarProdutos('boticario');
});
document.getElementById('avon').addEventListener('click', function () {
  filtrarProdutos('avon');
});
document.getElementById('eudora').addEventListener('click', function () {
  filtrarProdutos('eudora');
});

document.getElementById('promocao').addEventListener('click', function () {
  filtrarProdutos('promocao');
});

// Inicializar
filtrarProdutos('todos');

document.getElementById('carregarMais').addEventListener('click', carregarProdutos);

// Salvar o estado do carrinho no Local Storage
function saveCartToLocalStorage() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var cartItems = [];

  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var title = cartBox.getElementsByClassName('cart-produto-title')[0].innerText;
    var price = cartBox.getElementsByClassName('cart-price')[0].innerText;
    var imgSrc = cartBox.getElementsByClassName('cart-image')[0].src;
    var quantidade = cartBox.getElementsByClassName('cart-quantidade')[0].value;

    cartItems.push({ title, price, imgSrc, quantidade });
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Carregar o estado do carrinho do Local Storage
function loadCartFromLocalStorage() {
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  var cartContent = document.getElementsByClassName('cart-content')[0];

  // Limpar o carrinho atual antes de carregar os itens do Local Storage
  cartContent.innerHTML = '';

  cartItems.forEach(function (item) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');

    var cartBoxContent = `
      <img src="${item.imgSrc}" alt="" class="cart-image">
      <div class="detalhe-box">
        <div class="cart-produto-title">${item.title}</div>
        <div class="cart-price">${item.price}</div>
        <input type="number" value="${item.quantidade}" class="cart-quantidade">
      </div>
      <img src="img/logos/lixo.png" class="cart-remover">`;

    cartShopBox.innerHTML = cartBoxContent;
    cartContent.append(cartShopBox);

    // Adicionar evento para remover item
    cartShopBox.getElementsByClassName('cart-remover')[0]
      .addEventListener('click', removerCartItem);

    // Adicionar evento para mudança de quantidade
    cartShopBox.getElementsByClassName('cart-quantidade')[0]
      .addEventListener('change', quantidadeChanged);
  });

  updatetotal();
}

let cartIcon = document.querySelector('.carrinho');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
  cart.classList.add("active");
}

closeCart.onclick = () => {
  cart.classList.remove("active");
}

// Carrinho funcionando JS
document.addEventListener("DOMContentLoaded", ready);

function ready() {
  // Carregar o carrinho do Local Storage
  loadCartFromLocalStorage();

  // Remover itens do carrinho
  var removerCartButtons = document.getElementsByClassName('cart-remover');
  for (var i = 0; i < removerCartButtons.length; i++) {
    var button = removerCartButtons[i];
    button.addEventListener('click', removerCartItem);
  }

  // Mudança de quantidades
  var quantidadeInputs = document.getElementsByClassName('cart-quantidade');
  for (var i = 0; i < quantidadeInputs.length; i++) {
    var input = quantidadeInputs[i];
    input.addEventListener('change', quantidadeChanged);
  }

  // Adicionar ao carrinho
  var addCart = document.getElementsByClassName('btn-adicionar');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked);
  }
}

// Função remover itens do carrinho
function removerCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
  saveCartToLocalStorage(); // Salva o carrinho após remover um item
}

// Função mudança de quantidades
function quantidadeChanged(event) {
  var input = event.target;
  var cartBox = input.parentElement.parentElement;
  var titulo = cartBox.getElementsByClassName('cart-produto-title')[0].innerText;

  // Buscar o produto no array de produtos para obter o limite máximo
  var produtoInfo = produtos.find(p => p.titulo.trim().toLowerCase() === titulo.trim().toLowerCase());
  var maxQuantidade = produtoInfo ? produtoInfo.maxQuantidade : 1;

  if (input.value > maxQuantidade) {
    alert('Você já atingiu o limite máximo deste produto.');
    input.value = maxQuantidade;
  } else if (input.value <= 0) {
    input.value = 1;
  }

  saveCartToLocalStorage(); // Salvar o estado atualizado do carrinho
  updatetotal();
}

//Função adicionarCarrinho para verificar o limite
function adicionarCarrinho(event) {
  var button = event.target;
  var produto = button.parentElement;
  var titulo = produto.getElementsByClassName('produto-titulo')[0].innerText;
  var preco = produto.getElementsByClassName('produto-preco')[0].innerText;
  var imagemSrc = produto.getElementsByClassName('produto-img')[0].src;

  // Buscar o produto no array de produtos para obter o limite máximo
  var produtoInfo = produtos.find(p => p.titulo === titulo);
  var maxQuantidade = produtoInfo ? produtoInfo.maxQuantidade : 1; // Padrão de 1 se não encontrar

  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');

  // Verificar se o produto já está no carrinho
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var cartTitle = cartBox.getElementsByClassName('cart-produto-title')[0].innerText;
    var quantidade = parseInt(cartBox.getElementsByClassName('cart-quantidade')[0].value);

    if (cartTitle === titulo) {
      if (quantidade >= maxQuantidade) {
        alert('Você já atingiu o limite máximo deste produto.');
        return; // Não adiciona mais
      } else {
        cartBox.getElementsByClassName('cart-quantidade')[0].value = quantidade + 1;
        saveCartToLocalStorage(); // Salvar o estado atualizado do carrinho
        updatetotal();
        return; // Já adicionado, então sair da função
      }
    }
  }

  // Adicionar novo produto ao carrinho se não estiver no carrinho
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');

  var cartBoxContent = `
    <img src="${imagemSrc}" alt="" class="cart-image">
    <div class="detalhe-box">
      <div class="cart-produto-title">${titulo}</div>
      <div class="cart-price">${preco}</div>
      <input type="number" value="1" class="cart-quantidade">
    </div>
    <img src="img/logos/lixo.png" class="cart-remover">`;

  cartShopBox.innerHTML = cartBoxContent;
  cartContent.append(cartShopBox);

  // Adicionar eventos ao novo item do carrinho
  cartShopBox.getElementsByClassName('cart-remover')[0]
    .addEventListener('click', removerCartItem);
  cartShopBox.getElementsByClassName('cart-quantidade')[0]
    .addEventListener('change', quantidadeChanged);

  saveCartToLocalStorage(); // Salvar o estado atualizado do carrinho
  updatetotal();
}

// Função adicionar ao carrinho
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('produto-titulo')[0].innerText;
  var price = shopProducts.getElementsByClassName('produto-preco')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('produto-img')[0].src;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-produto-title');

  // Verificar se o item já existe no carrinho
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText === title) {
      // Se o item já existe, atualizar a quantidade
      var quantidadeInput = cartItemsNames[i].parentElement.parentElement.getElementsByClassName('cart-quantidade')[0];
      quantidadeInput.value = parseInt(quantidadeInput.value) + 1;
      updatetotal();
      saveCartToLocalStorage(); // Salva o carrinho após atualizar a quantidade
      return;
    }
  }

  var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-image">
    <div class="detalhe-box">
      <div class="cart-produto-title">${title}</div>
      <div class="cart-price">${price}</div>
      <input type="number" value="1" class="cart-quantidade">
    </div>
    <img src="img/logos/lixo.png" class="cart-remover">`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);

  // Adicionar evento para remover item
  cartShopBox.getElementsByClassName('cart-remover')[0]
    .addEventListener('click', removerCartItem);

  // Adicionar evento para mudança de quantidade
  cartShopBox.getElementsByClassName('cart-quantidade')[0]
    .addEventListener('change', quantidadeChanged);

  // Atualizar o total
  updatetotal();

  saveCartToLocalStorage(); // Salva o carrinho após adicionar um item
}

// Atualizar total
function updatetotal() {
  var cartContent = document.getElementsByClassName('cart-content')[0];
  var cartBoxes = cartContent.getElementsByClassName('cart-box');
  var total = 0;

  for (var i = 0; i < cartBoxes.length; i++) {
      var cartBox = cartBoxes[i];
      var priceElement = cartBox.getElementsByClassName('cart-price')[0];
      var quantidadeElement = cartBox.getElementsByClassName('cart-quantidade')[0];

      // Remover o símbolo de moeda e converter para número
      var price = parseFloat(priceElement.innerText.replace('R$', '').replace(',', '.').trim());
      var quantidade = quantidadeElement.value;

      // Verifica se a conversão foi bem sucedida
      if (!isNaN(price) && !isNaN(quantidade)) {
          total += price * quantidade;
      }
  }

  // Arredondar para duas casas decimais
  total = Math.round(total * 100) / 100;

  // Formatar o total com vírgula como separador decimal
  var totalFormatted = total.toFixed(2).replace('.', ',');

  document.getElementsByClassName('total-price')[0].innerText = 'R$ ' + totalFormatted;
}


document.addEventListener('DOMContentLoaded', function() {
  var cartContent = document.querySelector('.cart-content');

  function ajustarScroll() {
      if (cartContent.scrollHeight > 600) {
          cartContent.classList.add('scrollable');
      } else {
          cartContent.classList.remove('scrollable');
      }
  }

  // Ajustar o scroll quando o conteúdo é carregado ou atualizado
  ajustarScroll();

  // Se você estiver adicionando/removendo itens dinamicamente, 
  // pode ser necessário chamar ajustarScroll() novamente após essas mudanças.
  // Por exemplo, após adicionar um item ao carrinho:
  document.querySelectorAll('.btn-adicionar').forEach(button => {
      button.addEventListener('click', ajustarScroll);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var cart = document.querySelector('.cart');
  var cartIcon = document.querySelector('.carrinho');
  var closeCart = document.querySelector('#close-cart');
  var btnFinalize = document.querySelector('.btn-finalize');
  var modal = document.getElementById('modal');
  var spanClose = document.querySelector('.modal .close');
  var contactForm = document.getElementById('contactForm');

  // Função para abrir o modal
  function abrirModal() {
      modal.style.display = 'block';
  }

  // Função para fechar o modal
  function fecharModal() {
      modal.style.display = 'none';
  }

  // Exibir o modal ao clicar no botão "Finalizar"
  btnFinalize.addEventListener('click', abrirModal);

  // Fechar o modal ao clicar no "X"
  spanClose.addEventListener('click', fecharModal);

  // Fechar o modal ao clicar fora do modal
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          fecharModal();
      }
  });

  // Enviar os dados do carrinho para o WhatsApp
    contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var apelido = document.getElementById('apelido').value;

    var cartItems = document.getElementsByClassName('cart-box');
    var cartDetails = [];
    var totalPrice = 0; // Inicializa o preço total

    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        var title = item.getElementsByClassName('cart-produto-title')[0].innerText;
        var priceText = item.getElementsByClassName('cart-price')[0].innerText;
        var quantity = item.getElementsByClassName('cart-quantidade')[0].value;

        // Extrai o valor numérico do preço
        var price = parseFloat(priceText.replace('R$', '').replace(',', '.').trim());
        var itemTotalPrice = price * quantity; // Calcula o preço total do item
        totalPrice += itemTotalPrice; // Adiciona ao preço total

        cartDetails.push(`Produto: ${title}, Preço: R$${price.toFixed(2)}, Quantidade: ${quantity}`);
    }

    // Formata a mensagem com os detalhes do carrinho e o preço total
    var message = `Nome: ${nome}\nApelido: ${apelido}\n\nDetalhes do Carrinho:\n${cartDetails.join('\n')}\n\nPreço Total: R$${totalPrice.toFixed(2)}`;
    var whatsappUrl = `https://wa.me/5511989095045?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');

    fecharModal();
});

  // Outros eventos
  cartIcon.addEventListener('click', function() {
      cart.classList.add('active');
      document.body.classList.add('no-scroll');
  });

  closeCart.addEventListener('click', function() {
      cart.classList.remove('active');
      document.body.classList.remove('no-scroll');
  });
});