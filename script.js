// Prompts Data
const prompts = [
    { id: 1, category: "Writing", title: "Content Creator", text: "Act as a content writer and create engaging blog posts about [topic]. Include SEO keywords naturally and maintain a conversational tone." },
    { id: 2, category: "Writing", title: "Story Writer", text: "Write a creative story about [theme] with compelling characters, an interesting plot, and a satisfying conclusion." },
    { id: 3, category: "Writing", title: "Email Writer", text: "Compose a professional email to [recipient] about [subject]. Keep it concise, clear, and action-oriented." },
    { id: 4, category: "Writing", title: "Copywriter", text: "Create persuasive copy for [product/service] that highlights benefits, addresses pain points, and includes a strong call-to-action." },
    { id: 5, category: "Writing", title: "Technical Writer", text: "Write clear technical documentation for [topic]. Use simple language, include examples, and structure information logically." },
    { id: 6, category: "Education", title: "Teacher", text: "Explain [concept] as if teaching a beginner. Use analogies, examples, and break down complex ideas into simple parts." },
    { id: 7, category: "Education", title: "Language Tutor", text: "Help me learn [language]. Provide vocabulary, grammar tips, and practice conversations appropriate for my level." },
    { id: 8, category: "Education", title: "Study Guide Creator", text: "Create a comprehensive study guide for [subject]. Include key concepts, summaries, and practice questions." },
    { id: 9, category: "Education", title: "Homework Helper", text: "Help me understand this homework problem: [problem]. Guide me through the solution step-by-step without giving direct answers." },
    { id: 10, category: "Education", title: "Exam Preparer", text: "Help me prepare for my [subject] exam. Create practice questions, review key topics, and suggest study strategies." },
    { id: 11, category: "Business", title: "Business Consultant", text: "Provide business advice for [situation]. Analyze the problem, suggest solutions, and explain potential outcomes." },
    { id: 12, category: "Business", title: "Marketing Strategist", text: "Develop a marketing strategy for [product/service] targeting [audience]. Include channels, messaging, and success metrics." },
    { id: 13, category: "Business", title: "Sales Expert", text: "Create a sales pitch for [product/service]. Address customer needs, overcome objections, and close effectively." },
    { id: 14, category: "Business", title: "Business Plan Writer", text: "Help me create a business plan for [business idea]. Include market analysis, financial projections, and growth strategy." },
    { id: 15, category: "Business", title: "Brand Developer", text: "Help develop a brand identity for [company]. Create mission statement, values, and brand voice guidelines." },
    { id: 16, category: "Programming", title: "Code Helper", text: "Help me write code in [language] to [task]. Provide clean, well-commented code with explanations." },
    { id: 17, category: "Programming", title: "Debugging Assistant", text: "Help me debug this code: [code]. Identify issues, explain what's wrong, and suggest fixes." },
    { id: 18, category: "Programming", title: "Code Reviewer", text: "Review this code: [code]. Suggest improvements for readability, performance, and best practices." },
    { id: 19, category: "Programming", title: "Algorithm Designer", text: "Design an algorithm to solve [problem]. Explain the logic, provide pseudocode, and analyze complexity." },
    { id: 20, category: "Programming", title: "API Documentation", text: "Create API documentation for [endpoint/function]. Include parameters, responses, examples, and error codes." },
    { id: 21, category: "Creative", title: "Idea Generator", text: "Generate creative ideas for [project/topic]. Provide diverse, innovative suggestions with brief explanations." },
    { id: 22, category: "Creative", title: "Brainstorming Partner", text: "Help me brainstorm ideas for [project]. Ask questions, explore possibilities, and build on concepts." },
    { id: 23, category: "Creative", title: "Naming Expert", text: "Suggest creative names for [product/company/project]. Provide options that are memorable, meaningful, and available." },
    { id: 24, category: "Creative", title: "Slogan Creator", text: "Create catchy slogans for [brand/product]. Make them memorable, relevant, and emotionally resonant." },
    { id: 25, category: "Creative", title: "Poet", text: "Write a poem about [theme] in the style of [style]. Use vivid imagery, appropriate rhythm, and emotional depth." },
    { id: 26, category: "Analysis", title: "Data Analyst", text: "Analyze this data: [data]. Identify patterns, trends, and insights. Present findings clearly with recommendations." },
    { id: 27, category: "Analysis", title: "Research Assistant", text: "Research [topic] and provide a comprehensive summary. Include key findings, sources, and actionable insights." },
    { id: 28, category: "Analysis", title: "Competitive Analyst", text: "Analyze competitors in [industry/market]. Compare strengths, weaknesses, and market positioning." },
    { id: 29, category: "Analysis", title: "SWOT Analyst", text: "Perform a SWOT analysis for [company/project]. Identify strengths, weaknesses, opportunities, and threats." },
    { id: 30, category: "Analysis", title: "Trend Forecaster", text: "Analyze trends in [industry/field]. Predict future developments and their potential impact." },
    { id: 31, category: "Personal", title: "Life Coach", text: "Provide life coaching advice for [situation]. Ask reflective questions and suggest actionable steps for growth." },
    { id: 32, category: "Personal", title: "Career Advisor", text: "Give career advice for [situation]. Consider skills, interests, and market trends to suggest paths forward." },
    { id: 33, category: "Personal", title: "Motivational Speaker", text: "Provide motivation and encouragement for [challenge]. Use inspiring language and practical advice." },
    { id: 34, category: "Personal", title: "Goal Setting Coach", text: "Help me set SMART goals for [area]. Break down objectives into actionable steps with timelines." },
    { id: 35, category: "Personal", title: "Time Management Expert", text: "Help me manage my time better for [activities]. Create a schedule and suggest productivity techniques." },
    { id: 36, category: "Health", title: "Fitness Trainer", text: "Create a fitness plan for [goal]. Include exercises, frequency, and progression. Note: Consult professionals for medical advice." },
    { id: 37, category: "Health", title: "Nutrition Advisor", text: "Suggest nutrition tips for [goal]. Provide meal ideas and general guidance. Note: Consult professionals for medical advice." },
    { id: 38, category: "Health", title: "Wellness Coach", text: "Provide wellness advice for [concern]. Suggest lifestyle changes and self-care practices. Note: Consult professionals for medical advice." },
    { id: 39, category: "Health", title: "Meditation Guide", text: "Guide me through a meditation session for [purpose]. Provide calming instructions and mindfulness techniques." },
    { id: 40, category: "Health", title: "Stress Management", text: "Suggest stress management techniques for [situation]. Provide practical coping strategies and relaxation methods." },
    { id: 41, category: "Entertainment", title: "Movie Recommender", text: "Recommend movies based on [preferences]. Provide options with brief descriptions and why I might enjoy them." },
    { id: 42, category: "Entertainment", title: "Book Suggester", text: "Suggest books about [topic/genre]. Include descriptions, why they're good reads, and similar alternatives." },
    { id: 43, category: "Entertainment", title: "Game Master", text: "Create a text-based adventure game about [theme]. Include choices, consequences, and engaging storytelling." },
    { id: 44, category: "Entertainment", title: "Joke Teller", text: "Tell me jokes about [topic]. Keep them appropriate, clever, and entertaining." },
    { id: 45, category: "Entertainment", title: "Trivia Host", text: "Host a trivia game about [topic]. Ask questions of varying difficulty and provide interesting facts." },
    { id: 46, category: "Communication", title: "Conversation Partner", text: "Have a conversation with me about [topic]. Ask questions, share insights, and maintain engaging dialogue." },
    { id: 47, category: "Communication", title: "Debate Partner", text: "Debate the topic: [topic]. Present counterarguments, support with reasoning, and maintain respectful discourse." },
    { id: 48, category: "Communication", title: "Interviewer", text: "Conduct a mock interview for [position]. Ask relevant questions and provide feedback on responses." },
    { id: 49, category: "Communication", title: "Public Speaking Coach", text: "Help me prepare a speech about [topic]. Structure content, suggest delivery tips, and build confidence." },
    { id: 50, category: "Communication", title: "Negotiation Expert", text: "Guide me through negotiating [situation]. Suggest strategies, tactics, and communication approaches." },
    { id: 51, category: "Writing", title: "Resume Builder", text: "Help me create a compelling resume for [position]. Highlight achievements, skills, and use action verbs." },
    { id: 52, category: "Writing", title: "Cover Letter Writer", text: "Write a cover letter for [position] at [company]. Show enthusiasm, match qualifications, and explain fit." },
    { id: 53, category: "Writing", title: "LinkedIn Optimizer", text: "Optimize my LinkedIn profile for [industry/role]. Suggest improvements to summary, experience, and keywords." },
    { id: 54, category: "Writing", title: "Press Release Writer", text: "Write a press release announcing [news]. Use proper format, newsworthy angle, and include key details." },
    { id: 55, category: "Writing", title: "Grant Proposal Writer", text: "Help write a grant proposal for [project]. Explain need, approach, budget, and expected impact." },
    { id: 56, category: "Design", title: "UI/UX Advisor", text: "Suggest UI/UX improvements for [application/website]. Focus on usability, aesthetics, and user experience." },
    { id: 57, category: "Design", title: "Color Scheme Designer", text: "Suggest color schemes for [project] with [mood/purpose]. Provide hex codes and usage guidance." },
    { id: 58, category: "Design", title: "Layout Designer", text: "Design a layout for [page/document]. Consider hierarchy, white space, and visual flow." },
    { id: 59, category: "Design", title: "Logo Designer", text: "Describe logo concepts for [company/product]. Include style, colors, symbolism, and variations." },
    { id: 60, category: "Design", title: "Branding Guide", text: "Create brand guidelines for [company]. Include visual identity, voice, and usage rules." },
    { id: 61, category: "Social Media", title: "Social Media Manager", text: "Create social media content for [platform] about [topic]. Make it engaging, on-brand, and optimized." },
    { id: 62, category: "Social Media", title: "Instagram Caption Writer", text: "Write Instagram captions for [topic]. Include relevant hashtags, emojis, and call-to-action." },
    { id: 63, category: "Social Media", title: "Tweet Composer", text: "Write tweets about [topic]. Make them concise, engaging, and shareable within character limits." },
    { id: 64, category: "Social Media", title: "Content Calendar", text: "Create a content calendar for [platform/brand]. Plan topics, posting schedule, and content types." },
    { id: 65, category: "Social Media", title: "Engagement Booster", text: "Suggest strategies to increase engagement on [platform]. Include content ideas and interaction tactics." },
    { id: 66, category: "Problem Solving", title: "Critical Thinker", text: "Analyze [problem] critically. Examine assumptions, consider perspectives, and reason through solutions." },
    { id: 67, category: "Problem Solving", title: "Decision Helper", text: "Help me decide between [options]. Analyze pros/cons, consider criteria, and recommend best choice." },
    { id: 68, category: "Problem Solving", title: "Root Cause Analyzer", text: "Identify the root cause of [problem]. Use systematic questioning to uncover underlying issues." },
    { id: 69, category: "Problem Solving", title: "Solution Designer", text: "Design solutions for [problem]. Provide multiple approaches with feasibility assessment." },
    { id: 70, category: "Problem Solving", title: "Process Optimizer", text: "Optimize this process: [process]. Identify inefficiencies and suggest improvements." },
    { id: 71, category: "Finance", title: "Budget Planner", text: "Help me create a budget for [purpose]. Categorize expenses, set limits, and suggest savings strategies." },
    { id: 72, category: "Finance", title: "Investment Advisor", text: "Provide general investment information for [goals]. Note: Consult financial professionals for personalized advice." },
    { id: 73, category: "Finance", title: "Financial Educator", text: "Explain financial concept: [concept]. Use simple terms, examples, and practical applications." },
    { id: 74, category: "Finance", title: "Savings Strategist", text: "Suggest strategies to save money on [area]. Provide practical, actionable tips." },
    { id: 75, category: "Finance", title: "Expense Tracker", text: "Help me track and categorize these expenses: [expenses]. Analyze spending patterns and suggest optimizations." },
    { id: 76, category: "Travel", title: "Travel Planner", text: "Plan a trip to [destination]. Suggest itinerary, attractions, accommodations, and travel tips." },
    { id: 77, category: "Travel", title: "Travel Guide", text: "Act as a travel guide for [destination]. Share insights about culture, must-see places, and local tips." },
    { id: 78, category: "Travel", title: "Packing Assistant", text: "Create a packing list for [trip type] to [destination]. Consider weather, activities, and duration." },
    { id: 79, category: "Travel", title: "Restaurant Recommender", text: "Recommend restaurants in [location] for [cuisine/occasion]. Provide options with descriptions." },
    { id: 80, category: "Travel", title: "Budget Travel Advisor", text: "Suggest budget-friendly travel options for [destination]. Include cost-saving tips and affordable alternatives." },
    { id: 81, category: "Learning", title: "Skill Trainer", text: "Teach me how to [skill]. Provide step-by-step instructions, tips, and practice exercises." },
    { id: 82, category: "Learning", title: "Subject Explainer", text: "Explain [subject] in simple terms. Use analogies, break down complexity, and ensure understanding." },
    { id: 83, category: "Learning", title: "Quiz Creator", text: "Create a quiz on [topic] with [number] questions. Include various difficulty levels and explanations." },
    { id: 84, category: "Learning", title: "Flashcard Maker", text: "Create flashcards for [subject]. Make them clear, focused, and effective for memorization." },
    { id: 85, category: "Learning", title: "Learning Path Designer", text: "Design a learning path for [skill/subject]. Structure progression from beginner to advanced." },
    { id: 86, category: "Productivity", title: "Task Prioritizer", text: "Help me prioritize these tasks: [tasks]. Use frameworks like Eisenhower Matrix to determine order." },
    { id: 87, category: "Productivity", title: "Focus Coach", text: "Help me improve focus on [task]. Suggest techniques, environments, and strategies for concentration." },
    { id: 88, category: "Productivity", title: "Habit Builder", text: "Help me build the habit of [habit]. Create an action plan with triggers, routines, and tracking." },
    { id: 89, category: "Productivity", title: "Project Manager", text: "Help manage project: [project]. Create timeline, milestones, and task breakdown." },
    { id: 90, category: "Productivity", title: "Meeting Facilitator", text: "Help plan an effective meeting about [topic]. Create agenda, objectives, and discussion points." },
    { id: 91, category: "Translation", title: "Translator", text: "Translate this text from [source language] to [target language]: [text]. Maintain meaning and tone." },
    { id: 92, category: "Translation", title: "Language Polisher", text: "Improve this [language] text: [text]. Enhance grammar, style, and clarity while preserving meaning." },
    { id: 93, category: "Translation", title: "Cultural Interpreter", text: "Explain cultural context of [phrase/custom] in [culture]. Help understand nuances and appropriate usage." },
    { id: 94, category: "Translation", title: "Localization Expert", text: "Adapt this content for [target market]: [content]. Consider cultural nuances and local preferences." },
    { id: 95, category: "Translation", title: "Idiomatic Translator", text: "Translate idioms and expressions from [language] to [language]. Provide equivalent expressions." },
    { id: 96, category: "Gaming", title: "Game Strategist", text: "Provide strategies for [game]. Include tips, tactics, and advice for improving gameplay." },
    { id: 97, category: "Gaming", title: "Character Builder", text: "Help me create a character for [game]. Consider backstory, stats, abilities, and role." },
    { id: 98, category: "Gaming", title: "Dungeon Master", text: "Act as a Dungeon Master for a D&D campaign. Create scenarios, NPCs, and respond to player actions." },
    { id: 99, category: "Gaming", title: "Puzzle Solver", text: "Help me solve this puzzle: [puzzle]. Provide hints and guide toward solution without giving it away." },
    { id: 100, category: "Gaming", title: "Game Developer", text: "Help design a game about [concept]. Include mechanics, progression, and engagement elements." }
];

