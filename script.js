const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    menuCards.forEach(card => {
      const category = card.dataset.category;

      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const toast = document.getElementById('toast');
const addCartButtons = document.querySelectorAll('.add-cart');

addCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    toast.classList.add('show');
    clearTimeout(window.toastTimeout);

    window.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  });
});

const testimonials = [
  {
    text: '“Kopinya benar-benar punya karakter. Desain websitenya juga bikin proses order terasa cepat dan premium.”',
    name: 'Nadia Putri',
    role: 'Food Blogger'
  },
  {
    text: '“Long Black punya branding yang elegan. Menu favorit saya Black Velvet, rasanya khas dan memorable.”',
    name: 'Raka Mahendra',
    role: 'Content Creator'
  },
  {
    text: '“Website ini enak dilihat di HP maupun laptop. Responsif dan tampilannya cocok untuk bisnis kopi modern.”',
    name: 'Salsa Aulia',
    role: 'UI Reviewer'
  }
];

const testimonialText = document.getElementById('testimonialText');
const testimonialName = document.getElementById('testimonialName');
const testimonialRole = document.getElementById('testimonialRole');
const dotsContainer = document.getElementById('dots');

let currentTestimonial = 0;

function renderDots() {
  dotsContainer.innerHTML = '';

  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');

    if (index === currentTestimonial) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => showTestimonial(index));
    dotsContainer.appendChild(dot);
  });
}

function showTestimonial(index) {
  currentTestimonial = index;
  testimonialText.textContent = testimonials[index].text;
  testimonialName.textContent = testimonials[index].name;
  testimonialRole.textContent = testimonials[index].role;
  renderDots();
}

renderDots();

setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}, 4000);

const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');

subscribeForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  if (!email) return;

  toast.textContent = `Terima kasih! ${email} berhasil subscribe.`;
  toast.classList.add('show');

  clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
    toast.textContent = 'Produk berhasil ditambahkan ke keranjang';
  }, 2500);

  subscribeForm.reset();
});