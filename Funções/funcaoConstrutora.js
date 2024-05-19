//Treino de função construtora 

function tratamento(a, b){
    this.a = a;
    this.b = b;

    this.soma = function(){
        return console.log(a + b);
    }

    this.ProdutoQuadrado = function(){
        let result = a * (b*b);
        return console.log(result);
    }

    this.Quadrado = function (){
        return console.log(a * a);
    }

    this.raiz = function (){
        let result = (a * a) + (b * b);    
        return console.log(Math.sqrt(result));
    }

    this.seno = function (){
        let result = a - b;
        return Math.sin(result);
    }
}
const tra = new tratamento(10,10);

tra.ProdutoQuadrado();
tra.Quadrado();
tra.soma();
tra.raiz();
tra.seno();
