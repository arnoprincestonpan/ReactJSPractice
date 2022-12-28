import React from 'react'

function CSSSelectors() {

  return (
    <>
      <h1>CSS Properties Research</h1>
      <p>Here are 3 types of CSS Properties that I have found on the Internet. I'll be introducing them below.</p>
      <h2>text-align</h2>
      <p>text-align can change where your paragraph/line starts</p>
      <p style={{textAlign: "right"}}>
        It can start here! On the RIGHT!
      </p>
      <p style={{textAlign: "center"}}>
        It can start here! At the CENTRE!
      </p>
      <p style={{textAlign: "left"}}>
        It can start here! On the LEFT!
      </p>
      <h3>Instructions</h3>
      <p>In your stylesheet, simply give the style attribute, "text-align", a "left", "centre", or "right". </p>
      <h2>text-transform</h2>
      <p>text-transform changes your text cases of your text.</p>
      <p style={{textTransform: "uppercase"}}>this is the type of text you can use when you have too much coffee</p>
      <p style={{textTransform: "capitalize"}}>Or maybe every first letter should be capitalized.</p>
      <h2>Outline</h2>
      <p>outline can outline your text and make it stand out. Instead of highlighting/striking text.</p>
      <p style={
        {border: "3px solid black",
        outline: "yellow dotted 10px",
        margin: "auto",
        padding: "10px",
        textAlign: "left"
        }
        }>
        This is one awesome outline.
      </p>
    </>
  )
}

export default CSSSelectors