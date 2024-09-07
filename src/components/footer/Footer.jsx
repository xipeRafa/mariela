import './footer.css'


import img111 from "../../imgs/1.png";

export default function Footer() {


	  return (



            <footer>


             <div className="img111">
            <img src={img111} />
        </div>
              <div>    
				CONTACTO:<br />
				Mariela Ramirez Robles <span>📱 +52 1 662 295 5204</span><br />
				<hr />
				marsegestion2@gmail.com<br />

				<a href="https://www.linkedin.com/in/m-a-mariela-ramírez-robles-847430173/" target='_blank'>
						linkedin
				</a>
				   <hr />
          {/*      Horario: <br />
                Lunes a Viernes de 8 am a 8 pm <br />
                Sabados de 8 am a 4 pm
				 <br />
				<hr />
				DIRECCION: <br />
				Calle 5 DE MAYO #32 <br />
				Hermosillo, Sonora <br />
				Entre No Reelección e Independencia<br />
				Col. Villa de Seris<br />*/}
     </div>  

            </footer>
	  	)
}
