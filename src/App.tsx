import React from 'react'
import { mapStyles } from "@/helper/styles";
import Preview from "@/components/Preview";

import { useFormik } from "formik";
import Configurator from "@/components/Configurator.tsx";


const App: React.FC = () => {
    const { values, setFieldValue } = useFormik({
        initialValues: {},
        onSubmit: async (data) => {
            console.log(data)
        }
    })

    return (
        <div className={styles.root}>
            <Configurator
                className={styles.configArea}
                values={values}
                onChange={(key, value) => setFieldValue(key, value)}
            />
            <div className={styles.separator} />
            <Preview className={styles.previewArea} values={values} />
        </div>
    )
}

export default App;

const styles = mapStyles({
    root: 'flex h-[100dvh]',
    configArea: 'p-2 w-80',
    separator: 'bg-slate-300 w-[1px] h-full',
    previewArea: 'flex-grow'
})




