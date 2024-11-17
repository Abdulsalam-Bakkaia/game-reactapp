import './MostPopularItem.css'



const MostPopularItem =(props) => {
  return (
    <div className='most-popular-item'>
        <div className='card-wrapper'>
                        <img className='most-popular-item-image' src={props.img} />
                        <div className='most-popular-item-content'>
                            <div className='most-popular-item-title'>
                                <h4>
                                    {props.name_game} <br />
                                    <span>{props.category}</span>
                                </h4>
                            </div>
                            <ul>
                                <li><span>{props.rate}</span></li>
                                <li><span>{props.download}</span></li>
                            </ul>
                        </div>
        </div>    
    </div>
  )
}

export default MostPopularItem;