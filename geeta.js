const chapterSelect = document.getElementById("chapterSelect");
const verseSelect = document.getElementById("verseSelect");
const chapterText = document.getElementById("chapter");
const verseText = document.getElementById("verse");
const slokaText = document.getElementById("sloka");
const hindiTranslationText = document.getElementById("hindiTranslation");
const englishTranslationText = document.getElementById("englishTranslation");
const speakHindiButton = document.getElementById("speakHindiButton");
const speakEnglishButton = document.getElementById("speakEnglishButton");

// Function to fetch data from the API
function fetchSloka() {
    const chapter = chapterSelect.value;
    const verse = verseSelect.value;

    fetch(`https://bhagavadgitaapi.in/slok/${chapter}/${verse}/`)
        .then(response => response.json())
        .then(data => {
            // Update the content on the page
            chapterText.textContent = `Chapter: ${data.chapter}`;
            verseText.textContent = `Verse: ${data.verse}`;
            slokaText.textContent = data.slok;
            hindiTranslationText.textContent = data.tej.ht;
            englishTranslationText.textContent = data.siva.et;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

// Add event listeners to update verse options and fetch the sloka
chapterSelect.addEventListener("change", updateVerseOptions);
document.getElementById("fetchButton").addEventListener("click", fetchSloka);

// Initialize verse options when the page loads
updateVerseOptions();

// Speech synthesis for Hindi
speakHindiButton.addEventListener("click", () => {
    const hindiText = hindiTranslationText.textContent;
    speakText(hindiText, "hi-IN");
});

// Speech synthesis for English
speakEnglishButton.addEventListener("click", () => {
    const englishText = englishTranslationText.textContent;
    speakText(englishText, "en-US");
});

function speakText(text, lang) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    synth.speak(utterance);
}

// Populate the verse select options based on the selected chapter
function updateVerseOptions() {
    const selectedChapter = chapterSelect.value;
    const totalVerses = getNumberOfVerses(selectedChapter);

    verseSelect.innerHTML = ''; // Clear existing options

    for (let i = 1; i <= totalVerses; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Verse ${i}`;
        verseSelect.appendChild(option);
    }
}

// Get the total number of verses for a given chapter (add more as needed)
function getNumberOfVerses(chapter) {
    const chapterVerses = {
        "1": 47,
        "2": 72
            // Add more chapters and their verse counts
    };
    return chapterVerses[chapter] || 0;
}