// Sample story data
const stories = [
    {
        title: 'Truyện 1',
        description: 'Mô tả truyện 1...',
        image: 'placeholder.jpg'
    },
    // Add more stories as needed
];

// Function to populate latest stories
function loadLatestStories() {
    const storyList = document.querySelector('.story-list');
    stories.forEach(story => {
        const storyItem = document.createElement('div');
        storyItem.classList.add('story-item');
        storyItem.innerHTML = `
            <h3>${story.title}</h3>
            <p>${story.description}</p>
        `;
        storyList.appendChild(storyItem);
    });
}

// Load stories when page is ready
document.addEventListener('DOMContentLoaded', loadLatestStories);

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = 'white';
    }
});

// Search functionality
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', function () {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        // Implement search functionality here
        console.log('Searching for:', searchTerm);
    }
});

// Mobile menu toggle (add button in HTML if needed)
function toggleMobileMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

// Horizontal scrolling for featured stories
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');
const storyGrid = document.querySelector('.story-grid');

scrollLeft.addEventListener('click', () => {
    storyGrid.scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    storyGrid.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
