import CardProdutor from "../../components/CardProdutor"

import { useAuth } from "../../Providers/AuthContext"

const Vendedor = () => {


    const { user } = useAuth()

    return(
        <>
        <h2>Vendedores</h2>

        <CardProdutor  
            name={user.name}
            state={user.state}
            city={user.city}
            />
        </>
    )
}

export default Vendedor