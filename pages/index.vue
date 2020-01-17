<script>
export default {
  head: {
    title: 'Emergency Ambulance Singapore',
    meta: [
      {hid: 'description', name: 'description', content: 'Ambulance Medical Service provides 24/7 private ambulance for medical emergency and non-emergency operations in Singapore, as well as patient evacuation to some nearby countries. Call us at 6281-8111 today!'}
    ]
  }
}
</script>
<template>
<main>
  <div id="body_area">
    <div class="site">
      <div id="wrapper">
        <div class="slider-wrapper theme-default">
          <div id="slider" class="nivoSlider">
            <img src="/images/slider1.png" data-thumb="/images/slider1.png" alt="" data-transition="fade" />
            <a href="event-standby.html"><img src="/images/slider2.png" data-thumb="/images/slider2.png" alt="" data-transition="fade" /></a>
            <a href="companyprofile-crew.html"><img src="/images/slider3.png" data-thumb="/images/slider3.png" alt="" data-transition="fade" /></a>
            <img src="/images/slider4.png" data-thumb="/images/slider4.png" alt="" data-transition="fade" />
            <img src="/images/slider5.png" data-thumb="/images/slider5.png" alt="" data-transition="fade" />
          </div>
        </div>
      </div>
      <!--slider-wrapper-->
      <div id="main_body_area">
        <div id="main_left">
          <div id="left_area">
            <div id="title_Purple_big">Dedicated. Reliable. Professional.</div>
            <p>Welcome to Ambulance Medical Service! </p>
            <p>We have been serving Singaporeans since 1999, and we’re dedicated to serving our customers with premier pre-hospital care and a smile. Come aboard with our friendly and experienced crew and let us look after you! </p>
            <p>These are the services that AMS offers:</p>
            <div style="clear:both;"></div>
            <div id="home_service_area">

              <div class="service_block">
                <a href="/transport">
                  <div id="title_Purple_normal">Transport</div>
                  <div class="service_img"><img src="/images/transport_service.png" /></div>
                  <div class="text_left">24 hours Emergency or Non-Emergency</div>
                  <div class="text_left">One-Way or Two-Way Regular Transport for dialysis sessions / therapy</div>
                  <div class="text_left">Transport for Psychiatric patients</div>
                  <div class="text_left">Airport Tarmac, Ferry Terminal</div>
                  <div class="text_left">Overseas transport to West Malaysia, Batam, Bintan</div>
                  <div class="text_left">Transport of Critically Ill</div>
                  <div class="text_left">Cash and NETS payment accepted!</div>
                </a>
                <div style="clear:both;"></div>
              </div>
              <div class="service_block">
                <a href="/event-standby">
                  <div id="title_Purple_normal">Event Standby</div>
                  <div class="service_img"><img src="/images/transport_service1.png" /></div>
                  <div class="text_left">Engage an Ambulance with Paramedics, Nurses, Doctors</div>
                  <div class="text_left">Medical coverage of Sports Events, Gatherings, Conventions, Exhibitions</div>
                  <div class="text_left">First Aid station and Mobile Medical team on buggies, bicycles and motorcycles</div>
                </a>
                <div style="clear:both;"></div>
              </div>
              <div class="service_block">
                <a href="sales-purchase">
                  <div id="title_Purple_normal">Sales & Rental</div>
                  <div class="service_img"><img src="/images/transport_service2.png" /></div>
                  <div class="text_left">Rent Oxygen cylinders of various sizes for home therapy</div>
                  <div class="text_left">Purchase HeartSine Automated External Defibrillators (AEDs)</div>
                </a>
              </div>
              <div style="clear:both;"></div>
            </div>
            <div id="title_Purple_big_noline">Why choose us?</div>
            <div class="text_left">Find out the AMS difference:</div>
            <div style="clear:both;"></div>
            <div id="home_service_area">

              <div class="service_block">
                <a href="/companyprofile-crew">
                  <div id="title_Purple_normal">Company Profile and Crew</div>
                  <div class="service_img"><img src="/images/our_crew_1.png" /></div>
                  <div class="text_left">Our Director, a Doctor, trained in Anaesthesia and Intensive Care.</div>
                  <div class="text_left">Our Crew of drivers and paramedics level 1-3 is experienced and certified to do their task.

                  </div>
                </a>
                <div style="clear:both;"></div>
              </div>
              <div class="service_block">
                <a href="/fleet-information">
                  <div id="title_Purple_normal">Fleet Information</div>
                  <div class="service_img"><img src="/images/fleet_information_1.png" /></div>
                  <div class="text_left">We own 20 ambulances, each comprehensively equipped with monitors, medical aids, stretcher and wheelchair locks, wheelchair lifts, GPS tracked, professionally sanitized, insured.
                  </div>
                </a>

                <div style="clear:both;"></div>
              </div>
              <div class="service_block">
                <a href="/ambulance-equipment-list">
                  <div id="title_Purple_normal">Ambulance Equipment List</div>
                  <div class="service_img"><img src="/images/transport_service2.png" /></div>
                  <div class="text_left">Find out what we stock in each ambulance.
                  </div>
                </a>

              </div>
              <div style="clear:both;"></div>
            </div>
            <CallBanner />
          </div>
        </div>
        <div id="main_right">
          <div id="right_area">
            <whats-new-widget />
            <enquiry-box />
            <address-area />
            <!-- <facebook-widget /> -->
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
  <!--body_area-->
</main>
</template>
