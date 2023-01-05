import React from 'react'
import "./Profile.scss"
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    console.log('location', location);

    const data = location?.state?.val

    return (
        <div className='profile_section'>
            <div className='profile_header'>
                <p>Profile</p>

                <div className='profile_div'>
                    <img src={require("../assest/profile.jpg")} alt="profile" />
                    <p>{data?.username}</p>
                </div>
            </div>

            <div className='profile_content_div'>

                <div className='profile_details_left'>

                    <div className='profile_details'>
                        <img src={require("../assest/profile.jpg")} alt="profile" />
                        <p className='user_name'>Leanne Graham</p>
                    </div>

                    <div className='profile_content'>
                        <span>Username : </span>
                        <p>{data?.username}</p>
                    </div>

                    <div className='profile_content'>
                        <span>email : </span>
                        <p>{data?.email}</p>
                    </div>

                    <div className='profile_content'>
                        <span>Phone : </span>
                        <p>{data?.phone}</p>
                    </div>

                    <div className='profile_content'>
                        <span>Website : </span>
                        <p>{data?.website}</p>
                    </div>

                    <p className='Company'>Company</p>

                    <div className='profile_content'>
                        <span>Name : </span>
                        <p>{data?.company?.name}</p>
                    </div>

                    <div className='profile_content'>
                        <span>catchphrase : </span>
                        <p>{data?.company?.catchPhrase}</p>
                    </div>


                    <div className='profile_content'>
                        <span>bs : </span>
                        <p>{data?.company?.bs}</p>
                    </div>
                </div>

                <div className='profile_details_right'>
                    <div className=''>
                        <p className='Company address'>Address :</p>


                        <div className='profile_content'>
                            <span>Street : </span>
                            <p>{data?.address?.street}</p>
                        </div>

                        <div className='profile_content'>
                            <span>Suite : </span>
                            <p>{data?.address?.suite}</p>
                        </div>

                        <div className='profile_content'>
                            <span>City : </span>
                            <p>{data?.address?.city}</p>
                        </div>

                        <div className='profile_content'>
                            <span>Zipcode : </span>
                            <p>{data?.address?.zipcode}</p>
                        </div>
                    </div>


                    {/* <div>
            <iframe src=
            "https://www.google.com/maps/@21.2295876,72.8690651,14.25z"
                    width="400"
                    height="300"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0">
            </iframe>
        </div> */}

                </div>



            </div>
        </div>
    )
}

export default Profile