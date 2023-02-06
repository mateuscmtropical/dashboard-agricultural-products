import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard.js";
import styles from '../../../components/Products.module.scss';
import Title from "@/components/Title";
import { Grid } from "@mui/material";

function Products() {
    const [productData, setProductData] = useState([]);

    const getProductData = useCallback(async values => {
        try {
            const products = await fetch('http://localhost:3000/products-producers/list?category=PESTICIDES')
            const formattedProducts = await products.json();
            
            setProductData(formattedProducts);
        } catch (error) {
            console.warn(error);
        }
    }, []);
    
    useEffect(() => {
        getProductData();
    }, [getProductData]);

    const renderOrderData = () => {
        if (!productData.length) return null;

        return (
            <React.Fragment>
                <Grid>
                    <Title>Produtos com defensivos</Title>
                    <Grid className={styles.container}>
                        {
                            productData.map(productProducer => {
                                return <ProductCard
                                    key={productProducer.id}
                                    productProducer={productProducer}
                                />
                            })
                        }
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

    return (
        <div>
            {renderOrderData()}
        </div>
    );
}

export default Products;
