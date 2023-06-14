import React from 'react'
import './Video.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Marquee from "react-fast-marquee";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const data = [
    "https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/inner-5.jpg",
    "http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/inner1.jpg",
    "http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/inner2.jpg"
]

const Video = () => {
    return (
        <div className="Video_Container">
            <div className="Vid">
                <h4>Short Video Tutorial</h4>
                <h1>Video will help you to learn much better!</h1>
                <h3 className="Purchase_btn">One Click Demo Install</h3>
            </div>
            <div className="Two">
                <div className="video_img">
                    <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/video.png" alt="" />
                </div>
                <div className="video_content">
                    <h4>All Demos</h4>
                    <h1>18 Stunning Demos</h1>
                    <div className='All_Category'>
                        <div>
                            <span className="All">All</span>
                            <span>Insurance</span>
                            <span>Agency</span>
                            <span>App</span>
                            <span>Marketing</span>
                            <span>Payment</span>
                        </div>
                        <br />
                        <br />
                        <div>
                            <span>Crypto</span>
                            <span>Saas</span>
                            <span>NFT</span>
                            <span>RTL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Third">
                <div className="Cards">
                    <div className="NEW">NEW</div>
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/it-home-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/itv2-front.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>IT Solution</span>
                        <p>IT Solution</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div >
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/05/back-end-demo.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/05/it-home.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>IT Solutions</span>
                        <p>IT Solutions Two</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="NEW">NEW</div>
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/saas-insiode.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/saac-hm.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Saas</span>
                        <p>Saas Startup</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/demo-2nd.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/demo-fin-1st.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Fintech</span>
                        <p>Fintech</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="NEW">NEW</div>
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/digital-payment-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/digital-payment.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Finance App</span>
                        <p>Digital Payment</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/back-demo.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/front-demo.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Help Desk</span>
                        <p>IT Solution Helpdesk</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="NEW">NEW</div>
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/live-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/demo-live-front.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Live Chat</span>
                        <p>Live Chat</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/insruance-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/06/insurancesd-front.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Insurance</span>
                        <p>Insurance</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/nft-inside.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/nft-main.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>NFT</span>
                        <p>NFT Landing</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                        <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/online-2nd.jpg" alt="" />
                        <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/online-1st.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Payment</span>
                        <p>Online Payment</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/mrk-2.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/mk1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Marketing</span>
                        <p>Digital Marketing</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/dgi-ag-2.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/dgi-ag-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Agency</span>
                        <p>Digital Agency</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/crypto-2.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/crybto-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Crypto</span>
                        <p>Crypto Currency</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/seo-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/seo-front.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Seo Demo</span>
                        <p>Sro Agency</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/dgi-new-2back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/dginew-front.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Agency</span>
                        <p>Startup Agency</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/app-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/app-fton.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>App Store</span>
                        <p>App Store</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/shopfi-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/shopfyfi.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>Shopify</span>
                        <p>Shopify</p>
                    </div>
                </div>

                <div className="Cards">
                    <div className="dot_style">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="card">
                        <div>
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/05/rtl-back.jpg" alt="" />
                            <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/05/rtl-main.jpg" alt="" />
                        </div>
                    </div>
                    <div className="Text">
                        <span>RTL Demo</span>
                        <p>Ximsa</p>
                    </div>
                </div>

            </div>
            <div className="Four">
                <div className="Media">
                    <ul>
                        <li data-aos="fade-up">
                            <div className="animate__animated animate__bounce bounce">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/f-icon7.png" alt="" />
                            </div>
                            <span> One Click <br /> Install </span>
                        </li >
                        <li data-aos="fade-up">
                            <div className="animate__animated animate__bounce bounce">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/f-icon8.png" alt="" />
                            </div>
                            <span> No Coding <br /> required </span>
                        </li>
                        <li data-aos="fade-up">
                            <div className="animate__animated animate__bounce bounce">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/f-icon9.png" alt="" />
                            </div>
                            <span>Easy To <br /> customize </span>
                        </li>
                        <li data-aos="fade-up">
                            <div className="animate__animated animate__bounce bounce">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/f-icon10.png" alt="" />
                            </div>
                            <span> Regular <br /> Update</span>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <div className="Five">
        <div className="carasouselOne">
                <h4>Inner Pages</h4>
                <h2>Essential Inner <br />
                & Blog pages</h2>
            <Carousel className='carasousel' autoPlay={true} animation='slide' fullHeightHover={true} indicators={false} navButtonsAlwaysVisible={true} cycleNavigation={true} navButtonsProps={{style
            :{backgroundColor:"#fff",color:"#494949",borderRadius:"50%",height:"50px",width:"50px",marginTop:"30px"}}}>
                {
                    data.map((imag,i)=>{
                        return(
                            <div key={i} style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"5px"}}>
                                <img src={imag} alt="" className='banner_img' />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
        </div>
            <div className="Six">
                <div className="ThemeF">
                    <h4>Theme Feature</h4>
                    <h1>Buy Avarton & enjoy some <br /> exclusive features</h1>
                </div>
                <div className="TF">
                    <div>
                        <ul>
                            <li data-aos="fade-up">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ft1.png" alt="" />
                                <span> Slider Revolution </span>
                            </li>
                            <li className="Elementor" data-aos="fade-up">
                                <img src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/ezgif-1-0e2c31b68c.png" alt="" />
                                <span> Elementor Header <br /> Footer Builder </span>
                            </li>
                            <li data-aos="fade-up">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ft3.png" alt="" />
                                <span> Elementor Page <br />   Builder </span>
                            </li>
                            <li data-aos="fade-up">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ft4.png" alt="" />
                                <span> Woocommerce <br /> Ready </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li data-aos="fade-up" >
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ft8.png" alt="" />
                                <span> Support WPML  <br /> multilingua </span>
                            </li>
                            <li data-aos="fade-up" className="ResOne">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/download.png" alt="" />
                                <span> Support Jetpack </span>
                            </li>
                            <li data-aos="fade-up" className="ResOne">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/documents.png" alt="" />
                                <span> Video <br /> Documentation </span>
                            </li>
                            <li data-aos="fade-up">
                                <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ft11.png" alt="" />
                                <span> Unlimited Colors  <br /> Option </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Seven">
                <div>
                    <h2>Fast Loading Speed <br /> Optimized for Your Website.</h2>
                    <h4>Avarton is optimized to be fast & highly performant by having a good <br /> structure and well-written code.</h4>
                </div>
                {/* <div className="Circle3">
                        <span>  
                            <svg className="progress-bar" width={radius * 2} height={radius * 2}>
                            <circle
                                className="progress-bar__background"
                                cx={radius}
                                cy={radius}
                                r={radius}
                            />
                            
                            <circle
                                className="progress-bar__progress"
                                cx={radius}
                                cy={radius}
                                r={radius}
                                style={{ strokeDashoffset: progressOffset }}
                            />
                            </svg>
                        </span>
                        <span>
                            <svg className="progress-bar" width={radius * 2} height={radius * 2}>
                            <circle
                                className="progress-bar__background"
                                cx={radius}
                                cy={radius}
                                r={radius}
                            />
                            <circle
                                className="progress-bar__progress"
                                cx={radius}
                                cy={radius}
                                r={radius}
                                style={{ strokeDashoffset: progressOffset }}
                            />
                        </svg>
                        </span>
                        <span>
                        <svg className="progress-bar" width={radius * 2} height={radius * 2}>
                            <circle
                                className="progress-bar__background"
                                cx={radius}
                                cy={radius}
                                r={radius}
                            />
                            <circle
                                className="progress-bar__progress"
                                cx={radius}
                                cy={radius}
                                r={radius}
                                style={{ strokeDashoffset: progressOffset }}
                            />
                        </svg>
                    </span>
                </div> */}
            </div>
            <div className="Eight">
                <div className="Laptop" data-aos="fade-up"  data-aos-delay="700">
                    <img data-aos="fade-right" data-aos-delay="1100" src="http://themexriver.com/ximsa-demo/wp-content/uploads/2022/04/mokup.png" alt="" />
                </div>
                <div className="UltimateS">
                    <h4>Woocommerce Ready</h4>
                    <h2>Ultimate <br /> Shopping!</h2>
                    <h6>WooCommerce Ready theme. We provide <br /> all the tools you need to start selling online.</h6>
                    <ul>
                        <li>
                            <div>
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/wo1.png" alt="" />
                            </div>
                            <span>Shop</span>
                        </li>
                        <li>
                            <div>
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/wo2.png" alt="" />
                            </div>
                            <span>Shopping  Cart</span>
                        </li>
                        <li>
                            <div>
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/wo3.png" alt="" />
                            </div>
                            <span>Check Out</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Nine">
                <div className="Reviews">
                    <h4>Testimonials</h4>
                    <h1>18k+ Clients Reviews</h1>
                </div>
                <div className="SliderOne">
                    <Marquee >
                        <div className="ReactFastMarquee">
                        <div className="MarqueeC" style={{marginLeft:"20px"}}>
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">Nice theme, it has a good design, good theme builder and great support.</div>
                                <div className="Author"> <strong>jesse-envato-2000 - </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">"Excellent Support, Best Quality theme, Thank you very much. ”</div>
                                <div className="Author">
                                    <strong>NCBDS -  </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">
                                " This is a very versatile WordPress theme. Many features combined with Elementor and solid support. ”                  
                                </div>
                                <div className="Author">
                                    <strong>andrahernest - </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">very Good support, He Helped me with everything and answer all my questions ))</div>
                                <div className="Author">
                                    <strong>Mt_Rezk - </strong><span>Authore</span></div>
                            </div>
                        </div>
                        </div>
                    </Marquee>
                </div>
                <div className="SliderTwo">
                <Marquee direction='right'>
                        <div className="ReactFastMarquee">
                        <div className="MarqueeC" style={{marginLeft:"20px"}}>
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">This is the best template to create landing page! I am enjoying so much....5 stars!!!</div>
                                <div className="Author"> <strong> evan79  - </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">Customer support was amazing. Thanks again, Team!</div>
                                <div className="Author">
                                    <strong>onosblessed1 -  </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">
                                Great experience with Themexriver Highly Recommended.                                             
                                </div>
                                <div className="Author">
                                    <strong>Arianalex - </strong><span>Authore</span></div>
                            </div>
                        </div>
                        <div className="MarqueeC">
                            <div className="SectionA">
                            <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/ev.png" alt="" />
                            </div>
                            <div className="SectionB">
                                <div className="stars">★&nbsp;★&nbsp;★&nbsp;★&nbsp;★&nbsp;</div>
                                <div className="Comments">
    
    This is such a well-designed theme. it is also very easy to customize, and support has been responsive.</div>
                                <div className="Author">
                                    <strong>randalljswain - </strong><span>Authore</span></div>
                            </div>
                        </div>

                        </div>
                    </Marquee>
                </div>
            </div>
            <div className="Ten">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/sp1.png" alt="" />
                        <h2>How Can We Help You?</h2>
                        <h4>Open a ticket for Support</h4>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/sp2.png" alt="" />
                        <h2>Detailed Documentation</h2>
                        <h4>Online Documentation</h4>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="100">
                        <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/sp3.png" alt="" />
                        <h2>Looking for customization?</h2>
                        <h4>Describe Your Project</h4>
                    </li>
                </ul>
            </div>
            <div className="Eleven">
                <div className="DownloadX">
                    <img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/author.png" alt="" />
                    <h2>Download Ximsa <br /> WordPress Now!</h2>
                </div>
                <div className="BuyOnly">
                    <h3>A single license includes free lifetime updates!</h3>
                    <a href="/"><img src="https://themexriver.com/appilo-theme/wp-content/uploads/2022/03/en2.png" alt="" /><span>Buy Only For $29</span></a>
                </div>
            </div>
            <div className="Twele">
            <div className="MainFooter">
                <ul>
                    <li>Designed with <i class="fas fa-heart" style={{color:"red"}}></i> by Sourabh Pote </li>
                    <li>
                        <span>
                            <i aria-hidden="true" class="fab fa-facebook-f"></i>
                        </span>
                        <span>
                        <i class="fa-brands fa-twitter"></i>
                        </span>
                        <span>
                        <i aria-hidden="true" class="fab fa-instagram"></i>
                        </span>
                    </li>
                    <li style={{marginRight:"10px"}}>
                    © 2022 Ximsa All rights reserved
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Video
