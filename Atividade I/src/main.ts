import Produto from "./Produto";
import Carrinho from "./Carrinho";
import Vitrine from "./Vitrine";
import Categoria from "./Categoria";
import Checkout from "./Checkout";

console.log("Teste");

const vitrine = new Vitrine();
const carrinho = new Carrinho();

const catego1 = new Categoria("Eletronicos");
const catego2 = new Categoria("Móveis");

const tv = new Produto("Tv", catego1, 2799, "url:image");
const celular = new Produto("Celular", catego1, 3799, "url:image");
const tablet = new Produto("Tablet", catego1, 1499, "url:image");

const cadeira = new Produto("Cadeira", catego2, 180, "url:image");
const mesa = new Produto("Mesa", catego2, 380, "url:image");
const sofa = new Produto("Sofa", catego2, 880, "url:image");

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

