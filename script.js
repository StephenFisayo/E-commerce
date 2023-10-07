let pro1 = document.getElementById("product-1");
let pro2 = document.getElementById("product-2");
let pro3 = document.getElementById("product-3");
let pro4 = document.getElementById("product-4");
let addShoe = document.querySelector(".plus");
let subShoe = document.querySelector(".minus");
let amountShoe = document.querySelector(".amount");
let disp = document.getElementById("display");
let checked = document.querySelector(".cart-word");
let checkedCart = document.getElementById("cart-checked");
let emptyCart = document.getElementById("javaClear");
let clearCart = document.getElementById("cartClear");
let clickedCheck = document.getElementById("checkout");
let checkedType = document.querySelector(".checkout-type");
let checkedAmount = document.querySelector(".checkout-amount");
let selectCart = document.getElementById("selectCart");
let thumbnail = document.getElementById("checkout-thumbnail");
let trash = document.getElementById("bin");
let buy = document.querySelector(".buy")
var closeBtn = document.querySelector(".close-btn")
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var mprevBtn = document.querySelector(".mprev");
var mnextBtn = document.querySelector(".mnext");
var modalDisp = document.getElementById('modal-display')
var modal = document.getElementById("modals");
var modalThumbnails = document.querySelectorAll(".modThumb")
let mod1 = document.getElementById("modal-1");
let mod2 = document.getElementById("modal-2");
let mod3 = document.getElementById("modal-3");
let mod4 = document.getElementById("modal-4");
var collection = document.querySelector(".collection");
var men = document.querySelector(".men");
var women = document.querySelector(".women");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");
let rect = document.getElementById("rect");
let mobileList = document.getElementById("list");
let mobileClose = document.querySelector(".mobile-close")
let mobileMenu = document.querySelector(".mobile-menu")

//menu close and open
mobileClose.addEventListener('click', function(){
    mobileList.style.left = "-100vw";
})

mobileMenu.addEventListener('click', function(){
    mobileList.style.left = "0";
})

//list selections
collection.addEventListener('click', function(){
    rect.style.left = "18.5%";
})
men.addEventListener('click', function(){
    rect.style.left = "25%";
})
women.addEventListener('click', function(){
    rect.style.left = "30.5%";
})
contact.addEventListener('click', function(){
    rect.style.left = "42.5%";
})
about.addEventListener('click', function(){
    rect.style.left = "36.5%";
})





//main shoe products

var thumbArray = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];

function showProduct1(){
    disp.src = thumbArray[0];
}
pro1.addEventListener('click', showProduct1);

function showProduct2(){
    disp.src = thumbArray[1];
}
pro2.addEventListener('click', showProduct2);

function showProduct3(){
    disp.src = thumbArray[2];
}
pro3.addEventListener('click', showProduct3);

function showProduct4(){
    disp.src = thumbArray[3];
}
pro4.addEventListener('click', showProduct4);
//main shoe product ends




//check items
function addToCart(){
    let nom = amountShoe.textContent;
    let totalAmount = 125.00 * nom;
    var itemArray = 
    {
        pict1: './images/image-product-1-thumbnail.jpg', pict2: './images/image-product-2-thumbnail.jpg', pict3: './images/image-product-3-thumbnail.jpg' , pict4: './images/image-product-4-thumbnail.jpg',
        sneaker: 'Fall Limited Edition Sneakers',
        discount: "$125.00 x " + amountShoe.textContent + " ", 
        total:  "$" + totalAmount + ".00",
        bin: './images/icon-delete.svg',
        button: 'Checkout'
    }

    function showCheckout(){
        thumbnail.src = itemArray.pict1;
        trash.src = itemArray.bin;
        buy.textContent = itemArray.button;
        checkedType.textContent = itemArray.sneaker;
        checkedAmount.textContent = itemArray.discount;
        strongAmount.textContent = itemArray.total;
    }

   if (amountShoe.textContent > 0){
        checkedCart.style.display = "block";
        checkedCart.textContent = amountShoe.textContent;
   }else{
    checkedCart.style.display = "none";
   }

    if (nom > 0){
        showCheckout();
        emptyCart.style.display = "block";
        clearCart.style.display = "none";
    }else if (nom == 0){
        emptyCart.style.display = "none";
        clearCart.style.display = "block";
    }

}
checked.addEventListener('click', addToCart);




//checkout items

var emptyItem = 'Your cart is empty';
var strongAmount = document.querySelector(".total")

selectCart.addEventListener('click', function checkItems(){
    clickedCheck.classList.toggle("check-visible");
}) 

trash.addEventListener('click', function(){
    emptyCart.style.display = "none";
    clearCart.style.display = "block";
    amountShoe.textContent = 0;
    checkedCart.style.display = "none";
    count = 0;
})


//increment for amount of shoes
let count = 0;

addShoe.addEventListener('click', function(){
    count++;
    amountShoe.textContent = count;
});

subShoe.addEventListener('click', function(){
    
    if (count < 1){
        amountShoe.textContent = 0;
    }else{
        count--;
        amountShoe.textContent = count;
    }
    
});




//modal

closeBtn.addEventListener('click', function (){
    modal.style.visibility = "hidden";
    modal.style.transition = "ease-out 0.1s";
    modal.style.scale = "0.9";
})

disp.addEventListener('click', function(){
    modal.style.visibility = "visible";
    modalDisp.src = disp.src;
    modal.style.scale = "1.1";
})

var imgArray = ['./images/image-product-1.jpg', './images/image-product-2.jpg', './images/image-product-3.jpg', './images/image-product-4.jpg'];

let modCount = 0;
nextBtn.addEventListener('click', function(){
    modCount++;
    if(modCount > imgArray.length - 1){
        modCount = 0;
    }
    modalDisp.src = imgArray[modCount];
})

prevBtn.addEventListener('click', function(){
    modCount--;
    if(modCount < 0){
        modCount = imgArray.length - 1;
    }
    modalDisp.src = imgArray[modCount];
})



//modal thumbnail chosen display

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', function(){
        if(modalThumbnail == mod1){
            modalDisp.src = thumbArray[0];
        }else if(modalThumbnail == mod2){
            modalDisp.src = thumbArray[1];
        }else if(modalThumbnail == mod3){
            modalDisp.src = thumbArray[2];
        }else{
            modalDisp.src = thumbArray[3];
        }
    })
})

//mobile image slider

let mobileCount = 0;

mprevBtn.addEventListener('click', function(){
    mobileCount--;
    if(mobileCount < 0){
        mobileCount = imgArray.length - 1;
    }
    disp.src = imgArray[mobileCount];

})

mnextBtn.addEventListener('click', function(){
    mobileCount++;
    if(mobileCount > imgArray.length - 1){
        mobileCount = 0;
    }
    disp.src = imgArray[mobileCount];

})



