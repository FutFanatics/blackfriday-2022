import bannerLoja from '../../../img/banner/bannersmenu/bannerloja.png';

function Menu_Desk(){
    return(
        <div className="container-fluid menu-desk">
            <div className="row">
                <div className="col-12">
                    <nav>
                        <ul className="d-flex justify-content-between align-items-center">
                            <li className="parent">
                                <a href="">Loja</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Departamentos</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros">Clubes Brasileiros</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais">Clubes Internacionais</a></li>
                                                                <li><a href="{{ store.url }}/selecoes">Seleções</a></li>
                                                                <li><a href="{{ store.url }}/futebol">Futebol</a></li>
                                                                <li><a href="{{ store.url }}/treino">Treino</a></li>
                                                                <li><a href="{{ store.url }}/esportes">Esportes</a></li>
                                                                <li><a href="{{ store.url }}/calcados">Calçados</a></li>
                                                                <li><a href="{{ store.url }}/casual">Casual</a></li>
                                                                <li><a href="{{ store.url }}/copa-do-mundo-2022">Vem, Hexa</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Destaque</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/novas-convocadas?order=lancamento">Novas Convocadas</a></li>
                                                                <li><a href="{{ store.url }}/camisas-classNameicas?order=lancamento">Camisas Clássicas</a></li>
                                                                <li><a href="{{ store.url }}/novas-chuteiras?order=lancamento">Novas Chuteiras</a></li>
                                                                <li><a href="{{ store.url }}/loja/busca.php?loja=311840&variacao=camisa-oficial_sim">Camisas Oficiais</a></li>
                                                                <li><a href="{{ store.url }}/camisas-personalizadas">Camisas Personalizadas</a></li>
                                                                <li><a href="{{ store.url }}/clubes-regionais?order=lancamento">Clubes Regionais</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li className="d-none">
                                                            <a className="menu-title" href="">Novidades</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/compre-ganhe-coca-cola">Compre e Ganhe - Coca-Cola</a></li>
                                                                <li><a href="{{ store.url }}/compre-ganhe-umbro">Compre e Ganhe - Umbro</a></li>
                                                                <li><a href="{{ store.url }}/compre-ganhe-under-armour">Compre e Ganhe - Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links mt-0">
                                                            <a href="{{ store.url }}/app">App da Fut</a>
                                                            <a href="{{ store.url }}/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_loja_link }}" target="{{ settings.menu_loja_link_target }}">
                                                            <img className='bannermenu' src={ bannerLoja } alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/clubes-brasileiros">Brasileiros</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/sao-paulo/">São Paulo</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/corinthians">Corinthians</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/palmeiras">Palmeiras</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/ponte-preta">Ponte Preta</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/santos">Santos</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/sao-paulo">São Paulo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/sao-paulo/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/">Rio de Janeiro</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/botafogo">Botafogo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/flamengo">Flamengo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/fluminense">Fluminense</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/vasco-da-gama">Vasco</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-de-janeiro/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/parana/">Paraná</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/parana/athletico-pr">Athletico-PR</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/parana/coritiba">Coritiba</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/parana/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/santa-catarina/">Santa Catarina</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/santa-catarina/avai">Avaí</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/santa-catarina/chapecoense">Chapecoense</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/santa-catarina/figueirense">Figueirense</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/santa-catarina/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/rio-grande-do-sul/">Rio Grande do Sul</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-grande-do-sul/gremio">Grêmio</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-grande-do-sul/internacional">Internacional</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/rio-grande-do-sul/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/minas-gerais/">Minas Gerais</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/minas-gerais/america-mineiro">América-MG</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/minas-gerais/atletico-mineiro">Atlético-MG</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/minas-gerais/cruzeiro">Cruzeiro</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/minas-gerais/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/centro-oeste/">Centro Oeste</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/centro-oeste/atletico-goianiense">Atlético-GO</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/centro-oeste/goias">Goiás</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/centro-oeste/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/nordeste/">Nordeste</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/bahia">Bahia</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/ceara">Ceará</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/fortaleza">Fortaleza</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/nautico">Náutico</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/santa-cruz">Santa Cruz</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/sampaio-correa">Sampaio Corrêa</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/sport-recife">Sport Recife</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/vitoria">Vitória</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/nordeste/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros/norte/">Norte</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/norte/clube-do-remo">Remo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/norte/paysandu">Paysandu</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros/norte/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-none">
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros">Indicado para</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=indicado-para_casual">Casual</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=indicado-para_goleiro">Goleiro</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-brasileiros">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-brasileiros?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/clubes-brasileiros?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/clubes-brasileiros?order=lancamento">Lançamentos</a>
                                                            <a href="{{ store.url }}/clubes-brasileiros?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_brasileiros_link }}" target="{{ settings.menu_brasileiros_link_target }}">
                                                            <img src="{{ asset(settings.menu_brasileiros_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/clubes-internacionais">Internacionais</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-espanhola/">Liga Espanhola</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-espanhola/atletico-de-madrid">Atletico de Madrid</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-espanhola/barcelona">Barcelona</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-espanhola/real-madrid">Real Madrid</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=clube-de-futebol_valencia">Valencia</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-espanhola/villarreal">Villarreal</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-espanhola/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-alema/">Liga Alemã</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-alema/bayern-de-munique">Bayern de Munique</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-alema/borussia-dortmund">Borussia Dortmund</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-alema/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-europeus/liga-inglesa/">Liga Inglesa</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/arsenal">Arsenal</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/liverpool">Liverpool</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/manchester-city">Manchester City</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/manchester-united">Manchester United</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/tottenham">Tottenham</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-inglesa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-italiana/">Liga Italiana</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-italiana/juventus">Juventus</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-italiana/milan">Milan</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/liga-italiana?variacao=clube-de-futebol_roma">Roma</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-italiana/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-francesa/">Liga Francesa</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-francesa/olympique-de-marseille">Olympique de Marseille</a></li>
                                                                <li><a href="{{ store.url }}/clubes-europeus/liga-francesa/paris-saint-germain">Paris Saint-Germain</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais/clubes-europeus/liga-francesa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-europeus">Clubes Europeus</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/concacaf/">CONCACAF</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais/clubes-sul-americanos/">Sulamericanos</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais">Indicado para</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=indicado-para_casual">Casual</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/clubes-internacionais">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/clubes-internacionais?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/clubes-internacionais?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/clubes-internacionais?order=lancamento">Lançamentos</a>
                                                            <a href="{{ store.url }}/clubes-internacionais?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_internacionais_link }}" target="{{ settings.menu_internacionais_link_target }}">
                                                            <img src="{{ asset(settings.menu_internacionais_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/selecoes">Seleções</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes/africa/">África</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=clube-de-futebol_senegal">Senegal</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/africa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes/america-do-sul/">América do Sul</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes/america-do-sul/argentina">Argentina</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/america-do-sul/brasil">Brasil</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/america-do-sul/colombia">Colômbia</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/america-do-sul/uruguai">Uruguai</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/america-do-sul/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes/asia/">Ásia</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes/asia/japao">Japão</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/asia/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes/concacaf/">CONCACAF</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes/concacaf/costa-rica">Costa Rica</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/concacaf/mexico">México</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/concacaf/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes/europa/">Europa</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes/europa/alemanha">Alemanha</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/belgica">Bélgica</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/dinamarca">Dinamarca</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/espanha">Espanha</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/franca">França</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/inglaterra">Inglaterra</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/islandia">Islândia</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/italia">Itália</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/russia">Rússia</a></li>
                                                                <li><a href="{{ store.url }}/selecoes/europa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes">Indicado para</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=indicado-para_casual">Casual</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/selecoes">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/selecoes?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/selecoes?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/selecoes?order=lancamento">Lançamentos</a>
                                                            <a href="{{ store.url }}/selecoes?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_selecoes_link }}" target="{{ settings.menu_selecoes_link_target }}">
                                                            <img src="{{ asset(settings.menu_selecoes_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/futebol">Futebol</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol/artigos-de-futebol/">Artigos de Futebol</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol/artigos-de-futebol?variacao=tipo-de-produto_caneleira">Caneleira</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_bomba-de-ar">Bomba de ar</a></li>
                                                                <li><a href="{{ store.url }}/futebol?variacao=tipo-de-produto_luva-de-goleiro">Luva de Goleiro</a></li>
                                                                <li><a href="{{ store.url }}/futebol/artigos-de-futebol?variacao=tipo-de-produto_porta-chuteira">Porta Chuteira</a></li>
                                                                <li><a href="{{ store.url }}/futebol/artigos-de-futebol?variacao=tipo-de-produto_joelheira">Joelheira</a></li>
                                                                <li><a href="{{ store.url }}/futebol?variacao=tipo-de-produto_meiao">Meião</a></li>
                                                                <li><a href="{{ store.url }}/futebol/artigos-de-futebol/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol/bolas/">Bolas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/acessorios/bolas/campo">Campo</a></li>
                                                                <li><a href="{{ store.url }}/acessorios/bolas/futsal">Salão</a></li>
                                                                <li><a href="{{ store.url }}/acessorios/bolas/society">Society</a></li>
                                                                <li><a href="{{ store.url }}/futebol/bolas/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol/chuteiras">Chuteiras</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/campo">Campo</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/futsal">Salão</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/society">Society</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol/uniformes/">Uniformes</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/calcoes">Calções</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/camisas">Camisas</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/coletes">Coletes</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/meioes">Meiões</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/goleiro">Goleiro</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/arbitros">Árbitro</a></li>
                                                                <li><a href="{{ store.url }}/futebol/uniformes/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_dal-ponte">Dalponte</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_dray">Dray</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_kappa">Kappa</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_lotto">Lotto</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_oxn">OXN</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_penalty">Penalty</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_placar">Placar</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_poker">Poker</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_puma">Puma</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_super-bolla">Super Bolla</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_three-stars">Three Stars</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_topper">Topper</a></li>
                                                                <li><a href="{{ store.url }}/futebol?marca=marca_umbro">Umbro</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol">Indicado para</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="{{ store.url }}/futebol?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="{{ store.url }}/futebol?variacao=indicado-para_goleiro">Goleiro</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="{{ store.url }}/futebol?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="{{ store.url }}/futebol?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/futebol?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/futebol?order=lancamento">Lançamentos</a>
                                                            <a href="{{ store.url }}/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_futebol_link }}" target="{{ settings.menu_futebol_link_target }}">
                                                            <img src="{{ asset(settings.menu_futebol_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/treino">Treino</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino/artigos-esportivos">Acessórios</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino/artigos-esportivos?variacao=tipo-de-produto_toalha">Toalha</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_corda">Corda</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_viseira">Viseira</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_luva-academia">Luva</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_extensor-elastico">Extensor de Elástico</a></li>
                                                                <li><a href="{{ store.url }}/treino?palavra_busca=bola">Bola</a></li>
                                                                <li><a href="{{ store.url }}/loja/busca.php?variacao=tipo-de-produto_mochila_bolsa_mala">Mochilas e Bolsas</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_anilha_barra_halter_kettlebell">Pesos</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_colchonete_tatame">Colchonete</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=tipo-de-produto_cone-de-agilidade_cone-de-marcacao_suporte-para-cone">Cones</a></li>
                                                                <li><a href="{{ store.url }}/treino/artigos-esportivos" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino/roupas">Roupas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino/roupas/camisetas-e-polos">Camisetas e Polos</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/bermudas-e-shorts">Bermudas e Shorts</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/saias-e-leggings">Saias e Leggings</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/regatas-e-tops">Regatas e Tops</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/calcas">Calças</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas/termicos-e-compressao">Térmicos e Compressão</a></li>
                                                                <li><a href="{{ store.url }}/treino/roupas" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino/calcados/">Calçados</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino/calcados/caminhada">Para caminhar</a></li>
                                                                <li><a href="{{ store.url }}/treino/calcados/corrida">Para correr</a></li>
                                                                <li><a href="{{ store.url }}/treino/calcados/academia">Para treinar</a></li>
                                                                <li><a href="{{ store.url }}/treino/calcados/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_asics">Asics</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_fila">Fila</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_kanxa">Kanxa</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_kappa">Kappa</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_live-up">Live up</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_lupo">Lupo</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_mizuno">Mizuno</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_olympikus">Olympikus</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_penalty">Penalty</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_poker">Poker</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_puma">Puma</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_reusch">Reusch</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_super-bolla">Super Bolla</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_umbro">Umbro</a></li>
                                                                <li><a href="{{ store.url }}/treino?marca=marca_under-armour">Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/treino?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/treino">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/treino?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="{{ store.url }}/treino?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="{{ store.url }}/treino?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/treino?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/treino?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_treino_link }}" target="{{ settings.menu_treino_link_target }}">
                                                            <img src="{{ asset(settings.menu_treino_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/esportes">Esportes</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/automobilismo/">Automobilismo</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes/automobilismo?variacao=tipo-de-produto_bone">Bonés</a></li>
                                                                <li><a href="{{ store.url }}/esportes/automobilismo?variacao=tipo-de-produto_tenis">Calçados</a></li>
                                                                <li><a href="{{ store.url }}/esportes/automobilismo?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="{{ store.url }}/esportes/automobilismo?variacao=tipo-de-produto_jaqueta_moletom">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/esportes/automobilismo/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/basquete/">Basquete</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_bola">Bolas</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_bone">Bonés</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Regatas</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_agasalho_colete_jaqueta_moletom_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete?variacao=tipo-de-produto_tenis">Tênis</a></li>
                                                                <li><a href="{{ store.url }}/esportes/basquete/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/beisebol/">Beisebol</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes/beisebol?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                                                                <li><a href="{{ store.url }}/esportes/beisebol?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                                                                <li><a href="{{ store.url }}/esportes/beisebol?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="{{ store.url }}/esportes/beisebol?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/esportes/beisebol/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/natacao/">Natação</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_kit-de-natacao">Kits de Natação</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_maio">Maiôs</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_prancha-de-natacao">Pranchas e Apoio</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_protetor-de-ouvido">Protetores de Ouvido</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_bermuda_sunga">Sungas</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao?variacao=tipo-de-produto_touca">Toucas</a></li>
                                                                <li><a href="{{ store.url }}/esportes/natacao/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/futebol-americano/">Futebol Americano</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes/futebol-americano?variacao=tipo-de-produto_bola">Bolas</a></li>
                                                                <li><a href="{{ store.url }}/esportes/futebol-americano?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                                                                <li><a href="{{ store.url }}/esportes/futebol-americano?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="{{ store.url }}/esportes/futebol-americano?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/esportes/futebol-americano/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/volei/">Vôlei</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/artes-marciais">Artes Marciais</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/ciclismo">Ciclismo</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes?variacao=esporte_handebol">Handebol</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/tenis">Tênis</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/esportes/rugby/">Rugby</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/beach-tennis">Beach Tennis</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/trilha-e-trekking">Trilha e Trekking</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/esportes?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/esportes?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/esportes?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="{{ store.url }}/esportes?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="{{ store.url }}/esportes?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/esportes?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/esportes?order=lancamento">Lançamentos</a>
                                                            <a href="{{ store.url }}/futebol">Futebol</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_esportes_link }}" target="{{ settings.menu_esportes_link_target }}">
                                                            <img src="{{ asset(settings.menu_esportes_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/calcados">Calçados</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/calcados">Indicado para</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/calcados/automobilismo">Automobilismo</a></li>
                                                                <li><a href="{{ store.url }}/tenis-basquete">Basquete</a></li>
                                                                <li><a href="{{ store.url }}/calcados/caminhada">Caminhada</a></li>
                                                                <li><a href="{{ store.url }}/calcados/tenis/casual">Casual</a></li>
                                                                <li><a href="{{ store.url }}/calcados/tenis/corrida">Corrida</a></li>
                                                                <li><a href="{{ store.url }}/calcados/tenis/fitness-e-musculacao">Fitness e Musculação</a></li>
                                                                <li><a href="{{ store.url }}/calcados/tennis">Tênis</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/futebol/chuteiras">Chuteira</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/campo">Campo</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/futsal">Futsal</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras/society">Society</a></li>
                                                                <li><a href="{{ store.url }}/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/calcados/chinelos-e-sandalias/">Chinelos e Sandálias</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/calcados/meias/">Meias</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/calcados">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_asics">Asics</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_cavalera">Cavalera</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_coca-cola">Coca-Cola</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_converse">Converse</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_everlast">Everlast</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_fila">Fila</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_freeday">Freeday</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_lupo">Lupo</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_mizuno">Mizuno</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_new-balance">New Balance</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_olympikus">Olympikus</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_oakley">Oakley</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_puma">Puma</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_reserva">Reserva</a></li>
                                                                <li><a href="{{ store.url }}/calcados?marca=marca_under-armour">Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/calcados">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/calcados?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/calcados?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/calcados?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/calcados?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="{{ store.url }}/calcados?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="{{ store.url }}/calcados?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/calcados?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/calcados?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_calcados_link }}" target="{{ settings.menu_calcados_link_target }}">
                                                            <img src="{{ asset(settings.menu_calcados_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="{{ store.url }}/casual">Casual</a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo">Acessórios</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/casual/bolsas-e-mochilas">Bolsas e Mochilas</a></li>
                                                                <li><a href="{{ store.url }}/casual/bones-e-gorros">Bonés e Gorros</a></li>
                                                                <li><a href="{{ store.url }}/casual/relogios">Relógios</a></li>
                                                                <li><a href="{{ store.url }}/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/casual?variacao=tipo-de-produto_tenis_meia_chinelo_sandalia">Calçados</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/casual/chinelos-e-sandalias">Chinelos e Sandálias</a></li>
                                                                <li><a href="{{ store.url }}/casual/tenis-casual">Tênis Casual</a></li>
                                                                <li><a href="{{ store.url }}/calcados/meias/">Meias</a></li>
                                                                <li><a href="{{ store.url }}/casual?variacao=tipo-de-produto_tenis_meia_chinelo_sandalia" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="{{ store.url }}/casual?variacao=tipo-de-produto_agasalho_baby-look_bermuda_blusao_calca_camisa_camiseta_colete_jaqueta_moletom_parka">Roupas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/linha-casual/bermudas-shorts">Bermudas e Shorts</a></li>
                                                                <li><a href="{{ store.url }}/casual/calcas">Calças</a></li>
                                                                <li><a href="{{ store.url }}/casual/camisetas-e-polos">Camisetas e Polos</a></li>
                                                                <li><a href="{{ store.url }}/casual/cuecas">Cuecas</a></li>
                                                                <li><a href="{{ store.url }}/casual/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                                                                <li><a href="{{ store.url }}/casual?variacao=tipo-de-produto_agasalho_baby-look_bermuda_blusao_calca_camisa_camiseta_colete_jaqueta_moletom_parka" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_cavalera">Cavalera</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_coca-cola">Coca-Cola</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_ecko">Ecko</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_fatal">Fatal</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_fila">Fila</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_hang-loose">Hang Loose</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_hd">HD</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_new-balance">New Balance</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_nicoboco">Nicoboco</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_new-era">New Era</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_oakley">Oakley</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_o-neill">O'Neill</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_puma">Puma</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_reserva">Reserva</a></li>
                                                                <li><a href="{{ store.url }}/casual?marca=marca_volcom">Volcom</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="">Gênero</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/casual?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="{{ store.url }}/casual?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="{{ store.url }}/casual?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="{{ store.url }}/casual?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="{{ store.url }}/casual?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="{{ store.url }}/casual?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="{{ store.url }}/casual?order=hot">Ofertas</a>
                                                            <a href="{{ store.url }}/casual?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="{{ settings.menu_casual_link }}" target="{{ setclasstings.menu_casual_link_target }}">
                                                            <img src="{{ asset(settings.menu_casual_banner) }}" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="{{ store.url }}/copa-do-mundo-2022" className="title-hexa">Vem, Hexa</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Menu_Desk;
