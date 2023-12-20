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
import syndiCation from './syndication.png';
function App() {
  const [showHallway, setShowHallway] = useState(true);
  const [showOffice, setShowOffice] = useState(true);
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
        <Parallax pages={14} style={{top: '0', left:'0'}} class="animation">
          <ParallaxLayer offset={0} speed={0}>
            <div class='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${officeImage})`, backgroundSize: 'cover', animation: showOffice ? 'zoomOut 4s ease-out forwards' : 'none', }}>
            <nav>
              <img src={'https://res.cloudinary.com/luxuryp/images/w_1920,c_limit,f_auto,q_auto/tprhoiglqzbp9mbu8x8s/jhsereno-light'} alt="Logo" style={{ height: '30px' }} />
              <ul>
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
            <img src={tablE} alt="" style={{
              width: '40%',
              height: '50%',
              position: 'fixed',
              bottom: '100px',
              left: '150px',
              animation: coucH ? 'zoomOutCouch 4s ease-out forwards' : 'none',
            }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.8}>
          <img src={coucH} alt="" style={{
              width: '50%',
              height: '60%',
              position: 'fixed',
              bottom: '50px',
              right: '10px',
              animation: coucH ? 'zoomOutCouch 4s ease-out forwards' : 'none',
            }}
              />
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0}>
            {showHallway && (<div class='animation_layer parallax' style={{ height: '100vh', backgroundImage: `url(${hallWay})`, backgroundSize: 'cover', animation: 'zoomIn 4s ease-out forwards', }}>

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
              style={{
                maxWidth: '100%', // Ensure the image doesn't exceed its container
                height: 'auto', // Maintain aspect ratio
                width: '15vw', // Using viewport width units for responsive width
                position: 'fixed',
                bottom: '10vw', // Using viewport width units for responsive positioning
                left: '6vw', // Using viewport width units for responsive positioning
              }}
            />
            <p id='paragraph' style={{
                        fontSize: '1.5vw',
                        position: 'fixed',
                        bottom: '70px',
                        left: '120px',
            }}>
              Our site adapts to any device desktops, tablets, or phones so you <br/> can explore effortlessly. Enjoy a seamless experience wherever you are.
            </p>

          </div>  
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.3}>
          <div className='container'>
            <img
              src={syndiCation}
              alt=""
              style={{
                maxWidth: '100%', // Ensure the image doesn't exceed its container
                height: 'auto', // Maintain aspect ratio
                width: '15vw', // Using viewport width units for responsive width
                position: 'fixed',
                bottom: '1vw', // Using viewport width units for responsive positioning
                right: '6vw', // Using viewport width units for responsive positioning
              }}
            />
            <p id='paragraph' style={{
                        fontSize: '1.5vw',
                        position: 'fixed',
                        bottom: '23vw',
                        right: '120px',
            }}>
              I strategically syndicate your property's marketing across local, national,  <br/> and global networks, ensuring comprehensive exposure across diverse audiences.
            </p>
          </div> 
          </ParallaxLayer>


          <ParallaxLayer offset={2} speed={0}>
            <h1 id='marketingPlan'>More Services</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.3}>
          <div className='container'>
                      <img
                        src={virTual}
                        alt=""
                        style={{
                          maxWidth: '100%', // Ensure the image doesn't exceed its container
                          height: 'auto', // Maintain aspect ratio
                          width: '15vw', // Using viewport width units for responsive width
                          position: 'fixed',
                          bottom: '1vw', // Using viewport width units for responsive positioning
                          right: '6vw', // Using viewport width units for responsive positioning
                        }}
                      />
                      <p id='paragraph' style={{
                                  fontSize: '1.5vw',
                                  position: 'fixed',
                                  bottom: '23vw',
                                  right: '120px',
                      }}>
                        I strategically syndicate your property's marketing across local, national,  <br/> and global networks, ensuring comprehensive exposure across diverse audiences.
                      </p>
          </div> 
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.8}>
          <div className='container'>
            <img
              src={photoGraphy}
              alt=""
              style={{
                maxWidth: '100%', // Ensure the image doesn't exceed its container
                height: 'auto', // Maintain aspect ratio
                width: '15vw', // Using viewport width units for responsive width
                position: 'fixed',
                bottom: '10vw', // Using viewport width units for responsive positioning
                left: '6vw', // Using viewport width units for responsive positioning
              }}
            />
            <p id='paragraph' style={{
                        fontSize: '1.5vw',
                        position: 'fixed',
                        bottom: '70px',
                        left: '120px',
            }}>
              Our site adapts to any device desktops, tablets, or phones so you <br/> can explore effortlessly. Enjoy a seamless experience wherever you are.
            </p>

          </div> 
          </ParallaxLayer>
          








          <ParallaxLayer offset={3} speed={0}>
            
            <div class='animation_layer parallax' style={{ width: '100%', height: '100vh', backgroundImage: `url(${experTise})`, backgroundSize: 'cover', }}>
              <h1 id='experTise'>My Staging Expertise</h1>
            </div>
          </ParallaxLayer>

        

          <ParallaxLayer offset={4} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={5} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>

          
          
          <ParallaxLayer offset={6} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={7} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={8} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={9} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={10} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={11} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={12} speed={0}>
            <h1 id='marketingPlan'>The Buying Process</h1>
          </ParallaxLayer>


          <ParallaxLayer offset={13} speed={0}>
            <h1 id='marketingPlan'>Footer</h1>
          </ParallaxLayer>




        </Parallax>
      </div>
    </>
  );
}

export default App;
