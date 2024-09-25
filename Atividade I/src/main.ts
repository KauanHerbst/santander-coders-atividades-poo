import Produto from "./Models/Produto";
import Carrinho from "./Models/Carrinho";
import Vitrine from "./Models/Vitrine";
import Categoria from "./Models/Categoria";
import Checkout from "./Models/Checkout";

console.log("Teste");

const vitrine = new Vitrine();
const carrinho = new Carrinho();

const catego1 = new Categoria("Eletronicos");
const catego2 = new Categoria("Móveis");

const tv = new Produto("Tv", 2799, "url:image");
const celular = new Produto("Celular", 3799, "url:image");
const tablet = new Produto("Tablet", 1499, "url:image");

const cadeira = new Produto("Cadeira", 180, "url:image");
const mesa = new Produto("Mesa", 380, "url:image");
const sofa = new Produto("Sofa", 880, "url:image");

vitrine.adicionarCategoria(catego1);
vitrine.adicionarCategoria(catego2);

vitrine.adicionarDestaque(tv);
vitrine.adicionarDestaque(celular);
vitrine.adicionarDestaque(mesa);
vitrine.adicionarDestaque(cadeira);

vitrine.adicionarPromocao(tablet);
vitrine.adicionarPromocao(sofa);

vitrine.listarCategorias();
vitrine.listarDestaques();
vitrine.listarPromocoes();

carrinho.adicionar(celular);
carrinho.adicionar(tablet);
carrinho.adicionar(sofa);
carrinho.adicionar(cadeira);

carrinho.listar();

const valorCarrinho = carrinho.valorCarrinho();

const checkout = new Checkout("Casa", "pix", valorCarrinho, valorCarrinho + 5);
checkout.processarPagamento();
checkout.atualizarEstoque();

