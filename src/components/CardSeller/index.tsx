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
const CardSeller = ({name,state,city}:User, {ovos,mel,verduras,legumes,frutas}:Category) => {

    return(

        <>
        <div className="flip-card">  
                 <div  className="flip-card-inner">
                    <div className="flip-card-front">
                        <h1>{name = "Yasmin"}</h1>
                        <img className='imgProdutor'src='https://creazilla-store.fra1.digitaloceanspaces.com/emojis/52524/man-farmer-emoji-clipart-xl.png' alt=''/>
                        <div className='frente'>
                          <p className='estadoCidade'>{state = 'Sp'}</p>
                          <p className='estadoCidade'>{city = 'Mococa'}</p>
                        </div>
                   </div> 
                    <div className="flip-card-back">
                           <ul>
                               <li className='li-flip'>{ovos = 'Ovos'}</li>
                               <li className='li-flip'>{mel = 'Mel'}</li>
                               <li className='li-flip'>{verduras = 'Verduras'}</li>
                               <li className='li-flip'>{legumes = 'Legumes'}</li>
                               <li className='li-flip'>{frutas = 'Maçã'}</li>
                               <li className='li-flip'>{frutas = 'Banana'}</li>
                          </ul>
                    </div>
                </div> 
            </div>
        </>
         
    )
}

export default CardSeller