import './polyfills.js'
import React, { useState } from 'react'
import { render } from 'react-dom'
import {
  PDFViewer,
  PDFDownloadLink,
  Font,
} from '@react-pdf/renderer/lib/react-pdf.browser.es'
import { Exmpl } from 'exmpl'
import { MyDocument } from './MyDocument'
// import Container from './Container'
// import Chart from './charts/Charts'
import fonts from './fonts'

fonts.map((font) => Font.register({ family: font.name, src: font.url }))

const App = () => {
  const [title, setTitle] = useState('React-PDF')
  const [chartImage, setChartImage] = useState(null)
  const [url, setUrl] = useState(null)

  const page = <MyDocument title={title} chartImage={chartImage} />

  return (
    <Exmpl
      title="webpack-react-pdf"
      github="https://tobua.github.io/webpack-react-pdf"
      npm="@react-pdf/renderer"
    >
      <label htmlFor="title" style={{ fontSize: 10 }}>
        Change the Title
      </label>
      <br />
      <input
        id="title"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
      />
      <br />
      <br />
      {/* <Container
        width={'100%'}
        height={400}
        onUrl={setUrl}
        fonts={fonts}
        name="document"
      > */}
      <PDFViewer width="100%" height="300">
        {page}
      </PDFViewer>
      {/* <PDFDownloadLink document={page} fileName="test.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink> */}
      <h2>DOM rendered Chart</h2>
      <p>A screenshot will be made and inserted into the PDF.</p>
      {/* <Chart svgFont="Arial" onScreenshot={setChartImage} /> */}
    </Exmpl>
  )
}

render(<App />, document.body)
