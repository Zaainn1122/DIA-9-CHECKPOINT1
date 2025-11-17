// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const headerNav = document.querySelector('.header-nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    headerNav.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.header-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!headerNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        headerNav.classList.remove('active');
    }
});

// Category dropdown toggle
const categoryDropdownBtn = document.querySelector('.category-dropdown-btn');
const categoryDropdownMenu = document.querySelector('.category-dropdown-menu');

if (categoryDropdownBtn && categoryDropdownMenu) {
    categoryDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = categoryDropdownBtn.getAttribute('aria-expanded') === 'true';
        categoryDropdownBtn.setAttribute('aria-expanded', !isExpanded);
        categoryDropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking on a category
    const categoryButtons = categoryDropdownMenu.querySelectorAll('button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryDropdownBtn.setAttribute('aria-expanded', 'false');
            categoryDropdownMenu.classList.remove('active');
            // Update button text with selected category
            const selectedCategory = button.textContent;
            categoryDropdownBtn.querySelector('span').textContent = selectedCategory;
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!categoryDropdownBtn.contains(e.target) && !categoryDropdownMenu.contains(e.target)) {
            categoryDropdownBtn.setAttribute('aria-expanded', 'false');
            categoryDropdownMenu.classList.remove('active');
        }
    });
}
