var Receitas = [
  {
    "titulo":"Panqueca",
    "porcoes":2,
    "tipo":"Café da manhã",
    "ingredientes":[
        "1 xícara (chá) de farinha de trigo com fermento",
        "4 colheres (sopa) de açúcar",
        "1 xícara (chá) de leite",
        "2 ovos",
        "2 colheres (sopa) de manteiga derretida",
        "Manteiga para untar a gosto",
        "Mel, chocolate ou pasta de amemdóim a gosto "
    ],
    "nivel":"Fácil ",
    "modoPreparo":[
        " Misture todos os secos , em outro recipiente misture os ingredientes no liquidificador até ficar homogêneo.",
        " Unte a frigideira e com o auxilio de uma concha coloque porçoes e frite por aproximadamente um minuto de cada lado ou ate ficar douradinha em fogo médio.",
        " Sirva acompanhado por mel, chocolate ou pasta de amemdóim a gosto.",
    ]
      },
      {
      "titulo":"Bolo de laranja",
      "tipo":"Lanche da tarde",
      "porcoes":8,
      "ingredientes":[
          "1 xícara (chá) de óleo",
          "4 ovos",
          "2 xícaras (chá) de açúcar",
          "2 xícaras (chá) de farinha de trigo",
          "1 xícara (chá) de suco de laranja",
          "1 colher (sopa) de fermento em pó"
    ],
      "nivel":"Difícil",
      "modoPreparo":[
          "Em uma tigela, misture o óleo, os ovos e o açúcar.",
          "Acrescente a farinha de trigo, o suco de laranja e o fermento e mexa bem.",
          "Asse em forno médio (180°C), preaquecido, por aproximadamente 40 minutos."
   ]
  },
  { //receita 4 de almoço com 6 ingredientes
    "titulo": "Bife à milanesa",
      "tipo": "Almoço",
      "porcoes": 4,
      "ingredientes": [
          "4 bifes de alcatra",
          "1 ovo",
          "1 xícara (chá) de farinha de rosca",
          "1 xícara (chá) de farinha de trigo",
          "Sal a gosto",
          "Pimenta-do-reino a gosto",
          "Óleo para fritar"
    ],
      "nivel": "Fácil",
      "modoPreparo": [
          "Em um prato, coloque o ovo e bata com um garfo.",
          "Em outro prato, coloque a farinha de trigo, a farinha de rosca, o sal e a pimenta-do-reino e misture.",

          "Passe os bifes na farinha de trigo, depois no ovo e, por último, na mistura de farinha de rosca.",
          "Frite em óleo quente até dourar dos dois lados e sirva."
   ]
  },
  {
    "titulo":"Filé de Frango à parmegiana",
    "porcoes":1,
    "ingredientes":[
        "1/2 kg de filé de frango",
        "1 dente de alho picadinho",
        "suco de limão, ervas finas e sal a gosto",
        "2 ovos batidos com 1 pitada de sal",
        "2 xícaras (chá) de farinha de rosca",
        "3 colheres (sopa) de azeite",
    
   ],
    "nivel":"Fácil ",
    "modoPreparo":[
        "1- Tempere os filés de frango com o alho, suco de limão, ervas finas e sal a gosto.",
        "2- Deixe na geladeira por 30 minutos.",
        "3- Após esse tempo, passe nos ovos batidos e na farinha de rosca.",
        "4- Doure a cebola no azeite, acrescente os tomates picadinhos, o molho pronto, a água e o caldo de galinha.",
        "5- Cubra com a mussarela em fatias.",
  ]
},
{
  "titulo":" Baião de dois ",
  "tipo":"Almoço",
  "porcoes":6,
  "ingredientes":[
      "1/2 kg de feijão verde",
      "1 paio cortado em rodelas",
      "2 tabletes de caldo de carne",
      "1 cebola ralada",
      "1 dente de alho amassado",
      "3 colheres (sopa) de óleo",
       "1/2 colher (sopa) de coento picado",
      "2 xícaras e 1/2 (chá) de arroz lavado e escorrido",
      "150 g de queijo de coalho cortado em fatias finas"
  ],
  "nivel":"Médio ",
  "modoPreparo":[
      "1 - Deixe o feijão de molho de véspera. No dia seguinte cozinhe-o juntamente com o caldo de carne e 2,5 litros de água fria.",
      "2 - Tampe a panela e deixe cozinhar em fogo baixo por aproximadamente 1 hora.",
       "3 - Em outra panela doure o paio, a cebola e o alho, no óleo. Junte o coento e o arroz e refogue bem. Acrescente o feijão já cozido, juntamente com o caldo. Misture bem, tampe a panela e deixe cozinhar até que o arroz fique cozido, úmido e com consistência cremosa.",
        "4 - Cubra o arroz com as fatias de queijo. Tampe a panela novamente e deixe que o vapor derreta o queijo.",
        "5 - Sirva acompanhado de carne-de-sol frita ou assada",
  ]
},
{
  "titulo":"Cuscuz de frigideira com ovo",
  "porcoes":1,
  "tipo":"Café da manhã",
  "ingredientes":[
      "4 colheres de sopa de cuscuz de milho",
      "4 colheres de sopa de água",
      "Manteiga para untar a frigideira",
      "3 tomates-cerejas cortados em cubos",
      "1 ovo",
      "Palmito a gosto",
       "Queijo ralado a gosto",
      "Sal a gosto",
      "Pimenta-do-reino a gosto"
  ],
  "nivel":"Fácil ",
  "modoPreparo":[
      "1 - Coloque o cuscuz em uma tigela.",
      "2 - Adicione a água, mexa e deixe hidratar por 10 minutos.",
       "3 - Em seguida, unte a frigideira com a manteiga e molde o cuscuz.",
        "4 - Leve a frigideira ao fogo baixo, tampe e aguarde 3 minutos.",
        "5 - Retire a tampa, coloque o ovo, tempere com sal, pimenta, queijo ralado e tomate.",
        "6 - Finalize com o palmito e o cream cheese.",
        "7 - Tampe novamente e cozinhe até o ovo estar no ponto desejado e o queijo derreter.",
        "8 - Agora é só servir, bom apetite.",
             ]
}
  
];


