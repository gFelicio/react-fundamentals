// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>
const editedBox = <div className="box box--medium" style={{marginTop: 20, backgroundColor: 'blue'}}> Feito </div>

function Box ({color = 'lightblue', style = {}, size ='medium', ...props}) {
    const classname = "box box--" + size
    return <div className={classname} style={{fontStyle: 'italic', backgroundColor: color, ...style}} {...props}></div>
}

function App() {
  return (
    <div>
        <Box size="small">Small Lightblue Box</Box>
        <Box color="pink">Medium Pink Box</Box>
        <Box size="large" color="orange">Large Orange Box</Box>
        
        {editedBox}

        {smallBox}
        {mediumBox}
        {largeBox}
    </div>
  )
}

export default App
