import React from 'react'
import Reviews from './reviews'
import AvRating from './avRating'
import SentimentAnalysis from './sentimentAnalysis'
import WebsiteVisitors from './websiteVisitors'
import MenuBar from './menuBar'




function TouchApp() {
  return (

  <div className="Dashboard">
      <div className="MenuBar">
        <MenuBar/>
      </div>
      
      <div className="Reviews">
      <Reviews reviews="1400" />
      </div>
      

      <div className="AvRating">
      <AvRating avRating="4.5"/>
      </div>

      <div className="SentimentAnalysis">
      <SentimentAnalysis num1="500" num2="1000" num3="3000"/>
      </div>
      
      <div className="WebsiteVisitors">
      <WebsiteVisitors websiteVisitors="5000"/>
      </div>
      
      </div>
  );
}
export default TouchApp;