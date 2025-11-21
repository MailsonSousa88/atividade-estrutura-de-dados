class FilaCircular {

    private elementos : Array<number>;
    private capacidadeDaLista : number;

    constructor(capacidadeTotal:number){
        this.elementos = [];
        this.capacidadeDaLista = capacidadeTotal;
    }

    //Metodo para adicionar elementos a lista(FILA)
    adicionarElementos(novoElemento:number): void{
        if(this.elementos.length == this.capacidadeDaLista){
            console.log(`Não é possivel armazenar elementos acima da capacidade total: ${this.capacidadeDaLista}`);
        }else{
            this.elementos.push(novoElemento);
        }
    }

    //Metodo para remover elementos da lista(FILA)
    removerElemento(): void{
        this.elementos.pop();
    }


    //Metodos para exibir os elementos da FILA
    exibirQuantidadeElementos(): void{
        
    }

    exibirPrimeiroElemento(): void{
        
    }

    exibirElementosDaFila(): void{
        
    }

    exibirCapacidadeMaxima(){

    }


    //Metodos para checar o STATUS da FILA
    verificarStatusFilaVazia(): boolean{
        if(this.elementos.length == 0){
            console.log(`A fila está completamente vazia...`);
            return true;
        }else{
            console.log(`A fila não está mais vazia`);
            return false;
        }
    }

    verificarStatusFilaCheia(): boolean{
        if(this.elementos.length == this.capacidadeDaLista){
            console.log(`A lista está cheia`);
            return true
        }else{
            return false;
        }
    }
}

let lista : FilaCircular = new FilaCircular(5);