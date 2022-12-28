import React from 'react'
import travel from "../images/travel.jpg"
import australia from "../images/australia.jpg"
import cambodia from "../images/cambodia.jpg"
import japan from "../images/japan.jpg"
import southkorea from "../images/southkorea.jpg"
import taiwan from "../images/taiwan.jpg"
import usa from "../images/usa.jpg"
import Social from './Social'

function HomePage() {

    const countriesVisited = [
        {
            id: 1, country: "Australia", wonder: "Sydney Opera", image: australia, link: "https://www.australia.com/en-us",
            description: "When I was living in Taiwan, Australia was a lot closer. My family took us to Sydney, Australia and we visited the Sydney Opera."
        },
        {
            id: 2, country: "Cambodia", wonder: "Angkor Wat", image: cambodia, link: "https://www.tourismcambodia.com",
            description: "I never thought, I would go to Cambodia ever, but my family thought it would be a good retreat a couple of years ago, so we went."
        },
        {
            id: 3, country: "Japan", wonder: "Tokyo Tower", image: japan, link: "https://www.jnto.go.jp",
            description: "I have been to Japan many times, but never went up Tokyo Tower until my last trip. It was quite nice. Breezy."
        },
        {
            id: 4, country: "South Korea", wonder: "Seoul Sungnyemun Gate", image: southkorea, link: "http://english.visitkorea.or.kr/enu/index.kto",
            description: "My cousins and my family, had a nice trip to S. Korea many years ago. Seoul was quite an advanced city."
        },
        {
            id: 5, country: "Taiwan (R.O.C.)", wonder: "Taipei 101", image: taiwan, link: "https://eng.taiwan.net.tw",
            description: "My family is from Taiwan, also known officially as the Republic of China. It is a great place, probably one of the most high tech countries out there in Asia."
        },
        {
            id: 6, country: "United States of America", wonder: "Los Angeles Freeway", image: usa, link: "http://www.visittheusa.ca",
            description: "The US is so close, but I only go to L.A., the highway spans for miles it is insane, because it all looks the same."
        },
    ]

    const countriesVisitedItems = countriesVisited.map((country) =>
        <div key={country.id}>
            <figure>
                <img src={country.image} alt={country.country}/>
                <figcaption>Fig. {country.id} - {country.wonder}</figcaption>
            </figure>
            <p><a href={country.link}>{country.country}</a> - {country.description}</p>
        </div>
    )

    return (
        <div>
            <h1>Home Page | Arno Princeston Pan</h1>
            <p>My brief Biography, interests, and etc; below.</p>
            <h2>About Me</h2>
            <p>My first name, "Arno" is actually an abbreviation of the name Arnold. The name comes from a Germanic root and it means Eagle. There are plenty of derivatives to the name, such as "Arnauld"(French), "Arnie"(English), "Arne"(German), "Aart" (Dutch), "Arnaldo"(Italian) and if you would like to see more alternatives checked out the website, <a href="https://www.behindthename.com/name/arnold">Behind the Name</a></p>
            <h2>Biography</h2>
            <p>A little about me, but not enough for stealing my identity.</p>
            <h2>Ambitions</h2>
            <p>I want to change myself quite a bit. I think I have been focusing on my previous job for too long I forgot to focus on myself. I want to reinvent myself, start a new career and create good habits to staying healthy and happy. I think what type of job I choose next will have a heavy impact as most people spend more than 8 hours a day to make a living. Other than that, I want to utilize my time properly and maximize my schedule as much as possible. Hopefully, I'll walk out of this pandemic as someone new and better.</p>
            <h2>Photography</h2>
            <p>I love taking photos when I get the chance. I don't usually go out, but when I do. I like taking photos of objects that stand out. I do my best to make my photos interesting and I post them on Instagram. However; my Instagram account is now private. So to see some of my photos, Twitter would be the best choice. There was a time that I was into film photography. Film has this grain look to its photos, due to the chemical compounds on the film itself. The mystery of how photos turn out is what I like about it. I hardly do film anymore because it's costly so I stick with my digital camera (Olympus OM-D EM10 MK II) and my cellphone.</p>
            <img src={travel} />
            <h2>Countries Visited</h2>
            {countriesVisitedItems}
            <h2>Languages Spoken</h2>
            <p>My main langauge spoken is English. I do speak other langauges such as:</p>
            <ul>
                <li>Mandarin</li>
                <li>Taiwanese Hokkien</li>
            </ul>
            <p>I can also get around with:</p>
            <ul>
                <li>Japanese</li>
                <li>Korean</li>
            </ul>
            <h2>Video Games</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Rank
                        </th>
                        <th>
                            Favorite Games
                        </th>
                        <th>
                            Platform
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            Valheim
                        </td>
                        <td>
                            PC
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            Taiko no Tatsujin
                        </td>
                        <td>
                            XBOX One & Series X|S, PS4
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3
                        </td>
                        <td>
                            Tetris
                        </td>
                        <td>
                            XBOX One & Series X|S
                        </td>
                    </tr>
                    <tr>
                        <td>
                            4
                        </td>
                        <td>
                            Tomb Raider
                        </td>
                        <td>
                            XBOX One
                        </td>
                    </tr>
                </tbody>
            </table>
            <h2>Favorite Websites</h2>
            <table>
                <thead>
                    <tr>
                        <th>
                            Website
                        </th>
                        <th>
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            DuckDuckGO
                        </td>
                        <td>
                            Search Engine that focuses on Privacy.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Craigslist (Vancouver)
                        </td>
                        <td>
                            A community website that helps users buy and sell used items and other trades.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Liliputing
                        </td>
                        <td>
                           A website that talks about electronics.
                        </td>
                    </tr>
                </tbody>
            </table>
            <Social />
        </div>
    )
}

export default HomePage