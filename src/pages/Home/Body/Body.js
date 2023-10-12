import "./Body.css"
import information from "./BodyData";
function Body(){
    return(
        <div>
            <div className="home-body-div">
                <div className="home-body-text-div body-text-background1">
                    <h2>{information[0].heading}</h2>
                    <p>{information[0].text}</p>
                </div>
                <div>
                    <img src={information[0].image} alt="not found" />
                </div>
            </div>
            <div className="home-body-div">
                <div>
                    <img src={information[0].image} alt="not found" className="body-text-background2" />
                </div>
                <div className="home-body-text-div body-text-background2">
                    <h2>{information[0].heading}</h2>
                    <p>{information[0].text}</p>
                </div>
            </div>
        </div>
    )
}

export default Body;