<script>
export default {
  head () {
    return {
      title: 'Company & Staff Profile',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ambulance Medical Service provides 24/7 ambulance services with professional paramedics trained to handle a range of medical emergencies. Find out more about our company and staff here!'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        }
      ]
    }
  }
}
</script>

<template>
<default-page>
  <p>
    Ambulance Medical Service Pte Ltd (AMS) has been providing quality emergency and non-emergency ambulance services in Singapore since 1999.
  </p>
  <p>
    AMS has been awarded accreditation for providing Emergency Ambulance Medical / Transport Services compliant to the new MOH standards for Private Ambulance Operators that came into effect in 2019. AMS is also BizSAFE level 4 and ISO 9001 quality service certified. As a responsible pre-hospital healthcare provider, AMS is covered with professional indemnity and public liability insurance of S$1,000,000 & S$1000,000 respectively. AMS is GST registered with a paid-up capital of S$250,000. As of April 2020, we own over 39 well-furnished ambulances with state of art medical equipment and have 35 teams of ambulance crew.
  </p>
  <p>
    AMS management promotes a sincere customer service culture with ongoing commitment to improve the customer journey. We have the honour of fulfilling contracted service to major Hospitals, Nursing Houses, Education institutes, Sport Clubs and Event Organizers covering event-standby, emergency and non-emergency ambulance, and medical services. AMS has extensive experience in small- and large-scale events, complex evacuations (both local and overseas), emergency cases, and 1777 (non-emergency public hotline) transport.
  </p>
  <div class="inner_service_area">
    <div class="inner_service_box">
      <div class="inner_service_left">
        <div class="service_icon"><img src="/images/our-director.png" /></div>
      </div>
      <div class="inner_service_right">
        <h2>Our Director</h2>
        <p>
          The company is led by Dr Sim Kah Ming, a senior doctor specializing in Anaesthesia and Intensive Care Medicine, who is relentless in maintaining the highest quality of pre-hospital care.
        </p>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="inner_service_box">
      <div class="inner_service_left">
        <div class="service_icon"><img src="/images/our-crew.png" /></div>
      </div>
      <div class="inner_service_right">
        <h2 id="our-crew">Our Crew</h2>
        <h3>Experienced, professionally qualified staff</h3>
        <p>
          In AMS, the drivers and paramedics work together to ensure a continuous chain of survival for our patients. We believe in continually training our staff to equip them with up-to-day skills necessary for managing medical emergencies.
        </p>
        <p>
          Every ambulance team comprises of a Driver and a Paramedic. AMS drivers and medics are qualified personnel with either Paramedic level 1, 2, or 3.
        </p>
        <h3>Essential Certification Courses competencies</h3>
        <p>
        The following are the certification courses undergone by AMS drivers and Medics:
        </p>

        <ol>
        <li>International Trauma Life Support (ITLS)</li>
        <li>Higher National ITE Certificate in Paramedic and Emergency Care (Paramedic level 3 only).</li>
        <li>Emergency Medical Technician (EMT) course conducted by Institute of Advanced Nursing, Singapore General Hospital (majority).</li>
        <li>World Rugby ICIR Medical Level 2 course or Pre-Hospital Immediate Care in Sport course (Level 3).</li>
        <li>Basic Cardiac Life Support (BCLS) course.</li>
        <li>Cardiopulmonary Resuscitation & Automated External Defibrillator (CPR & AED) course.</li>
        <li>Standard First Aid (SFA) course.</li>
        <li>Advanced First Aid (AFA) course (conducted by Emergencies First Aid & Rescue).</li>
        <li>Advanced Cardiac Life Support (ACLS) course.</li>
        <li>Defensive Driving course (drivers only).</li>
        </ol>

        <h3>Enrichment Certifications</h3>
        <p>Most of our paramedics have the following certification in addition to their essential certifications:</p>
        <ol>
        <li>Intravenous Therapy course.</li>
        <li>AutoPulse® Mechanical Resuscitator course.</li>
        <li>Zoll® R series defibrillator course.</li>
        <li>Philips® MRx defibrillator course.</li>
        </ol>
        <h3>Scope of duties</h3>
        <p>
          Our paramedics can perform the following (not exhaustive):
        </p>
        <ol>
        <li>Resuscitation of a cardiac arrest victim according to BCLS and ACLS principles</li>
        <li>Wound dressing and treatment, and external bleeding management.</li>
        <li>Fracture immobilization to avoid secondary injury</li>
        <li>Spinal management to avoid secondary injury</li>
        <li>Assist physicians and nurses for invasive therapeutic procedures</li>
        <li>Casualty vital signs monitoring</li>
        </ol>
        <div class="gallery_img"><img src="/images/company_crew.JPG" /></div>
      </div>
      <div style="clear:both;"></div>
    </div>

  </div>
  <div id="inner_image"><img src="/images/company-crew.jpg" /></div>
  <div slot="sidebar">
    <enquiry-box />
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
