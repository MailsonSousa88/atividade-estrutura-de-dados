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
    removerElemento(): number | null{
        if(this.verificarStatusFilaVazia()){
            console.log("Não há números para remover...");
            return null;
        }else{
            let elementoRemovido: number = this.elementos.shift()!;
            return elementoRemovido;
        }
    }


    //Metodos para exibir os elementos da FILA
    exibirQuantidadeElementos(): void{
        
    }

    exibirPrimeiroElemento(): number | null{
        if(this.elementos.length == 0){
            this.verificarStatusFilaVazia();
            return null;
        }else{
            let primeiroElememto: number = this.elementos[0];
            console.log(`O primeiro elementos da fila: ${primeiroElememto}`);
            return primeiroElememto;
        }
    }

    exibirElementosDaFila(): void{
        
    }

    exibirCapacidadeMaxima(){

    }

    exibirCapacidadeDisponivel(){
        let capacidadeDisponivel : number =this.capacidadeDaLista - this.elementos.length;
        console.log(`A capacidade disponivel na lista e de: ${capacidadeDisponivel}`);
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
            console.log(`A fila está cheia`);
            return true
        }else{
            console.log(`A fila não está cheia...`);
            return false;
        }
    }
}

//Inicialização da Fila Circular
let lista : FilaCircular = new FilaCircular(5);

//Para checar os metodos utilize lista.metodoDesejado();