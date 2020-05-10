const urlBase = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';

function call(){ 
    window.location = "../index.html";
}

(async() => {
    const quadros =  document.getElementById("quadros");
    var response = await fetch(urlBase);
    var data = await response.json();
    console.log(data);
    function quadro(){
        let template = "";
        for(let i = 0; i < data.length; i++){
            template += '<div class="quadro">'
            + `<img src="${data[i].photo}">`
            + '<div class="grupo-info">'
            + `<p>Tipo:${data[i].property_type}</p>`
            + `<p class="descricao">Nome: ${data[i].name}</p>`
            +`<p class="preco">Preço: R$ ${data[i].price},00 por mês</p>`
            +'</div>'
            +'</div>';
            
            quadros.innerHTML = template;
        }
    }
    quadro();
})();







