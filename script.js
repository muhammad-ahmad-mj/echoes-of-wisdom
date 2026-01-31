const quotesData = [
  { text: "You have power over your mind - not outside events. Realize this, and you will find strength.", author: "Marcus Aurelius" },
  { text: "It is not that we have a short time to live, but that we waste much of it.", author: "Seneca" },
  { text: "The soul is healed by being with children.", author: "Fyodor Dostoevsky" },
  { text: "Everyone thinks of changing the world, but no one thinks of changing himself.", author: "Leo Tolstoy" },
  { text: "Man is what he believes.", author: "Anton Chekhov" }
];

function renderQuotes() {
  const quotesContainer = document.getElementById('quotes');
  if (!quotesContainer) return;
  quotesContainer.innerHTML = '';
  quotesData.forEach(q => {
    const card = document.createElement('div');
    card.className = 'quote-card';
    card.innerHTML = `<p>"${q.text}"</p><div class="author">${q.author}</div>`;
    quotesContainer.appendChild(card);
  });
}

function setupSearch() {
  const searchInput = document.getElementById('search');
  if (!searchInput) return;
  searchInput.addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const quotes = document.querySelectorAll('.quote-card');
    quotes.forEach(card => {
      const author = card.querySelector('.author').textContent.toLowerCase();
      card.style.display = author.includes(term) ? 'block' : 'none';
    });
  });
}

function showFeaturedQuote() {
  const featured = document.getElementById('featured-quote');
  if (!featured) return;
  const random = quotesData[Math.floor(Math.random() * quotesData.length)];
  featured.innerHTML = `<blockquote>"${random.text}"</blockquote><p class="author">${random.author}</p>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuotes();
  setupSearch();
  showFeaturedQuote();
});
