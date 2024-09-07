import './tecnicas.css'
import { useState } from "react";
// import img1 from './1.png'
// import img2 from './2.png'
// import img3 from './3.png'
// import img4 from './4.png'



export default function Tecnicas() {


  const[displayState, setDisplayState]=useState('1')
  const[displayState2, setDisplayState2]=useState('5')

  return (<>
    <div className='inicioContainer'>
        <div className='titulo'>
            <h4>Servicios Empresariales</h4>
            <h2>Mariela Ramírez</h2>
        </div>


        <div className='buttonsContainer'>
            <button className={displayState === '1' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('1')}>Project Management</button>
            <button className={displayState === '2' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('2')}>Educational Consulting </button>
            <button className={displayState === '3' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('3')}> Business Consulting</button>
            <button className={displayState === '4' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState('4')}>Executive Coaching</button>

        </div>


{/*//-pulverizadores - espolvoreadores -termonebulizacion*/}
        <div className={displayState !== '1' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>      
                        Project Management<br />
                        texto.....Project Management
                    </h3>
            </div>                    
        </div>




        <div className={displayState !== '2' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        Educational Consulting <br /> 
                        texto....Educational Consulting 
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState !== '3' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                     Business Consulting<br />
                     texto... Business Consulting
                  </h3>
                 

            </div> 
        </div>


        <div className={displayState !== '4' ? 'd-none' : 'displayX'}>         
            <div>
                
                  <h3>
                      Executive Coaching<br />
                      texto.....Executive Coaching
                  </h3>
                 

            </div> 
        </div>




    </div>




















     <div className='inicioContainer'>

      {/*  <div className='titulo'>
            <h4>REAL CONTROL</h4>
            <h2>TECNICAS DE FUMIGACIÓN</h2>
        </div>*/}


        <div className='buttonsContainer'>
            <button className={displayState2 === '5' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('5')}>Leadership</button>
            <button className={displayState2 === '6' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('6')}>Development</button>
            <button className={displayState2 === '7' ? 'bg-dark' : 'bg-ligth'} onClick={()=>setDisplayState2('7')}>Coaching</button>

        </div>


        <div className={displayState2 !== '5' ? 'd-none' : 'displayX'}>
                  
            <div>
                    <h3>           
                      Leadership<br />
                      texto....Leadership
                    </h3>
            </div>                    
        </div>




        <div className={displayState2 !== '6' ? 'd-none' : 'displayX'}>
            
            <div>
                   
                  <h3>
                        Development<br />
                        texto.....Development
                  </h3>
                  
            </div> 
        </div>


        <div className={displayState2 !== '7' ? 'd-none' : 'displayX'}>
         
            <div>
                  
                  <h3>
                    Career Development Coaching<br />
                        texto....Career Development Coaching
                  </h3>
                 

            </div> 
        </div>


   

    </div>
  </>)

  
}

  