import Categoria from "../Categoria";
import Produto from "../Produto";

export default class ProdutoEletronico extends Produto {
    private _categoria: Categoria;
    private _voltagem: string;

    constructor(nome: string, categoria: Categoria, preco: number, image: string, voltagem: string){
        super(nome, preco, image);
        this._categoria = categoria;
        this._voltagem = voltagem;
    }

    public get categoria(){
        return this._categoria;
    }

    public set categoria(novaCategoria: Categoria){
        this._categoria = novaCategoria;
    }

    public get voltagem(){
        return this._voltagem;
    }

    public set voltagem(voltagem: string){
        this._voltagem = voltagem;
    }
}