import { gerarId } from "./util";
import Categoria from "./Categoria";

export default class Produto {
    id: string;
    nome: string;
    categoria: Categoria;
    preco: number;
    image: string;

    constructor(nome: string, categoria: Categoria, preco: number, image: string){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.image = image;
        this.id = gerarId();
    }

    novo(){
        console.log("Adicionado novo produto " + this.nome);
    }

    editar(nome?: string, categoria?: Categoria, preco?: number, image?: string){
        if(nome){
            this.nome = nome
        }
        if(categoria){
            this.categoria = categoria;
        }
        if(preco){
            this.preco = preco;
        }
        if(image){
            this.image = image;
        }
    }

    excluir(){
        console.log("Deletando produto: " + this.nome);
    }
}