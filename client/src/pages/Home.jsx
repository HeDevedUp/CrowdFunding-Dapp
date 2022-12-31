import React,{useEffect, useState} from "react";
import {DisplayCampaigns} from '../components'
import { useStateContext} from '../context';

const  Home = ()  => {
    const [campaign, setCampaign] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    const { address,contract,getCampaigns } = useStateContext();

    const fetchCampaigns = async () =>{
        setIsLoading(true)
        const data = getCampaigns();
        setCampaign(data);
        setIsLoading(false);
    }

    useEffect(() => {
          if(contract) fetchCampaigns();
    },[address, contract])

    console.log(campaign)

return(
    <>
    <DisplayCampaigns
     title='All Campaigns'
     isloading={isloading}
     campaign={campaign}
    />
    </>
)
}
export default Home;
