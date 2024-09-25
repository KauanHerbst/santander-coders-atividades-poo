import Produto from "./Produto"

export default class Carrinho{
    private _listaDeProdutos: Array<Produto>;

    constructor(){
        this._listaDeProdutos = new Array<Produto>();
    }

    public get listaDeProdutos(){
        return this._listaDeProdutos;
    }

    public adicionar(produto: Produto){
        this._listaDeProdutos.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho`);
    }

    public excluir(produto: Produto){
        const indiceProduto = this._listaDeProdutos.indexOf(produto);
        this._listaDeProdutos.splice(indiceProduto, 1);
        console.log(`${produto.nome} removido do carrinhno`);
    }

    public listar(){
        if(this._listaDeProdutos.length > 0){
            console.log("Listando produtos no carrinho: ");
            this._listaDeProdutos.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto no carrinho");
    }

    public valorCarrinho(){
        return this._listaDeProdutos.reduce((acc, produto) => acc + produto.preco, 0);
    }
}