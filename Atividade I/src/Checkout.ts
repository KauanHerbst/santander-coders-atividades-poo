export default class Checkout{
    enderecoDeEntrega: string;
    formaDePagamento: string;
    totalCompra: number;
    valorFinal: number;

    constructor(enderecoDeEntrega: string, formaDePagamento: string, totalCompra: number, valorFinal: number){
        this.enderecoDeEntrega = enderecoDeEntrega;
        this.formaDePagamento = formaDePagamento;
        this.totalCompra = totalCompra;
        this.valorFinal = valorFinal;        
    }

    processarPagamento(){
        console.log("Pagamento sendo processado...");
        console.log("Pagamento processado");
        console.log("Valor do pagamento: " + this.valorFinal);
    }

    atualizarEstoque(){
        console.log("Estoque atualizado");
    }
}