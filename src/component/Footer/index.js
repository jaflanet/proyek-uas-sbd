import React from 'react'
import tulisanKecil from '../../assets/FooterAsset/FINDMATES.png'
import instaLogo from '../../assets/FooterAsset/insta.png'
import twitterLogo from '../../assets/FooterAsset/twitter.png'
import twitchLogo from '../../assets/FooterAsset/twitch.png'
import './index.css'

const Footer = () => {
    return (
        <div className="main-footer">
                <div className="row">
                    {/*column 1*/}
                    <div className="col1">
                        <p>All Rights Reserved</p>
                    </div>
                    {/*column 2 */}
                    <div className="colpisah">
                    </div>
                    <div className="col2">
                        <a href="https://instagram.com/omarmoch13/">
                            <img className="insta" src={instaLogo} alt="insta"/>
                        </a>
                    </div>
                    <div className="col2">
                        <a href="https://twitter.com/javgrandpa">
                            <img className="twitter" src={twitterLogo} alt="twitter"/>
                        </a>
                    </div>
                    <div className="col2">
                        <a href="https://www.twitch.tv/kyedae_">
                            <img className="twitch" src={twitchLogo} alt="twitch"/>
                        </a>
                    </div>
                    <div className="colpisah">
                    </div>
                    {/*column 3 */}
                    <div className="col3">
                        <button className="btn-aboutus">
                        <img className="tulisan-kecil" src={tulisanKecil} alt="tulisankecil"/>
                        </button>
                    </div>
                </div>
        </div>
    )
}
export default Footer
