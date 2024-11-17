import './MostPopular.css'
import {MostPopularItem, SectionHeader, SectionWrapper} from '../../components/index.js';

import MostPopularData from '../../Data/MostPopularData.js';

const MostPopular = () => {
  const cards = MostPopularData.map(card =>{
    return <MostPopularItem key={card.id} img={card.image} name_game={card.name_game} category={card.category} rate={card.rate} download={card.download}/>
  })

  return (
    <>
        <SectionWrapper>
            <SectionHeader >MostPopular</SectionHeader>
            <div className='most-popular-items'>
                {cards}
            </div>
        </SectionWrapper>
    </>
  )
}

export default MostPopular;