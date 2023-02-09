import { Button, TextField } from "@mui/material";
import style from './Aula.module.scss';

export default function Aula() {
    return (
        <>
            <h1>Frete Correios</h1>
            <form>
                <div className={style.formWithButton}>
                    <TextField
                        variant="standard"
                        placeholder="Digite o CEP do Remetente"
                        name="cepFrom"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    >
                    </TextField>
                    <TextField
                        variant="standard"
                        placeholder="Digite o CEP de Destino"
                        name="cepTo"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite a largura"
                        name="largura"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o peso"
                        name="peso"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite a altura"
                        name="altura"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o comprimento"
                        name="comprimento"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                    <TextField
                        variant="standard"
                        placeholder="Digite o valor da encomenda"
                        name="valorEncomenda"
                        type="text"
                        className={style.inputForm}
                        sx={{ m: 1, width: '35ch' }}
                        required
                    />
                </div>
                <Button
                    variant="contained"
                    className={style.buttonClass}
                >
                    Buscar
                </Button>
            </form>
        </>
    )
}
