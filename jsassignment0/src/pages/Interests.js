import React from 'react'
import ExposedFilm from '../images/pexels-annushka-ahuja-exposed-film.jpg'
import OlympusCamera from '../images/pexels-pixabay-olympus.jpg'
import Lens from "../images/pexels-cody-king-lens.jpg"
import TzuPeng from '../images/rakuten-monkeys-tzu-peng-pitch.jpg'
import HungWen from '../images/rakuten-monkeys-hung-wen-chen.jpg'
import Rakuten from '../images/rakuten-monkeys-weekend-2020-cpbl-stats.jpg'
import Ram from '../images/pexels-sergei-starostin-memory-ram.jpg'
import Cpu from '../images/pexels-dave-morgan-cpu-fan-red.jpg'
import Hdd from "../images/pexels-pixabay-hdd.jpg"


function Interests() {
  return (
    <div className="Interests">
      <h1>Interests</h1>
      <h2>Analog & Digital Photography</h2>
      <div className="interesting-photos">
        <img src={ExposedFilm} alt="Overexposed Ruined Film" />
        <img src={OlympusCamera} alt="Olympus Digital Camera OM-D"/>
        <img src={Lens} alt = "Holding Lens Up"/>
      </div>
      <p>I grew up in an era where consumers transitioned from film cameras to digital cameras. So, I have always
        been curious about what things used to be like. I find the analog portion kind of nostalgic. As film tends to
        behave in a way that is hard to control. I have taken 35mm film photos and developed them myself and scanned them.
        It is a long and expensive process but it is fun. But analog got too expensive, so I switched to digital cameras,
        and started investing in the Micro 4/3rds System in Olympus. I love taking photos when I visit certain locations
        once in a while. And the fun part is looking at the colours of the photos on the monitors.
      </p>
      <h2>Technology (Hardware)</h2>
      <div className="interesting-photos">
        <img src={Hdd} alt="Hard Drive" />
        <img src={Ram} alt="Stick Ram"/>
        <img src={Cpu} alt = "Cpu Cooler"/>
      </div>
      <p>Advertisements always got me curious of new technologies, like the MP3 players, PC Hardware and etc. But never
        got the chance to purchase any until college. Where I bought used parts from Craigslist and put together a PC. It
        was the first time I put something together by myself with the help of YouTube videos. Other than computers, I was
        into getting the latest cellphone every couple of years. I wouldn't get the top model but a mid-tier range where it
        fits my budget. I follow YouTube Channels that showcase the latest electronics and technologies on my spare time.
      </p>
      <h2>Chinese Professional Baseball League <i>CPBL</i> (Taiwan, R.O.C.)</h2>
      <div className="interesting-photos">
        <img src={TzuPeng} alt="Pitcher Tzu Peng Main" />
        <img src={HungWen} alt="Pitcher Hung Wen 2023"/>
        <img src={Rakuten} alt = "Rakuten Weekend Uniform"/>
      </div>
      <p>Though I grew up in Vancouver, BC. I do have family in Taiwan that enjoy watching baseball. In fact, my mom's
        cousin was a professional baseball player in the team <i>"China Times Eagles"</i> in the 1990s. My dad and one of my counsins are
        the most influencial people to me that got me liking CPBL. It is not as a well known league internationally as Taiwan
        is an debated isolated territory/country. But in the World Baseball Classic <i>"WBC"</i> and other international baseball games,
        <i>"Chinese Taipei"</i>, the name Taiwan participate as, is ranked top 3 <i>(as of Jan 2023)</i> with Canada right behind. Taiwanese
        players are currently playing leagues other than CPBL such as in the MLB, MiLB, NPB, KBO, ABL, and etc.
      </p>
    </div>
  )
}

export default Interests