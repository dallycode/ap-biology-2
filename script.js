/* =========================
   AP BIOLOGY DATA
========================= */

const units = [
    {
        number: 1,
        title: "Chemistry of Life",
        description: "The chemical foundations of biological systems.",
        topics: [
            {
                title: "Water and its properties",
                text: "Water is polar because oxygen attracts electrons more strongly than hydrogen. This polarity allows water molecules to form hydrogen bonds with one another.",
                points: [
                    "Cohesion: attraction between water molecules",
                    "Adhesion: attraction between water and other substances",
                    "High specific heat helps organisms resist rapid temperature changes",
                    "Ice is less dense than liquid water"
                ]
            },
            {
                title: "Macromolecules",
                text: "Biological macromolecules include carbohydrates, lipids, proteins, and nucleic acids.",
                points: [
                    "Carbohydrates are important for energy and structure",
                    "Lipids include fats, phospholipids, and steroids",
                    "Proteins are made from amino acids",
                    "Nucleic acids include DNA and RNA"
                ]
            }
        ]
    },

    {
        number: 2,
        title: "Cell Structure and Function",
        description: "How cells are organized and how materials move across membranes.",
        topics: [
            {
                title: "Cellular organelles",
                text: "Eukaryotic cells contain membrane-bound organelles that perform specialized functions.",
                points: [
                    "Nucleus: contains most of the cell's DNA",
                    "Mitochondria: major site of aerobic cellular respiration",
                    "Ribosomes: build proteins",
                    "Golgi apparatus: modifies and packages proteins",
                    "Lysosomes: contain digestive enzymes"
                ]
            },
            {
                title: "Membrane transport",
                text: "The plasma membrane is selectively permeable. Substances can move across it through passive or active transport.",
                points: [
                    "Diffusion moves substances down their concentration gradient",
                    "Osmosis is the movement of water",
                    "Facilitated diffusion uses membrane proteins but does not require ATP",
                    "Active transport requires energy"
                ]
            }
        ]
    },

    {
        number: 3,
        title: "Cellular Energetics",
        description: "How organisms obtain, transfer, and use energy.",
        topics: [
            {
                title: "Enzymes",
                text: "Enzymes are biological catalysts. They speed up reactions by lowering activation energy without being consumed.",
                points: [
                    "Enzymes have active sites",
                    "Temperature and pH can affect enzyme activity",
                    "Substrate concentration can affect reaction rate",
                    "Denaturation can change the shape of an enzyme"
                ]
            },
            {
                title: "Cellular respiration",
                text: "Cellular respiration transfers energy from glucose into ATP.",
                points: [
                    "Glycolysis occurs in the cytoplasm",
                    "The citric acid cycle occurs in the mitochondrial matrix",
                    "The electron transport chain is located in the inner mitochondrial membrane",
                    "Oxygen is the final electron acceptor in aerobic respiration"
                ]
            },
            {
                title: "Photosynthesis",
                text: "Photosynthesis converts light energy into chemical energy stored in organic molecules.",
                points: [
                    "Light-dependent reactions occur in the thylakoid membranes",
                    "The Calvin cycle occurs in the stroma",
                    "Water provides electrons",
                    "Carbon dioxide is incorporated into organic molecules"
                ]
            }
        ]
    },

    {
        number: 4,
        title: "Cell Communication and Cell Cycle",
        description: "How cells communicate and regulate growth and division.",
        topics: [
            {
                title: "Cell signaling",
                text: "Cells communicate using chemical signals that bind to receptors and trigger cellular responses.",
                points: [
                    "Reception: a signal binds to a receptor",
                    "Transduction: the signal is passed through a pathway",
                    "Response: the cell changes its activity",
                    "Signals can cause changes in gene expression"
                ]
            },
            {
                title: "Cell cycle",
                text: "The cell cycle includes growth, DNA replication, and cell division.",
                points: [
                    "Interphase includes G1, S, and G2",
                    "DNA is replicated during S phase",
                    "Mitosis produces genetically similar nuclei",
                    "Cell-cycle checkpoints help regulate division"
                ]
            }
        ]
    },

    {
        number: 5,
        title: "Heredity",
        description: "How genetic information is passed from parents to offspring.",
        topics: [
            {
                title: "Mendelian genetics",
                text: "Mendel's principles describe patterns of inheritance based on alleles.",
                points: [
                    "Alleles are alternative versions of a gene",
                    "Dominant alleles can mask recessive alleles",
                    "The law of segregation describes separation of alleles",
                    "Independent assortment describes how different chromosome pairs can separate independently"
                ]
            },
            {
                title: "Meiosis",
                text: "Meiosis produces haploid cells and increases genetic variation.",
                points: [
                    "Crossing over occurs during prophase I",
                    "Homologous chromosomes separate during meiosis I",
                    "Sister chromatids separate during meiosis II",
                    "Independent assortment contributes to variation"
                ]
            }
        ]
    },

    {
        number: 6,
        title: "Gene Expression and Regulation",
        description: "How DNA information is copied, expressed, and regulated.",
        topics: [
            {
                title: "DNA and RNA",
                text: "DNA stores genetic information. RNA molecules help use that information to produce proteins.",
                points: [
                    "DNA contains deoxyribose",
                    "RNA contains ribose",
                    "DNA uses thymine while RNA uses uracil",
                    "mRNA carries information from DNA to ribosomes"
                ]
            },
            {
                title: "Protein synthesis",
                text: "Gene expression generally involves transcription followed by translation.",
                points: [
                    "Transcription produces RNA from a DNA template",
                    "Translation occurs at ribosomes",
                    "tRNA brings amino acids to the ribosome",
                    "The order of codons determines the amino acid sequence"
                ]
            }
        ]
    },

    {
        number: 7,
        title: "Natural Selection",
        description: "Evolution, variation, and changes in populations over time.",
        topics: [
            {
                title: "Natural selection",
                text: "Natural selection occurs when individuals with heritable traits that increase reproductive success leave more offspring.",
                points: [
                    "Populations evolve, not individual organisms",
                    "Variation must exist within a population",
                    "Traits must have a heritable component",
                    "Environmental conditions affect reproductive success"
                ]
            },
            {
                title: "Evidence for evolution",
                text: "Multiple lines of evidence support evolutionary relationships.",
                points: [
                    "Fossils show changes through geological time",
                    "Homologous structures indicate common ancestry",
                    "DNA and protein similarities can reveal relationships",
                    "Biogeography shows patterns of species distribution"
                ]
            }
        ]
    },

    {
        number: 8,
        title: "Ecology",
        description: "Interactions between organisms and their environment.",
        topics: [
            {
                title: "Energy flow",
                text: "Energy enters most ecosystems through producers and moves through food webs.",
                points: [
                    "Producers convert light or chemical energy into organic molecules",
                    "Primary consumers eat producers",
                    "Energy decreases as it moves between trophic levels",
                    "Decomposers recycle matter"
                ]
            },
            {
                title: "Population ecology",
                text: "Population size changes based on births, deaths, immigration, and emigration.",
                points: [
                    "Exponential growth occurs when resources are abundant",
                    "Logistic growth includes environmental limits",
                    "Carrying capacity is the maximum population size an environment can sustainably support",
                    "Density-dependent factors become stronger as population density increases"
                ]
            }
        ]
    }
];


