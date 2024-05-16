import './LandingScreen.css'
import Card from '../Component/Card'


function LandingScreen(){
    function click(e){
        navigator.clipboard.writeText(e.target.textContent)
    }

    const colorDetail = [
        {
            hexCode : "#000000",
            name : "Black"
        },
        {
            hexCode : "#333333",
            name : "Gray"
        },
        {
            hexCode : "#FF6663",
            name : "Pink"
        },
        {
            hexCode : "#C90B0B",
            name : "Red"
        },
        {
            hexCode : "#FF8000",
            name : "Orange"
        },
        {
            hexCode : "#FFF500",
            name : "Yellow"
        },
        {
            hexCode : "#CCCCCC",
            name : "Light Gray"
        },
        {
            hexCode : "#7E42A2",
            name : "Purple"
        },
        {
            hexCode : "#C14912",
            name : "Brown"
        },
        {
            hexCode : "#00FFFF",
            name : "Cyan"
        },
    ]

    return(
        <div id = 'container'>
            <h1>Color Picker</h1>
                <div id='color-card'>
                    {
                        colorDetail.map((elem, index) =>{
                            return(
                                <Card key = {index} hexCode = {elem.hexCode} name = {elem.name} onClick = {(e)=>{
                                    click(e);
                                }}/>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default LandingScreen;