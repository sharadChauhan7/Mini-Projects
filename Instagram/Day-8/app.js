let img=document.querySelector("img");
let txt=document.querySelector(".card-text");
let btn=document.querySelector(".btn");

let imgUrl="https://dog.ceo/api/breeds/image/random";
let facrUrl="https://dog-api.kinduff.com/api/facts";

btn.addEventListener("click",fetchInfo);

async function fetchInfo(){
    try{
        let imgRes=await axios.get(imgUrl);
        let factRes=await axios.get(facrUrl);

        let image =imgRes.data.message;
        let fact= factRes.data.facts[0];
        
        setCard(image,fact);

    }
    catch(err){
        console.log();
    }
}
function setCard(image,fact){
    console.dir(txt);
    img.src=image;
    txt.innerText=fact;
}