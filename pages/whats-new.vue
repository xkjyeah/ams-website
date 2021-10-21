<script>
export default {
  head () {
    return {
      title: 'What\'s New',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service is committed to continuously upgrading our equipment to serve our patients better in emergencies. See our latest updates here!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: 'x-default'},
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: 'en-sg'}
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>What's New</h1>
    <style>
      .col-flex {
        display: flex;
        flex-direction: column;
      }

      .col {
        width: 100%;
      }

      .col:first-child {
        margin-left: 0;
      }

      @media (min-width: 1024px) {
        .col-flex {
          flex-direction: row;
        }
        .col {
          width: 50%;
          margin-left: 30px;
        }
      }
    </style>
    <div class="col-flex">
      <div class="col">
        <img src="~/assets/images/letter-of-commendation-img.jpg" alt="LETTER OF COMMENDATION">
      </div>
      <div class="col">
        <h3>Oct 2021 - LETTER OF COMMENDATION</h3>
        <p>Dear Sir,</p>
        <p>I wish to commend the professionalism and public spirit shown by your crew, Andy and Ben, when they happened to be the third vehicle behind, witnessing an accident yesterday afternoon at Ang Mo Kio Ave 5.</p>
        <p>They helped to render first aid to the slightly injured motorcyclist.  The ambulance driver also helped to direct traffic at the CTE slip road upon the arrival of SCDF ambulance and traffic police.</p>
        <p>They also advised us to notify the police due to injury, though the biker who caused the minor accident was not in favour of it.</p>
        <p>The instant assistance by your staff helped to ease our anxiety, both victims being first timers.  I extend my great appreciation to both gentlemen.   I also congratulate you on your success in nurturing such excellent emergency responders.</p>
        <p>Thank you.</p>
      </div>
    </div>
    
    <h3>April 2020</h3>
    <p>
      As of April 2020, we have expanded our fleet to 39 ambulances!
    </p>
    <p>
      We are proud to support COVID-19 since February 2020 and have dedicated a section of our fleet to support 993 transport services of suspect and confirmed cases. Rest assured that to avoid cross-infectivity with our regular patients, the COVID team is separate from our regular teams. Our COVID crew is well trained and adheres to strict personal-protection and sanitisation protocol. Preventive measures have also been ramped up for all regular cases.
    </p>
    <p>
      Under new MOH regulations for improving stricter standards for <nuxt-link to="/">private ambulances</nuxt-link>, AMS has been accredited for both Emergency Ambulance Services (EAS) and Medical Transport Services (MTS). With our commitment to maintaining professional services and top-line equipment, we are one of the earliest private ambulances to pass accreditation standards!
    </p>

    <h3>November 2019</h3>
    <p>
      We have received ISO 9001 : 2015 from November 2019. It is awarded to companies that meet requirements for a quality management system that consistently meet high standards of service and customer satisfaction. See more details at https://www.iso.org/standard/62085.html
    </p>
    <p>
      We have also been promoted from BizSafe Level 3 to BizSafe Level 4!
    </p>

    <div slot="sidebar">
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </div>
  </default-page>
</template>
