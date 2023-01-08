import React from 'react'
import Square from './Square'
import {useState} from 'react'

function Board() {

    const myBoardStyle={
        display: "flex",
        flexDirection: "row"
    }

  return (
    <>
        <div>
            <div style={myBoardStyle}>
                <div>
                    <Square />   
                </div>
            </div>
        </div>
    </>
  )
}

export default Board