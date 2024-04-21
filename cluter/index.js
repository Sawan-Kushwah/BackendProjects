import fs from "fs/promises";
import fsn from "fs";
import path from "path"
const basePath = "C:\\Users\\sawan\\OneDrive\\Documents\\Desktop\\cluter";
let files = await fs.readdir(basePath);
for (const item of files) {
    let extension = item.split('.').pop();
    if (extension != 'js' && extension != 'json' && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basePath, extension))) {
            fs.rename(path.join(basePath, item), path.join(basePath, extension, item));
        } else {
            fs.mkdir(extension)
            fs.rename(path.join(basePath, item), path.join(basePath, extension, item));
        }
    }
}

let form = document.querySelector("#uploadForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    for (item of formData) {
        console.log(item);
    }

})
