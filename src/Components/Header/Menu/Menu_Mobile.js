import user from '../../../img/icon/iconuser.svg';
function Menu_Mobile(){
    return(

            <nav className="menu-mob">
    <div className="d-flex align-items-center justify-content-between nav-top">
        <button className="menu-mob-close"><i className="icon-close"></i></button>
        <span>Menu</span>
        <a href="https://www.futfanatics.com.br/central-do-cliente" className="link-user invisible"><img className="icon-user" src={user}/></a>
    </div>
    <ul>
        <li className="link-user"><a href="https://www.futfanatics.com.br/central-do-cliente" className="d-flex align-items-center justify-content-center"><i className="icon-user"></i>Entrar ou Cadastrar-se</a></li>
        <li>
            <a href="">Toda Loja<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Toda Loja</li>
                <li className="parent">
                    <a className="menu-title" href="">Departamentos<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Departamentos</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros">Clubes Brasileiros</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais">Clubes Internacionais</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes">Seleções</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol">Futebol</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino">Treino</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes">Esportes</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados">Calçados</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual">Casual</a></li>
                        <li><a href="https://www.futfanatics.com.br/copa-do-mundo-2022">Vem, Hexa</a></li>
                    </ul>
                </li>
                <li>
                    <a className="menu-title" href="">Destaque<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Destaque</li>
                        <li><a href="https://www.futfanatics.com.br/novas-convocadas?order=lancamento">Novas Convocadas</a></li>
                        <li><a href="https://www.futfanatics.com.br/camisas-classNameicas?order=lancamento">Camisas Clássicas</a></li>
                        <li><a href="https://www.futfanatics.com.br/novas-chuteiras?order=lancamento">Novas Chuteiras</a></li>
                        <li><a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&variacao=camisa-oficial_sim">Camisas Oficiais</a></li>
                        <li><a href="https://www.futfanatics.com.br/camisas-personalizadas">Camisas Personalizadas</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-regionais?order=lancamento">Clubes Regionais</a></li>
                    </ul>
                </li>
                <li className="d-none">
                    <a className="menu-title" href="">Novidades<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Novidades</li>
                        <li><a href="https://www.futfanatics.com.br/compre-ganhe-coca-cola">Compre e Ganhe - Coca-Cola</a></li>
                        <li><a href="https://www.futfanatics.com.br/compre-ganhe-umbro">Compre e Ganhe - Umbro</a></li>
                        <li><a href="https://www.futfanatics.com.br/compre-ganhe-under-armour">Compre e Ganhe - Under Armour</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/app">App da Fut</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a></li>
            </ul>
        </li>
        <li>
            <a href="">Brasileiros<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Brasileiros</li>
                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">São Paulo<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>São Paulo</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/corinthians">Corinthians</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/palmeiras">Palmeiras</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/ponte-preta">Ponte Preta</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/santos">Santos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/sao-paulo">São Paulo</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Rio de Janeiro<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Rio de Janeiro</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/botafogo">Botafogo</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/flamengo">Flamengo</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/fluminense">Fluminense</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/vasco-da-gama">Vasco</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Paraná<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Paraná</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/athletico-pr">Athletico-PR</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/coritiba">Coritiba</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Santa Catarina<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Santa Catarina</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/avai">Avaí</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/chapecoense">Chapecoense</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/figueirense">Figueirense</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Rio Grande do Sul<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Rio Grande do Sul</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/gremio">Grêmio</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/internacional">Internacional</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Minas Gerais<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Minas Gerais</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/america-mineiro">América-MG</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/atletico-mineiro">Atlético-MG</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/cruzeiro">Cruzeiro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Centro Oeste<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Centro Oeste</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/atletico-goianiense">Atlético-GO</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/goias">Goiás</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Nordeste<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Nordeste</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/bahia">Bahia</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/ceara">Ceará</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/fortaleza">Fortaleza</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/nautico">Náutico</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/santa-cruz">Santa Cruz</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/sampaio-correa">Sampaio Corrêa</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/sport-recife">Sport Recife</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/vitoria">Vitória</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Norte<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Norte</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/clube-do-remo">Remo</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/paysandu">Paysandu</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Indicado para<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Indicado para</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_jogo">Jogo</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_treino">Treino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_casual">Casual</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_goleiro">Goleiro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-brasileiros?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-brasileiros?order=lancamento">Lançamentos</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a></li>
            </ul>
        </li>
        <li>
            <a href="">Internacionais<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Internacionais</li>
                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Liga Espanhola<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Liga Espanhola</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-espanhola/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-espanhola/atletico-de-madrid">Atletico de Madrid</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/barcelona">Barcelona</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/real-madrid">Real Madrid</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=clube-de-futebol_valencia">Valencia</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/villarreal">Villarreal</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Liga Alemã<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Liga Alemã</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-alema/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-alema/bayern-de-munique">Bayern de Munique</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-alema/borussia-dortmund">Borussia Dortmund</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Liga Inglesa<img className="icon-arrow-right"/></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Liga Inglesa</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/arsenal">Arsenal</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/liverpool">Liverpool</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/manchester-city">Manchester City</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/manchester-united">Manchester United</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/tottenham">Tottenham</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Liga Italiana<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Liga Italiana</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-italiana/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-italiana/juventus">Juventus</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-italiana/milan">Milan</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-italiana?variacao=clube-de-futebol_roma">Roma</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Liga Francesa<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Liga Francesa</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-francesa/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-francesa/olympique-de-marseille">Olympique de Marseille</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-francesa/paris-saint-germain">Paris Saint-Germain</a></li>
                    </ul>
                </li>
                <li>
                    <a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus">Clubes Europeus</a>
                </li>
                <li>
                    <a href="https://www.futfanatics.com.br/clubes-internacionais/concacaf/">CONCACAF</a>
                </li>
                <li>
                    <a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-sul-americanos/">Sulamericanos</a>
                </li>
                <li>
                    <a href="">Indicado para<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Indicado para</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=indicado-para_jogo">Jogo</a></li>
                        <li><a href="https://www.futfanatics.com.br/catalogo.php?categoria=3&variacao=indicado-para_treino">Treino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=indicado-para_casual">Casual</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-internacionais?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-internacionais?order=lancamento">Lançamentos</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a></li>
            </ul>
        </li>
        <li>
            <a href="">Seleções<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Seleções</li>
                <li><a href="https://www.futfanatics.com.br/selecoes/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">África<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>África</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/africa/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=clube-de-futebol_senegal">Senegal</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">América do Sul<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>América do Sul</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/argentina">Argentina</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/brasil">Brasil</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/colombia">Colômbia</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/uruguai">Uruguai</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Ásia<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Ásia</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/asia/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/asia/japao">Japão</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">CONCACAF<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>CONCACAF</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/costa-rica">Costa Rica</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/mexico">México</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Europa<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Europa</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/alemanha">Alemanha</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/belgica">Bélgica</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/dinamarca">Dinamarca</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/espanha">Espanha</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/franca">França</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/inglaterra">Inglaterra</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/islandia">Islândia</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/italia">Itália</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes/europa/russia">Rússia</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Indicado para<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Indicado para</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_jogo">Jogo</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_treino">Treino</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_casual">Casual</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/selecoes?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/selecoes?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/selecoes?order=lancamento">Lançamentos</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/selecoes?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a></li>
            </ul>
        </li>
        <li>
            <a href="">Futebol<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Futebol</li>
                <li><a href="https://www.futfanatics.com.br/futebol/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Artigos de Futebol<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Artigos de Futebol</li>
                        <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_caneleira">Caneleira</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_bomba-de-ar">Bomba de ar</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?variacao=tipo-de-produto_luva-de-goleiro">Luva de Goleiro</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_porta-chuteira">Porta Chuteira</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_joelheira">Joelheira</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?variacao=tipo-de-produto_meiao">Meião</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Bolas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Bolas</li>
                        <li><a href="https://www.futfanatics.com.br/futebol/bolas/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/acessorios/bolas/campo">Campo</a></li>
                        <li><a href="https://www.futfanatics.com.br/acessorios/bolas/futsal">Salão</a></li>
                        <li><a href="https://www.futfanatics.com.br/acessorios/bolas/society">Society</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Chuteiras<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Chuteiras</li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/campo">Campo</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/futsal">Salão</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/society">Society</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Uniformes<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Uniformes</li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/calcoes">Calções</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/camisas">Camisas</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/coletes">Coletes</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/meioes">Meiões</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/goleiro">Goleiro</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/uniformes/arbitros">Árbitro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Principais Marcas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Principais Marcas</li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_adidas">Adidas</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_dal-ponte">Dalponte</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_dray">Dray</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_kappa">Kappa</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_lotto">Lotto</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_oxn">OXN</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_penalty">Penalty</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_placar">Placar</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_poker">Poker</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_puma">Puma</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_super-bolla">Super Bolla</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_three-stars">Three Stars</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_topper">Topper</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_umbro">Umbro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Indicado para<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Indicado para</li>
                        <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_jogo">Jogo</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_treino">Treino</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_goleiro">Goleiro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Faixa de preço<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Faixa de preço</li>
                        <li><a href="https://www.futfanatics.com.br/futebol?min=0.01&max=50">Até R$ 50,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol?min=100&max=10000">Acima de R$ 100,00</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/futebol?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/futebol?order=lancamento">Lançamentos</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a></li>
            </ul>
        </li>
        <li>
            <a href="">Treino<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Treino</li>
                <li><a href="https://www.futfanatics.com.br/treino/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Acessórios<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Acessórios</li>
                        <li><a href="https://www.futfanatics.com.br/treino/artigos-esportivos" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/artigos-esportivos?variacao=tipo-de-produto_toalha">Toalha</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_corda">Corda</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_viseira">Viseira</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_luva-academia">Luva</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_extensor-elastico">Extensor de Elástico</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?palavra_busca=bola">Bola</a></li>
                        <li><a href="https://www.futfanatics.com.br/loja/busca.php?variacao=tipo-de-produto_mochila_bolsa_mala">Mochilas e Bolsas</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_anilha_barra_halter_kettlebell">Pesos</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_colchonete_tatame">Colchonete</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_cone-de-agilidade_cone-de-marcacao_suporte-para-cone">Cones</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Roupas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Roupas</li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/camisetas-e-polos">Camisetas e Polos</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/bermudas-e-shorts">Bermudas e Shorts</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/saias-e-leggings">Saias e Leggings</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/regatas-e-tops">Regatas e Tops</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/calcas">Calças</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/roupas/termicos-e-compressao">Térmicos e Compressão</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Calçados<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Calçados</li>
                        <li><a href="https://www.futfanatics.com.br/treino/calcados/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/calcados/caminhada">Para caminhar</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/calcados/corrida">Para correr</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino/calcados/academia">Para treinar</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Principais Marcas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Principais Marcas</li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_adidas">Adidas</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_asics">Asics</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_fila">Fila</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_kanxa">Kanxa</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_kappa">Kappa</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_live-up">Live up</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_lupo">Lupo</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_mizuno">Mizuno</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_olympikus">Olympikus</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_penalty">Penalty</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_poker">Poker</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_puma">Puma</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_reusch">Reusch</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_super-bolla">Super Bolla</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_umbro">Umbro</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?marca=marca_under-armour">Under Armour</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Faixa de preço<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Faixa de preço</li>
                        <li><a href="https://www.futfanatics.com.br/treino?min=0.01&max=50">Até R$ 50,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/treino?min=100&max=10000">Acima de R$ 100,00</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/treino?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/treino?order=lancamento">Lançamentos</a></li>
            </ul>
        </li>
        <li>
            <a href="">Esportes<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Esportes</li>
                <li><a href="https://www.futfanatics.com.br/esportes/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Automobilismo<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Automobilismo</li>
                        <li><a href="https://www.futfanatics.com.br/esportes/automobilismo/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_bone">Bonés</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_tenis">Calçados</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_jaqueta_moletom">Jaquetas e Moletons</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Basquete<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Basquete</li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bola">Bolas</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bone">Bonés</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Regatas</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_agasalho_colete_jaqueta_moletom_blusao">Jaquetas e Moletons</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_tenis">Tênis</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Beisebol<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Beisebol</li>
                        <li><a href="https://www.futfanatics.com.br/esportes/beisebol/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Natação<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Natação</li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_kit-de-natacao">Kits de Natação</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_maio">Maiôs</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_prancha-de-natacao">Pranchas e Apoio</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_protetor-de-ouvido">Protetores de Ouvido</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_bermuda_sunga">Sungas</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_touca">Toucas</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Futebol Americano<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Futebol Americano</li>
                        <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano/" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_bola">Bolas</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                    </ul>
                </li>
                <li><a href="https://www.futfanatics.com.br/esportes/volei/">Vôlei</a></li>
                <li><a href="https://www.futfanatics.com.br/esportes/artes-marciais">Artes Marciais</a></li>
                <li><a href="https://www.futfanatics.com.br/esportes/ciclismo">Ciclismo</a></li>
                <li><a href="https://www.futfanatics.com.br/esportes?variacao=esporte_handball">Handebol</a></li>
                <li><a href="https://www.futfanatics.com.br/esportes/tenis">Tênis</a></li>
                <li><a href="https://www.futfanatics.com.br/esportes/rugby/">Rugby</a></li>
                <li><a href="https://www.futfanatics.com.br/beach-tennis">Beach Tennis</a></li>
                <li><a href="https://www.futfanatics.com.br/trilha-e-trekking">Trilha e Trekking</a></li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/esportes?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Faixa de preço<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Faixa de preço</li>
                        <li><a href="https://www.futfanatics.com.br/esportes?min=0.01&max=50">Até R$ 50,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/esportes?min=100&max=10000">Acima de R$ 100,00</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/esportes?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/esportes?order=lancamento">Lançamentos</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/futebol">Futebol</a></li>
            </ul>
        </li>
        <li>
            <a href="">Calçados<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Calçados</li>
                <li><a href="https://www.futfanatics.com.br/calcados/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Indicado para<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Indicado para</li>
                        <li><a href="https://www.futfanatics.com.br/calcados/automobilismo">Automobilismo</a></li>
                        <li><a href="https://www.futfanatics.com.br/tenis-basquete">Basquete</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/caminhada">Caminhada</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/tenis/casual">Casual</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/tenis/corrida">Corrida</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/tenis/fitness-e-musculacao">Fitness e Musculação</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/tennis">Tênis</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Chuteira<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Chuteira</li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/campo">Campo</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/futsal">Futsal</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/society">Society</a></li>
                        <li><a href="https://www.futfanatics.com.br/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                    </ul>
                </li>
                <li><a href="https://www.futfanatics.com.br/calcados/chinelos-e-sandalias/">Chinelos e Sandálias</a></li>
                <li><a href="https://www.futfanatics.com.br/calcados/meias/">Meias</a></li>
                <li>
                    <a href="">Principais Marcas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Principais Marcas</li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_adidas">Adidas</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_asics">Asics</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_cavalera">Cavalera</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_coca-cola">Coca-Cola</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_converse">Converse</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_everlast">Everlast</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_fila">Fila</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_freeday">Freeday</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_lupo">Lupo</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_mizuno">Mizuno</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_new-balance">New Balance</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_olympikus">Olympikus</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_oakley">Oakley</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_puma">Puma</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_reserva">Reserva</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_under-armour">Under Armour</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/calcados?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?variacao=genero_feminino">Feminino<span className="tag-new">Novo</span></a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Faixa de preço<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Faixa de preço</li>
                        <li><a href="https://www.futfanatics.com.br/calcados?min=0.01&max=50">Até R$ 50,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados?min=100&max=10000">Acima de R$ 100,00</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/calcados?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/calcados?order=lancamento">Lançamentos</a></li>
            </ul>
        </li>
        <li>
            <a href="">Casual<i className="icon-arrow-right"></i></a>
            <ul>
                <li className="back"><i className="icon-arrow-left"></i>Casual</li>
                <li><a href="https://www.futfanatics.com.br/casual/" className="see-all">+ Ver todos</a></li>
                <li>
                    <a href="">Acessórios<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Acessórios</li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/bolsas-e-mochilas">Bolsas e Mochilas</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/bones-e-gorros">Bonés e Gorros</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/relogios">Relógios</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Calçados<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Calçados</li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_tenis_meia_chinelo_sandalia" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/chinelos-e-sandalias">Chinelos e Sandálias</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/tenis-casual">Tênis Casual</a></li>
                        <li><a href="https://www.futfanatics.com.br/calcados/meias/">Meias</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Roupas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Roupas</li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_agasalho_baby-look_bermuda_blusao_calca_camisa_camiseta_colete_jaqueta_moletom_parka" className="see-all">+ Ver todos</a></li>
                        <li><a href="https://www.futfanatics.com.br/linha-casual/bermudas-shorts">Bermudas e Shorts</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/calcas">Calças</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/camisetas-e-polos">Camisetas e Polos</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/cuecas">Cuecas</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Principais Marcas<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Principais Marcas</li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_adidas">Adidas</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_cavalera">Cavalera</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_coca-cola">Coca-Cola</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_ecko">Ecko</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_fatal">Fatal</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_fila">Fila</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_hang-loose">Hang Loose</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_hd">HD</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_new-balance">New Balance</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_new-era">New Era</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_nicoboco">Nicoboco</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_oakley">Oakley</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_o-neill">O'Neill</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_puma">Puma</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_reserva">Reserva</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?marca=marca_volcom">Volcom</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Gênero<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Gênero</li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=genero_masculino">Masculino</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=genero_feminino">Feminino</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?variacao=idade_infantil">Infantil</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Faixa de preço<i className="icon-arrow-right"></i></a>
                    <ul>
                        <li className="back"><i className="icon-arrow-left"></i>Faixa de preço</li>
                        <li><a href="https://www.futfanatics.com.br/casual?min=0.01&max=50">Até R$ 50,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                        <li><a href="https://www.futfanatics.com.br/casual?min=100&max=10000">Acima de R$ 100,00</a></li>
                    </ul>
                </li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/casual?order=hot">Ofertas</a></li>
                <li className="menu-feature"><a href="https://www.futfanatics.com.br/casual?order=lancamento">Lançamentos</a></li>
            </ul>
        </li>

        <li><a href="https://www.futfanatics.com.br/copa-do-mundo-2022" className="font-weight-bold">Vem, Hexa</a></li>
        <li className="text-center">
            <a href="https://www.futfanatics.net/?utm_source=futfanatics-nacional&utm_medium=referral&utm_campaign=selo-topo" target="_blank" className="link-inter"><i className="icon-link-inter"></i>International Orders</a>
        </li>
    </ul>
</nav>

    );
};
export default Menu_Mobile;