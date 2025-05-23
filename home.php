<?php

if (isset($_POST['submit'])) {
    // Inclui a configuração de conexão
    include_once('config.php');

    // Sanitização dos dados de entrada
    $nome = mysqli_real_escape_string($conexao, $_POST['nome']);
    $telefone = mysqli_real_escape_string($conexao, $_POST['telefone']);

    // Validação básica (exemplo)
    if (!empty($nome) && !empty($telefone)) {
        // Uso de prepared statements para prevenir SQL injection
        $stmt = $conexao->prepare("INSERT INTO usuarios (nome, telefone) VALUES (?, ?)");
        $stmt->bind_param("ss", $nome, $telefone);

        if ($stmt->execute()) {
            echo "Cadastro realizado com sucesso!";
        } else {
            echo "Erro ao cadastrar: " . $stmt->error;
        }

        // Fechar statement
        $stmt->close();
    } else {
        echo "Por favor, preencha todos os campos.";
    }

    // Fechar conexão
    $conexao->close();

}

?>



<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsivo.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/40de13aa6f.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="favicon/k-removebg-preview.ico" type="image/x-icon">
    <title>Kaká Cosméticos</title>
</head>

<body>

    <header>
        <div class="nav-container">
            <a href="home"><img class="logo" src="img/logos/logo-kaka-cosmeticos.png" alt=""></a>
            <img class="carrinho" src="img/carrinho-de-compras.png" alt="">

            <div class="cart">
                <h2 class="cart-title">Meu Carrinho</h2>

                <div class="cart-content">
                    <!--Total-->
                </div>
                <div class="total">
                    <div class="total-title">Total</div>
                    <div class="total-price">R$ 0</div>
                </div>
                <button type="button" class="btn-finalize">Finalizar Compra</button>
                <!--cart fechar-->
                <img src="img/logos/cruz.png" id="close-cart">

            </div>
        </div>

    </header>
    <!------FIM DO HEADER------>

    <!-- Modal para inserir nome e apelido -->
    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Informações de Contato</h2>
            <form id="contactForm">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="apelido">Apelido:</label>
                <input type="text" id="apelido" name="apelido" required>
                <button type="submit">Enviar</button>
            </form>
        </div>
    </div>



    <section class="banner-inicial">

        <div class="banner-wrapper">
            <div class="banner-single"><img src="img/banners/banner-natura.png" alt=""></div>
            <div class="banner-single"><img src="img/banners/banner-boticario.png" alt=""></div>
            <div class="banner-single"><img src="img/banners/banner-avon.png" alt=""></div>
            <div class="banner-single"><img src="img/banners/banner-eudora.png" alt=""></div>
        </div>

        <ul class="indicators">
            <li class="active" data-slide="0"></li>
            <li data-slide="1"></li>
            <li data-slide="2"></li>
            <li data-slide="3"></li>
        </ul>

    </section>
    <!------FIM DA SECTION BANNER INICIAL------->

    <section class="container-afiliados">
        <h1 class="titulo">por encomendas</h1>

        <div class="afiliados">
            <a href="https://encurtador.naturaavon.com/M1SY5s7" target="_blank">
                <img src="img/afiliados/natura.png" alt="natura">
            </a>
            <a href="https://minhaloja.grupoboticario.com.br/loja-thamiresdasilvadesouza-15346656?utm_source=ab&utm_medium=divulgar" target="_blank">
                <img src="img/afiliados/boticario.png" alt="boticario">
            </a>
            <a href="https://encurtador.naturaavon.com/9a4kclK" target="_blank">
                <img src="img/afiliados/avon.png" alt="avon">
            </a>
            <a href="https://minhaloja.eudora.com.br/loja-thamiresdasilvadesouza-15346656" target="_blank">
                <img src="img/afiliados/eudora.png" alt="eudora">
            </a>
        </div>
    </section>

    <section class="corpo-categorias">
        <h1 class="titulo">Para pronto entrega</h1>
        <div class="ver-tudo">
            <a href="pronta_entrega">Ver Tudo</a>
        </div>

        <div class="linha remover">
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/hidratacao-Luna-Coragem.png" alt="Hidratação Luna Coragem"></a>
                <h4 class="produto-titulo">Hidratação Luna Coragem</h4>
                <p class="descricao-produto">300ml</p>
                <p class="produto-preco">R$ 80,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/cuide-se bem hidrantante melancia.png"
                        alt="Cuide-se Bem Melancia"></a>
                <h4 class="produto-titulo">Cuide-se Bem Melancia</h4>
                <p class="descricao-produto">Hidratante corporal 400ml</p>
                <p class="produto-preco">R$ 69,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/gloss melancia.png"
                        alt="Gloss Labial Melancia"></a>
                <h4 class="produto-titulo">Gloss Labial Melancia</h4>
                <p class="descricao-produto">Intense gloss labial 5,2ml</p>
                <p class="produto-preco">R$ 39,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/rollon melancia.png"
                        alt="Cuide-se Bem Antitranspirante Melancia"></a>
                <h4 class="produto-titulo">Cuide-se Bem Antitranspirante Melancia</h4>
                <p class="descricao-produto">Desodorante roll-on 55ml</p>
                <p class="produto-preco">R$ 27,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/cuide-se-bem-boa-noite.png"
                        alt="Cuide-se bem Boa noite"></a>
                <h4 class="produto-titulo">Cuide-se bem Boa noite</h4>
                <p class="descricao-produto">hidratante corporal <br> 200ml</p>
                <p class="produto-preco">R$ 69,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/Hidratante-EKOS-madeira-em-flor.png"
                        alt="Hidratante EKOS madeira em flor"></a>
                <h4 class="produto-titulo">Hidratante EKOS madeira em flor</h4>
                <p class="descricao-produto">200ml</p>
                <p class="produto-preco">R$ 61,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
        </div>
        <!-----FIM DA DIV LINHA------>

        <div class="linha" data-limite="2">
            <div class="col-1">
                <a href="#"><img class="produto-img" src="img/produtos/Perfume homem COR.AGIO.png"
                        alt="Perfume homem COR.AGIO"></a>
                <h4 class="produto-titulo">Perfume homem COR.AGIO</h4>
                <p class="descricao-produto">100ML</p>
                <p class="produto-preco">R$ 269,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/Perfume-Kaiak-urbe.png"
                        alt="Perfume-Kaiak-urbe"></a>
                <h4 class="produto-titulo">Perfume-Kaiak-urbe</h4>
                <p class="descricao-produto">100ml</p>
                <p class="produto-preco">R$ 172,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img"
                        src="img/produtos/Perfume Glamour Secrets Black intense.png"
                        alt="Perfume Glamour Secrets Black intense"></a>
                <h4 class="produto-titulo">Perfume Glamour Secrets Black intense</h4>
                <p class="descricao-produto">75ml</p>
                <p class="produto-preco">R$ 174,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/Desodorante em spray Luna Radiante.png"
                        alt="Desodorante em spray Luna Radiante"></a>
                <h4 class="produto-titulo">Desodorante em spray Luna Radiante</h4>
                <p class="descricao-produto">100ml</p>
                <p class="produto-preco">R$ 47,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/Desodorante em spray Kaiak aero.png"
                        alt="Desodorante em spray Kaiak aero"></a>
                <h4 class="produto-titulo">Desodorante em spray Kaiak aero</h4>
                <p class="descricao-produto">100ml</p>
                <p class="produto-preco">R$ 47,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
            <div class="col-1" data-limite="2">
                <a href="#"><img class="produto-img" src="img/produtos/Perfume Her Code Touch.png" alt="Perfume Her Code Touch"></a>
                <h4 class="produto-titulo">Perfume Her Code Touch</h4>
                <p class="descricao-produto">50ml</p>
                <p class="produto-preco">R$ 229,90</p>
                <button class="btn-adicionar">Adicionar no carrinho</button>
            </div>
        </div>
        <!-----FIM DA DIV LINHA------>

        <div class="ver-tudo1">
            <a href="pronta_entrega">Ver Tudo</a>
        </div>
    </section>

    <section class="contato">

        <div class="newsletter">
            <h1>Cadastre-se e Receba novidades, ofertas exclusivas e muito mais!</h1>

            <form class="newsletter-form" action="index.php" method="POST">
                <div class="simple-set">
                    <span>Nome*</span>
                    <input type="text" name="nome" id="nome" placeholder="*Carlos*" required>
                </div>

                <div class="simple-set">
                    <span>Telefone*</span>
                    <input type="tel" name="telefone" id="telefone" placeholder="*(11) 9999-0000*" required>
                </div>

                <div class="simple-set-submit">
                    <input type="submit" name="submit" id="enviar" value="Cadastre-se">
                </div>
            </form>

        </div><!--newsletter-->

    </section>

    <section class="contatos">
        <h3>Contatos</h3>
        <div class="contatos-secao">
            <div class="cor-contato">
                <a href="https://wa.me/5511989095045?text=" target="_blank">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>(11) 98909-5045</span>
                </a>

            </div>
            <div class="cor-contato">
                <a href="https://www.instagram.com/kaka.cosmeticoss?utm_source=qr&igsh=MWp5NmM2NzNqOW16eg=="
                    target="_blank">
                    <i class="fab fa-instagram"></i>
                    <span>kaka.cosmeticoss</span>
                </a>
            </div>
        </div>
    </section>
    
    <div id="btnTop">
    <i class="fa-solid fa-arrow-up"></i>
    </div>

    <script src="js/jquery.js"></script>
    <script src="js/script.js"></script>
</body>

</html>