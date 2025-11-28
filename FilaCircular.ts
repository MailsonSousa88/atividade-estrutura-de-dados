class FilaCircular {

    private elementos : Array<number>;
    private capacidadeDaLista : number;
    private ponteiroFrente : number = 0;
    private ponteiroTras : number = 0;
    private tamanhoAtual : number = 0;

    constructor(capacidadeTotal:number){
        this.elementos = [];
        this.capacidadeDaLista = capacidadeTotal;
    }

    //Metodo para adicionar elementos a lista(FILA)
    adicionarElementos(novoElemento:number): void{
      if(this.tamanhoAtual == this.capacidadeDaLista){
        console.log(`Não é possivel armazenar elementos acima da capacidade total: ${this.capacidadeDaLista}`);
        return;
      }

        this.elementos[this.ponteiroTras] = novoElemento;
        this.ponteiroTras = (this.ponteiroTras + 1) % this.capacidadeDaLista;
        this.tamanhoAtual++;

        console.log(`Adicionado elemento: ${novoElemento}`);
    }

    //Metodo para remover elementos da lista(FILA)
    removerElemento(): number | null{
        if(this.verificarStatusFilaVazia()){
            console.log("Não há números para remover...");
            return null;
        }

        let elementoRemovido: number = this.elementos[this.ponteiroFrente];
        this.ponteiroFrente = (this.ponteiroFrente + 1) % this.capacidadeDaLista;
        this.tamanhoAtual--;

        console.log(`O elemento ${elementoRemovido} foi removido!`);
        return elementoRemovido;
        
    }


    //Metodos para exibir os elementos da FILA
    exibirQuantidadeElementos(): void{
        //Parte do Deric
    }

    exibirPrimeiroElemento(): number | null{
        if(this.tamanhoAtual == 0){
            this.verificarStatusFilaVazia();
            return null;
        }else{
            let primeiroElemento: number = this.elementos[this.ponteiroFrente];
            console.log(`O primeiro elemento da fila: ${primeiroElemento}`);

            return primeiroElemento;
        }
    }

    exibirElementosDaFila(): void{
        if(this.verificarStatusFilaVazia()){
            return;
        }

        console.log(`Elementos da fila:`);
        let indiceAtual: number = this.ponteiroFrente;

        for (let i = 0; i < this.tamanhoAtual; i++) {
        console.log(`Posição ${indiceAtual}: ${this.elementos[indiceAtual]}`);
        indiceAtual = (indiceAtual + 1) % this.capacidadeDaLista;
        }

    }

    exibirCapacidadeMaxima(){
        //Parte do Deric
    }

    exibirCapacidadeDisponivel(){
        let capacidadeDisponivel : number =this.capacidadeDaLista - this.tamanhoAtual;
        console.log(`A capacidade disponivel na lista e de: ${capacidadeDisponivel}`);
    }


    //Metodos para checar o STATUS da FILA
    verificarStatusFilaVazia(): boolean{
        if(this.tamanhoAtual == 0){
            console.log(`A fila está completamente vazia...`);
            return true;
        }
        return false;
    }

    verificarStatusFilaCheia(): boolean{
        if(this.tamanhoAtual == this.capacidadeDaLista){
            console.log(`A fila está cheia`);
            return true
        }
        return false;
    }
}

//Inicialização da Fila Circular
let lista : FilaCircular = new FilaCircular(5);