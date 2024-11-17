import './Fortnight.css'

import fort1 from '../../assets/images/Fortnight.jpg'
import fort2 from '../../assets/images/fortnight-log.jpg'
import MostPopularData from '../../Data/MostPopularData'
import { MostPopularItem, SecondaryButton } from '../../components/index'
import FortnightData from '../../Data/FortnightData'
import Fortnightdet from '../../components/Fortnightdet/Fortnightdet'



const Fortnight = () => {
    const cards = MostPopularData.map(card =>{
        return <MostPopularItem key={card.id} name_game={card.name_game} category={card.category} rate={card.rate} download={card.download}/>
      })

    const imgs= FortnightData.map(im =>{
        return <Fortnightdet key={im.id} image={im.image} />;
    })
  return (
    <>
        <div className='fort-images'>
            <img src={fort1}/>
            <img src={fort2}/>
        </div>

        <div className='fort-Details'>
            <h1>Fortnight Details</h1>
            <div className='details-rate'>
                {cards[0]}
            </div>
            <div className='det-imgs'>
                {imgs}
            </div>
            <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a small contribution via PayPal to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
            <SecondaryButton>Download Fortnite Now!</SecondaryButton>
        </div>
    </>
  )
}

export default Fortnight