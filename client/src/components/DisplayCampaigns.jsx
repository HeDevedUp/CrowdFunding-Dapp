import React from 'react';
import { useNavigate }  from 'react-router-dom';
import  { loader } from '../assets';


function DisplayCampaigns({ title, isloading, campaigns}) {
   const navigate =useNavigate();

   const handleNavigate = (campaign)  =>{
    navigate(`/campaign-details/${campaign.title}`, { state: campaign})
   }

  return (
    <div>
      <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>{title} ({campaigns.length})  </h1>

    </div>
  )
}

export default DisplayCampaigns
