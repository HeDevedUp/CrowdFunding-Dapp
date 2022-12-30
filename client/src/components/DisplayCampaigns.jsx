import React from 'react';
import { useNavigate }  from 'react-router-dom';
import  { loader } from '../assets';


function DisplayCampaigns({ title, isloading, campaigns}) {
   const navigate =useNavigate();

   const handleNavigate = (campaign)  =>{
    navigate(`/campaign-details/${campaign.title}, { state: campaign}`)
   }

  return (
    <div>

    </div>
  )
}

export default DisplayCampaigns