/* =========================
   QUESTION BANK
========================= */

const questions = [

    {
        unit: 1,
        question: "Which property of water helps organisms maintain a relatively stable internal temperature?",
        options: [
            "Low density of ice",
            "High specific heat",
            "Low polarity",
            "High acidity"
        ],
        answer: 1,
        explanation: "Water has a high specific heat, meaning it takes a large amount of energy to change its temperature."
    },

    {
        unit: 1,
        question: "Which macromolecule is made from amino acid monomers?",
        options: [
            "Carbohydrate",
            "Lipid",
            "Protein",
            "Nucleic acid"
        ],
        answer: 2,
        explanation: "Proteins are polymers made from amino acid monomers."
    },

    {
        unit: 2,
        question: "Which organelle is the major site of aerobic cellular respiration?",
        options: [
            "Ribosome",
            "Golgi apparatus",
            "Mitochondrion",
            "Lysosome"
        ],
        answer: 2,
        explanation: "Most aerobic cellular respiration occurs in the mitochondria."
    },

    {
        unit: 2,
        question: "An animal cell is placed in a hypotonic solution. What will most likely happen?",
        options: [
            "Water leaves the cell",
            "Water enters the cell",
            "Solute leaves the cell",
            "The cell immediately stops using ATP"
        ],
        answer: 1,
        explanation: "Water moves into a cell when the surrounding solution has a lower solute concentration."
    },

    {
        unit: 3,
        question: "How do enzymes increase the rate of a chemical reaction?",
        options: [
            "They increase the temperature permanently",
            "They increase the amount of product",
            "They lower activation energy",
            "They change the reaction's final equilibrium"
        ],
        answer: 2,
        explanation: "Enzymes lower the activation energy required for a reaction to occur."
    },

    {
        unit: 3,
        question: "Where does glycolysis occur?",
        options: [
            "Nucleus",
            "Cytoplasm",
            "Mitochondrial matrix",
            "Chloroplast"
        ],
        answer: 1,
        explanation: "Glycolysis occurs in the cytoplasm and does not directly require oxygen."
    },

    {
        unit: 4,
        question: "What is the first major step of cell signaling?",
        options: [
            "Translation",
            "Reception",
            "DNA replication",
            "Cell division"
        ],
        answer: 1,
        explanation: "Reception occurs when a signaling molecule binds to its receptor."
    },

    {
        unit: 4,
        question: "During which phase of the cell cycle is DNA replicated?",
        options: [
            "G1",
            "S",
            "G2",
            "M"
        ],
        answer: 1,
        explanation: "DNA replication occurs during S phase of interphase."
    },

    {
        unit: 5,
        question: "Which process produces genetically different haploid cells?",
        options: [
            "Mitosis",
            "Binary fission",
            "Meiosis",
            "DNA replication"
        ],
        answer: 2,
        explanation: "Meiosis produces haploid cells and creates genetic variation through crossing over and independent assortment."
    },

    {
        unit: 5,
        question: "Crossing over occurs during which stage?",
        options: [
            "Prophase I",
            "Metaphase II",
            "Anaphase II",
            "Telophase II"
        ],
        answer: 0,
        explanation: "Crossing over occurs between homologous chromosomes during prophase I of meiosis."
    },

    {
        unit: 6,
        question: "Which molecule carries genetic information from DNA to a ribosome?",
        options: [
            "tRNA",
            "mRNA",
            "ATP",
            "Lipase"
        ],
        answer: 1,
        explanation: "Messenger RNA carries the information copied from DNA to the ribosome."
    },

    {
        unit: 6,
        question: "Where does translation occur?",
        options: [
            "Ribosomes",
            "Nucleus only",
            "Golgi apparatus",
            "Lysosomes"
        ],
        answer: 0,
        explanation: "Translation occurs at ribosomes, where amino acids are assembled into proteins."
    },

    {
        unit: 7,
        question: "Which statement correctly describes natural selection?",
        options: [
            "Individual organisms evolve during their lifetime",
            "Populations change over generations",
            "Organisms develop traits because they need them",
            "All mutations are beneficial"
        ],
        answer: 1,
        explanation: "Evolution occurs in populations across generations. Individuals do not evolve during their lifetime."
    },

    {
        unit: 7,
        question: "For natural selection to change a population, a trait generally must be:",
        options: [
            "Heritable",
            "Invisible",
            "Acquired during adulthood",
            "Identical in every individual"
        ],
        answer: 0,
        explanation: "A trait must have a heritable component so it can be passed to future generations."
    },

    {
        unit: 8,
        question: "What is the primary role of producers in most ecosystems?",
        options: [
            "Consume decomposers",
            "Convert energy into chemical energy stored in organic molecules",
            "Break down all proteins",
            "Prevent energy loss"
        ],
        answer: 1,
        explanation: "Producers capture energy and store it in organic molecules that can support other organisms."
    },

    {
        unit: 8,
        question: "What usually happens to available energy as it moves to higher trophic levels?",
        options: [
            "It increases",
            "It stays exactly the same",
            "It decreases",
            "It becomes unlimited"
        ],
        answer: 2,
        explanation: "Much energy is lost as heat and through metabolic processes at each trophic level."
    }
];


