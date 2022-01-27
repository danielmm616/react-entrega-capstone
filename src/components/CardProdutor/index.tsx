import  './styles.css'

  interface User {
    name: string;
    state: string;
    city: string;
  }

  interface Category {
      ovos: string;
      mel: string;
      verduras:string;
      legumes:string;
      frutas:string;
  }
const CardProdutor = ({name,state,city}:User, {ovos,mel,verduras,legumes,frutas}:Category) => {

    return(

        <>
        <div className="flip-card">  
                 <div  className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{name = "Yasmin"}</h1>
                        <img src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52524/man-farmer-emoji-clipart-xl.png' alt=''/>
                        <div className='frente'>
                          <p>{state = 'Sp'}</p>
                          <p>{city = 'Mococa'}</p>
                        </div>
                   </div> 
                    <div className="flip-card-back">
                           <ul>
                               <li>{ovos = 'Ovos'}</li>
                               <li>{mel = 'Mel'}</li>
                               <li>{verduras = 'Verduras'}</li>
                               <li>{legumes = 'Legumes'}</li>
                               <li>{frutas = 'Maçã'}</li>
                               <li>{frutas = 'Banana'}</li>
                          </ul>
                    </div>
                </div> 
            </div>
        </>
         
    )
}

export default CardProdutor