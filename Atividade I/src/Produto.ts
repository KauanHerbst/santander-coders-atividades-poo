import { gerarId } from "./util";
import Categoria from "./Categoria";

export default class Produto {
    private _id: string;
    private _nome: string;
    private _categoria: Categoria;
    private _preco: number;
    private _image: string;

    constructor(nome: string, categoria: Categoria, preco: number, image: string){
        this._nome = nome;
        this._categoria = categoria;
        this._preco = preco;
        this._image = image;
        this._id = gerarId();
    }

    public get id(){
        return this._id;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(novoNome: string){
        this._nome = novoNome;
    }

    public get categoria(){
        return this._categoria;
    }

    public set categoria(novaCategoria: Categoria){
        this._categoria = novaCategoria;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(novoPreco: number){
        this._preco = novoPreco;
    }
 
    public get image(){
        return this._image;
    }

    public set image(novaImagem: string){
        this._image = novaImagem;
    }

    public novo(){
        console.log("Adicionado novo produto " + this._nome);
    }

    public editar(nome?: string, categoria?: Categoria, preco?: number, image?: string){
        if(nome){
            this._nome = nome
        }
        if(categoria){
            this._categoria = categoria;
        }
        if(preco){
            this._preco = preco;
        }
        if(image){
            this._image = image;
        }
    }

    public excluir(){
        console.log("Deletando produto: " + this._nome);
    }
}