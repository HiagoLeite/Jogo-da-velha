// JOGO DA VELHA!
let campos= document.querySelectorAll('.campo');
let simboloX= document.querySelector('#simboloX');
let simboloO= document.querySelector('#simboloO');
let cabecalhoJogo= document.querySelector('#cabecalhoJogo');
let buttons = document.querySelectorAll('#cabecalhoJogo button');
let pontoVitoriaP1= document.querySelector('#pontoWp1');
let pontoDerrotaP1= document.querySelector('#pontoLp1');
let pontoVitoriaP2= document.querySelector('#pontoWp2');
let pontoDerrotaP2= document.querySelector('#pontoLp2');
let matriz=Array(8);
let modoJogo;
let vezP1=0;
let vezP2=0;
let pontoWp1=0;
let pontoLp1=0;
let pontoWp2=0;
let pontoLp2=0;
let confere=false;
// EVENTOS A CADA CAMPO 
for(let i=0; i<campos.length; i++){
    campos[i].addEventListener("click",function(){
        let simbolo= verificarElemento(vezP1,vezP2);
        if(this.childNodes.length==0){
            let inserirSimbolo=simbolo.cloneNode(true);
            this.appendChild(inserirSimbolo);
            verificarResultadoJogo(i,vezP1,vezP2);
            
            if(vezP1==vezP2){
                vezP1++;
                if(modoJogo=='single'){
                    console.log(modoJogo);
                    maquinaJogar();   
                    vezP2++;
                    verificarResultadoJogo(i,vezP1,vezP2);
                }
            }else{
                vezP2++;
            }
        }else{
            console.log(campos[i]);
            console.log(i);
        }  
    });
}
// CONFERE O BOTAO DE JOGADOR(MODO JOGO)
for(let j=0; j<buttons.length; j++){
    buttons[j].addEventListener("click", function(){

        modoJogo=this.getAttribute("id");
        console.log(modoJogo);
        confere=apelidoJogo();
        if(confere==true){
            setTimeout(function(){
                cabecalhoJogo.style.display='none';
                let jogo=document.querySelector('.hiden');
                jogo.style.display='block';
            },1500);
        }  
    });
}
// MAQUINA007
function maquinaJogar(){
    let cloneO = simboloO.cloneNode(true);
    let counter=0;
    let filled=0;

    for(let i=0; i<campos.length; i++){
        let randomNumber = Math.floor(Math.random()*5);
        
        if(campos[i].childNodes[0]==undefined){
            if(randomNumber<=1){
                campos[i].appendChild(cloneO);
                counter++;
                matriz[i]='P2';
                break;
            }
        }else{
            filled++;
        }
    }   
    if(counter==0 && filled <9){
        maquinaJogar();
    }
} 
function verificarElemento(vezP1, vezP2) {
    if(vezP1==vezP2){
        simbolo=simboloX;
    }else{
        simbolo=simboloO;
    }
    return simbolo;
}
function verificarResultadoJogo(iteracao,vezP1,vezP2){
    
    if(vezP1==vezP2){
        matriz[iteracao]='P1';
    }else{
        matriz[iteracao]='P2';
    }
    // HORIZONTAL
    if(matriz[0]!=undefined && matriz[0]===matriz[1] && matriz[1]===matriz[2]){
        if(matriz[0]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("HORIZONTAL:Linha1 ");
        resetJogo();
    }else if(matriz[3]!=undefined && matriz[3]===matriz[4] &&  matriz[4]===matriz[5]){
        if(matriz[3]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("HORIZONTAL:Linha2 ");
        resetJogo();
    }else if(matriz[6]!=undefined && matriz[6]===matriz[7] && matriz[7]===matriz[8]){
        if(matriz[6]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("HORIZONTAL:Linha3 ");
        resetJogo();
    }
    // VERTICAL
    else if(matriz[0]!=undefined && matriz[0]===matriz[3] && matriz[3]===matriz[6]){
        if(matriz[0]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("VERTICAL:coluna1 ");
        resetJogo();
    }else if(matriz[1]!=undefined && matriz[1]===matriz[4] && matriz[4]===matriz[7]){
        if(matriz[1]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("VERTICAL:coluna2 ");
        resetJogo();
    }else if(matriz[2]!=undefined && matriz[2]===matriz[5] && matriz[5]===matriz[8]){
        if(matriz[2]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("VERTICAL:coluna3 "); 
        resetJogo(); 
    }
    // DIAGONAL
    else if(matriz[0]!=undefined && matriz[0]===matriz[4] && matriz[4]===matriz[8]){
        if(matriz[0]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("DIAGONAL: esqueda ");
        resetJogo();  
    }else if(matriz[2]!=undefined && matriz[2]===matriz[4] && matriz[4]===matriz[6]){
        if(matriz[2]=='P1'){
            pontoWp1++;
            pontoLp2++;
        }else{
            pontoWp2++;
            pontoLp1++;            
        }
        alert("DIAGONAL: direita ");
        resetJogo(); 
    }else if(matriz[0]!=undefined && matriz[1]!=undefined && matriz[2]!=undefined
        && matriz[3]!=undefined && matriz[4]!=undefined && matriz[5]!=undefined
        && matriz[6]!=undefined && matriz[7]!=undefined && matriz[8]!=undefined){
        alert("velha");
        resetJogo(); 
    }
    console.log("Matriz: 0-"+matriz[0]+" 1-"+matriz[1]+" 2-"+matriz[2]
    +" 3-"+matriz[3]+" 4-"+matriz[4]+" 5-"+matriz[5]
    +" 6-"+matriz[6]+" 7-"+matriz[7]+" 8-"+matriz[8]);
}
function resetJogo(){
    // INSERI OS PONTOS
    pontoVitoriaP1.innerText="Vitoria: "+pontoWp1;
    pontoDerrotaP1.innerText="Derrota: "+pontoLp1;
    pontoVitoriaP2.innerText="Vitoria: "+pontoWp2;
    pontoDerrotaP2.innerText="Derrota: "+pontoLp2;
    matriz[0]=undefined; matriz[1]=undefined; matriz[2]=undefined;
    matriz[3]=undefined; matriz[4]=undefined; matriz[5]=undefined;
    matriz[6]=undefined; matriz[7]=undefined; matriz[8]=undefined;
    vezP1=0;
    vezP2=0; 
    //RETIRA OS ELEMENTOS DO TAB
    for(let i=0; i<=4;i++){   
        document.querySelector('div #simboloX:last-child').remove();
        document.querySelector('div #simboloO:last-child').remove();
    }
}
function apelidoJogo(){
    let nomeJogador=document.querySelector('#nomeJogador').value;
   
    if(nomeJogador.length ==0){
        nomeJogador=document.querySelector('#nomeJogador').value = 'Desconhecido';
        let novoElemento = document.createElement("p");
        let texto= document.createTextNode("*Insira um Apelido*");
        novoElemento.appendChild(texto);
        novoElemento.style.color="red";
        let elementoAlvo = document.querySelector("label");
        let elementoPai = document.querySelector("#contCabecalho");
        elementoPai.insertBefore(novoElemento, elementoAlvo);
        return false;
    }else{
        let maquina="Maquina007";
        nick2.innerHTML="Nick: "+maquina;
        nick1.innerHTML="Nick: "+nomeJogador;
        return true;
    }
}
function sair(){
    window.location.href="index.html";
}