/* =========================
   FLASHCARDS
========================= */

const flashcards = [
    {
        question: "What is ATP?",
        answer: "ATP is a molecule cells use to transfer and provide energy for cellular processes."
    },
    {
        question: "What does an enzyme do?",
        answer: "An enzyme is a biological catalyst that lowers activation energy and increases the rate of a reaction."
    },
    {
        question: "What is osmosis?",
        answer: "Osmosis is the movement of water across a selectively permeable membrane."
    },
    {
        question: "Where does glycolysis occur?",
        answer: "Glycolysis occurs in the cytoplasm."
    },
    {
        question: "What is the main function of DNA?",
        answer: "DNA stores hereditary information used by cells to make proteins and regulate cellular processes."
    },
    {
        question: "What is mRNA?",
        answer: "Messenger RNA carries genetic information from DNA to a ribosome for translation."
    },
    {
        question: "What is natural selection?",
        answer: "Natural selection is the process in which heritable traits affecting reproductive success change in frequency in a population."
    },
    {
        question: "What is a phenotype?",
        answer: "A phenotype is an organism's observable characteristics, influenced by its genes and environment."
    },
    {
        question: "What is homeostasis?",
        answer: "Homeostasis is the maintenance of relatively stable internal conditions."
    },
    {
        question: "Where does the Calvin cycle occur?",
        answer: "The Calvin cycle occurs in the stroma of the chloroplast."
    }
];


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageId, button = null) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active-page");
    }

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   UNITS
========================= */

