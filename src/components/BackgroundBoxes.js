import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const Box = ({ i, j }) => {
  return (
    <div
      className='box'
      style={{
        backgroundPosition: `${-j * 125}px ${-i * 125}px`,
        // transform: 'rotateZ(360deg)',
      }}
    ></div>
  )
}

const BackgroundBoxes = () => {
  const [isBig, setIsBig] = useState(false)

  const boxes = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      boxes.push(
        <Box key={i + j * 100} i={i} j={j}>
          hi
        </Box>
      )
    }
  }

  return (
    <Fragment>
      <button id='btn' className='magic' onClick={() => setIsBig(!isBig)}>
        Magic 🎩
      </button>
      <div id='boxes' className={isBig ? 'big boxes' : 'boxes'}>
        {boxes}
      </div>
    </Fragment>
  )
}

export default BackgroundBoxes
