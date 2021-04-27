<script>
export default {
  head () {
    return {
      title: 'Emergency Medical Transport Singapore',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service provides 24/7 emergency transport for patients in Singapore, including non-emergency cases, and patients requiring overseas evacuation. Contact us at 6281-8111 today!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        }
      ]
    }
  },
  jsonld() {
    return [{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Ambulance Medical Service - Emergency Transport",
        "url": "https://www.ambulanceservice.com.sg/"
      },
      {
        "@context": "https://schema.org",
        "@id": "https://www.ambulanceservice.com.sg/transport/",
        "@type": "LocalBusiness",
        "name": "Ambulance Medical Service",
        "logo": "https://www.ambulanceservice.com.sg/images/logo.png",
        "image": "https://www.ambulanceservice.com.sg/images/logo.png",
        "url": "https://www.ambulanceservice.com.sg/transport/",
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
  <p>Ambulance Medical Service provides 24/7 transport within Singapore for
  <strong>emergency</strong> and <strong>non-emergency</strong> cases.
  We are registered under SCDF’s
  <a href="https://www.scdf.gov.sg/home/about-us/information/scdf-emergency-medical-services"
        target="new" class="text_link">1777 non-emergency ambulance hotline.</a></p>
  <p>A non-emergency ambulance team consists of 1 Ambulance, an Emergency Medical Technician (EMT) certified driver and a paramedic level 1 or 2 with BCLS +/- ACLS and ITLS
    <nuxt-link to="/companyprofile-crew/#our-crew">certification.</nuxt-link>
  </p>
  <p>An emergency ambulance team will have a paramedic level 3 (instead of level 1 or 2) present. This paramedic will also have BCLS +/- ACLS and ITLS
    <nuxt-link to="/companyprofile-crew/#our-crew">certification.</nuxt-link>
  </p>
  <p>We can transport <a href="/transport/#critically-ill" class="text_link">critically ill</a> patients requiring life support such as ventilators and infusion pumps.</p>
  <div class="inner_service_area">
    <div class="inner_service_box">
      <h2 id="local">
              <div class="service_icon"><img src="/images/transport_icon.png" /></div>
              Local transport
            </h2>
      <p>
        We provide one-way or two-way emergency and non-emergency transport to our patients’ destination. Special rates are available for regular transportation e.g. dialysis sessions, rehabilitation therapy.
      </p>
      <p>
        <b>Pricing schedule</b>
      </p>
      <p>
        We accept cash or NETS payment aboard all our ambulances.
      </p>
      <table-wrap>
        <table style="min-width: 450px; width: 100%">
          <tbody>
            <tr>
              <th style="text-align:center; width: 20%">Services</th>
              <td style="text-align:center; width: 40%"><strong>Office Hours</strong><br> (9am - 5pm, weekdays)</td>
              <td style="text-align:center; width: 40%"><strong>After office Hours</strong><br>(5pm - 9am weekdays,<br> weekends and public holidays)</td>
            </tr>
            <tr>
              <td><b>1-way non emergency</b><br />(booked 1 day in advance)</td>
              <td style="text-align:center;"><strong>$50 – $90</strong></td>
              <td style="text-align:center;"><b>$90 – $130</b></td>
            </tr>
            <tr>
              <td><strong>1-way emergency to A&E </strong></td>
              <td style="text-align:center;"><b>$70 - $130</b></td>
              <td style="text-align:center;"><b>$90 - $150</b></td>

            </tr>
            <tr>
              <td><strong>2-way non emergency</strong><br />(booked 1 day in advance)</td>
              <td style="text-align:center;"><b>$90 - $130*</b><br /><br />* <strong>$20</strong> surcharge for any single trip that falls outside office hours</td>
              <td style="text-align:center;"><b>$120 - $180</b></td>
            </tr>

            <tr>
              <td><strong>Regular trips </strong>eg. Dialysis, elder care, or therapy</td>
              <td colspan="2" style="text-align:center;"><b>$85 - $110</b> per return trip</td>
            </tr>
            <tr>
              <td><strong>Psychiatric cases </strong></td>
              <td colspan="2" style="text-align:center;"><b>$200 - $400</b> per case</td>
            </tr>
            <tr>
              <td><strong>Airport cases</strong></td>
              <td colspan="2" style="text-align:center;">
                Stretcher / tarmac cases <strong>$350 - $500</strong> per trip<br /> Wheelchair cases <strong>$150 - $300</strong> per trip
              </td>
            </tr>
            <tr>
              <td><strong>Ferry terminal cases</strong></td>
              <td colspan="2" style="text-align:center;">
                <strong>$200 - $400</strong> per case
              </td>
            </tr>

            <tr>
              <td><strong>Use of oxygen or suction apparatus</strong></td>
              <td colspan="2" style="text-align:center;">Additional <strong>$10 – $30</strong></td>
            </tr>
            <tr>
              <td><b>Doctor/Nurse accompaniment</b></td>
              <td colspan="2" style="text-align:center;">Can be available upon request</td>
            </tr>
          </tbody>
        </table>
      </table-wrap>
      <p>
        Remarks:<br> - All prices quoted are inclusive of GST.<br> - Prices are correct as of October 2016. Please contact our hotline for confirmation.<br> - A waiting charge may be imposed after the first 15min of waiting.<br> - A cancellation charge
        may be imposed if you decide to cancel the service after we have arrived at the pick-up point.

      </p>
      <div id="title_Purple_big_noline">Testimonials</div>
      <div class="testimonial_area">
        <blockquote>
          “The two Indian gentlemen who came by to transport my wife to TTSH displayed high standards of professionalism and care in their work. They carefully evaluated my wife’s physical condition before deciding how best to move her down the stairs. My wife
          is thankful for their consideration in making her as comfortable as they can.”
        </blockquote>
      </div>
      <div class="gallery_img"><img src="/images/transport_new.JPG" /></div>
    </div>
    <div class="inner_service_box">
      <h2 id="critically-ill">
                <div class="service_icon"><img src="/images/transport_icon.png" /></div>
                Transport of Critically Ill
              </h2>
      <p>We can provide transport of critically ill patients with doctor/nurse accompaniment as requested. Our ICU equipment include:</p>
      <p>
        - Dräger Oxylog® 3000 – for ventilation<br /> - B.Braun Space Infusor – for accurate, controlled drug and fluids administration<br /> - Philips Intellivue X2 monitor – for continuous vital sign monitoring and recording
      </p>
      <p>The above are in addition to the comprehensive equipment aboard our ambulances.
      The full equipment list can be seen <a href="/ambulance-equipment-list/" class="text_link">here.</a></p>
      <p>Please contact our operation managers for details.</p>
    </div>

    <div id="service_box">
      <h2 id="overseas-transport">
              <div class="service_icon"><img src="/images/overseas.png" /></div>
              Overseas transport
            </h2>
      <p><strong>Patient evacuation to West Malaysia, Batam and Bintan</strong></p>
      <p>We have evacuated critically-ill patients to hospitals in nearby countries like West Malaysia, Batam and Bintan. Please contact our operation managers for details.</p>
    </div>

  </div>
  <div id="inner_image"><img src="/images/2.jpg" /></div>
  <div slot="sidebar">
    <whats-new-widget />
    <enquiry-box />
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
