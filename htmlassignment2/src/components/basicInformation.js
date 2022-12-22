import React from 'react'

function BasicInformation() {

    const leftColumnStlye = {
        "font-weight": 'bold',
    }
  return (
    <div>
        <h1>Basic Information</h1>
        <table>
            <tr>
                <td style={leftColumnStlye}>Name</td>
                <td>Arno Princeston Pan</td>
                <td></td>
            </tr>
            <tr>
                <td style={leftColumnStlye}>Education</td>
                <td>BCIT | Architectural Building Technology Diploma</td>
                <td>2013 to 2016</td>
            </tr>
            <tr>
                <td style={leftColumnStlye}>Favorite Movie Quotes</td>
                <td>
                    <p><i>"Mama always said: Life is like a Box of Chocolates. You never know what you're going to get."</i></p>
                    <p>"Run Forest Run!"</p>
                    <p>"OKAY! JENNY!"</p>
                </td>
                <td></td>
            </tr>
        </table>
    </div>
  )
}

export default BasicInformation