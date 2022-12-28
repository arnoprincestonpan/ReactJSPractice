import React from 'react'

function HTMLSemantics() {
  let currentDate = new Date()
  let year = currentDate.getFullYear()
  let month = currentDate.getMonth() + 1
  let day = currentDate.getDate()
  let fullDate = year + "-" + month + "-" + day
  return (
    <div>
      <h1>
        HTML Semantics Research
      </h1>
      <p>Some HTML Semantics that I thought are useful.</p>
      <h2>&lt;details&gt; & &lt;summary&gt;</h2>
      <p>The details tag is meant to be an optional drop down menu if more information is needed.
        And not to clutter the page with text. The user can click to expand it to show the information provided.
        Whereas the summary tag is used to summarize the information within the drop down text.
        For more information visit W3 Schools: &lt;details&gt; & &lt;summary&gt;.</p>
      <details>
        <summary>Find Waldo by Pressing the Rotated Triangle</summary>
        <img src="https://scontent.fyvr2-1.fna.fbcdn.net/v/t1.6435-9/164144924_288344195993046_4868328771377531937_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=1YCDc2PowG4AX_8HvjA&_nc_ht=scontent.fyvr2-1.fna&oh=00_AfBGJABNr-eZyk-5hxB3lUDcSNcLvFBudH4HU3UoJFUPSQ&oe=63D34633" alt="waldo facebook" />
      </details>
      <h3>Instructions</h3>
      <p>Have a details tag that opens and closes. Inside the details tag add a summary tag that opens and closes. The summary will be your title.
        Underneath summary you can add anything you want that is hidden. You can add a paragraph opening and closing tag or other tags that you want to hide.
      </p>
      <h2>&lt;mark&gt;</h2>
      <p>The mark tag is a tag that works similar to the span tag. 
        However; it is more simple. 
        As it highlights the text enclosed inside the tags without having to define what is needed. 
        So it simply works like a yellow highlighter. For more information visit W3 Schools for the &lt;mark&gt; tag.</p>
      <p>Example: I am not marked. <mark>I am marked.</mark></p>
      <h3>Instructions</h3>
      <p>Simply enclose the string you want to highlight with an opening and closing mark tag.</p>
      <h3>&lt;time&gt; and attribute datetime</h3>
      <p>The time tag is to define a specific time. The important part is the attribute, this will define what a specific time means to the browser. 
        News articles can have time stamps, in search engines like Google, you can search specifically for which date a page/article was published. One of the best ways is to define a time. I made this around 09:00 to 12:00. Which is a Tuesday. Your calendars on your device also look for this date time. 
        You can find out more about this attribute on W3 Schools: &lt;time&gt;.</p>
      <p>Example: Today's date is <time datetime={fullDate}>{month}/{day}/{year}</time>.</p>
      <h3>Instructions</h3>
      <p>Simply enclose the string you would like to have a date marked in a time opening and closing tag. Inside the time tag you should have a datetime attribute that has the date listed out like "YYYY-MM-DD". You can see examples online for proper format.</p>
    </div>
  )
}

export default HTMLSemantics