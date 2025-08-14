// Programming Languages Hub JavaScript

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

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderLanguageCards(programmingLanguages);
    populateComparisonSelects();
    setupEventListeners();
    setupSmoothScrolling();
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
    const cardCol = document.createElement('div');
    cardCol.className = 'col-lg-4 col-md-6 mb-4';
    
    const difficultyClass = `difficulty-${language.difficulty}`;
    const categoryTags = language.categories.map(cat => 
        `<span class="category-tag">${cat}</span>`
    ).join('');
    
    const features = language.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');
    
    cardCol.innerHTML = `
        <div class="language-card" data-categories="${language.categories.join(' ')}" data-name="${language.name.toLowerCase()}">
            <div class="language-icon">
                <i class="${language.icon}"></i>
            </div>
            <div class="text-center">
                <h4>${language.name}</h4>
                <div class="category-tags mb-3">
                    ${categoryTags}
                </div>
                <span class="difficulty-badge ${difficultyClass}">${language.difficulty}</span>
            </div>
            <p class="mt-3">${language.description}</p>
            <ul class="language-features">
                ${features}
            </ul>
            <div class="text-center">
                <button class="btn btn-primary btn-sm" onclick="showLanguageDetails(${language.id})">
                    <i class="fas fa-info-circle me-1"></i>
                    View Details
                </button>
            </div>
        </div>
    `;
    
    return cardCol;
}

// Show language details in modal
function showLanguageDetails(languageId) {
    const language = programmingLanguages.find(lang => lang.id === languageId);
    if (!language) return;
    
    const modalHtml = `
        <div class="modal fade" id="languageModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="${language.icon} me-2"></i>
                            ${language.name}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h6>Description</h6>
                                <p>${language.description}</p>
                                
                                <h6>Key Features</h6>
                                <ul>
                                    ${language.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                                
                                <h6>Common Use Cases</h6>
                                <div class="d-flex flex-wrap gap-2 mb-3">
                                    ${language.useCases.map(useCase => 
                                        `<span class="badge bg-primary">${useCase}</span>`
                                    ).join('')}
                                </div>
                                
                                <h6>Example Code</h6>
                                <pre class="bg-dark text-light p-3 rounded"><code>${language.syntax}</code></pre>
                            </div>
                            <div class="col-md-4">
                                <h6>Language Stats</h6>
                                <div class="mb-3">
                                    <small class="text-muted">Popularity</small>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-success" style="width: ${language.popularity}%"></div>
                                    </div>
                                    <small>${language.popularity}%</small>
                                </div>
                                
                                <div class="mb-3">
                                    <small class="text-muted">Performance</small>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-info" style="width: ${language.performance}%"></div>
                                    </div>
                                    <small>${language.performance}%</small>
                                </div>
                                
                                <div class="mb-3">
                                    <small class="text-muted">Learning Curve</small>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-warning" style="width: ${language.learningCurve}%"></div>
                                    </div>
                                    <small>${language.learningCurve}%</small>
                                </div>
                                
                                <div class="mb-3">
                                    <small class="text-muted">Job Market</small>
                                    <div class="progress mb-2">
                                        <div class="progress-bar bg-danger" style="width: ${language.jobMarket}%"></div>
                                    </div>
                                    <small>${language.jobMarket}%</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('languageModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('languageModal'));
    modal.show();
    
    // Clean up modal after it's hidden
    document.getElementById('languageModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', handleFilter);
    });
    
    // Comparison selects
    compareLanguage1.addEventListener('change', handleComparison);
    compareLanguage2.addEventListener('change', handleComparison);
}

// Handle search functionality
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const cards = document.querySelectorAll('.language-card');
    
    cards.forEach(card => {
        const cardCol = card.parentElement;
        const languageName = card.dataset.name;
        const isVisible = languageName.includes(searchTerm);
        
        cardCol.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            cardCol.style.animation = 'fadeInUp 0.5s ease';
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
        const cardCol = card.parentElement;
        const categories = card.dataset.categories;
        const isVisible = filter === 'all' || categories.includes(filter);
        
        cardCol.style.display = isVisible ? 'block' : 'none';
        
        if (isVisible) {
            cardCol.style.animation = 'fadeInUp 0.5s ease';
        }
    });
}

// Populate comparison selects
function populateComparisonSelects() {
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
        <div class="comparison-header text-center mb-4">
            <h4>Comparison: ${lang1.name} vs ${lang2.name}</h4>
        </div>
        
        <div class="table-responsive">
            <table class="table comparison-table">
                <thead>
                    <tr>
                        <th>Criteria</th>
                        <th>
                            <i class="${lang1.icon} me-2"></i>
                            ${lang1.name}
                        </th>
                        <th>
                            <i class="${lang2.icon} me-2"></i>
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
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${lang1.popularity}%"></div>
                            </div>
                            <small>${lang1.popularity}%</small>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-success" style="width: ${lang2.popularity}%"></div>
                            </div>
                            <small>${lang2.popularity}%</small>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Performance</strong></td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-info" style="width: ${lang1.performance}%"></div>
                            </div>
                            <small>${lang1.performance}%</small>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-info" style="width: ${lang2.performance}%"></div>
                            </div>
                            <small>${lang2.performance}%</small>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Learning Curve</strong></td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-warning" style="width: ${lang1.learningCurve}%"></div>
                            </div>
                            <small>${lang1.learningCurve}%</small>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-warning" style="width: ${lang2.learningCurve}%"></div>
                            </div>
                            <small>${lang2.learningCurve}%</small>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Job Market</strong></td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-danger" style="width: ${lang1.jobMarket}%"></div>
                            </div>
                            <small>${lang1.jobMarket}%</small>
                        </td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar bg-danger" style="width: ${lang2.jobMarket}%"></div>
                            </div>
                            <small>${lang2.jobMarket}%</small>
                        </td>
                    </tr>
                    <tr>
                        <td><strong>Primary Categories</strong></td>
                        <td>
                            ${lang1.categories.map(cat => `<span class="category-tag me-1">${cat}</span>`).join('')}
                        </td>
                        <td>
                            ${lang2.categories.map(cat => `<span class="category-tag me-1">${cat}</span>`).join('')}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="row mt-4">
            <div class="col-md-6">
                <h6><i class="${lang1.icon} me-2"></i>${lang1.name} Use Cases</h6>
                <ul class="list-unstyled">
                    ${lang1.useCases.map(useCase => `<li><i class="fas fa-check text-success me-2"></i>${useCase}</li>`).join('')}
                </ul>
            </div>
            <div class="col-md-6">
                <h6><i class="${lang2.icon} me-2"></i>${lang2.name} Use Cases</h6>
                <ul class="list-unstyled">
                    ${lang2.useCases.map(useCase => `<li><i class="fas fa-check text-success me-2"></i>${useCase}</li>`).join('')}
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
