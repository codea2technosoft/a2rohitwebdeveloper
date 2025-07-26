import React from "react";
import carwash from '../../assets/images/video2.mp4'
import carwashmobile from '../../assets/images/bgview.mp4'
import android from '../../assets/images/playstore.png'
import downloadapk from '../../assets/images/downloadapk.png'
import mobile from '../../assets/images/mobile-frame.png'
import { IoCheckmarkDone } from "react-icons/io5";

import appstore from '../../assets/images/appstore.png'
import { Link } from "react-router";
function LiveWatch() {
  return (
    <section className="livewatch">
      <video muted loop autoPlay playsInline className="bg-vid">
        <source src={carwash} type="video/mp4" />
      </video>

      <div className="section_livewatch">
        <div className="livewatch-content">
          <h2>Watch Your Car Wash Live</h2>
          <p>Experience real-time monitoring of your car wash, ensuring top-notch service and full transparency. Stay informed and reassured as you witness every step of the cleaning process from the comfort of your device.</p>
          <ul className="text-white list_app">
            <li><IoCheckmarkDone /><p><strong>Real-Time Streaming:</strong>Watch your car being washed live, anytime, anywhere.</p></li>
            <li><IoCheckmarkDone /><p><strong>Full Transparency:</strong>No hidden steps—see exactly how your vehicle is being cleaned.</p></li>
            <li><IoCheckmarkDone /><p><strong>Quality Assurance:</strong>Ensure every detail is taken care of with high-definition video.</p></li>
            <li><IoCheckmarkDone /><p><strong>Peace of Mind:</strong>Relax knowing your car is in expert hands with a thorough and professional wash.</p></li>
          </ul>
          <p>Enjoy a seamless, worry-free car wash experience with our live streaming feature!</p>
          <div className="button_apk d-flex gap-2">
            <div className="imgandroid">
              <Link to="https://play.google.com/store/apps/details?id=com.safairo.safairo&pli=1">
                    <img src={android} alt="android" />
                  </Link>
            </div>
            <div className="imgapple">
             <Link to="https://apps.apple.com/in/app/safairo/id6746812664">
                    <img src={appstore} alt="appstore" />
                  </Link>
            </div>
          </div>
        </div>
        <div class="iphone-frame">
          <div class="video-container">
            <video muted loop autoPlay playsInline className="">
              <source src={carwashmobile} type="video/mp4" />
            </video>
            <div className="downloadapk">
              <img src={downloadapk} alt="downloadapk" />
            </div>
            {/* <div className="mobileframedesign">
      </div> */}


          </div>
        </div>
      </div>

    </section>
  );
}

export default LiveWatch;
