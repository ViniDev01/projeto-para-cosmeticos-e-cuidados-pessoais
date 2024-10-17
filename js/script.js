$(document).ready(function () {

    // Inicializa as variáveis do banner
    let currentIndex = 0;
    const slides = $('.banner-single');
    const totalSlides = slides.length;

    function showSlide(index) {
      const offset = -index * 100;
      $('.banner-wrapper').css('transform', 'translateX(' + offset + '%)');
      $('.indicators li').removeClass('active');
      $('.indicators li').eq(index).addClass('active');
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    }

    // Automatic slide change
    let slideInterval = setInterval(nextSlide, 3000);

    // Manual navigation
    $('.indicators li').click(function () {
      const index = $(this).data('slide');
      currentIndex = index;
      showSlide(currentIndex);
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 3000); // Restart the interval
    });
    
    $(function() {
      // Exibir/ocultar o botão de voltar ao topo com base na rolagem
      $(window).on('scroll', function() {
          if ($(this).scrollTop() > 90) {
              $('#btnTop').fadeIn();
          } else {
              $('#btnTop').fadeOut();
          }
      });
  
      // Rolar suavemente para o topo ao clicar no botão
      $('#btnTop').on('click', function() {
          $('html, body').animate({ scrollTop: 0 }, 500);
      });
  });

});

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
  console.log(removerCartButtons);
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
  //adicionar ao carrinho
  var addCart = document.getElementsByClassName('btn-adicionar')
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i]
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
  var limite = parseInt(input.getAttribute('data-limite'));

  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
  } else if (input.value > limite) {
      input.value = limite;
      alert("Quantidade excede o limite disponível!");
  }

  updatetotal();
  saveCartToLocalStorage(); // Salva o carrinho após alterar a quantidade
}


// Função adicionar ao carrinho

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('produto-titulo')[0].innerText;
  var price = shopProducts.getElementsByClassName('produto-preco')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('produto-img')[0].src;
  var limite = parseInt(shopProducts.getAttribute('data-limite'));

  addProductToCart(title, price, productImg, limite);
}


function addProductToCart(title, price, productImg, limite) {
  var cartShopBox = document.createElement('div');
  cartShopBox.classList.add('cart-box');
  var cartItems = document.getElementsByClassName('cart-content')[0];
  var cartItemsNames = cartItems.getElementsByClassName('cart-produto-title');

  for (var i = 0; i < cartItemsNames.length; i++) {
      if (cartItemsNames[i].innerText === title) {
          alert("Este produto já está no carrinho!");
          return;
      }
  }

  var cartBoxContent = `
      <img src="${productImg}" alt="" class="cart-image">
      <div class="detalhe-box">
          <div class="cart-produto-title">${title}</div>
          <div class="cart-price">${price}</div>
          <input type="number" value="1" class="cart-quantidade" data-limite="${limite}">
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



document.addEventListener('DOMContentLoaded', function () {
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