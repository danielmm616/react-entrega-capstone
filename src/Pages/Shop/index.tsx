import FormProducts from "../../components/FormProducts"
import ProductAddToCart from "../../components/Products"
import ProdutsEdits from "../../components/ProdutsEdits"

const Shop = () => {
    return(
        <>
         <strong>Produtos</strong>
         <br/>
        <FormProducts/>
        <ProductAddToCart/>
        <ProdutsEdits/>
        </>
    )
   
}
export default Shop