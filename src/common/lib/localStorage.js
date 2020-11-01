const addInCart =({userId, productId, quantity})=>{
    if(!userId || !productId || !quantity) return   alert("cart params missing");

    try{
        const dataInString = localStorage.getItem('cart') || '{}';
        const allDataInCart = JSON.parse(dataInString);
        const productHistory = allDataInCart[productId];
        if(productHistory){
            let quantityInCart = parseInt(productHistory['quantity']);
            allDataInCart[productId]['quantity']  = quantityInCart + quantity;
        }else{
            allDataInCart[productId] =  {productId,userId,quantity};
        }
        console.log("allDataInCart: ",allDataInCart)
        localStorage.setItem('cart', JSON.stringify(allDataInCart));
        alert("cart is updated");
    }catch (e) {
        console.error("error: ",e);
        alert("cart updated failed");

    }

}

export  {addInCart};