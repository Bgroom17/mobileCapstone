
//--------------Shirt---------------------
//**this function will call and make the nextShirt function run

var shirtValue = 1;

//function changeShirt() {

document.getElementById('shirtButton').addEventListener('click', nextShirt)
//    function () {console.log('it is working!') })
//}
//
//
////**calling the changeShirt function makes it run, it wouldn't without this
//changeShirt();

//**this is called by the changeShirt function, this is where I will try to change the next shirt
function nextShirt() {


    document.getElementById('shirtContainer').innerHTML = '<img id="shirt" src="images/shirtFull' + shirtValue + '.png" alt="shirt">';



    shirtValue++;

    if (shirtValue > 8) {
        shirtValue = 1;
    }


    console.log('the second function is working');

}

//------------previous shirt

//function previousShirt() {
document.getElementById('previousShirtButton').addEventListener('click', previousShirtImage)
//
//}
//
//previousShirt();

function previousShirtImage() {

    //instraf of hanging glaobal for the variable, chnage a local variable instead, take incremeent in forward and casue it to hapen first, add one then display, and do it the same for take add show
    //    shirtValue = shirtValue - 1;
    
    shirtValue--;
    
    if (shirtValue < 1) {
        shirtValue = 8;
    };
    
     document.getElementById('shirtContainer').innerHTML = '<img id="shirt" src="images/shirtFull' + shirtValue + '.png" alt="shirt">';
    
    
    //    shirtValue--

}


//--------------Pants------------------

var pantValue = 1;

////**this function will call and make the nextPants function run
//function changePants() {
document.getElementById('pantsButton').addEventListener('click', nextPants)
//    function () {console.log('it is working!') })
//}


////**calling the changePants function makes it run, it wouldn't run without this
//changePants();


//**this is called by the changePants function, this is where I will try to change the next pants

function nextPants() {

    document.getElementById('pantsContainer').innerHTML = '<img id="pant" src="images/pantFull' + pantValue + '.png" alt="pants">';

    pantValue++;

    if (pantValue > 8) {
        pantValue = 1;
    }
    
    

    console.log('the pant function is working');
}
//
//if (pantValue == 4){
//     document.getElementById("pant").className += "overall";
//    }

//------------previous pants

//function previousPants() {
document.getElementById('previousPantsButton').addEventListener('click', previousPantsImage)

//}
//
//previousPants();

function previousPantsImage() {

    pantValue--;

    if (pantValue < 1) {
        pantValue = 8;
    };

    //   


    document.getElementById('pantsContainer').innerHTML = '<img id="pant" src="images/pantFull' + pantValue + '.png" alt="pants">';

}

//--------------Hats------------------

var hatValue = 1;

document.getElementById('hatButton').addEventListener('click', nextHat)


function nextHat() {

    document.getElementById('hatContainer').innerHTML = '<img id="hat" src="images/hatFull' + hatValue + '.png" alt="hat">';

    hatValue++;

    if (hatValue > 8) {
        hatValue = 1;
    }
    
    console.log('the hat function is working');
}

document.getElementById('previousHatButton').addEventListener('click', previousHatImage)

function previousHatImage() {

    hatValue--;

    if (hatValue < 1) {
        hatValue = 8;
    };

    //   


    document.getElementById('hatContainer').innerHTML = '<img id="hat" src="images/hatFull' + hatValue + '.png" alt="hat">';

}

//--------------Shoes------------------

var shoeValue = 1;

document.getElementById('shoeButton').addEventListener('click', nextShoes)


function nextShoes() {

    document.getElementById('shoeContainer').innerHTML = '<img id="shoe" src="images/shoeFull' + shoeValue + '.png" alt="shoe">';

    shoeValue++;

    if (shoeValue > 8) {
        shoeValue = 1;
    }
    
    console.log('the shoe function is working');
}

document.getElementById('previousShoeButton').addEventListener('click', previousShoeImage)

function previousShoeImage() {

    shoeValue--;

    if (shoeValue < 1) {
        shoeValue = 8;
    };

    //   


    document.getElementById('shoeContainer').innerHTML = '<img id="shoe" src="images/shoeFull' + shoeValue + '.png" alt="shoe">';

}







