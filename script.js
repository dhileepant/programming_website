// Programming Languages Hub JavaScript with Authentication

// Firebase functions will be loaded dynamically
let firebaseAuth, firebaseFirestore;

// Programming languages data
const programmingLanguages = [
    {
        id: 1,
        name: 'JavaScript',
        icon: 'fab fa-js-square',
        description: 'A versatile programming language that runs on web browsers and servers, powering interactive web applications.',
        difficulty: 'beginner',
        categories: ['web', 'mobile'],
        features: [
            'Dynamic typing',
            'First-class functions',
            'Event-driven programming',
            'Cross-platform compatibility'
        ],
        syntax: `// JavaScript Example
function greetUser(name) {
    return \`Hello, \${name}! Welcome to JavaScript.\`;
}

const user = "Developer";
console.log(greetUser(user));`,
        useCases: ['Web Development', 'Mobile Apps', 'Server-side Development', 'Desktop Applications'],
        popularity: 95,
        performance: 75,
        learningCurve: 85,
        jobMarket: 90
    },
    {
        id: 2,
        name: 'Python',
        icon: 'fab fa-python',
        description: 'A beginner-friendly language known for its simple syntax and powerful libraries, perfect for data science and web development.',
        difficulty: 'beginner',
        categories: ['data', 'web'],
        features: [
            'Clean and readable syntax',
            'Extensive standard library',
            'Strong community support',
            'Versatile applications'
        ],
        syntax: `# Python Example
def greet_user(name):
    return f"Hello, {name}! Welcome to Python."

user = "Developer"
print(greet_user(user))

# List comprehension
numbers = [x**2 for x in range(5)]
print(numbers)`,
        useCases: ['Data Science', 'Machine Learning', 'Web Development', 'Automation'],
        popularity: 90,
        performance: 60,
        learningCurve: 95,
        jobMarket: 85
    },
    {
        id: 3,
        name: 'Java',
        icon: 'fab fa-java',
        description: 'A robust, object-oriented language that runs on multiple platforms, widely used in enterprise applications.',
        difficulty: 'intermediate',
        categories: ['web', 'mobile', 'system'],
        features: [
            'Platform independence',
            'Strong memory management',
            'Object-oriented programming',
            'Enterprise-ready'
        ],
        syntax: `// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        String user = "Developer";
        System.out.println(greetUser(user));
    }
    
    public static String greetUser(String name) {
        return "Hello, " + name + "! Welcome to Java.";
    }
}`,
        useCases: ['Enterprise Applications', 'Android Development', 'Web Services', 'Desktop Applications'],
        popularity: 85,
        performance: 80,
        learningCurve: 70,
        jobMarket: 80
    },
    {
        id: 4,
        name: 'C++',
        icon: 'fas fa-code',
        description: 'A powerful system programming language that offers low-level control and high performance for demanding applications.',
        difficulty: 'advanced',
        categories: ['system', 'data'],
        features: [
            'High performance',
            'Low-level memory control',
            'Object-oriented and procedural',
            'System programming'
        ],
        syntax: `// C++ Example
#include <iostream>
#include <string>

std::string greetUser(const std::string& name) {
    return "Hello, " + name + "! Welcome to C++.";
}

int main() {
    std::string user = "Developer";
    std::cout << greetUser(user) << std::endl;
    return 0;
}`,
        useCases: ['System Programming', 'Game Development', 'Embedded Systems', 'High-Performance Applications'],
        popularity: 70,
        performance: 95,
        learningCurve: 40,
        jobMarket: 75
    },
    {
        id: 5,
        name: 'TypeScript',
        icon: 'fas fa-file-code',
        description: 'A typed superset of JavaScript that compiles to plain JavaScript, adding static typing and enhanced tooling.',
        difficulty: 'intermediate',
        categories: ['web'],
        features: [
            'Static typing',
            'Enhanced IDE support',
            'JavaScript compatibility',
            'Large-scale application development'
        ],
        syntax: `// TypeScript Example
interface User {
    name: string;
    age: number;
}

function greetUser(user: User): string {
    return \`Hello, \${user.name}! You are \${user.age} years old.\`;
}

const developer: User = { name: "Developer", age: 25 };
console.log(greetUser(developer));`,
        useCases: ['Large-scale Web Applications', 'Angular Development', 'Node.js Applications', 'Enterprise Frontend'],
        popularity: 80,
        performance: 75,
        learningCurve: 70,
        jobMarket: 85
    },
    {
        id: 6,
        name: 'Swift',
        icon: 'fab fa-swift',
        description: 'Apple\'s modern programming language for iOS, macOS, watchOS, and tvOS app development.',
        difficulty: 'intermediate',
        categories: ['mobile'],
        features: [
            'Modern syntax',
            'Memory safe',
            'High performance',
            'Interoperable with Objective-C'
        ],
        syntax: `// Swift Example
func greetUser(name: String) -> String {
    return "Hello, \\(name)! Welcome to Swift."
}

let user = "Developer"
print(greetUser(name: user))

// Optional binding
var optionalName: String? = "Swift Developer"
if let name = optionalName {
    print("Hello, \\(name)!")
}`,
        useCases: ['iOS Development', 'macOS Applications', 'Server-side Development', 'System Programming'],
        popularity: 65,
        performance: 85,
        learningCurve: 75,
        jobMarket: 70
    },
    {
        id: 7,
        name: 'Go',
        icon: 'fas fa-bolt',
        description: 'A fast, statically typed language designed for modern software development, excellent for concurrent programming.',
        difficulty: 'intermediate',
        categories: ['web', 'system'],
        features: [
            'Fast compilation',
            'Built-in concurrency',
            'Simple syntax',
            'Efficient garbage collection'
        ],
        syntax: `// Go Example
package main

import "fmt"

func greetUser(name string) string {
    return fmt.Sprintf("Hello, %s! Welcome to Go.", name)
}

func main() {
    user := "Developer"
    fmt.Println(greetUser(user))
    
    // Goroutine example
    go func() {
        fmt.Println("This runs concurrently!")
    }()
}`,
        useCases: ['Web Services', 'System Programming', 'Cloud Applications', 'DevOps Tools'],
        popularity: 60,
        performance: 90,
        learningCurve: 80,
        jobMarket: 75
    },
    {
        id: 8,
        name: 'Rust',
        icon: 'fas fa-cog',
        description: 'A systems programming language focused on safety, speed, and concurrency without garbage collection.',
        difficulty: 'advanced',
        categories: ['system'],
        features: [
            'Memory safety',
            'Zero-cost abstractions',
            'Fearless concurrency',
            'No garbage collector'
        ],
        syntax: `// Rust Example
fn greet_user(name: &str) -> String {
    format!("Hello, {}! Welcome to Rust.", name)
}

fn main() {
    let user = "Developer";
    println!("{}", greet_user(user));
    
    // Pattern matching
    let number = Some(42);
    match number {
        Some(n) => println!("Number is: {}", n),
        None => println!("No number"),
    }
}`,
        useCases: ['System Programming', 'Web Assembly', 'Blockchain', 'Operating Systems'],
        popularity: 55,
        performance: 95,
        learningCurve: 35,
        jobMarket: 65
    }
];

