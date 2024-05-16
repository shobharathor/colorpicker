import './Card.css'

function Card(props){
    return(
        <div className = 'color-card'>
            <div className = 'color' style = {{
                backgroundColor : props.hexCode
            }}></div>

            <div className= 'details'>
                <p className='code' onClick={(e)=>{
                    props.onClick(e);
                }}>{props.hexCode}
                </p>

                <p className='names' style={{
                    color:props.hexCode
                }}>
                    {props.name}
                </p>
            </div>
        </div>
    )
}

export default Card;