const prompt = require('prompt-sync')();

const personagem = {
    nome: null,
    vida: 100,
    poder: 1,
    fugir: false,
}

personagem.nome = prompt("Digite o nome do seu personagem: ");

const textosIntroducao = []

textosIntroducao[0] = `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Mestre Giun Seik:

Bravo guerreiro ${personagem.nome}, consegue ver o massacre que houve aqui?
Sim, nossos inimigos da vila da Caveira nos atacaram por isso te chamei para
fazer justiça!


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


`;

textosIntroducao[1] = `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Guerreiro ${personagem.nome}:

O que devo fazer mestre Giun Seik?

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


`;

textosIntroducao[2] = `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Mestre Giun Seik:

Você deve encontrar a espada flamejante e derrotar Yonti o mal
Mas não será fácil pois ele tem muitos servos da vila da Caveira com ele

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


`;




const jogo = {
    dia: 0,
    passarDia: function(numeroDias = 1){
        this.dia += numeroDias
    },

    mostrarDia: function() {
    
        console.log(`

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Este é o dia ${this.dia} da sua jornada...

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
`);
        prompt("tecle ENTER para continuar...")

}

}

let texto = null;

while(personagem.vida){
    if(jogo.dia === 0){
        textosIntroducao.forEach(texto => {
            console.log(texto);
            prompt("Tecle ENTER para continuar...")
        });

        console.log(`\nMestre Giun Seik:\n\nVocê irá ou fugirá do seu destino jovem guerreiro? [ 1=SIM | 0=NÃO ] `);
        let resposta = +prompt();
    
        if(resposta){
            texto = `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Guerreiro ${personagem.nome}:
            
Irei agora mestre, e vingarei a minha vila contra a vila da Caveira e contra
Yonti o mal.
            
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            
            
            `;
        }else{
            personagem.fugir = true;
            texto = `

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Guerreiro ${personagem.nome}:

Não sou forte o suficiente mestre.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


`;
        }

        console.log("\n\nEssa foi a resposta do Guerreiro...\n\n")
        console.log(texto);
        jogo.passarDia()
        continue;

    }

    // FIM DA INTRODUÇÃO
    jogo.mostrarDia();

    if(personagem.fugir && jogo.dia < 10){
        jogo.passarDia()
        continue;
    }
    
    if(jogo.dia === 1){
        
    }

    if(jogo.dia == 10 && personagem.fugir){
        console.log(`
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      

Depois de fugir por ${jogo.dia} o nosso ex-herói fugitivo encontra  seu inimigo
Yonti o mal. que infelizmente crava a espada no seu peito o matando...
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
`);
        personagem.vida = 0;
    }


    jogo.passarDia()

}