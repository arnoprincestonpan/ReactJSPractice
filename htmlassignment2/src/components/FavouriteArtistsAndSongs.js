import React from 'react'
import Table from "react-bootstrap/Table"
import michaelJackson from "../images/michaelJackson.jpeg"
import toto from "../images/toto.jpg"
import cafeJazz from "../images/cafeJazz.jpeg"
import avengedSevenfold from "../images/avengedSevenfold.jpeg"
import bfmv from "../images/bfmv.jpeg"
import breakingBenjamin from "../images/breakingBenjamin.jpeg"
import Layout from './Layout'

function FavouriteArtistsAndSongs() {
  const myArtistThumbnail = {
    border: "1px solid grey",
    height: "250px",
    width: "250px",
}

  return (
    <>
        <h1>Favorite Aritst & Songs</h1>
        <p>Throughout my life, I have experimented with different types of genres and styles of influence and the ones that stuck were pop, rock, metal and cafe jazz.</p>
        <h2 id="pop">Pop</h2>
        <img style={myArtistThumbnail} src={michaelJackson}  />
        <h3><a href="https://www.youtube.com/channel/UC5OrDvL9DscpcAstz7JnQGA">Michael Jackson</a></h3>
        <p>MJ's music will forever be embedded in the pop world. Jazz being his strongest influence. 
          And his singing and hip-pop will forever be remembered as the basis of popular music. 
          Learn more about Michael Jackson <a href="https://en.wikipedia.org/wiki/Michael_Jackson">here</a>.
        </p>
        <ol>
          <li>You Are Not Alone</li>
          <li>Slave to the Rhythm</li>
          <li>Blue Gangsta</li>
          <li>A Place with No Name</li>
          <li>Loving You</li>
          <li>The Way You Make Me Feel</li>
          <li>Love Never Felt So Good</li>
          <li>Rock with You</li>
          <li>Don't Stop 'til You Get Enough</li>
          <li>Smooth Criminal</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Top Singles (BillBoard Hits)</th>
              <th>Album</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Say Say Say (1983)</td>
              <td>Pipes of Peace</td>
              <td>1(6 Weeks)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Billie Jean (1983)</td>
              <td>Thriller</td>
              <td>1(7 Weeks)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>I'll Be There (1970)</td>
              <td>3rd Album</td>
              <td>1(3 Weeks)</td>
            </tr>
            <tr>
              <td colSpan={4}>Source: <a href="https://www.billboard.com/lists/michael-jackson-top-songs-billboard-hot-100/">BillBoard</a></td>
            </tr>
          </tbody>
        </Table>

        <h2 id="rock">Rock</h2>
        <img style={myArtistThumbnail} src={toto}  />
        <h3><a href="https://www.youtube.com/channel/UCo0VtmTVw5B1nMlzOX8KW1A/featured">TOTO</a></h3>
        <p>Fun fact. Did you know TOTO was named after "toto" the dog from Wizard of Oz? Learn more about the band <a href="https://en.wikipedia.org/wiki/Toto_(band)">here</a>.
        </p>
        <ol>
          <li>Africa</li>
          <li>Hold The Line</li>
          <li>Rosanna</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Top Singles (BillBoard Hits)</th>
              <th>Album</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>I'll Be Over You (1986)</td>
              <td>Farenheit</td>
              <td>11 (23 Weeks)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Rosanna (1982)</td>
              <td>Toto IV</td>
              <td>2 (23 Weeks)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hold The Line (1979)</td>
              <td>Toto</td>
              <td>5 (21 Weeks)</td>
            </tr>
            <tr>
              <td colSpan={4}>Source: <a href="https://www.billboard.com/music/toto">BillBoard</a></td>
            </tr>
          </tbody>
        </Table>

        <h2 id="cafejazz">Cafe Jazz</h2>
        <img style={myArtistThumbnail} src={cafeJazz}  />
        <h3>Various Artists</h3>
        <p>When I just want to sit there and not do anything important. Cafe Jazz (Swing/Big Band) is the choice.</p>
        <ol>
          <li><a href="https://www.youtube.com/watch?v=b5G8gyZVUTM">Sidney Bechet - Si Tu Vois Ma Mere</a></li>
          <li><a href="https://www.youtube.com/watch?v=wLjG8L4nnh4">Django Reinhardt - All of Me</a></li>
          <li><a href="https://www.youtube.com/watch?v=4uTcw_A80Bo">Peggy Lee - Why Don't You Do Right</a></li>
        </ol>

        <h2 id="metal">Metal</h2>
        <img src={avengedSevenfold}  />
        <h3><a href="https://www.youtube.com/user/avengedsevenfold">Avenged Sevenfold</a></h3>
        <p>
          Started out as a group of friends playing hard rock music eventually became a metal band starting from the late 90s. Learn more about the band <a href="https://en.wikipedia.org/wiki/Avenged_Sevenfold">here</a>.
        </p>
        <ol>
          <li>Bat Country</li>
          <li>Afterlife</li>
          <li>Beast and The Harlot</li>
          <li>Nightmare</li>
          <li>A Little Piece of Heaven</li>
          <li>Almost Easy</li>
          <li>Shepherd of Fire</li>
          <li>Hail to the King</li>
          <li>So Far Away</li>
          <li>Unholy Confessions</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Top Singles (BillBoard Hits)</th>
              <th>Album</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bat Country (2006)</td>
              <td>City of Evil</td>
              <td>60 (15 Weeks)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nightmare (2010)</td>
              <td>Nightmare</td>
              <td>51 (3 Weeks)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hail to The King (2013)</td>
              <td>Hail to The King</td>
              <td>83 (3 Weeks)</td>
            </tr>
            <tr>
              <td colSpan={4}>Source: <a href="https://www.billboard.com/artist/avenged-sevenfold/">BillBoard</a></td>
            </tr>
          </tbody>
        </Table>

        <br />
        <img style={myArtistThumbnail} src={bfmv}  />
        <h3><a href="https://www.youtube.com/user/bullettv">Avenged Sevenfold</a></h3>
        <p>
        BFMV started out as another band called Jeff Killed John, when the original members were studying music in college. They started with mostly Metallica and Nirvana, but eventually released their own songs. Learn more about BFMV <a href="https://en.wikipedia.org/wiki/Bullet_for_My_Valentine">here</a>.
        </p>
        <ol>
          <li>Your Betrayal</li>
          <li>Waking the Demon</li>
          <li>Tears Don't Fall</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Top Singles (BillBoard Hits)</th>
              <th>Album</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>The Poison (2006)</td>
              <td>The Poison</td>
              <td>128 (28 Weeks)</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Fever (2010)</td>
              <td>Fever</td>
              <td>3 (19 Weeks)</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Scream Aim Fire (2008)</td>
              <td>Scream Aim Fire</td>
              <td>4 (17 Weeks)</td>
            </tr>
            <tr>
              <td colSpan={4}>Source: <a href="https://www.billboard.com/pro/billboard-1-gospel-hits-album-chart/">BillBoard</a></td>
            </tr>
          </tbody>
        </Table>

        <br />
        <img style={myArtistThumbnail} src={breakingBenjamin}  />
        <h3><a href="https://www.youtube.com/user/BreakingBenjaminVEVO">Breaking Benjamin</a></h3>
        <p>
        Breaking Benjamin started out as a "soft rock" band, influenced by Weezer and the Beatles. Completely different from their most popular songs. Though they still release softer songs here and there. Learn more about Breaking Benjamin         <a href="https://en.wikipedia.org/wiki/Breaking_Benjamin">here</a>.
        </p>
        <ol>
          <li>Diary of Jane</li>
          <li>Breath</li>
          <li>So Cold</li>
        </ol>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Top Singles (BillBoard Hits)</th>
              <th>Album</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Iris (2020)</td>
              <td>Iris</td>
              <td>8 (1 Week)</td>
            </tr>
            <tr>
              <td colSpan={4}>Source: <a href="https://www.billboard.com/artist/breaking-benjamin/">BillBoard</a></td>
            </tr>
          </tbody>
        </Table>
        <Layout />
        <h4>
          Page Navigation
        </h4>
        <ul>
          <li><a href="#pop">Top of Pop</a></li>
          <li><a href="#rock">Top of Rock</a></li>
          <li><a href="#cafejazz">Top of Cafe Jazz</a></li>
          <li><a href="#metal">Top of Metal</a></li>
        </ul>
    </>
  )
}

export default FavouriteArtistsAndSongs