const ProductDetails=[
    {
        name:"Cartoon Astronaut T-Shirts",
        price: 1889
    },
    {
        name:"Green Leaves T-Shirts",
        price: 1799
    },
    {
        name:"Red Rose T-Shirts",
        price: 2999
    },
    {
        name:"Pink Butterfly T-Shirts",
        price: 2599
    },
    {
        name:"Flower & Moon T-Shirts",
        price: 1200
    },
    {
        name:"Thug Life T-Shirts",
        price: 3222
    },
    {
        name:"Sweet Plazo",
        price: 1200
    },
    {
        name:"Romantic Moon T-Shirts",
        price: 1299
    },
    {
        name:"Blue Shirt",
        price: 1200
    },
    {
        name:"Gray Shirts",
        price: 799
    },
    {
        name:"Holly White Shirts",
        price: 998
    },
    {
        name:"Green Brown Check T-Shirts",
        price: 1799
    },
    {
        name:"Denim Blue Shirt",
        price: 2999
    },
    {
        name:"Formal Sorts",
        price: 1589
    },
    {
        name:"Brown Cargo Shirt",
        price: 1497
    },
    {
        name:"Hilfighter T-Shirt",
        price: 1179
    },

];

const bar=document.getElementById("bar");
const close=document.getElementById("close");
const nav=document.getElementById("navbar");

if(bar){// if any one click on bar it will true
bar.addEventListener('click',()=>{
    nav.classList.add('active');
})
}

if(close){// when we click on close it will work
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}






//single product Convertion of Smalll img to Main img by click on small img
// updateSingleProductDetail()
var MainImg = document.getElementById("MainImg");
var smallimg= document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src =smallimg[0].src;
    updateDetail(MainImg.src);
}
smallimg[1].onclick = function(){
    MainImg.src =smallimg[1].src;
    updateDetail(MainImg.src);

}
smallimg[2].onclick = function(){
    MainImg.src =smallimg[2].src;
    updateDetail(MainImg.src);
  
}
smallimg[3].onclick = function(){
    MainImg.src =smallimg[3].src;
    updateDetail(MainImg.src);
    
    // updateSingleProductDetail()
}




// for updating detail from small boxed
function updateDetail(src){
    src = MainImg.src;
    const regex = /f(\d+)\.jpg/; // regular expression to match "f" followed by one or more digits, then ".jpg"
    const match = src.match(regex);
    const singleproPrice= document.querySelector("#single-pro-details h2")
      const singleproName= document.querySelector("#single-pro-details h4")
    singleproName.innerHTML=ProductDetails[match[1]-1].name;
    singleproPrice.innerHTML="₹"+ProductDetails[match[1]-1].price;
}





// For Single product display Main Img and Small Image
const urlParams = new URLSearchParams(window.location.search);// searching for previous url
const index = urlParams.get('index');//index-data passed by shop.html paze as a index
console.log(index)
const mainImg = document.getElementById("MainImg");
const smallImgs = document.getElementsByClassName("small-img");
const imgPrefix = "img/products/f";
mainImg.src = imgPrefix + index + ".jpg";
let i=-1,j=-1;
if(index>0 && index<5){i=1;j=5} 
else if(index>4 && index<9){i=5;j=9} 
else if(index>8 && index<13){i=9;j=13} 
else if(index>12 && index<17){i=13;j=17} 
for (let k=0; i < j; k++,i++) {
smallImgs[k].src = imgPrefix + (i) + ".jpg";
}



// For sproduct paze for feture product images random genrating
const fetureImg = document.getElementsByClassName("fetureImg");
// console.log(fetureImg)
    const randomNumber = Math.floor(Math.random() * 12) + 1;
let l=randomNumber;
let m=randomNumber+4;
for (let k=0; l < m; k++,l++) {
fetureImg[k].src = imgPrefix + (l) + ".jpg";
}




//for Single Product detail

const singleproPrice= document.querySelector("#single-pro-details h2")
const singleproName= document.querySelector("#single-pro-details h4")
singleproName.innerHTML=ProductDetails[index-1].name;
singleproPrice.innerHTML="₹"+ProductDetails[index-1].price;
