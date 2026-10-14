/* ============================================================
   ASAD MULLA PORTFOLIO — JAVASCRIPT
   Profile photo: set profilePhoto to a path such as images/profile.jpg.
   Project screenshots: set projectImages entries in HTML card order.
   Project links: replace each placeholder GitHub URL in index.html.
   Category filters: buttons use data-filter and cards use data-category.
   ============================================================ */
/* ================= EDIT YOUR LINKS AND IMAGES HERE =================
   PROFILE PHOTO: put your photo at images/profile.jpg, then set the path
   below. If you don't have a photo yet, leave it as an empty string.
   PROJECT IMAGES: add screenshot files under images/ and list them below.
   Use one entry per project card in the same order as the HTML cards.
   Use an empty string for a card that has no image yet.
   Example: "images/ecommerce-dashboard.png"
   GITHUB LINKS: edit each project's <a class="project-link" href="..."> in
   the HTML above and replace placeholder URLs with its exact repository.
   =================================================================== */
// Set a relative image path here to show your portrait in the profile card.
const profilePhoto = ""; // Example: "images/profile.jpg"
// Make placeholder project links obvious: each currently opens your GitHub profile.
document.querySelectorAll('#projectGrid .project-link').forEach(link => {
  if (link.getAttribute('href') === 'https://github.com/Asad4470') {
    link.textContent = 'GitHub profile · add repository ↗';
  }
});
// Image paths map to the nine project cards in the same order as the HTML.
const projectImages = [
  "", // 1. E-Commerce Sales Analysis Dashboard
  "", // 2. Data Cleaning & Exploratory Analysis
  "", // 3. SQL Business Analysis
  "", // 4. COVID-19 X-Ray Image Classification
  "", // 5. Regression & Classification Models
  "", // 6. ANN & CNN Experiments
  "", // 7. Small Office Network Design
  "", // 8. Firefighter Car Robot
  ""  // 9. To-Do Application
];
if (profilePhoto) {
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    const photo = document.createElement('img');
    photo.className = 'profile-photo';
    photo.alt = 'Portrait of Asad Mulla';
    photo.src = profilePhoto;
    photo.onload = () => { photo.style.display = 'block'; avatar.style.display = 'none'; };
    photo.onerror = () => { photo.remove(); };
    avatar.insertAdjacentElement('beforebegin', photo);
  }
}
// Collect project cards once; used for inserting screenshots and filtering.
const cards = [...document.querySelectorAll('.card[data-category]')];
projectImages.forEach((src, index) => {
  if (!src || !cards[index]) return;
  const image = document.createElement('img');
  image.className = 'project-image';
  image.alt = `Project screenshot: ${cards[index].querySelector('h3')?.textContent || 'Project'}`;
  image.src = src;
  image.onerror = () => image.remove();
  cards[index].prepend(image);
});
// Clicking a category button hides cards that do not match the chosen category.
const buttons = document.querySelectorAll('.filter');
buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  cards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));
