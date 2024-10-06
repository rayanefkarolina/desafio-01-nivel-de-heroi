let nome = "Rayane"; //nome pode ser substituído
let quantidadeDeXP = 10001; //quantidade de xp pode ser substituída
let nivel;

if (quantidadeDeXP < 1000) {
  nivel = "Ferro";
} else if (quantidadeDeXP > 1000 && quantidadeDeXP <= 2000) {
  nivel = "Bronze";
} else if (quantidadeDeXP > 2000 && quantidadeDeXP <= 5000) {
  nivel = "Prata";
} else if (quantidadeDeXP > 5000 && quantidadeDeXP <= 7000) {
  nivel = "Ouro";
} else if (quantidadeDeXP > 7000 && quantidadeDeXP <= 8000) {
  nivel = "Platina";
} else if (quantidadeDeXP > 8000 && quantidadeDeXP <= 9000) {
  nivel = "Ascendente";
} else if (quantidadeDeXP > 9000 && quantidadeDeXP <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}

console.log("O herói de nome " + nome + " está no nível de " + nivel);
