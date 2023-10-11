import React from 'react'
import {mapStyles} from "@/helper/styles";
import Input from "@/components/Input";

const App: React.FC = () => {
    return (
        <div className={styles.root}>
            <div className={styles.configArea}>
                <Input type="number" placeholder="Test" sx={{input: ['text-[red]', 'placeholder:text-[blue]']}}/>
            </div>
            <div className={styles.previewArea}>

            </div>
        </div>
    )
}

export default App;

const styles = mapStyles({
    root: 'flex h-[100dvh]',
    configArea: 'p-2',
    previewArea: ''
})




