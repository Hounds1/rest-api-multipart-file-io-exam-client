const BASE_URL = "http://localhost:9090/api/v1/files";
async function uploadFile() {
    const target = document.querySelector('#target-img');
    const file = target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    const options = {
      method: 'POST',
      body: formData
    };

    await fetch(BASE_URL, options)
        .then(response => response.json())
        .then(data => {
            getImgFromApi(data.fileName)
        })
        .catch(e => console.log(e));
}

async function getImgFromApi(fileName) {
    fetch(BASE_URL+'?fileName='+fileName)
        .then(response => response.blob())
        .then(blob => {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(blob);
            imgElement.width = 300;
            imgElement.height = 300;
            document.querySelector('.img-box').appendChild(imgElement);
            document.querySelector('#target-img').value = '';
        });
}