<script>
export default {
  head: {
    title: 'Company & Staff Profile',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service provides 24/7 ambulance services with professional paramedics trained to handle a range of medical emergencies. Find out more about our company and staff here!'
      }
    ]
  }
}
</script>

<template>
<default-page>
  <p>Ambulance Medical Service Pte Ltd (AMS) is a private limited company providing ambulance service in Singapore since 1999.
  </p>
  <div class="inner_service_area">
    <div class="inner_service_box">
      <div class="inner_service_left">
        <div class="service_icon"><img src="/images/our-director.png" /></div>
      </div>
      <div class="inner_service_right">
        <h2>Our Director</h2>
        <p>The company is led by Dr Sim Kah Ming, a senior doctor specializing in Anaesthesia and Intensive Care Medicine, who is relentless in maintaining the highest quality of pre-hospital care. We have ownership of all our 20 ambulances and employ
          16 teams of ambulance crew. As a responsible pre-hospital healthcare provider, AMS is covered with professional indemnity and public liability insurance of S$1,000,000 & S$500,000 respectively. AMS is GST registered with a paid up capital
          of S$250,000.</p>
      </div>
      <div style="clear:both;"></div>
    </div>
    <div class="inner_service_box">
      <div class="inner_service_left">
        <div class="service_icon"><img src="/images/our-crew.png" /></div>
      </div>
      <div class="inner_service_right">
        <h2 id="our-crew">Our Crew</h2>
        <p><strong>Experienced, professionally qualified staff</strong></p>
        <p>In AMS, the drivers and paramedics work together to ensure a continuous chain of survival for our patients. Hence we believe in continually training our staff to equip them with the skills necessary for managing medical emergencies.</p>
        <p>Every ambulance team will comprise of a Driver and a Paramedic. Our paramedics have varying levels of training from Level 1 to Level 3.<br></p>
        <p><strong>Basic competencies</strong></p>
        <p>
          The following are the basic competencies of paramedics of each level:</p>
        <p>
          Level 1: Paramedic Basic Level
        </p>
        <ul>
          <li>Basic Health Sciences</li>
          <li>Assessment of a casualty and continuous monitoring</li>
          <li>Casualty Aid</li>
        </ul>
        <p>
          Level 2: Paramedic Intermediate Level
        </p>
        <li>Additional Knowledge Depth and Clinical experience
        </li>
        </ol>
        <p>
          Level 3: Paramedic Qualification Level
        </p>
        <ul>
          <li>Specialized knowledge in trauma and medical emergencies</li>
        </ul>
        <p><strong>Medical Certifications</strong></p>
        <p>Most of our paramedics have the following certification:</p>
        <ul>
          <li>Basic and Advanced First Aid</li>
          <li>Basic Cardiac Life Support (BCLS)</li>
          <li>Advance Cardiac Life Support (ACLS) </li>
          <li>International Trauma Life Support (ITLS)</li>
          <li>Training in Intravenous therapy</li>
        </ul>
        <p>Our ambulance drivers are also certified <strong>Emergency Medical Technicians (EMT).</strong> </p>
        <p><strong>Scope of duties</strong></p>
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
    <whats-new-widget />
    <enquiry-box />
    <address-area />
    <facebook-widget />
  </div>
</default-page>
</template>
