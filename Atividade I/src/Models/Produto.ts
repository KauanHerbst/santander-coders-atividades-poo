import IProduto from "../Interfaces/IProduto";
import { gerarId } from "../Utils/util";

export default class Produto implements IProduto {
    private _id: string;
    private _nome: string;
    private _preco: number;
    _image: string;

    constructor(nome: string, preco: number, image: string){
        this._nome = nome;
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

    public get preco(){
        return this._preco;
    }

    public set preco(novoPreco: number){
        this._preco = novoPreco;
    }
 
    public novo(){
        console.log("Adicionado novo produto " + this._nome);
    }


    public detalhesProduto(){
        console.log("Detalhes Produto...");
        console.log("Nome: " + this._nome);
        console.log("Preço: " + this._preco);

    }

    public editar(nome?: string, preco?: number){
        if(nome){
            this._nome = nome
        }
        if(preco){
            this._preco = preco;
        }
    }

    public excluir(){
        console.log("Deletando produto: " + this._nome);
    }
}