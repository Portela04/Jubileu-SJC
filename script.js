// =========================
// DADOS DOS EVENTOS
// =========================
const eventos = [
  {
    data: '24 de novembro',
    titulo: 'Abertura solene do Ano Jubilar',
    descricao: 'Celebração litúrgica e conferência inaugural.'
  },
  {
    data: 'março',
    titulo: 'Colóquio acadêmico',
    descricao: 'Diálogo entre espiritualidade carmelitana e ciências humanas.'
  },
  {
    data: 'julho',
    titulo: 'Semana Joanina',
    descricao: 'Cursos, oficinas e momentos orantes inspirados na obra do Santo.'
  },
  {
    data: 'dezembro',
    titulo: 'Encerramento jubilar',
    descricao: 'Síntese celebrativa e lançamento de publicações.'
  }
];

// =========================
// INSERÇÃO DE EVENTOS NO CALENDÁRIO
// =========================
const calendario = document.getElementById('calendario');

eventos.forEach(({ data, titulo, descricao }) => {
  const divEvento = document.createElement('div');
  divEvento.className = 'evento';
  divEvento.innerHTML = `
    <data>${data}</data>
    <h3>${titulo}</h3>
    <p>${descricao}</p>
  `;
  calendario.appendChild(divEvento);
});

// =========================
// SCROLL SUAVE PARA ANCORAS
// =========================
document.querySelectorAll('.js-scroll').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const headerHeight = document.querySelector('header').offsetHeight;
    const offset = 24;
    const posicao = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - offset;

    window.scrollTo({ top: posicao, behavior: 'smooth' });
  });
});

// MENU HAMBURGER
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
