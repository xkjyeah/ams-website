<script>
export default {
  head() {
    return {
      title: 'Emergency Ambulance Singapore',
      meta: [
        { hid: 'description', name: 'description', content: 'Ambulance Medical Service provides 24/7 private ambulance for medical emergency and non-emergency operations in Singapore, as well as patient evacuation to some nearby countries. Call us at 6281-8111 today!' }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path
        },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/", hreflang: 'x-default' },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/", hreflang: 'en-sg' }
      ]
    }
  },
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ambulance Medical Service - Emergency and Non-emergency services in Singapore",
        "url": "https://www.ambulanceservice.com.sg/"
      },
      {
        "@context": "https://schema.org",
        "@id": "https://www.ambulanceservice.com.sg/",
        "@type": "LocalBusiness",
        "name": "Ambulance Medical Service",
        "logo": "https://www.ambulanceservice.com.sg/images/logo.png",
        "image": "https://www.ambulanceservice.com.sg/images/logo.png",
        "url": "https://www.ambulanceservice.com.sg/",
        "telephone": "65 6281 8111",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "65 Ubi Road 1, #01-57 Oxley Bizhub",
          "addressLocality": "Singapore",
          "postalCode": "408729",
          "addressCountry": "+65"
        },
        "sameAs": [
          "https://www.facebook.com/AMS-Ambulance-Medical-Service-Pte-Ltd-587840834594309/"
        ],
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Monday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Tuesday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Wednesday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Thursday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "00:00",
          "closes": "23:59"
        }, {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "00:00",
          "closes": "23:59"
        }]
      }

    ]
  },
  mounted() {
    // $('#slider').nivoSlider();
  }
}

</script>
<template>
  <main>
    <div id="body_area">
      <div class="site">
        <div id="wrapper">
          <div class="slider-wrapper theme-default">
            <div id="slider" class="nivoSlider" style="display: none">
              <img src="/images/slider1.png" data-thumb="/images/slider1.png"
                alt="Emergency and Non-emergency Ambulance Services in Singapore" data-transition="fade">
              <a href="/event-standby/"><img src="/images/slider2.png" data-thumb="/images/slider2.png"
                  alt="Medical Event Standby Ambulance" data-transition="fade"></a>
              <a href="/companyprofile-crew/"><img src="/images/slider3.png" data-thumb="/images/slider3.png"
                  alt="Ambulance Medical Certified Crew" data-transition="fade"></a>
              <img src="/images/slider4.png" data-thumb="/images/slider4.png" alt="Excellent Track Record"
                data-transition="fade">
              <img src="/images/slider5.png" data-thumb="/images/slider5.png" alt="Fully Insured Liability Insurance"
                data-transition="fade">
            </div>
          </div>
        </div>
        <!--slider-wrapper-->
        <div id="main_body_area">
          <div id="main_left">
            <div id="left_area">
              <h1>24/7 Ambulance Service in Singapore</h1>
              <div id="title_Purple_big">
                Dedicated. Reliable. Professional.
              </div>
              <p>Welcome to Ambulance Medical Service! </p>
              <p>We have been serving Singaporeans since 1999, and we’re dedicated to serving our customers with premier
                pre-hospital care and a smile. Come aboard with our friendly and experienced crew and let us look after
                you! </p>
              <p>These are the services that AMS offers:</p>
              <div style="clear:both;" />
              <div id="home_service_area">
                <div class="service_block">
                  <a href="/transport/">
                    <div id="title_Purple_normal">Transport</div>

                    <div class="service_img"><img src="/images/transport_service.png"></div>
                    <div>
                      In view of COVID-19, enhanced preventive measures are in place for <strong>all regular
                        cases</strong>, including full Personal Protective Equipment (PPE) for all emergency cases.
                    </div>
                    <br>
                    <div class="text_left">24 hours Emergency or Non-Emergency</div>
                    <div class="text_left">One-Way or Two-Way Regular Transport for dialysis sessions / therapy</div>
                    <div class="text_left">Transport for Psychiatric patients</div>
                    <div class="text_left">Airport Tarmac, Ferry Terminal</div>
                    <div class="text_left">Overseas transport to West Malaysia, Batam, Bintan</div>
                    <div class="text_left">Transport of Critically Ill</div>
                    <div class="text_left">Cash and PayNow accepted!</div>
                  </a>
                  <div style="clear:both;" />
                </div>
                <div class="service_block">
                  <a href="/event-standby/">
                    <div id="title_Purple_normal">Event Standby</div>
                    <div class="service_img"><img src="/images/transport_service1.png"></div>
                    <div class="text_left">Engage an Ambulance with Paramedics, Nurses, Doctors</div>
                    <div class="text_left">Medical coverage of Sports Events, Gatherings, Conventions, Exhibitions</div>
                    <div class="text_left">First Aid station and Mobile Medical team on buggies, bicycles and
                      motorcycles</div>
                    <div class="text_left">Construction site medical post provision (with Doctors and Paramedics)</div>
                  </a>
                  <div style="clear:both;" />
                </div>
                <div class="service_block">
                  <a href="sales-purchase/">
                    <div id="title_Purple_normal">Sales & Rental</div>
                    <div class="service_img"><img src="/images/sales-and-rental.png"></div>
                    <div class="text_left">Sale and rental of oxygen cylinders of various sizes for home therapy</div>
                    <div class="text_left">Purchase HeartSine Automated External Defibrillators (AEDs)</div>
                  </a>
                </div>
                <div style="clear:both;" />
              </div>
              <div id="title_Purple_big_noline">
                Why choose us?
              </div>
              <div class="text_left">
                Find out the AMS difference:
              </div>
              <div style="clear:both;" />
              <div id="home_service_area">
                <div class="service_block">
                  <nuxt-link to="/companyprofile-crew/">
                    <div id="title_Purple_normal">Company Profile and Crew</div>
                    <div class="service_img"><img src="/images/our_crew_1.png"></div>
                    <div class="text_left">Our Director, a Doctor, trained in Anaesthesia and Intensive Care.</div>
                    <div class="text_left">Our Crew of drivers and paramedics level 1-3 is experienced and certified to
                      do their task.

                    </div>
                  </nuxt-link>
                  <div style="clear:both;" />
                </div>
                <div class="service_block">
                  <a href="/fleet-information/">
                    <div id="title_Purple_normal">Fleet Information</div>
                    <div class="service_img"><img src="/images/fleet_information_1.png"></div>
                    <div class="text_left">We own 60 ambulances, each comprehensively equipped with monitors, medical
                      aids, stretcher and wheelchair locks, wheelchair lifts, GPS tracked, professionally sanitized,
                      insured.
                    </div>
                  </a>

                  <div style="clear:both;" />
                </div>
                <div class="service_block">
                  <a href="/ambulance-equipment-list/">
                    <div id="title_Purple_normal">Ambulance Equipment List</div>
                    <div class="service_img"><img src="/images/transport_service2.png"></div>
                    <div class="text_left">Find out what we stock in each ambulance.
                    </div>
                  </a>
                </div>
                <div style="clear:both;" />
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
          <div style="clear:both;" />
        </div>
      </div>
      <div style="clear:both;" />
    </div>
    <!--body_area-->
  </main>
</template>
