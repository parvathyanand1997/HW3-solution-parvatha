class glazes {

    constructor(glazeType,glazePrice) 
    {
        this.glazeType = glazeType;
        this.glazePrice = glazePrice;
	}
}

const keepOriginal = new glazes('Keep original',0.0);
const sugarMilk = new glazes('Sugar milk',0.0);
const vanillaMilk = new glazes('Vanilla milk',0.50);
const doubleChocolate = new glazes('doubleChocolate',1.50);


class packs {

    constructor(packType,packPrice) 
    {
        this.packType = packType;
        this.packPrice = packPrice;
		
	}
}

const one = new packs(1,1);
const three = new packs(3,3);
const six = new packs(6,5);
const twelve = new packs(12,10);


let glazeObjectList = [keepOriginal,sugarMilk,vanillaMilk,doubleChocolate];
let packObjectList = [one,three,six,twelve];



let glazeMenu = document.getElementById("glazeMenu"); 
for (let i = 0; i < glazeObjectList.length; i++) 
{
    console.log("its working");
    let option1 = document.createElement("option");
    option1.textContent = glazeObjectList[i].glazeType;
    glazeMenu.appendChild(option1);
    console.log(option1);

}

    
let packMenu= document.getElementById("packMenu"); 
for (let j = 0; j < packObjectList.length; j++) 
    {
        let option2 = document.createElement("option");
        option2.textContent = packObjectList[j].packType;
        packMenu.appendChild(option2);
        console.log(option2);
    }
     

const basePrice = 2.49;
let gPrice = 0.0;
let pSize = 1;
let totalPrice = 0.0;


function glazingChange(element)
{

    let selectedGlazeOption = element.value;
    console.log(selectedGlazeOption);

    for (let i = 0; i < glazeObjectList.length; i++)
    {
        if(selectedGlazeOption == glazeObjectList[i].glazeType)
        {
            gPrice = Number(glazeObjectList[i].glazePrice);
        }
    }
    console.log(gPrice);
    calculatePrice(gPrice,pSize);

}


function packChange(element)
{
    let selectedPackOption = element.value;
    console.log(selectedPackOption);

    for (let i = 0; i < packObjectList.length; i++) 
    {
        if(selectedPackOption == packObjectList[i].packType)
        {
            pSize = Number(packObjectList[i].packPrice);
        }
    }
    console.log(pSize);
    calculatePrice(gPrice,pSize);
}


function calculatePrice(gPrice,pSize)
{
    totalPrice = (basePrice + gPrice)*pSize;
    let totalDisplay = document.getElementById("price");
    totalDisplay.innerText = totalPrice.toFixed(2);

}

