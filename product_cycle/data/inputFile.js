const fs = require('fs');

class ProcessFile {

    Run() {
        try {
            const data = fs.readFileSync('../product-Input.txt','utf8');
            let array = data.toString().split("\n");
            array.forEach((element) => {
                        let result = element.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\t+\r?\n|\r]/gm, ' ').replace(/ +/gm, ' ');
                        let input = (/^\s*$/gm).test(result);
                        if(!input) fs.appendFileSync('./inputFile.js',`${result}\n`);
                    
                        console.log(result);
                    });
        } catch (err) {
            console.log(err);
        }
    }
}

const processFile = new ProcessFile();
processFile.Run();

Module.exports = ProcessFile;