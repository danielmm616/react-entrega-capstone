import CardSeller from "../../components/CardSeller"

import { useAuth } from "../../Providers/AuthContext"

const Seller = () => {


    const { user } = useAuth()

    return(
        <>
        <h2>Vendedores</h2>

        <CardSeller  
            name={user.name}
            state={user.state}
            city={user.city}
            />
        </>
    )
}

export default Seller