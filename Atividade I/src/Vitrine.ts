import Produto from "./Produto";
import Categoria from "./Categoria";

export default class Vitrine{
    listaProdutosDestaques: Array<Produto>;
    listaProdutosPromocoes: Array<Produto>;
    listaCategorias: Array<Categoria>;

    constructor(){
        this.listaProdutosDestaques = new Array<Produto>();
        this.listaProdutosPromocoes = new Array<Produto>();
        this.listaCategorias = new Array<Categoria>();
    }
    
    adicionarDestaque(produto: Produto){
        this.listaProdutosDestaques.push(produto);
    }

    removerDestaque(produto: Produto){
        if(this.listaProdutosDestaques.includes(produto)){
            const indiceProduto = this.listaProdutosDestaques.indexOf(produto);
            this.listaProdutosDestaques.splice(indiceProduto, 1);
            return;
        }
        console.log("Produto não esta na lista de produtos em destaques");
    }

    adicionarPromocao(produto: Produto){
        this.listaProdutosPromocoes.push(produto);
    }

    removerPromocao(produto: Produto){
        if(this.listaProdutosPromocoes.includes(produto)){
            const indiceProduto = this.listaProdutosPromocoes.indexOf(produto);
            this.listaProdutosPromocoes.splice(indiceProduto, 1);
            return;
        }
        console.log("Produto não esta na lista de produtos em promoção");  
    }

    adicionarCategoria(categoria: Categoria){
        this.listaCategorias.push(categoria);
    }

    listarCategorias(){
        if(this.listaCategorias.length > 0){
            console.log("Listando Categorias: ");
            this.listaCategorias.forEach((categoria) => console.log(categoria.nome));
            return;
        }
        console.log("Nenhuma categoria cadastrada");
    }

    listarDestaques(){
        if(this.listaProdutosDestaques.length > 0){
            console.log("Listando Produtos em Destaques: ");
            this.listaProdutosDestaques.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto em destaque");
    }

    listarPromocoes(){
        if(this.listaProdutosPromocoes.length > 0){
            console.log("Listando produtos em promoção: ");
            this.listaProdutosPromocoes.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto em promoção");
    }
}