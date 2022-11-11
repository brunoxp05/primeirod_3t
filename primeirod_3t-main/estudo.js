function moeda(atual) {
  return atual.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function total() {
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;
  let r = c;
  if (!Number(c)) {
      alert("O capital deve ser numeros.");
      document.getElementById("valor").value = "";
      document.getElementById("valor").focus();
      return;
  }
  if (!Number(j)) {
      alert("O juros deve ser numeros.");
      document.getElementById("juros").value = "";
      document.getElementById("juros").focus();
      return;
  }
  if (!Number(t)) {
      alert("O meses deve ser numeros.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return;
  }
  let mes = "";
  for (let i = 1; i <= t; i++) {
      r = c * (1 + (j / 100));
      mes += i + ": " + moeda(r) + "<br>";
      //  document.write("Mês " + i + " valor: " + moeda(r) +"<br>");
      c = r;
  }
  document.getElementById("mes").innerHTML = mes;
  document.getElementById("total").innerHTML = "Total: " + moeda(r);
  // document.write("Resultado: " + moeda(r));


}
function calculaRaiz(){
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  let delta, raiz, x1, x2;  
  
  delta = (b*b) - (4*a*c);
 if(delta >= 0){
 raiz = Math.sqrt(delta);
 x1 = ((-b)+raiz)/(2*a);
 x2 = ((-b)-raiz)/(2*a);
 resultado = "X1="+x1+" X2="+x2;
 }else {
resultado = "Não existe Raiz Real";
 }
 
 document.getElementById("raiz").innerHTML = resultado;






}



//Diz a lenda, se vc olhar por tempo suficiente, você ira começar a questionar coisas como "Oque exatamente é "moeda"???" e "Por que o meu codigo antigo não funcionava???"