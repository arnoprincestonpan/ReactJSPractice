import React from 'react'
import JavaScriptLogo from "../images/javascript-logo.png"
import HTMLLogo from "../images/html5-logo.png"
import CSSLogo from "../images/css-logo.png"
import PythonLogo from "../images/python-logo.png"
import JavaLogo from "../images/java-logo.png"
import CLogo from "../images/icons8-c-logo.png"
import CSharpLogo from "../images/icons8-csharp-logo.png"
import ExpressLogo from "../images/express-js-logo.png"
import NodeLogo from "../images/node-js-logo.png"
import jQueryLogo from "../images/jquery-logo.png"
import ReactLogo from "../images/react-js-logo.png"
import BootstrapLogo from "../images/bootstrap-logo.png"
import PhpLogo from "../images/php-logo.png"
import SqlLiteLogo from "../images/sqllite-logo.png"
import MariadbLogo from "../images/mariadb-logo.png"
import MongodbLogo from "../images/mongodb-logo.png"
import MySqlLogo from "../images/mysql-logo.png"

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
      <div className="programming-logos">
        <img src={JavaScriptLogo} alt="javascript"  />
        <img src={HTMLLogo} alt="html"  />
        <img src={CSSLogo} alt="css"  />
        <img src={PythonLogo} alt="python"  />
        <img src={JavaLogo} alt="java"  />
        <img src={CLogo} alt="c"  />
        <img src={CSharpLogo} alt="c#"  />
      </div>
      <h2>Frameworks/Libraries</h2>
      <ul>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>jQuery</li>
        <li>React.js</li>
        <li>Bootstrap</li>
      </ul>
      <div className="programming-logos">
        <img src={ExpressLogo} alt="express js"  />
        <img src={NodeLogo} alt="node js"  />
        <img src={jQueryLogo} alt="jQuery"  />
        <img src={ReactLogo} alt="react js"  />
        <img src={BootstrapLogo} alt="bootstrap"  />
      </div>
      <h2>Database</h2>
      <ul>
        <li>PHP</li>
        <li>SQLite</li>
        <li>MySQL</li>
        <li>MariaDB</li>
        <li>MongoDB</li>
      </ul>
      <div className="programming-logos">
        <img src={PhpLogo} alt="php"  />
        <img src={SqlLiteLogo} alt="sqlite"  />
        <img src={MySqlLogo} alt="mysql"  />
        <img src={MariadbLogo} alt="mariadb"  />
        <img src={MongodbLogo} alt="mongodb"  />
      </div>
    </div>
  )
}

export default Programming