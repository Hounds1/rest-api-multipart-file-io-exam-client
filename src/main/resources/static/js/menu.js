const IMG_API_URL = "http://localhost:9090/api/v1/files";
const BASE_API_URL = "http://localhost:9090/api/v1/files/store";

async function getImgList() {
    const URL = BASE_API_URL + "?storeName=testStore";
    const options = {
        method: 'GET'
    };
    fetch(URL, options)
        .then(response => response.json())
        .then(data => {
            const list = data;
            console.log(list);
            for(var i = 0; i < list.length; i++) {
                const fileName = list[i].fileName;
                getImgFromApi(IMG_API_URL, fileName);
            }
        });
}

async function getImgFromApi(url, fileName) {
    fetch(url+'?fileName='+fileName)
        .then(response => response.blob())
        .then(blob => {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(blob);
            imgElement.width = 300;
            imgElement.height = 300;
            document.body.appendChild(imgElement);
        });
}

window.onload = async function () {
    getImgList();
}
