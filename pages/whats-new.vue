<script>
export default {
  head() {
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
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: "x-default" },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/whats-new/", hreflang: "en-sg" }
      ]
    }
  }
}
</script>

<style scoped>
.mb-16 {
  margin-bottom: 4rem;
}

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

<template>
  <default-page>
    <h1>What's New</h1>
    <div class="mb-16">
      <h3>Jan 2023 - Appreciation for Medic Corvin</h3>
      <p>To whom it may concern,</p>
      <p>I’d like to extend my sincere appreciation to Medic Corvin for his patience and professionalism in assisting my
        father, Ibrahim.</p>
      <p>As this was our first time engaging an ambulance for my dad, there were a couple of things that we’ve failed to
        consider. For instance, the narrow spaces in the house for the team to easily manoeuvre. Yet, Corvin and his
        partner was quick to think of ways to navigate around the small spaces.</p>
      <p>It may seem that Corvin was merely doing a job but for caregivers like us, it does help to alleviate some of
        our
        anxiety and frustration.</p>
      <p>With that, I hope you’ll extend my utmost gratitude to Medic Corvin and also the Driver Eugene.</p>
      <p>
        Much appreciation,<br>
        Nora
      </p>
    </div>

    <div class="mb-16">
      <h3>Nov 2022 - Course Recce</h3>
      <p>Hi Keith,</p>
      <p>I didn’t want to hold up your crew after Wednesday night however I wanted to thank you and your team for their
        support and attention while conducting the site recce. We always appreciate the extra effort AMS and your crews
        put in for such a large event and I wanted to ask you to pass along our appreciation and thanks to the crews who
        were present on Wednesday.</p>
      <p>We look forward to working closely with you and your team next week.</p>
      <p>Best regards,</p>
      <p>
        Eddie Singe<br>
        Operations and Business Development Manager
      </p>
    </div>

    <div class="mb-16">
      <h3>Nov 2022 - Customer Feedback - Tax Receipt No: R13918</h3>
      <p>Hi</p>
      <p>We have been assigned with your non-emergency ambulance on 31 October 2022.</p>
      <p>Would like to comment both Ben and Ahmad for their professionalism - patient, detailed, careful, helpful and
        concern.</p>
      <p>Both of them arrived, checked my mum carefully in terms of physical, speech and mobility before transferring to
        the stretcher.</p>
      <p>On board the ambulance, Ben took my mum's BP, blood sugar test and etc each informing my mum before he proceed
        so
        that my mum feels at ease.</p>
      <p>Helpful in informing the staff at the A&E department of my mum's condition upon arrival at CGH.</p>
      <p>Your company is so blessed to have staff so committed to their work and taking good care of the patient.</p>
      <p>Keep up the good work for both Ahmad & Ben - Cheers</p>
      <p>
        Best Regards,<br>
        Tracy
      </p>
    </div>

    <div class="mb-16">
      <h3>Nov 2022 - Compliment on Mohan. 4 November 2022</h3>
      <p>Dear Yvonne,</p>
      <p>We want to thank Mohan for being attentive and proactive.</p>
      <p>
        Last Friday, 4 November 2022, we had multiple transfers from NTFGH to AH Ward 13.<br>
        As both transfers were going to the same ward at the same time, Mohan proactively checked the timings we wanted
        and assisted in conveying NTFGH to stagger the timings.<br>
        That being done, it helped the nursing team better manage the patients admitted to their ward.
      </p>
      <p>Please help us in conveying our appreciation to Mohan.</p>
      <p>Thank you and regards,</p>
      <p>
        Alwyn Oliveiro<br>
        Senior Patient Service Associate, Bed Management Unit<br>
        ALEXANDRA HOSPITAL
      </p>
    </div>

    <div class="mb-16">
      <h3>Oct 2022 - Thank you | Walk-A-Jog (6 Oct)</h3>
      <p>Dear Ambulance Medical Service,</p>
      <p>We would like to thank you for your professional medical support at our school's Walk-A-Jog yesterday. Your
        medical standby and provision of care for students contributed to a successful, fun and meaningful school event.
      </p>
      <p>
        Warmest regards,<br>
        Blangah Rise Primary School
      </p>
    </div>

    <div class="mb-16">
      <h3>Jul 2022 - Deep Appreciation</h3>
      <p>Dear Sir/Ma'am,</p>
      <p>I would like to send my sincere appreciation to both Rul and Reed for taking care of me when I badly crash
        during
        the OCBC Cycle National Championships yesterday.</p>
      <p>Having people with good personality when dealing with patients is just a blessing and lucky to have them.</p>
      <p>Thank you so much and keep safe to everyone.</p>
      <p>Regards,</p>
      <p>Kerwin Mugar Quinquilleria</p>
    </div>

    <div class="col-flex">
      <div class="col">
        <img src="~/assets/images/letter-of-commendation-img.jpg" alt="LETTER OF COMMENDATION">
      </div>
      <div class="col">
        <h3>Oct 2021 - LETTER OF COMMENDATION</h3>
        <p>Dear Sir,</p>
        <p>I wish to commend the professionalism and public spirit shown by your crew, Andy and Ben, when they happened
          to
          be the third vehicle behind, witnessing an accident yesterday afternoon at Ang Mo Kio Ave 5.</p>
        <p>They helped to render first aid to the slightly injured motorcyclist. The ambulance driver also helped to
          direct traffic at the CTE slip road upon the arrival of SCDF ambulance and traffic police.</p>
        <p>They also advised us to notify the police due to injury, though the biker who caused the minor accident was
          not
          in favour of it.</p>
        <p>The instant assistance by your staff helped to ease our anxiety, both victims being first timers. I extend my
          great appreciation to both gentlemen. I also congratulate you on your success in nurturing such excellent
          emergency responders.</p>
        <p>Thank you.</p>
      </div>
    </div>

    <div class="mb-16">
      <h3>Feb 2021 - Letter of Appreciation</h3>
      <p>Hi Ms Soon,</p>
      <p>I am Nurse Suganthi(Transport nurse) from CGH, would like to compliment and express my appreciation to all the
        following staff of Ambulance Medical Services who deal with so much everyday that you work. Also for their
        continuous team work, coordination, and good rapport towards my scheduled assignments. The current COVID
        situation
        has made their job so much harder and tense. Yet your men always serve us with a smiling face, continuous
        support
        and cooperation always. </p>
      <p>At the outset, I take this opportunity to extend my heartfelt appreciation, which is indeed really praise
        worthy.
        Your team members deserve sincere appreciation for accomplishing the assigned tasks smoothly together with me.
        They are as follows:</p>
      <p>Faizal, Jumain, Tony, Ah Jai, Zie, Jack / Loo,Azri,Roslan, Azmi,Shakira, Eugene, Puru, Jim, Ah Seng, Reddy,
        Abu,Raymond, Shanhwani, Yow, Govin.</p>
      <p>Their charismatic character and friendly disposition towards their clients (CGH) instantly make them
        approachable. This allows clients to discuss their needs and seek cooperation freely.</p>
      <p>I believe that their performance will continue to impress clients.</p>
      <p>
        Thank You,<br>
        Suganthi
      </p>
    </div>

    <div class="mb-16">
      <h3>April 2020</h3>
      <p>
        As of April 2020, we have expanded our fleet to 39 ambulances!
      </p>
      <p>
        We are proud to support COVID-19 since February 2020 and have dedicated a section of our fleet to support 993
        transport services of suspect and confirmed cases. Rest assured that to avoid cross-infectivity with our regular
        patients, the COVID team is separate from our regular teams. Our COVID crew is well trained and adheres to
        strict
        personal-protection and sanitisation protocol. Preventive measures have also been ramped up for all regular
        cases.
      </p>
      <p>
        Under new MOH regulations for improving stricter standards for <nuxt-link to="/">private ambulances</nuxt-link>,
        AMS has been accredited for both Emergency Ambulance Services (EAS) and Medical Transport Services (MTS). With
        our
        commitment to maintaining professional services and top-line equipment, we are one of the earliest private
        ambulances to pass accreditation standards!
      </p>
    </div>

    <div>
      <h3>November 2019</h3>
      <p>
        We have received ISO 9001 : 2015 from November 2019. It is awarded to companies that meet requirements for a
        quality management system that consistently meet high standards of service and customer satisfaction. See more
        details at https://www.iso.org/standard/62085.html
      </p>
      <p>
        We have also been promoted from BizSafe Level 3 to BizSafe Level 4!
      </p>
    </div>

    <template v-slot:sidebar>
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </template>
  </default-page></template>
