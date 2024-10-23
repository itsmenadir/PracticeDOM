
const paragraph = document.getElementById('text');
const originalText = paragraph.innerHTML;


const highlightLongWords = (text) => {
    return text.replace(/\b\w{8,}\b/g, '<span class="highlight">$&</span>');
};


const splitSentences = (text) => {
    return text.replace(/([^.]+?\.)/g, '<span class="line-break">$1</span>');
};


const replacePunctuation = (text) => {
    return text.replace(/\?/g, '🤔').replace(/!/g, '😲');
};

const processText = (text) => {
    let modifiedText = replacePunctuation(text);
    modifiedText = highlightLongWords(modifiedText);
    modifiedText = splitSentences(modifiedText);
    return modifiedText;
};


const processedText = processText(originalText);
paragraph.innerHTML = processedText;


const linkContainer = document.getElementById('link-container');
const link = document.createElement('a');
link.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html';
link.innerText = 'Source of the text';
link.target = '_blank';
linkContainer.appendChild(link);


const wordCount = originalText.trim().split(/\s+/).length;
const wordCountDisplay = document.getElementById('word-count');
wordCountDisplay.innerText = `Word Count: ${wordCount}`;