// DOM elements
const languageCardsContainer = document.getElementById('languageCards');
const searchInput = document.getElementById('languageSearch');
const filterButtons = document.querySelectorAll('[data-filter]');
const compareLanguage1 = document.getElementById('compareLanguage1');
const compareLanguage2 = document.getElementById('compareLanguage2');
const comparisonResult = document.getElementById('comparisonResult');

// Authentication DOM elements
const authModal = document.getElementById('authModal');
const authForm = document.getElementById('authForm');
const authBtn = document.getElementById('auth-btn');
const formTitle = document.getElementById('formTitle');
const authMsg = document.getElementById('authMsg');
const uname = document.getElementById('uname');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');
const emailField = document.getElementById('emailField');
const confirmPassField = document.getElementById('confirmPassField');
const loginActions = document.getElementById('loginActions');
const toggleMode = document.getElementById('toggleMode');
const toggleText = document.getElementById('toggleText');
const authLink = document.getElementById('authLink');
const userInfo = document.getElementById('userInfo');
const welcomeText = document.getElementById('welcomeText');
const logoutLink = document.getElementById('logoutLink');
const forgotPassword = document.getElementById('forgotPassword');

// Authentication state
let isLoginMode = true;
let currentUser = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing CodeHub...');
    
    try {
        // Check if required elements exist
        if (!languageCardsContainer) {
            console.error('Language cards container not found');
            return;
        }
        
        renderLanguageCards(programmingLanguages);
        console.log('✓ Language cards rendered');
        
        populateComparisonSelects();
        console.log('✓ Comparison selects populated');
        
        setupEventListeners();
        console.log('✓ Event listeners setup');
        
        setupSmoothScrolling();
        console.log('✓ Smooth scrolling setup');
        
        initializeAuth();
        console.log('✓ Authentication initialized');
        
        console.log('CodeHub initialization complete!');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Render language cards
function renderLanguageCards(languages) {
    languageCardsContainer.innerHTML = '';
    
    languages.forEach(language => {
        const card = createLanguageCard(language);
        languageCardsContainer.appendChild(card);
    });
}

// Create individual language card
function createLanguageCard(language) {
    const card = document.createElement('div');
    card.className = 'language-card fade-in';
    card.setAttribute('data-categories', language.categories.join(' '));
    card.setAttribute('data-name', language.name.toLowerCase());
    
    const difficultyClass = `difficulty-${language.difficulty}`;
    const categoryTags = language.categories.map(cat => 
        `<span class="language-tag">${cat}</span>`
    ).join('');
    
    const features = language.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    card.innerHTML = `
        <div class="language-header">
            <div class="language-icon">
                <i class="${language.icon}"></i>
            </div>
            <div class="language-info">
                <h3>${language.name}</h3>
                <span class="difficulty-badge ${difficultyClass}">${language.difficulty}</span>
            </div>
        </div>
        
        <p class="language-description">${language.description}</p>
        
        <div class="language-tags">
            ${categoryTags}
        </div>
        
        <ul class="language-features">
            ${features}
        </ul>
        
        <div class="language-actions">
            <button class="btn-outline" onclick="showLanguageDetails(${language.id})">
                <i class="fas fa-info-circle"></i>
                View Details
            </button>
        </div>
    `;
    
    return card;
}

// Show language details in modal
function showLanguageDetails(languageId) {
    const language = programmingLanguages.find(lang => lang.id === languageId);
    if (!language) return;
    
    const modalHtml = `
        <div class="language-modal" id="languageModal">
            <div class="language-modal-overlay"></div>
            <div class="language-modal-content">
                <div class="modal-header">
                    <h2>
                        <i class="${language.icon}"></i>
                        ${language.name}
                    </h2>
                    <button class="modal-close" onclick="closeLanguageModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="modal-grid">
                        <div class="modal-main">
                            <div class="modal-section">
                                <h3>Description</h3>
                                <p>${language.description}</p>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Key Features</h3>
                                <ul class="feature-list">
                                    ${language.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Common Use Cases</h3>
                                <div class="use-cases">
                                    ${language.useCases.map(useCase => 
                                        `<span class="use-case-tag">${useCase}</span>`
                                    ).join('')}
                                </div>
                            </div>
                            
                            <div class="modal-section">
                                <h3>Example Code</h3>
                                <div class="code-example">
                                    <pre><code>${language.syntax}</code></pre>
                                </div>
                            </div>
                        </div>
                        
                        <div class="modal-sidebar">
                            <h3>Language Stats</h3>
                            
                            <div class="stat-item">
                                <div class="stat-label">Popularity</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${language.popularity}%"></div>
                                </div>
                                <div class="stat-value">${language.popularity}%</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Performance</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${language.performance}%"></div>
                                </div>
                                <div class="stat-value">${language.performance}%</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Learning Curve</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${language.learningCurve}%"></div>
                                </div>
                                <div class="stat-value">${language.learningCurve}%</div>
                            </div>
                            
                            <div class="stat-item">
                                <div class="stat-label">Job Market</div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${language.jobMarket}%"></div>
                                </div>
                                <div class="stat-value">${language.jobMarket}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = document.getElementById('languageModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Close on overlay click
    modal.querySelector('.language-modal-overlay').addEventListener('click', closeLanguageModal);
}

// Close language modal
function closeLanguageModal() {
    const modal = document.getElementById('languageModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    } else {
        console.warn('Search input not found');
    }
    
    // Filter buttons
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', handleFilter);
        });
    } else {
        console.warn('Filter buttons not found');
    }
    
    // Comparison selects
    if (compareLanguage1 && compareLanguage2) {
        compareLanguage1.addEventListener('change', handleComparison);
        compareLanguage2.addEventListener('change', handleComparison);
    } else {
        console.warn('Comparison selects not found');
    }
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.language-card');
    
    cards.forEach(card => {
        const languageName = card.dataset.name;
        const isVisible = languageName.includes(searchTerm);
        
        card.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            card.style.animation = 'fadeInUp 0.5s ease';
        }
    });
}

// Handle filter functionality
function handleFilter(event) {
    const filter = event.target.dataset.filter;
    const cards = document.querySelectorAll('.language-card');
    
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    cards.forEach(card => {
        const categories = card.dataset.categories;
        const isVisible = filter === 'all' || categories.includes(filter);
        
        card.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            card.style.animation = 'fadeInUp 0.5s ease';
        }
    });
}

// Populate comparison selects
function populateComparisonSelects() {
    if (!compareLanguage1 || !compareLanguage2) {
        console.warn('Comparison select elements not found');
        return;
    }
    
    const options = programmingLanguages.map(lang => 
        `<option value="${lang.id}">${lang.name}</option>`
    ).join('');
    
    compareLanguage1.innerHTML = '<option value="">Choose a language...</option>' + options;
    compareLanguage2.innerHTML = '<option value="">Choose a language...</option>' + options;
}

// Handle language comparison
function handleComparison() {
    const lang1Id = parseInt(compareLanguage1.value);
    const lang2Id = parseInt(compareLanguage2.value);
    
    if (!lang1Id || !lang2Id || lang1Id === lang2Id) {
        comparisonResult.classList.remove('show');
        return;
    }
    
    const lang1 = programmingLanguages.find(lang => lang.id === lang1Id);
    const lang2 = programmingLanguages.find(lang => lang.id === lang2Id);
    
    if (lang1 && lang2) {
        displayComparison(lang1, lang2);
    }
}

// Display comparison results
function displayComparison(lang1, lang2) {
    const comparisonHtml = `
        <div class="comparison-header">
            <h3>${lang1.name} vs ${lang2.name}</h3>
        </div>
        
        <div class="comparison-table-container">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Criteria</th>
                        <th>
                            <i class="${lang1.icon}"></i>
                            ${lang1.name}
                        </th>
                        <th>
                            <i class="${lang2.icon}"></i>
                            ${lang2.name}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Difficulty</strong></td>
                        <td><span class="difficulty-badge difficulty-${lang1.difficulty}">${lang1.difficulty}</span></td>
                        <td><span class="difficulty-badge difficulty-${lang2.difficulty}">${lang2.difficulty}</span></td>
                    </tr>
                    <tr>
                        <td><strong>Popularity</strong></td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang1.popularity}%"></div>
                            </div>
                            <div class="stat-value">${lang1.popularity}%</div>
                        </td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang2.popularity}%"></div>
                            </div>
                            <div class="stat-value">${lang2.popularity}%</div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang1.performance}%"></div>
                            </div>
                            <div class="stat-value">${lang1.performance}%</div>
                        </td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang2.performance}%"></div>
                            </div>
                            <div class="stat-value">${lang2.performance}%</div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Learning Curve</strong></td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang1.learningCurve}%"></div>
                            </div>
                            <div class="stat-value">${lang1.learningCurve}%</div>
                        </td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang2.learningCurve}%"></div>
                            </div>
                            <div class="stat-value">${lang2.learningCurve}%</div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Job Market</strong></td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang1.jobMarket}%"></div>
                            </div>
                            <div class="stat-value">${lang1.jobMarket}%</div>
                        </td>
                        <td>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${lang2.jobMarket}%"></div>
                            </div>
                            <div class="stat-value">${lang2.jobMarket}%</div>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Primary Categories</strong></td>
                        <td>
                            <div class="category-tags">
                                ${lang1.categories.map(cat => `<span class="language-tag">${cat}</span>`).join('')}
                            </div>
                        </td>
                        <td>
                            <div class="category-tags">
                                ${lang2.categories.map(cat => `<span class="language-tag">${cat}</span>`).join('')}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="comparison-use-cases">
            <div class="use-case-section">
                <h4><i class="${lang1.icon}"></i>${lang1.name} Use Cases</h4>
                <ul class="use-case-list">
                    ${lang1.useCases.map(useCase => `<li><i class="fas fa-check"></i>${useCase}</li>`).join('')}
                </ul>
            </div>
            <div class="use-case-section">
                <h4><i class="${lang2.icon}"></i>${lang2.name} Use Cases</h4>
                <ul class="use-case-list">
                    ${lang2.useCases.map(useCase => `<li><i class="fas fa-check"></i>${useCase}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    comparisonResult.innerHTML = comparisonHtml;
    comparisonResult.classList.add('show');
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll spy functionality for navbar
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Add loading animation for cards
function addCardLoadingAnimation() {
    const cards = document.querySelectorAll('.language-card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        observer.observe(card);
    });
}

// Initialize card animations after DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addCardLoadingAnimation, 100);
});

// Add CSS for fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ==================== AUTHENTICATION FUNCTIONS ====================

// Initialize authentication
async function initializeAuth() {
    // Check if Firebase is available
    if (typeof window.auth === 'undefined') {
        console.log('Firebase not available. Authentication features will be disabled.');
        // Hide auth button if Firebase is not available
        const authLink = document.getElementById('authLink');
        if (authLink) {
            authLink.style.display = 'none';
        }
        return;
    }

    try {
        // Load Firebase Auth functions dynamically
        const authModule = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        const firestoreModule = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        firebaseAuth = authModule;
        firebaseFirestore = firestoreModule;

        // Set up auth state listener
        firebaseAuth.onAuthStateChanged(window.auth, (user) => {
            if (user) {
                currentUser = user;
                showUserInfo(user);
            } else {
                currentUser = null;
                showLoginLink();
            }
        });

        // Set up event listeners for auth
        setupAuthEventListeners();
        setupAuthFormValidation();
        
        console.log('Authentication initialized successfully');
    } catch (error) {
        console.error('Failed to initialize authentication:', error);
        // Hide auth button if initialization fails
        const authLink = document.getElementById('authLink');
        if (authLink) {
            authLink.style.display = 'none';
        }
    }
}

// Setup authentication event listeners
function setupAuthEventListeners() {
    // Auth link click
    authLink.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal();
    });

    // Auth close button
    const authClose = document.getElementById('authClose');
    authClose.addEventListener('click', () => {
        hideAuthModal();
    });

    // Modal overlay click
    const authOverlay = document.querySelector('.auth-modal-overlay');
    authOverlay.addEventListener('click', () => {
        hideAuthModal();
    });

    // Logout link click
    logoutLink.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Toggle between login and signup
    toggleMode.addEventListener('click', (e) => {
        e.preventDefault();
        toggleAuthMode();
    });

    // Form submission
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleAuthSubmit();
    });

    // Forgot password
    forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        handleForgotPassword();
    });

    // Navigation toggle for mobile
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Setup form validation with modern styling
function setupAuthFormValidation() {
    authBtn.disabled = true;

    function validateForm() {
        if (isLoginMode) {
            return uname.value.trim() === '' || pass.value === '';
        } else {
            return uname.value.trim() === '' || email.value.trim() === '' || 
                   pass.value === '' || confirmPass.value === '' || 
                   pass.value !== confirmPass.value;
        }
    }

    function updateFormState() {
        const isEmpty = validateForm();
        authBtn.disabled = isEmpty;
        
        if (!isEmpty) {
            clearAuthMsg();
        }
    }

    // Event listeners for validation
    authForm.addEventListener('input', updateFormState);

    // Password confirmation validation
    confirmPass.addEventListener('input', () => {
        if (confirmPass.value && pass.value !== confirmPass.value) {
            showAuthError('Passwords do not match');
            authBtn.disabled = true;
        }
    });
}

// Show authentication modal
function showAuthModal() {
    authModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Hide authentication modal
function hideAuthModal() {
    authModal.classList.remove('show');
    document.body.style.overflow = '';
    resetAuthForm();
}

// Toggle between login and signup modes
function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    
    if (isLoginMode) {
        // Switch to login mode
        formTitle.textContent = 'Welcome Back';
        document.getElementById('formSubtitle').textContent = 'Sign in to your account';
        authBtn.querySelector('.btn-text').textContent = 'Sign In';
        emailField.classList.add('hidden');
        confirmPassField.classList.add('hidden');
        loginActions.classList.remove('hidden');
        toggleText.textContent = "Don't have an account?";
        toggleMode.textContent = 'Sign up';
        email.required = false;
        confirmPass.required = false;
    } else {
        // Switch to signup mode
        formTitle.textContent = 'Create Account';
        document.getElementById('formSubtitle').textContent = 'Join our community today';
        authBtn.querySelector('.btn-text').textContent = 'Create Account';
        emailField.classList.remove('hidden');
        confirmPassField.classList.remove('hidden');
        loginActions.classList.add('hidden');
        toggleText.textContent = 'Already have an account?';
        toggleMode.textContent = 'Sign in';
        email.required = true;
        confirmPass.required = true;
    }
    
    clearAuthMsg();
    authBtn.disabled = true;
}

// Handle form submission
async function handleAuthSubmit() {
    if (authBtn.disabled) return;
    
    setLoadingState(true);
    clearAuthMsg();
    
    try {
        if (isLoginMode) {
            await handleLogin();
        } else {
            await handleSignup();
        }
    } catch (error) {
        showAuthError(error.message);
    } finally {
        setLoadingState(false);
    }
}

// Handle login
async function handleLogin() {
    const username = uname.value.trim();
    const password = pass.value;
    
    if (!username || !password) {
        throw new Error('Please fill in all fields');
    }
    
    if (!firebaseAuth) {
        throw new Error('Authentication not available');
    }
    
    try {
        // First, find the user by username to get their email
        const userDoc = await getUserByUsername(username);
        
        if (!userDoc) {
            throw new Error('Username not found');
        }
        
        // Sign in with email and password
        const userCredential = await firebaseAuth.signInWithEmailAndPassword(window.auth, userDoc.email, password);
        
        showAuthSuccess('Login successful!');
        setTimeout(() => {
            hideAuthModal();
        }, 1500);
        
    } catch (error) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            throw new Error('Invalid username or password');
        } else if (error.code === 'auth/too-many-requests') {
            throw new Error('Too many failed attempts. Please try again later.');
        } else {
            throw error;
        }
    }
}

// Handle signup
async function handleSignup() {
    const username = uname.value.trim();
    const emailValue = email.value.trim();
    const password = pass.value;
    const confirmPassword = confirmPass.value;
    
    // Validation
    if (!username || !emailValue || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
    }
    
    if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
    }
    
    if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
    }
    
    if (!firebaseAuth || !firebaseFirestore) {
        throw new Error('Authentication not available');
    }
    
    // Check if username already exists
    const existingUser = await getUserByUsername(username);
    if (existingUser) {
        throw new Error('Username already exists');
    }
    
    try {
        // Create user with email and password
        const userCredential = await firebaseAuth.createUserWithEmailAndPassword(window.auth, emailValue, password);
        
        // Store additional user data in Firestore
        await firebaseFirestore.setDoc(firebaseFirestore.doc(window.db, 'users', userCredential.user.uid), {
            username: username,
            email: emailValue,
            createdAt: new Date().toISOString()
        });
        
        showAuthSuccess('Account created successfully!');
        setTimeout(() => {
            hideAuthModal();
        }, 1500);
        
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            throw new Error('Email already registered');
        } else if (error.code === 'auth/invalid-email') {
            throw new Error('Invalid email address');
        } else if (error.code === 'auth/weak-password') {
            throw new Error('Password is too weak');
        } else {
            throw error;
        }
    }
}

// Handle logout
async function handleLogout() {
    if (!firebaseAuth) {
        showNotification('Authentication not available', 'error');
        return;
    }
    
    try {
        await firebaseAuth.signOut(window.auth);
        showNotification('Logged out successfully', 'success');
    } catch (error) {
        showNotification('Error logging out: ' + error.message, 'error');
    }
}

// Handle forgot password
async function handleForgotPassword() {
    const username = uname.value.trim();
    
    if (!username) {
        showAuthError('Please enter your username first');
        return;
    }
    
    if (!firebaseAuth) {
        showAuthError('Authentication not available');
        return;
    }
    
    try {
        setLoadingState(true);
        
        // Find user by username to get email
        const userDoc = await getUserByUsername(username);
        
        if (!userDoc) {
            throw new Error('Username not found');
        }
        
        // Send password reset email
        await firebaseAuth.sendPasswordResetEmail(window.auth, userDoc.email);
        
        showAuthSuccess('Password reset email sent! Check your inbox.');
        
    } catch (error) {
        showAuthError(error.message);
    } finally {
        setLoadingState(false);
    }
}

// Get user by username from Firestore
async function getUserByUsername(username) {
    if (!firebaseFirestore) {
        return null;
    }
    
    try {
        const usersRef = firebaseFirestore.collection(window.db, 'users');
        const q = firebaseFirestore.query(usersRef, firebaseFirestore.where('username', '==', username));
        const querySnapshot = await firebaseFirestore.getDocs(q);
        
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].data();
        }
        return null;
    } catch (error) {
        console.error('Error fetching user:', error);
        return null;
    }
}

// Show user info in navbar
function showUserInfo(user) {
    authLink.style.display = 'none';
    userInfo.classList.remove('hidden');
    
    // Get username from Firestore
    getUserData(user.uid).then(userData => {
        const displayName = userData?.username || user.email.split('@')[0];
        welcomeText.textContent = displayName;
    });
}

// Show login link in navbar
function showLoginLink() {
    authLink.style.display = 'flex';
    userInfo.classList.add('hidden');
}

// Get user data from Firestore
async function getUserData(uid) {
    if (!firebaseFirestore) {
        return null;
    }
    
    try {
        const userDoc = await firebaseFirestore.getDoc(firebaseFirestore.doc(window.db, 'users', uid));
        return userDoc.exists() ? userDoc.data() : null;
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

// Utility functions
function setLoadingState(loading) {
    if (loading) {
        authForm.classList.add('loading');
        authBtn.disabled = true;
        authBtn.querySelector('.btn-text').textContent = isLoginMode ? 'Signing in...' : 'Creating Account...';
    } else {
        authForm.classList.remove('loading');
        authBtn.querySelector('.btn-text').textContent = isLoginMode ? 'Sign In' : 'Create Account';
    }
}

function showAuthError(message) {
    authMsg.className = 'auth-message error show';
    authMsg.textContent = message;
}

function showAuthSuccess(message) {
    authMsg.className = 'auth-message success show';
    authMsg.textContent = message;
}

function clearAuthMsg() {
    authMsg.className = 'auth-message';
    authMsg.textContent = '';
}

function resetAuthForm() {
    authForm.reset();
    clearAuthMsg();
    authBtn.disabled = true;
    
    // Reset to login mode
    if (!isLoginMode) {
        toggleAuthMode();
    }
}

function showNotification(message, type = 'info') {
    // Create a simple notification
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export functions for global access
window.authFunctions = {
    showAuthModal,
    handleLogout,
    getCurrentUser: () => currentUser
};
// ==================== SCROLL ANIMATIONS & INTERACTIONS ====================

// Initialize scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Add scroll event listeners
window.addEventListener('scroll', () => {
    updateActiveNavLink();
    handleNavbarScroll();
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initializeScrollAnimations, 100);
});

// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Add loading states and micro-interactions
function addMicroInteractions() {
    // Button hover effects
    document.querySelectorAll('.btn, .filter-tab, .resource-link').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Card hover effects
    document.querySelectorAll('.language-card, .resource-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize micro-interactions
document.addEventListener('DOMContentLoaded', addMicroInteractions);

// Add typing animation to hero code
function initializeTypingAnimation() {
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
}

// Initialize typing animation
document.addEventListener('DOMContentLoaded', initializeTypingAnimation);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll handlers
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    handleNavbarScroll();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close modals with Escape key
    if (e.key === 'Escape') {
        const authModal = document.getElementById('authModal');
        const languageModal = document.getElementById('languageModal');
        
        if (authModal && authModal.classList.contains('show')) {
            hideAuthModal();
        }
        
        if (languageModal) {
            closeLanguageModal();
        }
    }
});

// Add focus management for accessibility
function manageFocus() {
    // Trap focus in modals
    const modals = document.querySelectorAll('.auth-modal, .language-modal');
    
    modals.forEach(modal => {
        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    });
}

// Initialize focus management
document.addEventListener('DOMContentLoaded', manageFocus);