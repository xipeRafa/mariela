import "./servicios.css";
import { useState } from "react";
import Tecnicas from '../tecnicas/Tecnicas'
import img2 from "../../imgs/rc3.png";

export default function Servicios() {


  const[boolState, setBoolState]=useState(true)






  return (<>

  {boolState ?
    <p className="servicios1">
            2017 a 2024 Profesional independiente.<br />
Licenciada en ciencias de la comunicación y maestra en administración de recursos humanos<br />
 tengo más de 15 años de experiencia como maestra en Universidad<br /><br />

  6 años como empresaria ofreciendo servicios para los centros de trabajo<br />
   en capacitación y seguridad e higiene para dar cumplimiento a las normas oficiales,<br />
    principalmente para centros de trabajo en generación de energía eléctrica.

      <p className={boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Mas..</p>
    </p>




    :




     <p className="servicios1">
            2017 a 2024 Profesional independiente.<br />
Licenciada en ciencias de la comunicación y maestra en administración de recursos humanos<br />
 tengo más de 15 años de experiencia como maestra en Universidad<br /><br />

  6 años como empresaria ofreciendo servicios para los centros de trabajo<br />
   en capacitación y seguridad e higiene para dar cumplimiento a las normas oficiales,<br />
    principalmente para centros de trabajo en generación de energía eléctrica.<br /><br />

Servicios que ofrecemos:<br />
 Gestión de servicios de medición para estudios y proyectos empresariales de seguridad, energía y medio ambiente.<br />
Capacitación de competencias laborales.<br />
Formación y Certificación de instructores de capacitación en empresas<br />
 públicas y privadas en varios Estados de la República Mexicana.<br /><br />

2020 a 2022 Docente en el Tecnológico Nacional de México. Instituto Tecnológico de Hermosillo. <br /><br />
2012 a 2017 Coordinadora de la Entidad de Certificación y Evaluación<br /> de la Universidad Tecnológica de Ciudad Juárez 
en la Dirección de Vinculación.<br /><br />

2011 a 2012 Docente en la Universidad Tecnológica de Ciudad Juárez en las carreras de ingenierías.<br /><br />
2010 a 2012 Docente en el Instituto Tecnológico de Ciudad Juárez.<br /><br />
2008 a 2010 Docente en el Tecnológico Nacional de México. Instituto Tecnológico de Hermosillo.<br />
      <p className={!boolState ? 'leerMas':'d-none'} onClick={()=>setBoolState(!boolState)}>Leer Menos..</p>
    </p>}

<hr />

      <Tecnicas />

      <div className="sombra">
        <img src={img2} />
      </div>

  </>);
}
