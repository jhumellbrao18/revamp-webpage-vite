import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useState, useEffect } from 'react';
import officeImage from './office.png';
import hallWay from './hallwayCenterr.png';
import coucH from './couch.png';
import tablE from './table.png';
import responSive from './responsive.png';
import virTual from './virtual.png';
import photoGraphy from './photography.png';
import experTise from './expertise.png';
import experTise3D from './expertise3D.png';
import year33 from './33y.png';
import intenTional from './layout.png';
import sellingProcess from './sellingProcess.png';
import buyingProcess from './buyingProcess.png';
import summaRy from './summary.png';
import hanSen from './hansen.png';
import leaDing from './leading.png';
import lioN from './lion.png';
import luxuRy from './luxury.png';
import partnerShip from './partnership.png';
import syndiCation from './syndication.png';
import workWithUs from './workWithUs.png';
import builDing1 from './building.png';
import builDing2 from './building2.png';
import builDing3 from './building3.png';
import charT from './chart.png';
import chartBoard from './chartBoard.png';
import worlD from './world.png';
import footerBg from './footerBg.png';
function App() {
  const [showHallway, setShowHallway] = useState(true);
  const [showOffice, setShowOffice] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const delay = setTimeout(() => {
      setShowHallway(false);
    }, 4200);

    const officeDelay = setTimeout(() => {
      setShowOffice(false);
    }, 5000);

    return () => {
      if (showHallway) {
        clearTimeout(delay);
      }
      if (showOffice) {
        clearTimeout(officeDelay);
      }
    };
  }, [showHallway]);

  return (
    <>
      <div>
        <Parallax pages={14} style={{ top: '0', left: '0' }} className="animation">
          
          <ParallaxLayer offset={0} speed={0}>
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${officeImage})`, backgroundSize: 'cover', animation: showOffice ? 'zoomOut 4s ease-out forwards' : 'none', }}>
            <nav className="responsive-nav">
                <img src={'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light'} alt="Logo" style={{ height: '30px' }} />
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                <li>MEET THE TEAM</li>
                <li>SEARCH FOR HOMES</li>
                <li>OUR COMMUNITIES</li>
                <li>HOME VALUATION</li>
                <li>SERVICES</li>
                <li>HOMES ACROSS AMERICA</li>
                <li>TESTIMONIALS</li>
                <li>CONTACT US</li>
              </ul>
            </nav>
              
            <h1 id='serVices'>Services</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <img
              src={tablE}
              alt=""
              className="parallax-img1"
            />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0} speed={0.8}>
            <img
              src={coucH}
              alt=""
              className="parallax-img2"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0}>
            {showHallway && (<div className='animation_layer parallax' style={{ height: '100vh', backgroundImage: `url(${hallWay})`, backgroundSize: 'cover', animation: 'zoomIn 4s ease-out forwards', }}>

            </div>)}
          </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0}>
        <div className='container'>
              <h1 id='marketingPlan'>Comprehensive Marketing Plan</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div className='container'>
            <img
              src={responSive}
              alt=""
              className="responsive-img1"
            />
            <p id='paragraph1'>
              Our site adapts to any device desktops, tablets, or phones so you <br/> can explore effortlessly. Enjoy a seamless experience wherever you are.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <div className='container'>
            <img
              src={syndiCation}
              alt=""
              className="responsive-img2"
            />
            <p id='paragraph2'>
              I strategically syndicate your property's marketing across local, national,  <br/> and global networks, ensuring comprehensive exposure across diverse audiences.
            </p>
          </div>
        </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0}>
            <h1 id='marketingPlan'>More Services</h1>
          </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.8}>
          <div className='container'>
            <img
              src={virTual}
              alt=""
              className="responsive-img3"
            />
            <p id='paragraph3'>
              Let's make your home stand out with a <br/>high quality virtual tour.
            </p>
          </div>
          </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8}>
          <div className='container'>
            <img
              src={photoGraphy}
              alt=""
              className="responsive-img4"
            />
            <p id='paragraph4'>
              Beatiful, high-end photography is a central part of our<br/> marketing plan for your property.
            </p>
          </div>
        </ParallaxLayer>

          
          <ParallaxLayer offset={3} speed={0.2}>  
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${experTise})`, backgroundSize: 'cover', }}>
              <h1 id='experTise'>My Staging Expertise</h1>
            <ul id='expertiseBullet'>
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
            </div>

          </ParallaxLayer>
        

          <ParallaxLayer offset={4} speed={0.2}>
            
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${intenTional})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
              <h1 id='layOut'>Intentional layout</h1>
              <ul id='layoutBullet'>
              <li>Unclutter and organize your home</li>
              <li>Neatly arrange drawers and cabinets</li>
              <li>Keep pets outdoors or off the premises</li>
              <li>Play soft music</li>
            </ul>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={5} speed={0.1}>
            
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${sellingProcess})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
              <h1 id='sellingProcess'>The Selling Process</h1>
              <ul id='processBullet'>
              <li>INITIAL CONSULTATION & PLANNING</li>
              <li>DEVISE & EXECUTE MARKETING PLAN</li>
              <li>REVIEW OFFERS & REACH AGREEMENT WITH BUYER</li>
              <li>COMPLETE TRANSACTION PROCESS</li>
              <li>AFTER - SALE SERVICE</li>
            </ul>
            </div>
          </ParallaxLayer>

          
          
          <ParallaxLayer offset={6} speed={0}>
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${buyingProcess})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', }}>
              <h1 id='buyingProcess'>The Buying Process</h1>
              <ul id='buyingBullet'>
              <li>INITIAL CONSULTATION & PLANNING</li>
              <li>SEARCH FOR A HOME & GET PRE-APPROVED</li>
              <li>SUBMIT AN OFFER</li>
              <li>COMPLETE SETTLEMENT PROCESS</li>
            </ul>
            </div>
          </ParallaxLayer>


          <ParallaxLayer offset={7} speed={0}>
            <h1 id='realEstate'>Over 33 Years of Real Estate Success</h1>
            <p id='realEstateParagraph' style={{
            }}>
            We provide every one of our clients with a level of service they won’t find anywhere else. <br/> We give them what they need, often before they know they need it. ​​​​​​​In real estate, almost <br/>  everything can be negotiated. When you choose Hansen Partners It is experience is 100% <br/> nonnegotiable. ​​​​​​​ ​​​​​​​And it’s an experience like no other.
            </p>
          </ParallaxLayer>

          <ParallaxLayer offset={7} speed={0.3}>
            <img
              className='builDing3'
              src={builDing3}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={7} speed={0.8}>
            <img
              className='builDing2'
              src={builDing2}
              alt=""

            />
          </ParallaxLayer>
          <ParallaxLayer offset={7} speed={0.5}>
            <img
              className='builDing1'
              src={builDing1}
              alt=""

            />
          </ParallaxLayer>
          <ParallaxLayer offset={7} speed={0.2}>
            <img
              className='year33'
              src={year33}
              alt=""
            />
          </ParallaxLayer>          
          <ParallaxLayer offset={8} speed={0}>
            <h1 id='realEstate2'>We Want To Create An Unforgettable Experience For You...</h1>
            <p id='realEstateParagraph2' style={{
            }}>
            We combine data gained from your home’s Comparative Market Analysis with local market research to create a marketing plan<br/> designed to help you meet your selling goals. Your home’s carefully designed plan will include a range of online, print, and other <br/>marketing tools targeted to the best-qualified pool of buyers. ​​​​​​​ Successfully marketing a home in today’s real estate <br/> environment requires a firm with experience and flexibility. Hansen Partners provides both.
            </p>
          </ParallaxLayer>
            <ParallaxLayer offset={8} speed={0.8}>
            <img
              className='chartBoard'
              src={chartBoard}
              alt=""

            />
          </ParallaxLayer>
            <ParallaxLayer offset={8} speed={0.5}>
              <img
              className='charT'
              src={charT}
              alt=""

            />
          </ParallaxLayer>
          <ParallaxLayer offset={8} speed={0.2}>
            <img
              className='summaRy'
              src={summaRy}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer offset={9} speed={0}>
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${hanSen})`, backgroundSize: 'cover', }}>
              <h1 id='tabLet'>The Hansen Partners Communications Tablet</h1>
              <p id='tabletParagraph' style={{}}>
                We have created this as a wonderful tool so that we can communicate with you daily, provide <br />you with updates on what is happening with your home. We are available at the with a click of your tablet.
              </p>   
              <br />
              <p id='tabletParagraph'>Benefits:</p>
              
              <p id='tabletParagraph'>
              1. Review all documents and sign in the comfort of your home or anywhere.<br />
              2. Stay up to date on all marketing activities, review materials, photos, etc. in real time.<br />
              3. Meet with us face to face on our Gotomeeting.com platform to go over and discuss the events of the week.<br />
              4.You have your own email assigned just for you and your common space to quickly write a note, or quickly send a video message to us<br /> for fast communication using our Bomb bomb video messaging system.
              </p>

              <br />
              <p id='tabletParagraph' style={{}}>

                We believe that transparency and guiding you and your family through the process is key to having the best experience. <br />  During these uncertain times. It is a good feeling to know you have some one with a proven track record you can count on. <br /> We will be here to handle your needs during the Real Estate process.  We think of it before a need even arises. <br />Because, that is just what we do.  Who you work with does matter! 
              </p>
            </div>

          </ParallaxLayer>

          <ParallaxLayer offset={10} speed={0}>
            <h1 id='worlD'>We Market Your Home to The World</h1>
          </ParallaxLayer>

            <ParallaxLayer offset={10} speed={0.8}>
            <img
              className='worlDimg'
              src={worlD}
              alt=""

            />
          </ParallaxLayer>
          <ParallaxLayer offset={10} speed={0}>
            
            <p id='worldParagraph' style={{}}>
              <h2>Our Online Marketing Strategy</h2>
              The Bay Area remains one of the world's most sought-after regions to live in, <br />and when looking to sell, it is vital that your home be marketed online to audiences locally,<br /> nationally, and internationally.
            </p>
          </ParallaxLayer>

          <ParallaxLayer  offset={10} speed={0}>
            <p id='worldParagraph1' style={{}}>
              <h2>Local Exposure</h2>
                Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all <br /> Bay Area neighborhoods, we make sure your home receives targeted local exposure.            </p>
          </ParallaxLayer>

          <ParallaxLayer  offset={10} speed={0}>
            <p id='worldParagraph2' style={{}}>
              <h2>National Exposure</h2>
                Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all <br /> Bay Area neighborhoods, we make sure your home receives targeted local exposure.            </p>
          </ParallaxLayer>

          <ParallaxLayer  offset={10} speed={0}>
            <p id='worldParagraph3' style={{}}>
              <h2>International Exposure</h2>
                Through our partnership with Nextdoor, the private online social network now used in over 80% of U.S. neighborhoods and virtually all <br /> Bay Area neighborhoods, we make sure your home receives targeted local exposure.            </p>
          </ParallaxLayer>


          <ParallaxLayer offset={11} speed={0}>
            <div className='animation_layer parallax' style={{ width: '100%', height: '170vh', backgroundImage: `url(${partnerShip})`, backgroundSize: 'cover', }}>
              <h1 id='paRtners'>Our Partners in Luxury</h1>
            </div>
            
          </ParallaxLayer>

          <ParallaxLayer offset={11} speed={0}>
            <img
              className='leaDing'
              src={leaDing}
              alt=""
              style={{
                maxWidth: '100%', 
                height: 'auto', 
                width: '15vw', 
                position: 'fixed',
                bottom: '23vw', 
                left: '15vw', 
              }}
            />
          </ParallaxLayer>         

          <ParallaxLayer offset={11} speed={0}>
            <img
              className='luxuRy'
              src={luxuRy}
              alt=""
              style={{
                maxWidth: '100%', 
                height: 'auto',
                width: '15vw', 
                position: 'fixed',
                bottom: '25vw', 
                left: '43vw', 
              }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={11} speed={0}>
            <img
              className='lioN'
              src={lioN}
              alt=""
              style={{
                maxWidth: '100%',
                height: 'auto', 
                width: '15vw', 
                position: 'fixed',
                bottom: '26vw',
                left: '69vw', 
              }}
            />
          </ParallaxLayer>
          <ParallaxLayer  offset={11} speed={0}>
            <p id='paRtnersParagraph' style={{}}>
              <h2>Leading Real Estate Companies of The World® & Luxury Portfolio International</h2>
              JRockcliff is a founding member of Luxury Portfolio International®, the luxury division of Leading Real Estate Companies of the World®. <br />
              With more than 500 member firms around the world, Our luxury listings are exposed to a vast global audience and reach potential buyers <br /> and
              investors in over 50 countries.

              <br />

              <h2>Who's Who in Luxury Real Estate</h2>
              <h4>Who’s Who in Luxury Real Estate is a global collection of luxury real estate brokers.</h4>
              Through our international affiliations, we have a strong presence in over 50 countries. Our luxury listings are sent to prominent international real <br /> estate sites,
              reaching over 70 million potential buyers and investors worldwide through our relationships with:
            </p>
          </ParallaxLayer>

            <ParallaxLayer offset={12} speed={0}>
            
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${workWithUs})`, backgroundSize: 'cover', }}>

                  <h1 id='workHeader'>Work With Us</h1>
                  <p id="workParagraph">With decades of experience in luxurious Tri Valley real estate, our team is here <br /> to ensure that your dreams are a reality. Let us guide you through your home <br /> buying journey, contact us today!</p>

            </div>
            
          </ParallaxLayer>
          
          <ParallaxLayer offset={13} speed={0}>
            <div className='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', animation: showOffice ? 'zoomOut 4s ease-out forwards' : 'none', }}>
            <h1 id='footerBottom'>Julie Hansen Partnership</h1>
            <p id="footerParagraph">An elite group of the East Bay’s most talented and visionary real estate professionals believed <br />buyers and sellers deserved more from their real estate company. More service. <br /> More resources. More integrity. More global reach. In a word, more of <br /> everything people should expect when they buy or sell their homes.</p>

            </div>


          </ParallaxLayer>

          <ParallaxLayer  offset={13} speed={0}>
            <p id='footerParagraph2' style={{}}>
            <h2>ADDRESS</h2>
              4733 Chabot Drive #100 <br />
                Pleasanton, CA 94588 <br />
​​​​​​                ​<br /> ​Julie Hansen-Orvis | CA DRE# 00934447</p>
          </ParallaxLayer>

          <ParallaxLayer  offset={13} speed={0}>
            <p id='footerParagraph3' style={{}}>
            <h2>CONTACT INFORMATION</h2>
              (925) 980-4925 <br />
                hansenpartners.re@gmail.com <br /></p>
          </ParallaxLayer>


          <ParallaxLayer  offset={13} speed={0}>
            <p id='footerParagraph4' style={{}}>
            <h2>newLetter</h2>
              Subscribe to our Newsletter for latest news and updates. Stay tuned!
              <input type="text" /> <br />
              <button>Subscribe</button>
            </p>
            
          </ParallaxLayer>






        </Parallax>
      </div>
    </>
  );
}

export default App;