function criarCard(){

//innerhtml para criar card para cada receita com buttons diferentes
var card = document.getElementById("card");

  card.innerHTML += `<div class="card">
    <div class="card-image" id="panqueca">
      
    </div>
    <div class="card-content">
      <h2>${Receitas[0].titulo}</h2>
      <p>${Receitas[0].porcoes} porções</p>
      <p>${Receitas[0].nivel}</p>
      <h3>Ingredientes</h3>
      <ul>
        <li>${Receitas[0].ingredientes[0]}</li>
        <li>${Receitas[0].ingredientes[1]}</li>
          <li>${Receitas[0].ingredientes[2]}</li>
          <li>${Receitas[0].ingredientes[3]}</li>
          <li>${Receitas[0].ingredientes[4]}</li>
          <li>${Receitas[0].ingredientes[5]}</li>


      </ul>
      <h3>Modo de preparo</h3>
      <ul>
        <li>${Receitas[0].modoPreparo[0]}</li>
          <li>${Receitas[0].modoPreparo[1]}</li>
          <li>${Receitas[0].modoPreparo[2]}</li>
          <li>${Receitas[0].modoPreparo[3]}</li>


      </ul>
    </div>
  </div> `;
  var button1 = document.getElementById("button1");
  //fazer button1 sumir
  button1.style.display = "none";
  var inv = document.getElementById("inv1");
  //fazer button1 sumir
  inv.style.display = "block";
  card.style.display = "block";

}
function sumirCard(){
  var card = document.getElementById("card");
  card.innerHTML = "";
  var button1 = document.getElementById("button1");
  button1.style.display = "block";
  var inv = document.getElementById("inv1");
  inv.style.display = "none";

}

