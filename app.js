
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.warn('Erro ao registrar o Service Worker', err));
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("visitaForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const cliente = document.getElementById("cliente").value;
    const observacoes = document.getElementById("observacoes").value;
    const data = new Date().toLocaleString();
    const visita = { cliente, observacoes, data };

    let visitas = JSON.parse(localStorage.getItem("visitas_agd") || "[]");
    visitas.push(visita);
    localStorage.setItem("visitas_agd", JSON.stringify(visitas));

    alert("Visita salva com sucesso!");
    form.reset();
  });
});
