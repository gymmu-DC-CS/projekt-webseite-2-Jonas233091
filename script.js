function toggleCard(el) {
  el.classList.toggle("active");
}
function addLog() {
  const date = document.getElementById("dateInput").value;
  const exercise = document.getElementById("exerciseInput").value.trim();
  const weight = document.getElementById("weightInput").value;

  if (!date || !exercise || !weight) return;

  const tbody = document.getElementById("logBody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${date}</td>
    <td>${exercise}</td>
    <td>${weight} kg</td>
  `;

  tbody.appendChild(row);

  document.getElementById("dateInput").value = "";
  document.getElementById("exerciseInput").value = "";
  document.getElementById("weightInput").value = "";
}