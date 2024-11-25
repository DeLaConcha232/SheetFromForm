import styles from '../stylesComponents/forms.module.css'
import { Button, Label, TextInput, Select, Textarea  } from "flowbite-react";



export default function Forms() {

    const MetodoDePago = [
        { id: 0, clave: "PUE", mdp: "Pago en una sola exhibición" },
        { id: 1, clave: "PPD", mdp: "Pago en parcialidades o diferido" }
    ];

    const FormaDePago = [
        { id: 1, clave: "1", fdp: "Efectivo" },
        { id: 2, clave: "2", fdp: "Cheque nominativo" },
        { id: 3, clave: "3", fdp: "Transferencia electrónica de fondos" },
        { id: 4, clave: "4", fdp: "Tarjeta de crédito" },
        { id: 5, clave: "5", fdp: "Monedero electrónico" },
        { id: 6, clave: "6", fdp: "Dinero electrónico" },
        { id: 7, clave: "8", fdp: "Vales de despensa" },
        { id: 8, clave: "12", fdp: "Dación en pago" },
        { id: 9, clave: "13", fdp: "Pago por subrogación" },
        { id: 10, clave: "14", fdp: "Pago por consignación" },
        { id: 11, clave: "29", fdp: "Tarjeta de servicios" },
        { id: 12, clave: "30", fdp: "Aplicación de anticipos" },
        { id: 13, clave: "99", fdp: "por definir" },
    ];

    const CFDI = [
        { id: 1, clave: "G01", cfdi: "Adquisición de mercancias" },
        { id: 2, clave: "G02", cfdi: "Devoluciones, descuentos o bonificaciones" },
        { id: 3, clave: "G03", cfdi: "Gastos en general" },
        { id: 4, clave: "I01", cfdi: "Construcciones" },
        { id: 5, clave: "I02", cfdi: "Mobilario y equipo de oficina por inversiones" },
        { id: 6, clave: "I03", cfdi: "Equipo de transporte" },
        { id: 7, clave: "I04", cfdi: "Equipo de computo y accesorios" },
        { id: 8, clave: "I05", cfdi: "Dados, troqueles, moldes, matrices y herramientas" },
        { id: 9, clave: "I06", cfdi: "Comunicaciones telefónicas" },
        { id: 10, clave: "I07", cfdi: "Comunicaciones satelitales" },
        { id: 11, clave: "I08", cfdi: "Otra maquinaria y equipo" },
        { id: 12, clave: "D01", cfdi: "Honorarios médicos, dentales y gastos hospitalarios" },
        { id: 13, clave: "D02", cfdi: "Gastos médicos por incapacidad o discapacidad" },
        { id: 14, clave: "D03", cfdi: "Gastos funerales" },
        { id: 15, clave: "D04", cfdi: "Donativos" },
        { id: 16, clave: "D05", cfdi: "Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación)" },
        { id: 17, clave: "D06", cfdi: "Aportaciones voluntarias al SAR" },
        { id: 18, clave: "D07", cfdi: "Primas por seguros de gastos médicos" },
        { id: 19, clave: "D08", cfdi: "Gastos de transportación escolar obligatoria" },
        { id: 20, clave: "D09", cfdi: "Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones" },
        { id: 21, clave: "D10", cfdi: "Pagos por servicios educativos (colegiaturas)" },
        { id: 22, clave: "P01", cfdi: "Por definir" },
    ];



    return (
        <>
            <article className={styles.container}>

                <form action="" className={styles.containerForms}>
                    <section className={styles.container1}>

                        <div className="max-w-lg">
                            <div className="mb-2 block">
                                <Label htmlFor="receptor" value="Receptor*" />
                            </div>
                            <Select id="receptor" required>
                                <option value="0">none</option>
                                <option value="">United States</option>
                                <option value="">Canada</option>
                                <option value="">France</option>
                                <option value="">Germany</option>
                            </Select>
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



                        {/* <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Uso del CFDI" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" required />
                        </div> */}

                        <div className="max-w-lg">
                            <div className="mb-2 block">
                                <Label htmlFor="MdP" value="Uso del CFDI*" />
                            </div>
                            <Select id="MdP" required>
                                <option value="0">ninguno</option>
                                {CFDI.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.cfdi}</option>
                                ))};
                            </Select>
                        </div>



                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Emisor" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" required />
                        </div>
                        <div className="max-w-lg">
                            <div className="mb-2 block">
                                <Label htmlFor="MdP" value="Metodo de Pago*" />
                            </div>
                            <Select id="MdP" required>
                                <option value="0">ninguno</option>
                                {MetodoDePago.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.mdp}</option>
                                ))
                                }
                            </Select>
                        </div>

                        <div className="max-w-lg">
                            <div className="mb-2 block">
                                <Label htmlFor="MdP" value="Forma de pago*" />
                            </div>
                            <Select id="MdP" required>
                                <option value="0">ninguno</option>
                                {FormaDePago.map((metodo) => (
                                    <option key={metodo.id} value={metodo.clave}>{metodo.fdp}</option>
                                ))};
                            </Select>
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
                            <TextInput id="base" type="date" sizing="md" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="Banco" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" required />
                        </div>
                    </section>
                    <section className={styles.container2}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="CANTIDAD" />
                            </div>
                            <TextInput id="base" type="number" sizing="md" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="UNIDAD" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="CLAVE SAT" />
                            </div>
                            <TextInput id="base" type="text" sizing="md" required />
                        </div>

                        <div className="max-w-md">
                            <div className="mb-2 block">
                                <Label htmlFor="descripcion" value="DESCRIPCION*" />
                            </div>
                            <Textarea id="descripcion" placeholder="Descripcion..." required rows={7} />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="P.UNITARIO" />
                            </div>
                            <TextInput id="base" type="number" sizing="md" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="base" value="IMPORTE" />
                            </div>
                            <TextInput id="base" type="number" sizing="md" required />
                        </div>
                    </section>
                    <Button color="blue" type="submit" className={styles.submitBtn}>Generar Documento</Button>
                    <Button color="red" type="reset" className={styles.submitBtn}>Resetear Campos</Button>
                </form>
            </article>
        </>
    )
}