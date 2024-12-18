import Product from "./Product";

function ProductTab(){
    let styles={
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    };
    return(
        <div style={styles}>
         <Product title="AAjana tujhe yrr " idx="0"/>
         <Product title="jaa tujhko bhula diya" idx="1"/>
         <Product title="Niklna naa lodeee" idx="2"/>
         <Product title=" dtttttttt niklllllllllllllll" idx="3"/>
        </div>
       
    )
}
export default ProductTab;