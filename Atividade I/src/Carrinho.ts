import Produto from "./Produto"

export default class Carrinho{
    listaDeProdutos: Array<Produto>;

    constructor(){
        this.listaDeProdutos = new Array<Produto>();
    }

    adicionar(produto: Produto){
        this.listaDeProdutos.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho`);
    }

    excluir(produto: Produto){
        const indiceProduto = this.listaDeProdutos.indexOf(produto);
        this.listaDeProdutos.splice(indiceProduto, 1);
        console.log(`${produto.nome} removido do carrinhno`);
    }

    listar(){
        if(this.listaDeProdutos.length > 0){
            console.log("Listando produtos no carrinho: ");
            this.listaDeProdutos.forEach((produto) => console.log(produto.nome));
            return;
        }
        console.log("Nenhum produto no carrinho");
    }

    valorCarrinho(){
        return this.listaDeProdutos.reduce((acc, produto) => acc + produto.preco, 0);
    }
}