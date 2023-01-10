import React from 'react'
import JavaScriptLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html5-logo.png"
import CSSLogo from "../images/css-logo.png"
import PythonLogo from "../images/python-logo.png"
import JavaLogo from "../images/java-logo.png"
import CLogo from "../images/icons8-c-logo.png"
import CSharpLogo from "../images/icons8-csharp-logo.png"

function Programming() {
  return (
    <div className="Programming">
      <h1>Programming</h1>
      <h2>Languages</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Java</li>
        <li>C</li>
        <li>C#</li>
      </ul>
      <ul>
        <li><img className="program-image" src={JavaScriptLogo} alt="JavaScript Logo"  /></li>
        <li><img className="program-image" src={HTMLLogo} alt="HTML Logo"  /></li>
        <li><img className="program-image" src={CSSLogo} alt="CSS Logo"  /></li>
        <li><img className="program-image" src={PythonLogo} alt="Python Logo"  /></li>
        <li><img className="program-image" src={JavaLogo} alt="Java Logo"  /></li>
        <li><img className="program-image" src={CLogo} alt="C Logo"  /></li>
        <li><img className="program-image" src={CSharpLogo} alt="C# Logo"  /></li>
      </ul>
      <h2>Frameworks/Libraries</h2>
      <ul>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>jQuery</li>
        <li>React.js</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Database</h2>
      <ul>
        <li>SQLite</li>
        <li>MySQL</li>
        <li>MariaDB</li>
        <li>MongoDB</li>
      </ul>
    </div>
  )
}

export default Programming