import { GamingLibraryCard, SectionHeader, SectionWrapper } from "../../components/index.js";
import './GamingLibrary.css'

import GamingLibraryData from '../../Data/GamingLibraryData.js';

const GamingLibrary=() => {
  const cards = GamingLibraryData.map(card =>{
    return <GamingLibraryCard key={card.id} img={card.image} name_game={card.name_game} category={card.category} date_added={card.date_added} hours_played={card.hours_played} download={card.downloaded}/>
  })

  return (
    <SectionWrapper>
        <SectionHeader>GamingLibrary</SectionHeader>
        <div className="gaming-library-cards">
          {cards}
        </div>
    </SectionWrapper>
  )
}

export default GamingLibrary