function criarCard2(){

  //innerhtml para criar card para cada receita com buttons diferentes
  var card = document.getElementById("card2");
  
      card.innerHTML += `<div class="card2">
        <div class="card-image" id="panqueca">
      
        </div>
        <div class="card-content">
          <h2>${Receitas[1].titulo}</h2>
          <p>${Receitas[1].porcoes} porções</p>
          <p>${Receitas[1].nivel}</p>
          <h3>Ingredientes</h3>
          <ul>
            <li>${Receitas[1].ingredientes[0]}</li>
              <li>${Receitas[1].ingredientes[1]}</li>
              <li>${Receitas[1].ingredientes[2]}</li>
              <li>${Receitas[1].ingredientes[3]}</li>
              <li>${Receitas[1].ingredientes[4]}</li>
              <li>${Receitas[1].ingredientes[5]}</li>

  
          </ul>
          <h3>Modo de preparo</h3>
          <ul>
            <li>${Receitas[1].modoPreparo[0]}</li>
              <li>${Receitas[1].modoPreparo[1]}</li>
              <li>${Receitas[1].modoPreparo[2]}</li>
              <li>${Receitas[1].modoPreparo[3]}</li>

  
          </ul>
        </div>
      </div> `;

      var button2 = document.getElementById("button2");
      //fazer button1 sumir
      button2.style.display = "none";
      var inv2 = document.getElementById("inv2");
      //fazer button1 sumir
      inv2.style.display = "block";
      card2.style.display = "block";
  
  
  }


