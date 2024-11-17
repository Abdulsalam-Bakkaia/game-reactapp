import './YourPopular.css'

const YourPopular = (props) => {
  return (
    <div className='most-popular-item'>
        <div className='card-wrapper'>
                        <img className='most-popular-item-image' src={props.image}  alt=''/>
                        <h3>{props.numclip}</h3>
        </div>    
    </div>
  )
}

export default YourPopular;