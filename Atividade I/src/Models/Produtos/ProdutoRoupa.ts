import Categoria from "../Categoria";
import Produto from "../Produto"

export default class ProdutoRoupa extends Produto{
    private _tamanho: string;
    private _cor: string;
    private _categoria: Categoria;

    constructor(nome: string, categoria: Categoria, preco: number, tamanho: string, cor: string, image: string){
        super(nome, preco, image);
        this._categoria = categoria;
        this._cor = cor;
        this._tamanho = tamanho;
    }

    public get categoria(){
        return this._categoria;
    }

    public set categoria(novaCategoria: Categoria){
        this._categoria = novaCategoria;
    }

    public get tamanho(){
        return this._tamanho;
    }

    public set tamanho(novoTamanho: string){
        this._tamanho = novoTamanho;
    }

    public get cor(){
        return this._cor;
    }

    public set cor(novaCor: string){
        this._cor = novaCor;
    }
}