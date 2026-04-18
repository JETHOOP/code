type product = {
 Id : number | string,
 Name:string,
 price : number,
 dicsount ?: number    
}

function getPrice(Product : product):string{
if(Product.price>1000) return "Expensive"
else return "Cheap"
}