// State Management
let filteredPrompts = [...prompts];
let currentCategory = 'all';
let searchQuery = '';

// DOM Elements
const promptsContainer = document.getElementById('promptsContainer');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const promptCount = document.getElementById('promptCount');

// Initialize
function init() {
    populateCategories();
    renderPrompts();
    attachEventListeners();
}

// Populate category filter
function populateCategories() {
    const categories = ['all', ...new Set(prompts.map(p => p.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category === 'all' ? 'All Categories' : category;
        categoryFilter.appendChild(option);
    });
}

// Render prompts
function renderPrompts() {
    if (filteredPrompts.length === 0) {
        promptsContainer.innerHTML = `
            <div class="no-results">
                <h2>No prompts found</h2>
                <p>Try adjusting your search or filter criteria.</p>
            </div>
        `;
        promptCount.textContent = '0 prompts';
        return;
    }

    promptsContainer.innerHTML = filteredPrompts.map(prompt => `
        <div class="prompt-card" data-id="${prompt.id}">
            <div class="prompt-header">
                <span class="prompt-number">#${prompt.id}</span>
                <span class="prompt-category">${prompt.category}</span>
            </div>
            <h3 class="prompt-title">${prompt.title}</h3>
            <p class="prompt-text">${prompt.text}</p>
            <div class="prompt-actions">
                <button class="copy-btn" data-prompt="${escapeHtml(prompt.text)}">
                    📋 Copy Prompt
                </button>
            </div>
        </div>
    `).join('');

    // Attach copy button listeners
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', handleCopy);
    });

    updateCount();
}

// Handle copy to clipboard
async function handleCopy(e) {
    const button = e.target;
    const promptText = button.getAttribute('data-prompt');
    
    try {
        await navigator.clipboard.writeText(promptText);
        button.textContent = '✓ Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = '📋 Copy Prompt';
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
        button.textContent = '❌ Failed';
        setTimeout(() => {
            button.textContent = '📋 Copy Prompt';
        }, 2000);
    }
}

// Filter prompts
function filterPrompts() {
    filteredPrompts = prompts.filter(prompt => {
        const matchesCategory = currentCategory === 'all' || prompt.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
            prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
            prompt.category.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    renderPrompts();
}

// Update prompt count
function updateCount() {
    const count = filteredPrompts.length;
    promptCount.textContent = `${count} prompt${count !== 1 ? 's' : ''}`;
}

// Event Listeners
function attachEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        filterPrompts();
    });

    categoryFilter.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        filterPrompts();
    });
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
