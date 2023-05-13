import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";

const Security = () => {
  return (
    <section className="Security sec4">
      <header>
        <div>Security First</div>
        <p>
          At Kamunity, we only bring and keep data that we need to serve you.
          This helps us keep our sensitive data footprint to minimal.
        </p>
      </header>
      <div className="content">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="li">
              <span>No Social Security Number</span>
              <p>We do not need your Social Security Number (SSN)</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="li">
              <span>No bank credentials</span>
              <p>
                We do not store your bank credentials. We use well established
                third party financial account aggregator services to connect to
                your bank and brokerage accounts. Your banking credentials are
                directly sent to the respective service from your browser.
                Kamunity platform will never see your credentials.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="li">
              <span>No account numbers</span>
              <p>
                We only get partial accounts numbers from our account
                aggregators and that’s all we keep in our systems too. We do not
                make any attempt to get your full account numbers.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="li">
              <span>Bank Level Encryption</span>
              <p>
                All data is encrypted during transit and at rest, and with
                256-bit SSL encryption and security practices that match with
                your bank’s, your data is well protected.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="li">
              <span>Walk the talk</span>
              <p>
                Our Founders were the first users of the system and their own
                data is on the platform as well.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Security;
