import './Container.css'

function Container(props) {
  return (
    <div className='container main-container'>
      {props.children}
    </div>
  )
}

export default Container