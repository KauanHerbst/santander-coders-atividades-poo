import Produto from "./Produto";
import Categoria from "./Categoria";

export default class Vitrine{
    private _listaProdutosDestaques: Array<Produto>;
    private _listaProdutosPromocoes: Array<Produto>;
    private _listaCategorias: Array<Categoria>;

    constructor(){
        this._listaProdutosDestaques = new Array<Produto>();
        this._listaProdutosPromocoes = new Array<Produto>();
        this._listaCategorias = new Array<Categoria>();
    }

    public get listaProdutosDestaques(){
        return this._listaProdutosDestaques;
    }

    public get listaProdutosPromocoes(){
        return this._listaProdutosPromocoes;
    }

    public get listaCategorias(){
        return this._listaCategorias;
    }
    
    public adicionarDestaque(produto: Produto){
        this._listaProdutosDestaques.push(produto);
    }

    public removerDestaque(produto: Produto){
        if(this._listaProdutosDestaques.includes(produto)){
            const indiceProduto = this._listaProdutosDestaques.indexOf(produto);
            this._listaProdutosDestaques.splice(indiceProduto, 1);
            return;
        }
        console.log("Produto não esta na lista de produtos em destaques");
    }

    public adicionarPromocao(produto: Produto){
        this._listaProdutosPromocoes.push(produto);
    }

    public removerPromocao(produto: Produto){
        if(this._listaProdutosPromocoes.includes(produto)){
            const indiceProduto = this._listaProdutosPromocoes.indexOf(produto);
            this._listaProdutosPromocoes.splice(indiceProduto, 1);
            return;
        }
        console.log("Produto não esta na lista de produtos em promoção");  
    }

    public adicionarCategoria(categoria: Categoria){
        this._listaCategorias.push(categoria);
    }

    public listarCategorias(){
        if(this._listaCategorias.length > 0){
            console.log("Listando Categorias: ");
            this._listaCategorias.forEach((categoria) => console.log(categoria.nome));
            return;
        }
        console.log("Nenhuma categoria cadastrada");
    }

    public listarDestaques(){
        if(this._listaProdutosDestaques.length > 0){
            console.log("Listando Produtos em Destaques: ");
            this._listaProdutosDestaques.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto em destaque");
    }

    public listarPromocoes(){
        if(this._listaProdutosPromocoes.length > 0){
            console.log("Listando produtos em promoção: ");
            this._listaProdutosPromocoes.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto em promoção");
    }
}