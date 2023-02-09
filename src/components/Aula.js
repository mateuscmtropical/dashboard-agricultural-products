import { Button, Card, TextField } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useCallback, useState } from "react";
import style from './Aula.module.scss';

export default function Aula() {
    const [formValues, setFormValues] = useState('')
    const [loading, setLoading] = useState(false);

    const handleRegistration = useCallback(async () => {
        try {
            setLoading(true);

            const {
                cepFrom,
                cepTo,
                largura,
                peso,
                altura,
                comprimento,
                valorEncomenda
            } = formValues;

            const body = {
                cepFrom: cepFrom,
                cepTo: cepTo,
                largura: largura,
                peso: peso,
                altura: altura,
                comprimento: comprimento,
                valorEncomenda: valorEncomenda
            }

            axios({
                method: "post",
                url: "http://localhost:3000/api",
                data: body
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                });

        } catch (error) {
            console.warn(error);
            setLoading(false);
        }
    }, [formValues])

    const handleInputcepFrom = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            cepFrom: value,
        })
    }, [formValues]);

    const handleInputCepTo = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            cepTo: value,
        })
    }, [formValues]);

    const handleInputLargura = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            largura: value,
        })
    }, [formValues]);

    const handleInputPeso = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            peso: value
        })
    }, [formValues]);

    const handleInputAltura = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            altura: value,
        })
    }, [formValues]);

    const handleInputComprimento = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            comprimento: value,
        })
    }, [formValues]);

    const handleInputValorEncomenda = useCallback((event) => {
        const { value } = event.target;

        setFormValues({
            ...formValues,
            valorEncomenda: value
        })
    }, [formValues]);

    return (
        <>
            <h1>Frete Correios</h1>
            <form>
                <div className={style.formWithButton}>
                    <TextField
                        name="cepFrom"
                        variant="standard"
                        placeholder="Digite o CEP do Remetente"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputcepFrom}
                        disabled={loading}
                    >
                    </TextField>
                    <TextField
                        name="cepTo"
                        variant="standard"
                        placeholder="Digite o CEP de Destino"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputCepTo}
                        disabled={loading}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite a largura"
                        name="largura"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputLargura}
                        disabled={loading}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o peso"
                        name="peso"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputPeso}
                        disabled={loading}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite a altura"
                        name="altura"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputAltura}
                        disabled={loading}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o comprimento"
                        name="comprimento"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                        onChange={handleInputComprimento}
                        disabled={loading}
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o valor da encomenda"
                        name="valorEncomenda"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        onChange={handleInputValorEncomenda}
                        disabled={loading}
                        required
                    />
                </div>
                <Button
                    block
                    variant="contained"
                    className={style.buttonClass}
                    onClick={handleRegistration}
                    loading={loading}
                >
                    Buscar
                </Button>
            </form>
        </>
    )
}
