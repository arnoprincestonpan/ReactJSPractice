# How to Create A Navbar in React with Routing

Learn how React.js speeds up page switching. 

## Purpose

To understand React Routing better.

## Coding Summary

Instead of using Switch statements that reload the entire page (causing slowdown). Using BrowserRouter the page is loaded right away and when you switch
to other pages it doesn't have to reload the entire DOM.  

BrowserRouter encompasses the entire App Component inside the Index.js. Each Route Component will have a page it references "to" and it is encompassed under Routes inside your navigation page.  

A CustomLink component is made to reflect the change of the page which is used to change the style of the page link when it is selected. Inside the parameters there is a "to" that is the path of url. And the "{children} which is used to pass the string inside the tag <>"string you typed"<>, and "...props" to collect all other props in an array to pass on. The const resolvedPath is used to take in the method useResolvedPath() to take the "to" **the url path** allows a relative/actual path and combines it with the current path. Whereas the const isActive is used to take the method useMatch() check if the path is active. It does this by taking in the resolvedPath prop from above and place it into path **"path: resolvedPath.pathname"** and making sure it matches exactly by making sure the end prop boolean is true **"end: true"**. Inside the link tag there is a className that has a ternary operator that if it is true **className="active"** otherwise it has nothing **""**. 

## Components Used

BrowserRouter
Routes
Route

Link

useMatch
useRelativePath

## Package

react-router-dom

### Version 1.0

01/08/2023

### Source

This project was created following the tutorial of Web Dev Simplified.

"How To Create A Navbar In React With Routing"

https://www.youtube.com/watch?v=SLfhMt5OUPI