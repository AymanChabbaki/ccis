const fs = require('fs');

const data = fs.readFileSync('papers.md', 'utf-8');
const lines = data.trim().split('\n');

const papers = [];
for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const parts = line.split('\t');
    if (parts.length >= 3) {
        papers.push({
            id: parts[0].trim(),
            title: parts[1].trim(),
            authors: parts[2].trim()
        });
    }
}

const dir = 'src/data';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(`${dir}/papers.js`, `export const acceptedPapers = ${JSON.stringify(papers, null, 2)};\n`);
console.log('Successfully generated src/data/papers.js');
