import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard.js";
import styles from './Products.module.scss';
import Title from "@/components/Title";
import { Grid } from "@mui/material";
import Link from "next/link";

function Products({ home }) {
    const [productData, setProductData] = useState([]);

    const getProductData = useCallback(async values => {
        try {
            const productsLimit = 5;
            const products = home 
                ? await fetch(`http://localhost:3000/products-producers/list?limit=${productsLimit}`)
                : await fetch('http://localhost:3000/products-producers/list')
            const formattedProducts = await products.json();
            
            setProductData(formattedProducts);
        } catch (error) {
            console.warn(error);
        }
    }, [home]);
    
    useEffect(() => {
        getProductData();
    }, [getProductData]);

    const renderOrderData = () => {
        if (!productData.length) return null;

        return (
            <React.Fragment>
                <Grid>
                    <Grid className={[
                            styles.margin, 
                            styles.container
                    ]}>
                        <Title>
                            Produtos
                        </Title>
                        <Title>
                            <Link href="../products">
                                Ver mais produtos
                            </Link>
                        </Title>
                    </Grid>
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
