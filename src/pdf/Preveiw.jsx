import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'
import CardTemplate1 from './CardTemplate1'

const Preveiw = () => {
  return (
    <div>

        <PDFViewer width={'100%'} height={700} >
            {/* <CardTemplate1/> */}
        </PDFViewer>
    </div>
  )
}

export default Preveiw