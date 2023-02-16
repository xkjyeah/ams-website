<script>
export default {
  head () {
    return {
      title: 'Emergency Medical Transport',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service provides 24/7 emergency transport for patients in Singapore, including non-emergency cases, and patients requiring overseas evacuation. Contact us at 6281-8111 today!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/transport/", hreflang: 'x-default'},
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/transport/", hreflang: 'en-sg'}
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
    <h1>Medical Transport</h1>
    <p>
      Ambulance Medical Service provides 24/7 transport within Singapore for
      <a
        href="https://www.moh.gov.sg/docs/librariesprovider5/default-document-library/emergencyambulancestandards.pdf"
        target="_blank"
      >
        Emergency Ambulance Services (EAS) and Medical Transport Services (MTS)</a>.
      We are registered under SCDF’s
      <a
        href="https://www.scdf.gov.sg/home/about-us/information/scdf-emergency-medical-services"
        target="new"
        class="text_link"
      >1777 non-emergency ambulance hotline.</a>
    </p>
    <p>
      A non-emergency ambulance team consists of 1 Ambulance, an Emergency Medical Technician (EMT) certified driver and a paramedic level 1 or 2 with BCLS +/- ACLS and ITLS
      <nuxt-link to="/companyprofile-crew/#our-crew">
        certification.
      </nuxt-link>
    </p>
    <p>
      An emergency ambulance team will have a paramedic level 3 (instead of level 1 or 2) present. This paramedic will also have BCLS +/- ACLS and ITLS
      <nuxt-link to="/companyprofile-crew/#our-crew">
        certification.
      </nuxt-link>
    </p>
    <p>
      We can transport <a
        href="/transport/#critically-ill"
        class="text_link"
      >critically ill</a> patients requiring life support such as ventilators and infusion pumps.
    </p>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <h2 id="local">
          <div class="service_icon">
            <img src="/images/transport_icon.png">
          </div>
          Local transport
        </h2>
        <p>
          We provide one-way or two-way emergency and non-emergency transport to our patients’ destination. Special rates are available for regular transportation and contract billings e.g. dialysis sessions, rehabilitation therapy, nursing homes, hospitals. Please contact us for a quote.
        </p>
        <p>
          <b>Pricing schedule</b>
        </p>
        <p>
          We accept cash or PayNow on board all our ambulances.
        </p>
        <table-wrap>
          <table style="min-width: 450px; width: 100%">
            <tbody>
              <tr>
                <th style="text-align:center; width: 20%">
                  Services
                </th>
                <td style="text-align:center; width: 40%">
                  <strong>Office Hours</strong><br> (9am - 5pm, weekdays)
                </td>
                <td style="text-align:center; width: 40%">
                  <strong>After office Hours</strong><br>(5pm - 9am weekdays,<br> weekends and public holidays)
                </td>
              </tr>
              <tr>
                <td><b>1-way non emergency</b><br/>(discharge from nursing home or hospital)</td>
                <td style="text-align:center;">
                  <strong>$80 – $120</strong>
                </td>
                <td style="text-align:center;">
                  <b>$120 – $200</b>
                </td>
              </tr>

              <tr>
                <td><b>1-way non emergency</b><br>(for admission)</td>
                <td style="text-align:center;">
                  <strong>$130 – $180</strong>
                </td>
                <td style="text-align:center;">
                  <b>$150 – $200</b>
                </td>
              </tr>
              <tr>
                <td><strong>1-way emergency to A&E </strong></td>
                <td style="text-align:center;">
                  <b>$180 - $200</b>
                </td>
                <td style="text-align:center;">
                  <b>$180 - $250</b>
                </td>
              </tr>
              <tr>
                <td><strong>2-way non emergency</strong><br/>(same day)</td>
                <td style="text-align: center">
                  <b>$130 - $180*</b>
                  <br>
                  <br>
                  * <strong>$30</strong> surcharge for any single trip that falls outside office hours
                </td>
                <td style="text-align:center;">
                  <b>$160 - $220</b>
                </td>
              </tr>

              <tr>
                <td><strong>Regular trips </strong>eg. Dialysis, elder care, or therapy</td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  <b>$130 - $160</b> per return trip
                </td>
              </tr>
              <tr>
                <td><strong>Psychiatric cases </strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  <b>$350 - $450</b> per case
                </td>
              </tr>
              <tr>
                <td><strong>Airport cases</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  Tarmac cases <strong>$450 - $550</strong> per trip
                  <br>
                  Wheelchair/stretcher cases <strong>$250 - $400</strong> per trip
                </td>
              </tr>
              <tr>
                <td><strong>Ferry terminal cases</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  <strong>$300 - $400</strong> per case
                </td>
              </tr>
              <tr>
                <td><strong>Johor Bahru</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  <strong>$600 - $800</strong> per case
                </td>
              </tr>
              <tr>
                <td><strong>Other cities in Malaysia</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  <strong>$1600 - $2000</strong> per case
                </td>
              </tr>
              <tr>
                <td><strong>Use of oxygen or suction apparatus</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  Additional <strong>$30 - $50</strong>
                </td>
              </tr>
              <tr>
                <td><strong>Heavy patients (>80 kg)</strong></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  Additional <strong>$30 - $50</strong>
                </td>
              </tr>
              <tr>
                <td><b>Doctor/Nurse accompaniment</b></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  Can be available upon request
                </td>
              </tr>
              <tr>
                <td><b>Carrying patients by stairs</b></td>
                <td
                  colspan="2"
                  style="text-align:center;"
                >
                  Surcharge of <strong>$30 - $50</strong> per level
                </td>
              </tr>

            </tbody>
          </table>
        </table-wrap>
        <p class="remarks">
          Remarks:
          <ol>
            <li>
              In view of COVID-19, if deemed necessary in the transport of the patient, extra charges will apply for use of full personal protective equipment (PPE).
            </li><li>All prices quoted are subject to GST.</li>
            <li>Prices are correct as of February 2023. Please contact our hotline for confirmation.</li>
            <li>A waiting charge may be imposed after the first 15min of waiting.</li>
            <li>
              A cancellation charge of 50% of the price
              may be imposed if you decide to cancel the service after we have arrived at the pick-up point.
            </li>
          </ol>
        </p>
        <div id="title_Purple_big_noline">
          Testimonials
        </div>
        <div class="testimonial_area">
          <blockquote>
            “The two Indian gentlemen who came by to transport my wife to TTSH displayed high standards of professionalism and care in their work. They carefully evaluated my wife’s physical condition before deciding how best to move her down the stairs. My wife
            is thankful for their consideration in making her as comfortable as they can.”
          </blockquote>

          <blockquote>
            “I am writing to thank you for the arrangement to evacuate my wife back to Singapore after her accident in Batam. This is the first time we have to activate an emergency service from overseas… I would also like to compliment Ambulance Medical Service (AMS) for their swift action and attention to details, in particular Mr Mahmod who came from Singapore to Batam to personally ensure that everything was prepared accordingly for my wife's safe return to Singapore. He also texted me after to ask for update about her well-being at the hospital”
          </blockquote>

          <blockquote>
            “I’d like to compliment 2 AMS staff on their service. I was a medical escort for a patient and we were picked up at NUH by Syakira and Farhan. They were not only efficient but also really attentive to her safety and comfort throughout the journey. Although there were minor inconveniences due to the size of my patient’s wheelchair, they were patient and showed no sign of annoyance. They helped to hold the seatbelt away from my patient’s neck throughout the entire journey when she found it uncomfortable. From time to time they asked my patient if she was comfortable and it was really heartwarming to know that they go the extra mile from what is required of them. I’m a nurse and witnessing how dedicated their service was to their patients is a really timely reminder about how I treat my own patients too. Thank you so much!”
          </blockquote>

          <blockquote>
            “I would like to extend my appreciation towards two of your ambulance officers for the special dedicated services this afternoon. They were very caring, full of passion and patient towards my elderly mother. While waiting for the doctor, Meeran accompanied and handled my mother with care throughout the whole process. My mom felt very comfortable and secure even with a stranger like Meeran. I would also like to thank the lady officer Mala – she was helpful and friendly over the phone.”
          </blockquote>

          <blockquote>
            “I have used your services twice for my 96 year old mother in law. I wish to highly applaud the excellent service provided by your driver Tony on both occasions. Tony was careful and friendly in handling the situation, keeping my mother in law calm (she even kissed him). Knowing my anxiety, Tony kept me in a conversation to lighten my worries and kept assuring me that my mother in law will be fine. Later he even stayed and accompanied me until a doctor could see her. Such service is rare nowadays.”
          </blockquote>

          <blockquote>
            &ldquo;I have used your AMS service twice so far and are very pleased with your staff. Bernard is always helpful, courteous and professional and also an honest employee. He is also very patient with the elderly and willing to consider suggestions. Both he and Jamil made our journey pleasant and stress-free.&rdquo;
          </blockquote>
        </div>
        <div class="gallery_img">
          <img src="/images/transport_new.JPG">
        </div>
      </div>
      <div class="inner_service_box">
        <h2 id="critically-ill">
          <div class="service_icon">
            <img src="/images/transport_icon.png">
          </div>
          Transport of Critically Ill
        </h2>
        <p>We can provide transport of critically ill patients with doctor/nurse accompaniment as requested. Our ICU equipment include:</p>
        <p>
          - Dräger Oxylog® 3000 – for ventilation<br> - B.Braun Space Infusor – for accurate, controlled drug and fluids administration<br> - Philips Intellivue X2 monitor – for continuous vital sign monitoring and recording
        </p>
        <p>
          The above are in addition to the comprehensive equipment aboard our ambulances.
          The full equipment list can be seen <a
            href="/ambulance-equipment-list/"
            class="text_link"
          >here.</a>
        </p>
        <p>Please contact our operation managers for details.</p>
      </div>

      <div id="service_box">
        <h2 id="overseas-transport">
          <div class="service_icon">
            <img src="/images/overseas.png">
          </div>
          Overseas transport
        </h2>
        <p><strong>Patient evacuation to West Malaysia, Batam and Bintan</strong></p>
        <p>We have evacuated critically-ill patients to hospitals in nearby countries like West Malaysia, Batam and Bintan. Please contact our operation managers for details.</p>
      </div>
    </div>
    <div id="inner_image">
      <img src="/images/2.jpg">
    </div>
    <div slot="sidebar">
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </div>
  </default-page>
</template>

<style>
.remarks p, .remarks ol li {
  font-size: 80%;
}
</style>

