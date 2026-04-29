const fs = require('fs');
const xml = fs.readFileSync('C:/Users/WIN/OneDrive/Desktop/COPR/report/original_exploded/word/document.xml', 'utf8');

// Simple regex to extract text content between <w:t> tags
const matches = xml.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
if (matches) {
    const text = matches.map(m => m.replace(/<w:t[^>]*>|<\/w:t>/g, '')).join(' ');
    fs.writeFileSync('C:/Users/WIN/OneDrive/Desktop/COPR/report/original_text.txt', text);
    console.log('Extracted text to original_text.txt');
}
