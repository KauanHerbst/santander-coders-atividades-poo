export default class Checkout{
    private _enderecoDeEntrega: string;
    private _formaDePagamento: string;
    private _totalCompra: number;
    private _valorFinal: number;

    constructor(enderecoDeEntrega: string, formaDePagamento: string, totalCompra: number, valorFinal: number){
        this._enderecoDeEntrega = enderecoDeEntrega;
        this._formaDePagamento = formaDePagamento;
        this._totalCompra = totalCompra;
        this._valorFinal = valorFinal;        
    }

    public get enderecoDeEntrega(){
        return this._enderecoDeEntrega;
    }

    public set enderecoDeEntrega(endereco: string){
        this._enderecoDeEntrega = endereco;
    }

    public get formaDePagamento(){
        return this._formaDePagamento;
    }

    public set formaDePagamento(forma: string){
        this._formaDePagamento = forma;
    }

    public get totalCompra(){
        return this._totalCompra;
    }

    public get valorFinal(){
        return this._valorFinal;
    }

    public processarPagamento(){
        console.log("Pagamento sendo processado...");
        console.log("Pagamento processado");
        console.log("Valor do pagamento: " + this._valorFinal);
    }

    public atualizarEstoque(){
        console.log("Estoque atualizado");
    }
}