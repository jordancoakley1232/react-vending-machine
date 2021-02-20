import { useContext } from 'react';
import { ProductInfoContext, SetProductInfoContext } from '../ProductInfoContainer';

import "./ProductInfo.scss"

const ProductInfo = () => {
    const productInfo = useContext(ProductInfoContext);
    const setProductInfo = useContext(SetProductInfoContext)

    return (
        <div className="product-info" style={{ width: "100%" }}>
            <div className="product-info-card" >
                {/* Product Name */}
                <div className="product-name" style={{ textOverflow: "elipses", overflow: "hidden", whiteSpace: "nowrap" }}>
                    {productInfo.brand_name ? productInfo.brand_name : "Select a Product"}
                </div>
                {/* Product Info */}
                <div className="nutrition-info">
                    {/* Calories */}
                    <div className="calories facts">
                        <p>Cals</p>
                        <h2>{productInfo.nf_calories >= 0 && productInfo.nf_calories !== null ? productInfo.nf_calories : "-"}</h2>
                    </div>
                    {/* Fat */}
                    <div className="fat facts">
                        <p>Fat</p>
                        <h2>{productInfo.nf_total_fat >= 0 && productInfo.nf_total_fat !== null ? `${productInfo.nf_total_fat}g` : "-"}</h2>
                    </div>
                    {/* Carbs */}
                    <div className="carbs facts">
                        <p>Carbs</p>
                        <h2>{productInfo.nf_total_carbohydrate >= 0 && productInfo.nf_total_carbohydrate !== null ?
                            `${productInfo.nf_total_carbohydrate}g` :
                            "-"}
                        </h2>
                    </div>
                    {/* Fiber */}
                    <div className="fiber facts">
                        <p>Fiber</p>
                        <h2>{productInfo.nf_dietary_fiber >= 0 && productInfo.nf_dietary_fiber !== null ? `${productInfo.nf_dietary_fiber}g` : "-"}</h2>
                    </div>
                    {/* Protein */}
                    <div className="protein" >
                        <p>Protein</p>
                        <h2>{productInfo.nf_protein >= 0 && productInfo.nf_protein !== null ? `${productInfo.nf_protein}g` : "-"}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
