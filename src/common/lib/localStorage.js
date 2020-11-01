const addInCart =({userId, productId, quantity})=>{
    if(!userId || !productId || !quantity) return   alert("cart params missing");

    try{
        const dataInString = localStorage.getItem('cart') || '{}';
        const allDataInCart = JSON.parse(dataInString);
        const productHistory = allDataInCart[productId];
        if(productHistory){
            let quantityInCart = parseInt(productHistory['quantity']);
            allDataInCart[productId]['quantity']  = quantityInCart + quantity;
            alert("quantity incremented");
        }else{
            allDataInCart[productId] =  {productId,userId,quantity};
            alert("new item added to cart");
        }
        console.log("allDataInCart: ",allDataInCart)
        localStorage.setItem('cart', JSON.stringify(allDataInCart));


    }catch (e) {
        console.error("error: ",e);
        alert("cart updated failed");

    }

}
const getListInCart = ()=>{

    try{
        const dataInString = localStorage.getItem('cart') || '{}';
        const allDataInCart = JSON.parse(dataInString);
        let productList = [];
        if(!allDataInCart) return productList;
        for(const [key,val] of Object.entries(allDataInCart)){
            console.log(key, val);
            productList.push(val);
        }

        return productList;

    }catch (e) {
        console.error("error: ",e);


    }
}

export  {addInCart,getListInCart};