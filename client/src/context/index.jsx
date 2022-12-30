import { useAddress,useContract,useContractWrite,useMetamask } from '@thirdweb-dev/react'
import React,{useContext, createContext} from 'react'
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const { contract } = useContract('0x89e04E6561a2Be96b565296878A9CB9FdF17A19f');
    const {mutateAsync: createCampaign} = useContractWrite(contract, ' createCampaign');


const address = useAddress();
const connect = useMetamask();



const publishCampaign = async (form) =>{

try{
    const data = await createCampaign([
        address,
        form.title,
        form.description,
        form.target,
        new Date(form.deadline).getTime(),
    ])

    console.log("contract call sucess", data)
} catch(error){
console.log("contract call failure", error)
}
}

return(
    <StateContext.Provider
    value={{
        address,
        contract,
        connect,
        // createCampaign: publishCampaign,
    }}
    >
             {children}
    </StateContext.Provider>
)
}

export const useStateContext = () => useContext(StateContext)
