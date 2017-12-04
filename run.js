const inputDirectory = '/Users/sfxu/projects/goooooouwa.github.io/_posts';
const outputDirectory = '/Users/sfxu/projects/goooooouwa.github.io/inbox';
const fs = require('fs');
const toMarkdown = require('to-markdown');

fs.readdir(inputDirectory, (err, files) => {
    files.forEach(file => {
        fs.readFile(`${inputDirectory}/${file}`, 'utf8', function (err, data) {
            if (err) {
                return console.log(err);
            }
            const result = toMarkdown(data);
            fs.writeFile(`${outputDirectory}/${file}`, result, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log(`File saved: ${outputDirectory}/${file}`);
            });
        });
    });
});
