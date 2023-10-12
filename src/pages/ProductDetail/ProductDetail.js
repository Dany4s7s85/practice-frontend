import './ProductDetail.css'
import ProductDetailData from './ProductDetailData';
import NavBar from "../NavBar/NavBar.js"
import Footer from "../Footer/Footer.js"
function ProductDetail(){
    return(
        <>
            <NavBar />
            <div className='product-detail-main-div'>
            <div style={{backgroundImage: `url(${ProductDetailData.image})`}} className="productDetail-product-image">
                <h1>Complete Detail of {ProductDetailData.name}</h1>
                <p>{ProductDetailData.information}</p>
            </div>
            <div className='productDetailBodyDiv'>
                <div className='productDetailInfoDiv'>
                    <p>Size: {ProductDetailData.size}</p>
                    <p>Price: {ProductDetailData.price}</p>
                    <p>Sold: {ProductDetailData.sold}</p>
                </div>
                <div>
                    {ProductDetailData.detail.map(element =>
                        (
                            <>
                                <h2>{element.Heading}</h2>
                                {element.description.text1 && (
                                    <p className='ProductText'>{element.description.text1}</p>
                                )}
                                {element.description.points && (
                                    <ul>
                                        {element.description.points.map(point=>
                                        <li>point</li>
                                    )}
                                    </ul>
                                )}
                                {element.description.text2 && (
                                    <p  className='ProductText'>{element.description.text1}</p>
                                )}
                            </>
                        )
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProductDetail;