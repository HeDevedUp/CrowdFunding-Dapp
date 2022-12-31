import React,{useEffect, useState} from "react";
import {DisplayCampaigns} from '../components'
import { useStateContext} from '../context';

const  Home = ()  => {
    const [campaigns, setCampaign] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    const { address, contract, getCampaigns } = useStateContext();

    const fetchCampaigns = async () =>{
        setIsLoading(true)
        const data = await getCampaigns();
        setCampaign(data);
        setIsLoading(false);
    }

    useEffect(() => {
          if(contract) fetchCampaigns();
    },[address, contract])


return(
    <>
    <DisplayCampaigns
     title='All Campaigns'
     isloading={isloading}
            campaigns={campaigns}
    />
    </>
)
}
export default Home;
