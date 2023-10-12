import "./Products.css"
import { Link } from "react-router-dom"
import CardData from "./ProductsData";

function Products(){
    return(
        <>
            <h2 className="products-main-heading">Our Products</h2>
            <div className="ProductsMainDiv">
                {CardData.map(data=>
                    data && (
                    <div className="single-card">
                        <img src={data.image} alt='not found'/>
                            <div className="card-info">
                                <h4 className="">{data.name}</h4>
                                <p className="">{data.information}</p>
                                <p className="">Size: {data.size}</p>
                                <p className="">Price: {data.price}</p>
                                <p className="">Sold: {data.sold}</p>
                                <p><Link className="card-link">Product Detail</Link></p>
                                <button className="card-button">Button</button>
                            </div>
                    </div>
                    )
                )}
                
            </div>
        </>
    )
}

export default Products;