import React,{useEffect, useState} from "react";
// import {DisplayCampaigns} from '../components';
// import { useStateContext} from '../context';

const  Home = ()=>{
    const [campaign, setCampaign] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    const {address,contract,getCampaign}=useStateContext()

    const fetchCampaigns = async () =>{
        setIsLoading(true)
        const data = await getCampaign();
        setCampaign(data);
        setIsLoading(false);
    }

    useEffect(()=>{
 if(connect) fetchCampaigns()
    }[ address, contract])
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
