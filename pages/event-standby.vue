<script>
export default {
  head() {
    return {
      title: 'Event Standby',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service offers medical stand-by services for various events in Singapore. View our prices, customized equipment and schedules here!'
      }],
      link: [{
        rel: 'canonical',
        href: process.env.baseUrl + this.$route.path + '/'
      },
      { rel: "alternate", href: "https://www.ambulanceservice.com.sg/event-standby/", hreflang: 'x-default' },
      { rel: "alternate", href: "https://www.ambulanceservice.com.sg/event-standby/", hreflang: 'en-sg' }
      ]
    }
  },
  jsonld() {
    return [{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ambulance Medical Service - Medical Event Standby Ambulance",
      "url": "https://www.ambulanceservice.com.sg/"
    },
    {
      "@context": "https://schema.org",
      "@id": "https://www.ambulanceservice.com.sg/event-standby/",
      "@type": "LocalBusiness",
      "name": "Ambulance Medical Service",
      "logo": "https://www.ambulanceservice.com.sg/images/logo.png",
      "image": "https://www.ambulanceservice.com.sg/images/logo.png",
      "url": "https://www.ambulanceservice.com.sg/event-standby/",
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
  }
}
</script>
<template>
  <default-page>
    <h1>Medical Event Standby</h1>
    <p>
      Ambulance Medical Service has been providing medical standby for many years and our experience will be invaluable
      to help you develop a customized medical coverage and patient evacuation plan. You can trust our meticulous
      planning to ensure the
      safety of your participants.
    </p>
    <p>
      Find out more about the equipment in our ambulances
      <nuxt-link to="/ambulance-equipment-list/">
        here
      </nuxt-link>
      and our ambulance fleet
      <nuxt-link to="/fleet-information/">
        here
      </nuxt-link>.
    </p>
    <div class="inner_service_area">
      <h2>
        Price Schedule
      </h2>
      <table-wrap>
        <table style="width: 100%; min-width: 500px">
          <thead>
            <tr>
              <th style="width: 20%; text-align:center;">
                Services
              </th>
              <th style="width: 40%; text-align:center;">
                <strong>Office Hours</strong><br> (9am - 5pm, weekdays)
              </th>
              <th style="width: 40%; text-align:center;">
                <strong>After Office Hours</strong><br>(5pm - 9am weekdays,<br> weekends and public holidays)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">
                <b>Basic Standby for Events</b>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <b>1 ambulance team</b><br>1 ambulance, 1 Driver,<br> 1 Paramedic level 1-3<br>(2 men crew)
              </td>
              <td style="text-align:center;">
                <strong>$70 – $100</strong> per hour<br>Evacuation <b>$100</b> per trip
              </td>
              <td style="text-align:center;">
                <b>$80 – $120</b> per hour<br>Evacuation <strong>$120</strong> per trip
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <strong>Multiple ambulance teams </strong>
              </td>
              <td colspan="2">
                Special rates available
              </td>
            </tr>
            <tr>
              <td colspan="3">
                <b>Additional Equipment for Major Sports Events</b>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <strong>Additional Manpower</strong>
              </td>
              <td colspan="2">
                <ul>
                  <li>Extra Paramedic level 1 - 3</li>
                  <li>Nurse</li>
                  <li>Doctor</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <strong>Mobile Medical Team(s)</strong>
              </td>
              <td colspan="2">
                <ul>
                  <li>
                    All Terrain
                    <nuxt-link to="/gallery/#buggy">
                      Buggies
                    </nuxt-link>
                  </li>
                  <li>Bicycles</li>
                  <li>Motorcycles</li>
                  <li>Mobile first aid bag comprising of </li>
                  <ul type="circle">
                    <li>Oxygen cylinder and oxygen delivery devices</li>
                    <li>Automated External Defibrillator</li>
                    <li>Comprehensive First Aid dressing kit</li>
                  </ul>
                </ul>
                <figure class="address_gradient">
                  <img src="/images/buggy-small.jpg" style="">
                  <figcaption>
                    All terrain buggies to reach casualties fast
                  </figcaption>
                </figure>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <strong>Medical Post</strong>
              </td>
              <td colspan="2" style="text-align:left;">
                <ul>
                  <li>First aid trolley with vital monitor</li>
                  <li>Safari camp bed(s) with privacy screen</li>
                  <li>Spinal board</li>
                  <li>Litter carrier - lightweight casualty transport system that allows one person to transport a
                    casualty strapped to a stretcher, and also performs as a litter stand in the medical station</li>
                  <li>
                    <a href="http://www.zoll.com/medical-products/cardiac-support-pump/autopulse/" target="new"
                      class="text_link">AutoPulse</a> – automated CPR machine that allows continuous CPR while
                    transporting a patient on a stretcher
                    <br><img src="/images/zoll-autopulse-small.jpg" class="img-me">
                  </li>
                  <li>
                    <a href="http://caervest.com/" target="new" class="text_link">Caervest</a> - portable, core body
                    cooling device for heatstroke/cardiac arrest victim
                    <br><img src="/images/caervest-small.jpg" class="img-lg">
                  </li>
                  <li>
                    External Defibrillator Cardioverter and Cardiac Pacer &mdash; Philips MRx<sup>TM</sup> or
                    Zoll<sup>TM</sup>
                    <br>
                    <img src="/images/mrx-small.jpg" class="img-me">
                    <img src="/images/zoll-r-series-small.jpg" class="img-lg">
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </table-wrap>
      <p>
        All prices quoted are subject to GST
      </p>

      <h1>Past projects</h1>

      <table class="past-projects-table">
        <!--<thead>
<tr>
<th colspan="2">Service Provided</th>
<th>Period</th>
</tr>
</thead>-->
        <tbody>
          <tr>
            <td>
              <img src="../assets/images/partners/image4.png" class="partner-logo">
            </td>
            <td>
              Peace and Prosperity Singapore (27,000 participants)
            </td>
            <td>
              From 2019
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image5.png" class="partner-logo">
            </td>
            <td>
              River Hongbao (10,000 participants)
            </td>
            <td>
              From 2015
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image6.jpeg" class="partner-logo">
            </td>
            <td>
              Christmas wonderland (1.6 million visitors)
            </td>
            <td>
              2016
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image7.jpeg" class="partner-logo">
            </td>
            <td>
              Siloso beach party (25,000 attendants)
            </td>
            <td>
              From 2012
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image8.jpeg" class="partner-logo">
            </td>
            <td>
              Civil Service Club
              Emergency / Non-emergency transfer
            </td>
            <td>
              From 2015,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image9.png" class="partner-logo">
            </td>
            <td>
              Esprimo Pte Ltd
              Emergency / Non-emergency transfer
            </td>
            <td>
              From 2012,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image10.png" class="partner-logo">
            </td>
            <td>
              Singapore Rugby Union, National League
              Ambulance and Medical Team standby
            </td>
            <td>
              From 2018,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image11.png" class="partner-logo">
            </td>
            <td>
              Centaurs weekly Rugby training
              Ambulance standby with WR Medic
            </td>
            <td>
              From 2018 to 2020, on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image12.png" class="partner-logo">
            </td>
            <td>
              Tanglin Rugby Club Weekly Rugby training Ambulance standby with WR Medic
            </td>
            <td>
              From 2018 to 2020, on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image13.png" class="partner-logo">
            </td>
            <td>
              SRU World Rugby HSBC 7’s
              Ambulance and WR Medical Team standby
            </td>
            <td>
              From 2018
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image14.png" class="partner-logo">
            </td>
            <td>
              JRCS Grand Finals
              WR Medic, Ambulance standby
            </td>
            <td>
              2018, 2019
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image15.png" class="partner-logo">
            </td>
            <td>
              SCC Rugby Academy Tournament
              WR Medic, Ambulance standby
            </td>
            <td>
              2018, 2019
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image16.png" class="partner-logo">
            </td>
            <td>
              One Edge of Greatness Martial Arts Championship
              Ambulance and Medical Team standby
            </td>
            <td>
              2019
              current /on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image17.png" class="partner-logo">
            </td>
            <td>
              Evolve Mixed Martial Arts (MMA). Warrior Fight Night, Muay Thai Competition. Annual Jiu Jitsu competition
              for kids, Kids Brazilian Jiu Jitsu Tournament
            </td>
            <td>
              2019 current /
              on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image18.jpeg" class="partner-logo">
            </td>
            <td>
              Singapore F1 Race
              Medic and Ambulance standby, Medical posts, Mobile Medic, First Aid tent
            </td>
            <td>
              2018 to 2022
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image19.png" class="partner-logo">
            </td>
            <td>Standard Chartered Singapore Marathon 2019</td>
            <td>
              From 2009,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image20.jpeg" class="partner-logo">
            </td>
            <td>
              Event Health Management: Marathon, Run, Dash. Emergency /Non-emergency / Doctor Standby &amp; transfer
            </td>
            <td>
              From 2017,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image21.png" class="partner-logo">
            </td>
            <td>
              Singapore Badminton Association – International Series + Youth International Series
            </td>
            <td>
              From 2018,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image22.png" class="partner-logo">
            </td>
            <td>
              Singapore Athletics: U13 Track &amp; Field, School Meet, Cross Country, Schools Relay, Singapore Open
              Track &amp; Field Championship
            </td>
            <td>
              From 2014,
              current / on-going
            </td>
          </tr>
          <tr>
            <td>
              <img src="../assets/images/partners/image23.png" class="partner-logo">
            </td>
            <td>
              Orangeroom Tri Factor Events – Run &amp; RunSwim Challenge, Triathlon, Aquathon,
            </td>
            <td>
              From 2015,
              current / on-going
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Testimonials</h1>

      <div class="testimonial_area">
        <blockquote>
          “Together, we have successfully organized AMC 2016 and team AMS (Yvonne and Dr Sim) have been right there,
          helping out wherever and whenever needed during the trial run and actual event day. The operation of this
          event was smooth and well thought through
          with your expertise. Everything came together, and we are sincerely appreciative.”
        </blockquote>
      </div>
      <div class="testimonial_area">
        <blockquote>
          “A special thank you to the wonderful medical support team at the first aid tent, especially the medic
          in-charge. It was abundantly clear that they were highly experienced in treating sports athletes and were at
          all times truly professional with their
          treatment and advice. Likewise, we very much appreciated your follow-up telephone call today with us!”
        </blockquote>
      </div>
      <div class="gallery_img" style="margin:0 0 20px 0;">
        <img src="/images/eventstandby_new2.JPG">
      </div>
      <div class="gallery_img">
        <img src="/images/eventstandby_new.JPG">
      </div>
      <div class="text_justify" style="text-align:center;">
        You can count on US!
      </div>
    </div>

    <div id="inner_image">
      <img src="/images/3.jpg">
    </div>
    <template v-slot:sidebar>
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>

<style lang="scss">
table.past-projects-table {
  max-width: 800px;
  margin: auto;

  img.partner-logo {
    width: auto;
    height: auto;
    max-width: 60px;
    max-height: 40px;
  }

  tr:nth-child(even) td,
  th {
    background-color: #EEE;
  }

  td,
  tr,
  th {
    border: none;
  }

  /* the logo */
  tbody tr td:nth-child(1) {
    text-align: center;
  }

  th {
    text-align: center;
  }
}
</style>