function renderUnits() {

    const container = document.getElementById("unitsGrid");

    container.innerHTML = "";

    units.forEach(unit => {

        const completed = localStorage.getItem(`unit-${unit.number}`) === "complete";

        const card = document.createElement("div");

        card.className = "unit-card";

        card.onclick = () => openUnit(unit.number);

        card.innerHTML = `
            <span class="unit-number">Unit ${unit.number}</span>
            <h3>${unit.title}</h3>
            <p>${unit.description}</p>
            <div class="unit-progress">
                ${completed ? "Completed" : "Not completed"}
            </div>
        `;

        container.appendChild(card);
    });
}


function openUnit(number) {

    const unit = units.find(u => u.number === number);

    if (!unit) return;

    const container = document.getElementById("unitContent");

    let topicsHTML = "";

    unit.topics.forEach(topic => {

        let pointsHTML = topic.points
            .map(point => `<li>${point}</li>`)
            .join("");

        topicsHTML += `
            <div class="topic-section">
                <h3>${topic.title}</h3>
                <p>${topic.text}</p>
                <ul>${pointsHTML}</ul>
            </div>
        `;
    });

    const completed = localStorage.getItem(`unit-${number}`) === "complete";

    container.innerHTML = `
        <div class="unit-detail-header">
            <span class="unit-number">Unit ${unit.number}</span>
            <h2>${unit.title}</h2>
            <p>${unit.description}</p>

            <button
                class="primary-button complete-button"
                onclick="completeUnit(${number})">
                ${completed ? "Completed" : "Mark unit complete"}
            </button>
        </div>

        ${topicsHTML}
    `;

    showPage("unit-detail");
}


function completeUnit(number) {

    localStorage.setItem(`unit-${number}`, "complete");

    openUnit(number);
    renderUnits();
    updateStats();
}


/* =========================
   QUESTIONS
========================= */

function renderQuestions() {

    const filter = document.getElementById("unitFilter").value;

    const filteredQuestions = filter === "all"
        ? questions
        : questions.filter(q => q.unit == filter);

    const container = document.getElementById("questionContainer");

    container.innerHTML = "";

    document.getElementById("questionCount").textContent =
        `${filteredQuestions.length} questions`;

    filteredQuestions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "question-card";

        const options = question.options
            .map((option, optionIndex) => `
                <button
                    class="answer-button"
                    onclick="answerQuestion(this, ${question.answer}, ${optionIndex}, ${index})">
                    ${String.fromCharCode(65 + optionIndex)}. ${option}
                </button>
            `)
            .join("");

        card.innerHTML = `
            <div class="question-unit">Unit ${question.unit}</div>

            <h3>${question.question}</h3>

            <div class="answer-options">
                ${options}
            </div>

            <div class="explanation" id="explanation-${index}" style="display:none;">
                ${question.explanation}
            </div>
        `;

        container.appendChild(card);
    });
}


function answerQuestion(button, correctAnswer, selectedAnswer, index) {

    const card = button.closest(".question-card");

    const buttons = card.querySelectorAll(".answer-button");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
    } else {
        button.classList.add("wrong");
        buttons[correctAnswer].classList.add("correct");
    }

    document.getElementById(`explanation-${index}`).style.display = "block";

    recordQuestion(selectedAnswer === correctAnswer);
}


