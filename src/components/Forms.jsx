import styles from '../stylesComponents/forms.module.css'
import { Button, Label, TextInput } from "flowbite-react";


export default function Forms() {
    return (
        <>
            <article className={styles.container}>
                <h1 className={styles.Title}>DATOS DE FACTURACION</h1>
                <form action="" className={styles.containerForms}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Receptor" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="RFC" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Regimen" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="C.P." />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Uso del CFDI" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Emisor" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Metodo de Pago" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Forma de pago" required />
                        </div>
                        <TextInput id="base" type="text" sizing="md" />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Ultimos cuatro digitos" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Fecha" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="base" value="Banco" />
                        </div>
                        <TextInput id="base" type="text" sizing="md" required />
                    </div>

                    <Button color="blue" type="submit" className={styles.submitBtn}>Generar Documento</Button>
                </form>
            </article>
        </>
    )
}