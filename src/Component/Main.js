import React from 'react'
import "./Main.scss"
import Data from '../Data/uers.json'
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();


    const handleClick = (val) => {
        console.log('val', val);

        navigate("Home", { state: { val } });

    }


    return (
        <div>
            <div className='main_section'>

                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#702cc8"></stop><stop offset="95%" stop-color="#345ac2"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 69.3397129186603,318.8612440191388 138.6794258373206,337.7224880382775 241,347 C 343.3205741626794,356.2775119617225 478.62200956937795,355.9712918660287 596,329 C 713.377990430622,302.0287081339713 812.8325358851677,248.39234449760767 894,258 C 975.1674641148323,267.60765550239233 1038.047846889952,340.4593301435406 1126,358 C 1213.952153110048,375.5406698564594 1326.976076555024,337.77033492822966 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path></svg>

                <div className='main_box_div'>
                    <div className='box_title'>
                        <h1>Select an account</h1>
                    </div>

                    <div className='main_box_content'>
                        {
                            Data && Data?.users.map((val) => {
                                console.log('val', val)
                                return (
                                    <div className='box_content' onClick={() => handleClick(val)}>
                                        <img src={require("../assest/profile.jpg")} alt="profile" />
                                        <p>{val?.username}</p>
                                    </div>)
                            })
                        }

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main