function sumirCard2(){
  var card2 = document.getElementById("card2");
  card2.innerHTML = "";
  var button2 = document.getElementById("button2");
  button2.style.display = "block";
  var inv2 = document.getElementById("inv2");
  inv2.style.display = "none";

}
  function criarCard3  (){
  
      //innerhtml para criar card para cada receita com buttons diferentes
      var card = document.getElementById("card3");
      
          card.innerHTML += `<div class="card3">
            <div class="card-image" id="panqueca">
              
            </div>
            <div class="card-content">
              <h2>${Receitas[2].titulo}</h2>
              <p>Serve: ${Receitas[2].porcoes} porções</p>
              <p>Dificuldade: ${Receitas[2].nivel}</p>
              <h3>Ingredientes</h3>
              <ul>
                <li>${Receitas[2].ingredientes[0]}</li>
                  <li>${Receitas[2].ingredientes[1]}</li>
                  <li>${Receitas[2].ingredientes[2]}</li>
                  <li>${Receitas[2].ingredientes[3]}</li>
                  <li>${Receitas[2].ingredientes[4]}</li>
                  <li>${Receitas[2].ingredientes[5]}</li>
  
      
              </ul>
              <h3>Modo de preparo</h3>
              <ul>
                <li>${Receitas[2].modoPreparo[0]}</li>
                  <li>${Receitas[2].modoPreparo[1]}</li>
                  <li>${Receitas[2].modoPreparo[2]}</li>
                  <li>${Receitas[2].modoPreparo[3]}</li>
      
              </ul>
            </div>
          </div> `;
          var button3 = document.getElementById("button3");
          //fazer button1 sumir
          button3.style.display = "none";
          var inv3 = document.getElementById("inv3");
          //fazer button1 sumir
          inv3.style.display = "block";
          card3.style.display = "block";
      
      }
      function sumirCard3(){
        var card = document.getElementById("card3");
        card.innerHTML = "";
        var button1 = document.getElementById("button3");
        button1.style.display = "block";
        var inv = document.getElementById("inv3");
        inv.style.display = "none";
    
      }
      function criarCard4(){     
          //innerhtml para criar card para cada receita com buttons diferentes
          var card = document.getElementById("card4");
          
              card.innerHTML += `<div class="card4">
                <div class="card-image" id="panqueca">
                  
                </div>
                <div class="card-content">
                  <h2>${Receitas[3].titulo}</h2>
                  <p>${Receitas[3].porcoes} porções</p>
                  <p>${Receitas[3].nivel}</p>
                  <h3>Ingredientes</h3>
                  <ul>
                    <li>${Receitas[3].ingredientes[0]}</li>
                      <li>${Receitas[3].ingredientes[1]}</li>
                      <li>${Receitas[3].ingredientes[2]}</li>
                      <li>${Receitas[3].ingredientes[3]}</li>
                      <li>${Receitas[3].ingredientes[4]}</li>
                      <li>${Receitas[3].ingredientes[5]}</li>
      
          
                  </ul>
                  <h3>Modo de preparo</h3>
                  <ul>
                    <li>${Receitas[3].modoPreparo[0]}</li>
                      <li>${Receitas[3].modoPreparo[1]}</li>
                      <li>${Receitas[3].modoPreparo[2]}</li>
                      <li>${Receitas[3].modoPreparo[3]}</li>
          
                  </ul>
                </div>
              </div> `;
              var button3 = document.getElementById("button4");
              //fazer button1 sumir
              button3.style.display = "none";
              var inv3 = document.getElementById("inv4");
              //fazer button1 sumir
              inv3.style.display = "block";
              card3.style.display = "block";
          
          }     
          function sumirCard4(){
            var card = document.getElementById("card4");
            card.innerHTML = "";
            var button1 = document.getElementById("button4");
            button1.style.display = "block";
            var inv = document.getElementById("inv4");
            inv.style.display = "none";
        
          }
          function criarCard5(){     
            //innerhtml para criar card para cada receita com buttons diferentes
            var card = document.getElementById("card5");
            
                card.innerHTML += `<div class="card5">
                  <div class="card-image" id="panqueca">
                    
                  </div>
                  <div class="card-content">
                    <h2>${Receitas[4].titulo}</h2>
                    <p>${Receitas[4].porcoes} porções</p>
                    <p>${Receitas[4].nivel}</p>
                    <h3>Ingredientes</h3>
                    <ul>
                      <li>${Receitas[4].ingredientes[0]}</li>
                        <li>${Receitas[4].ingredientes[1]}</li>
                        <li>${Receitas[4].ingredientes[2]}</li>
                        <li>${Receitas[4].ingredientes[3]}</li>
                        <li>${Receitas[4].ingredientes[4]}</li>
                        <li>${Receitas[4].ingredientes[5]}</li>

        
            
                    </ul>
                    <h3>Modo de preparo</h3>
                    <ul>
                      <li>${Receitas[4].modoPreparo[0]}</li>
                        <li>${Receitas[4].modoPreparo[1]}</li>
                        <li>${Receitas[4].modoPreparo[2]}</li>
                        <li>${Receitas[4].modoPreparo[3]}</li>

            
                    </ul>
                  </div>
                </div> `;
                var button3 = document.getElementById("button5");
                //fazer button1 sumir
                button3.style.display = "none";
                var inv3 = document.getElementById("inv5");
                //fazer button1 sumir
                inv3.style.display = "block";
                card3.style.display = "block";
            
            }
            function sumirCard5(){
              var card = document.getElementById("card5");
              card.innerHTML = "";
              var button1 = document.getElementById("button5");
              button1.style.display = "block";
              var inv = document.getElementById("inv5");
              inv.style.display = "none";
          
            }
            function criarCard6(){     
              //innerhtml para criar card para cada receita com buttons diferentes
              var card = document.getElementById("card6");
              
                  card.innerHTML += `<div class="card6">
                    <div class="card-image" id="panqueca">
                      
                    </div>
                    <div class="card-content">
                      <h2>${Receitas[5].titulo}</h2>
                      <p>${Receitas[5].porcoes} porções</p>
                      <p>${Receitas[5].nivel}</p>
                      <h3>Ingredientes</h3>
                      <ul>
                        <li>${Receitas[5].ingredientes[0]}</li>
                          <li>${Receitas[5].ingredientes[1]}</li>
                          <li>${Receitas[5].ingredientes[2]}</li>
                          <li>${Receitas[5].ingredientes[3]}</li>
                          <li>${Receitas[5].ingredientes[4]}</li>
                          <li>${Receitas[5].ingredientes[5]}</li>

          
              
                      </ul>
                      <h3>Modo de preparo</h3>
                      <ul>
                        <li>${Receitas[4].modoPreparo[0]}</li>
                          <li>${Receitas[4].modoPreparo[1]}</li>
                          <li>${Receitas[4].modoPreparo[2]}</li>
                          <li>${Receitas[4].modoPreparo[3]}</li>

              
                      </ul>
                    </div>

                  </div> `;
                  var button3 = document.getElementById("button6");
                  //fazer button1 sumir
                  button3.style.display = "none";
                  var inv3 = document.getElementById("inv6");
                  //fazer button1 sumir
                  inv3.style.display = "block";
                  card3.style.display = "block";
              
              }
              function sumirCard6(){
                var card = document.getElementById("card6");
                card.innerHTML = "";
                var button1 = document.getElementById("button6");
                button1.style.display = "block";
                var inv = document.getElementById("inv6");
                inv.style.display = "none";
            
              }