function recordQuestion(correct) {

    let answered = Number(localStorage.getItem("answered") || 0);
    let correctAnswers = Number(localStorage.getItem("correct") || 0);

    answered++;

    if (correct) {
        correctAnswers++;
    }

    localStorage.setItem("answered", answered);
    localStorage.setItem("correct", correctAnswers);

    updateStats();
}


/* =========================
   FLASHCARDS
========================= */

let currentCard = 0;

function updateFlashcard() {

    const card = flashcards[currentCard];

    document.getElementById("cardNumber").textContent =
        `${currentCard + 1} / ${flashcards.length}`;

    document.getElementById("flashQuestion").textContent =
        card.question;

    document.getElementById("flashAnswer").textContent =
        card.answer;

    document.querySelector(".flashcard").classList.remove("flipped");
}


function flipCard() {
    document.querySelector(".flashcard").classList.toggle("flipped");
}


function nextCard() {

    currentCard++;

    if (currentCard >= flashcards.length) {
        currentCard = 0;
    }

    updateFlashcard();
}


function previousCard() {

    currentCard--;

    if (currentCard < 0) {
        currentCard = flashcards.length - 1;
    }

    updateFlashcard();
}


/* =========================
   TIMER
========================= */

let timerSeconds = 25 * 60;
let timerInterval = null;
let timerRunning = false;

function updateTimerDisplay() {

    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;

    document.getElementById("timerDisplay").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


function startTimer() {

    if (timerRunning) return;

    timerRunning = true;

    timerInterval = setInterval(() => {

        if (timerSeconds <= 0) {

            clearInterval(timerInterval);

            timerRunning = false;

            let totalTime =
                Number(localStorage.getItem("studyTime") || 0);

            totalTime += 25;

            localStorage.setItem("studyTime", totalTime);

            updateStats();

            return;
        }

        timerSeconds--;

        updateTimerDisplay();

    }, 1000);
}


function pauseTimer() {

    clearInterval(timerInterval);

    timerRunning = false;
}


function resetTimer() {

    clearInterval(timerInterval);

    timerRunning = false;

    timerSeconds = 25 * 60;

    updateTimerDisplay();
}


function setTimer(minutes) {

    clearInterval(timerInterval);

    timerRunning = false;

    timerSeconds = minutes * 60;

    updateTimerDisplay();
}


/* =========================
   DARK MODE
========================= */

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const darkMode = document.body.classList.contains("dark");

    localStorage.setItem("darkMode", darkMode);

    document.getElementById("themeText").textContent =
        darkMode ? "Light mode" : "Dark mode";
}


function loadDarkMode() {

    const darkMode = localStorage.getItem("darkMode") === "true";

    if (darkMode) {
        document.body.classList.add("dark");
        document.getElementById("themeText").textContent = "Light mode";
    }
}


/* =========================
   DASHBOARD STATS
========================= */

function updateStats() {

    let completed = 0;

    units.forEach(unit => {

        if (localStorage.getItem(`unit-${unit.number}`) === "complete") {
            completed++;
        }

    });

    const answered =
        Number(localStorage.getItem("answered") || 0);

    const correct =
        Number(localStorage.getItem("correct") || 0);

    const studyTime =
        Number(localStorage.getItem("studyTime") || 0);

    const accuracy =
        answered === 0
            ? 0
            : Math.round((correct / answered) * 100);

    const progress =
        Math.round((completed / units.length) * 100);

    document.getElementById("unitsCompleted").textContent = completed;

    document.getElementById("questionsAnswered").textContent = answered;

    document.getElementById("accuracy").textContent = `${accuracy}%`;

    document.getElementById("studyTime").textContent = studyTime;

    document.getElementById("progressPercent").textContent = `${progress}%`;

    document.getElementById("overallProgress").style.width = `${progress}%`;
}


/* =========================
   DATE
========================= */

function updateDate() {

    const today = new Date();

    const date = today.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    document.getElementById("todayDate").textContent = date;
}


/* =========================
   START WEBSITE
========================= */

renderUnits();

renderQuestions();

updateFlashcard();

updateTimerDisplay();

updateStats();

updateDate();

loadDarkMode();
