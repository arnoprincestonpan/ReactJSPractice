import React from 'react'
import Table from "react-bootstrap/Table"
import movie1 from "../images/movie1.jpeg"
import tomhanks from "../images/tomhanks.jpeg"
import timallen from "../images/timallen.jpeg"
import jimvarney from "../images/jimvarney.jpeg"
import wallaceshawn from "../images/wallaceshawn.jpeg"
import johnratzenberger from "../images/johnratzenberger.jpeg"
import anniepotts from "../images/anniepotts.jpeg"
import johnmorris from "../images/johnmorris.jpeg"
import johnlasseter from "../images/johnlasseter.jpeg"
import bonniearnold from "../images/bonniearnold.jpeg"
import ralphguggenheim from "../images/ralphguggenheim.jpeg"
import Layout from './Layout'

function FavouriteMovies() {
    const myMovieThumbnail = {
         border: "1px solid black",
         height: "300px",
         width: "400px",
    }

    const myActorThumbnail = {
        border: "1px solid grey",
        height: "100px",
        width: "100px",
    }

    const staffContainer = {
        padding: "1px",
        display: "flex",
        flexDirection: "row"
    }

    const staffDescription = {
        display: "flex",
        flexDirection: "column",
        marginLeft: "5px",
    }

    const castToyStory = [
        {id: 1, role: "actor", character: "Woody", staff: "Tom Hanks", image: tomhanks, link: "https://www.imdb.com/name/nm0000158/?ref_=tt_cl_t1"},
        {id: 2, role: "actor", character: "Buzz", staff: "Tim Allen", image: timallen, link: "https://www.imdb.com/name/nm0000741/?ref_=tt_cl_t2"},
        {id: 3, role: "actor", character: "Slinky Dog", staff: "Jim Varney", image: jimvarney, link: "https://www.imdb.com/name/nm0001815/?ref_=tt_cl_t4"},
        {id: 4, role: "actor", character: "Rex", staff: "Wallace Shawn", image: wallaceshawn, link: "https://www.imdb.com/name/nm0001728/?ref_=tt_cl_t5"},
        {id: 5, role: "actor", character: "Hamm", staff: "John Ratzenberger", image: johnratzenberger, link: "https://www.imdb.com/name/nm0001652/?ref_=tt_cl_t6"},
        {id: 6, role: "actor", character: "Bo Peep", staff: "Annie Potts", image: anniepotts, link: "https://www.imdb.com/name/nm0001633/?ref_=tt_cl_t7"},
        {id: 7, role: "actor", character: "Andy", staff: "John Morries", image: johnmorris, link: "https://www.imdb.com/name/nm0606658/?ref_=tt_cl_t8"},
        {id: 8, role: "director", character: "As Himself", staff: "John Lasseter", image: johnlasseter, link: "https://www.imdb.com/name/nm0005124/"},
        {id: 9, role: "producer", character: "As Herself", staff: "Bonnie Arnold", image: bonniearnold, link: "https://www.imdb.com/name/nm0036366/?ref_=fn_al_nm_1"},
        {id: 10, role: "producer", character: "As Himself", staff: "Raplh Guggenheim", image: ralphguggenheim, link: "https://www.imdb.com/name/nm0346558/?ref_=fn_al_nm_1"},
    ]

    const relatedLinks = [
        {id: 1, description: "Official Website", website: "Disney", link: "https://toystory.disney.com"},
        {id: 2, description: "Press Review", website: "Rotten Tomatoes", link: "https://www.rottentomatoes.com/m/toy_story"},
        {id: 3, description: "Purchase DVD", website: "Amazon CA", link: "https://www.amazon.ca/s?k=Toy+Story+DVD&crid=35KE1RX5EERVY&sprefix=toy+story+dvd%2Caps%2C162&ref=nb_sb_noss_1"},
    ]

    const castToyStoryItems = castToyStory.map((cast) =>
        <div style={staffContainer}>
            <img style={myActorThumbnail} src={cast.image}    />
            <div style={staffDescription}>
                <h5 key={cast.id}>{cast.character} ({cast.role}): {cast.staff}</h5>
                <p>More information: <a href={cast.link}>Click Here</a></p>
            </div>
        </div>
    )

    const relatedLinkItems = relatedLinks.map((links) => 
        <tr key={links.id}>
            <td>{links.id}</td>
            <td>{links.description}</td>
            <td><a href={links.link}>{links.website}</a></td>
        </tr>
    )

  return (
    <div>
        <h1>Favourite Movies</h1>
        <img style={myMovieThumbnail} src={movie1} alt="toy story"    />
        <h3>Toy Story</h3>
        <p>
            Woody, Andy's favorite cowboy toy, lives happily in Andy's room with other toys. 
            One day, Andy brings back a new toy, Buzz Lightyear. Andy spends more time with Buzz and becomes popular with the other toys as well. 
            Andy, fuelled by jealous, plots to get rid of Buzz. But due to a series of events, 
            Woody and Buzz become best of friends and learn to put aside their differences.
        </p>
        <h4>Cast</h4>
        {castToyStoryItems}
        <Table>
            <thead>
                <tr>
                    <th colSpan={3}>Related Websites</th>
                </tr>
            </thead>
            <tbody>
                {relatedLinkItems}
            </tbody>
        </Table>
        <Layout />
    </div>
  )
}

export default FavouriteMovies