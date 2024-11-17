import './Profile.css'

import { Navitem, PrimaryButton, SecondaryButton, SectionHeader } from '../../components'

import prof from '../../assets/images/prof.jpg'
import YourPopularData from '../../Data/YourPopularData'
import YourPopular from '../../components/Container/YourPopular/YourPopular'

const Profile = () => {

    const cards = YourPopularData.map(card =>{
      return <YourPopular key={card.id} image={card.image} numclip={card.numclip} />
    })

  return (
    <>
      <div className='prof'>
        <div className='info-prof'>
          <img src={prof}/>
          <div className='prof-text'>
            <PrimaryButton>Offline</PrimaryButton>
            <h3>Abdulsalam</h3>
            <p>You Haven't Gone Live yet, Go Now and have fun</p>
            <SecondaryButton>Start Live Stream</SecondaryButton>
          </div>
          <div className='informations'>
            <ul>
              <Navitem><h3>Games Downloaded</h3> <em>3</em></Navitem>
              <Navitem><h3>Friends Online</h3> <em>1</em></Navitem>
              <Navitem><h3>Live Stream</h3> <em>None</em></Navitem>
              <Navitem><h3>Clips</h3> <em>20</em></Navitem>
            </ul>
          </div>
        </div>
        <div className='your-most-popular'>
          <SectionHeader><div className='main-text'>Your Most Popular Clips</div></SectionHeader>
          
            <ul>
              <div className='most-popular-items'>
                  {cards}
              </div>
            </ul>
            
            <PrimaryButton>Load More Clips</PrimaryButton>
            

        </div>
      </div>
    </>
  )
}

export default Profile