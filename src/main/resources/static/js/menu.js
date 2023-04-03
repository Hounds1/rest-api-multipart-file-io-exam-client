window.onload = async function () {
    getImgList();
}

const BASE_URL = "http://localhost:9090/api/v1/files/store";
async function getImgList() {
    const URL = BASE_URL + "?storeName=testStore";

    const options = {
        method: 'GET'
    };

    await fetch(URL, options)
        .then(response => response.json())
        .then(data => {
            const list = data;
            for(var i = 0; list.length; i++) {
                replaceImg(list[i].filePath);
            }
        });
}

async function replaceImg(filePath) {
    const base = "http://localhost:9090/api/v1/files"
    const URL = base + "?filePath="+filePath;

    const options = {
        method: 'GET'
    }

    await fetch(URL, options)
        .then(response => response.blob())
        .then(blob => {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(blob);
            imgElement.width = 300;
            imgElement.height = 300;

            document.body.appendChild(imgElement);
        });
}