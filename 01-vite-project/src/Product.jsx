import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    let oldPrice=["121","222","333","444"];
    let newPrice=["444","555","3332","9999"];
    let discription=["asdfggggghh","asdsvsvcxv","awefrgefbvdbv","acscsdvsdvs"];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{discription[idx]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}

export default Product;