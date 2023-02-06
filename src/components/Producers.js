import ProducerCard from "@/components/ProducerCard";
import Title from "@/components/Title";
import { Grid } from "@mui/material";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import styles from './Producers.module.scss';

function Producers() {
    const [producerData, setProducerData] = useState([]);

    const getProducerData = useCallback(async () => {
        try {
            const producers = await fetch('http://localhost:3000/users/producers/list')
            const formattedProducers = await producers.json();

            setProducerData(formattedProducers);
        } catch (error) {
            console.warn(error)
        }
    }, []);
    
    useEffect(() => {
        getProducerData();
    }, [getProducerData]);

    const renderOrderData = () => {
        if (!producerData.length) return null;
        
        return (
            <React.Fragment>
                <Grid>
                    <Grid className={[
                            styles.margin,
                            styles.container,
                        ]}>
                        <Title>
                            Produtores
                        </Title>
                        <Title>
                            <Link href="../producers">
                                Ver mais produtores
                            </Link>
                        </Title>
                    </Grid>
                    <Grid className={styles.container}>
                        {
                            producerData.map(producer => {
                                return <ProducerCard
                                    key={producer.id}
                                    producer={producer}
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

export default Producers;