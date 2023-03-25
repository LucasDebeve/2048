// Récupération des données JSON de scoreboard.json
const data = await fetch("scoreboard.json").then((response) => response.json());
// Tri des données en ordre décroissant des scores
data.sort((a, b) => b.score - a.score);

// Récupération des 5 premières entrées
const top5 = data.slice(0, 5);

// Création du tableau HTML dynamique
const table = document.getElementById("table_scores");

// Ajout des entrées au tableau
top5.forEach((item) => {
  const row = table.insertRow();
  const pseudoCell = row.insertCell();
  const scoreCell = row.insertCell();
  pseudoCell.innerHTML = item.pseudo;
  scoreCell.innerHTML = item.score;
});
