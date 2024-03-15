
import Banner from "../banner/Banner";
import Categories from "./categories.js"

const Home=()=>{
    return(
        <>
            <Banner/>
            <div className="row">
                <div className="col-sm-3" style={{textAlign: "center"}}>
                    <Categories/>  
                </div>
                <div className="col-sm-7"></div>
                <div className="col-sm-2"></div>
            </div>
             
        </>
    )
}

export default Home;