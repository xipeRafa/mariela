import './header.css'
import img2 from "../../imgs/rc3.png";
import img3 from "../../imgs/11.jpg";
import Banner from '../banner/Banner'

import NL from '../../imgs/nl.png'

export default function Header() {


    return ( <> 

    <header>
       <div className="nl-c">
          <img className='nl' src={NL} />
        </div>

        <span>Tenemos como Objetivo Principal la Seguridad de sus Trabajadores,<br /> 
            ya que lo más Importante para las Empresas es el Recurso Humano.</span>

<hr />
<br />
<br />
        <div className="sombra">
            <img src={img2} />
        </div>
<br />

  {/* <div className="sombra">
            <img src={img3} />
        </div>
        {/*<Banner />*/}


               <p>Gestión de servicios Empresariales Monitoreo, Estudios, Proyectos</p>
        <p>Capacitación para Empresas en la República Mexicana</p>

        <p>Para dar cumplimiento a las Normas Oficiales Mexicanas
        en los Centros de Trabajo en Seguridad, Energía y Medio.</p>


    </header>

      </>)
  }


