<script>
export default {
  head: {
    title: 'Information',
    category: 'event-standby',
  }
}
</script>

<template>
<div class="site">
  <div id="main_body_area">
    <div id="main_left">
      <div id="left_area">
        <p>Ambulance Medical Services has been providing medical standby for many years and our experience will be invaluable to help you develop a customized medical coverage and patient evacuation plan. You can trust our meticulous planning to ensure the
          safety of your participants.
        </p>
        <p>Find out more about the equipment in our ambulances
          <nuxt-link to="/ambulance-equipment-list">here</nuxt-link>
          and our ambulance fleet
          <nuxt-link to="/fleet-information">here</nuxt-link>.
        </p>
        <div class="inner_service_area">
          <h2>
                <div class="service_icon"><img src="images/event.png" /></div>
                Pricing Schedule
              </h2>
          <table style="width:100%;">
            <thead>
              <tr>
                <th style="width: 20%; text-align:center;">Services</th>
                <th style="width: 40%; text-align:center;"><strong>Office Hours</strong><br> (9am - 5pm, weekdays)</th>
                <th style="width: 40%; text-align:center;"><strong>After Office Hours</strong><br>(5pm - 9am weekdays,<br> weekends and public holidays)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="3"><b>Basic Standby for Events</b></td>
              </tr>
              <tr>
                <td style="text-align:center;"><b>1 ambulance team</b><br />1 ambulance, 1 Driver,<br /> 1 Paramedic level 1-3</td>
                <td style="text-align:center;"><strong>$50 – $70</strong> per hour<br />Evacuation <b>$80</b> per trip</td>
                <td style="text-align:center;"><b>$70 – $100</b> per hour<br />Evacuation <strong>$80</strong> per trip</td>
              </tr>
              <tr>
                <td style="text-align:center;"><strong>Multiple ambulance teams </strong></td>
                <td colspan="2">Special rates available</td>
              </tr>
              <tr>
                <td colspan="3"><b>Additional Equipment for Major Sports Events</b></td>
              </tr>
              <tr>
                <td style="text-align:center;"><strong>Additional Manpower</strong></td>
                <td colspan="2">
                  <ul>
                    <li>Extra Paramedic level 1 - 3</li>
                    <li>Nurse</li>
                    <li>Doctor</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style="text-align:center;"><strong>Mobile Medical Team(s)</strong></td>
                <td colspan="2">
                  <ul>
                    <li>All Terrain
                      <nuxt-link to="/gallery#buggy">Buggies</nuxt-link>
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
                    <img src="images/buggy-small.jpg" style="" />
                    <figcaption>
                      All terrain buggies to reach casualties fast
                    </figcaption>
                  </figure>
                </td>
              </tr>
              <tr>
                <td style="text-align:center;"><strong>Medical Post</strong></td>
                <td colspan="2" style="text-align:left;">
                  <ul>
                    <li>First aid trolley with vital monitor</li>
                    <li>Safari camp bed(s) with privacy screen</li>
                    <li>Spinal board</li>
                    <li>Litter carrier - lightweight casualty transport system that allows one person to transport a casualty strapped to a stretcher, and also performs as a litter stand in the medical station</li>
                    <li><a href="http://www.zoll.com/medical-products/cardiac-support-pump/autopulse/" target="new" class="text_link">AutoPulse</a> – automated CPR machine that allows continuous CPR while transporting a patient on a stretcher
                      <br/><img src="images/zoll-autopulse-small.jpg" class="img-me" />
                    </li>
                    <li>
                      <a href="http://caervest.com/" target="new" class="text_link">Caervest</a> - portable, core body cooling device for heatstroke/cardiac arrest victim
                      <br/><img src="images/caervest-small.jpg" class="img-lg" />
                    </li>
                    <li>External Defibrillator Cardioverter and Cardiac Pacer &mdash; Philips MRx<sup>TM</sup> or Zoll<sup>TM</sup>
                      <br/>
                      <img src="images/mrx-small.jpg" class="img-me" />
                      <img src="images/zoll-r-series-small.jpg" class="img-lg" />
                    </li>
                  </ul>

                </td>
              </tr>
            </tbody>
          </table>
          <p>
            All prices quoted are subject to GST
          </p>
          <div id="title_Purple_big_noline">Testimonials</div>

          <div id="testimonial_area">
            <blockquote>
              “Together, we have successfully organized AMC 2016 and team AMS (Yvonne and Dr Sim) have been right there, helping out wherever and whenever needed during the trial run and actual event day. The operation of this event was smooth and well thought through
              with your expertise. Everything came together, and we are sincerely appreciative.”
            </blockquote>
          </div>
          <div id="testimonial_area">
            <blockquote>
              “A special thank you to the wonderful medical support team at the first aid tent, especially the medic in-charge. It was abundantly clear that they were highly experienced in treating sports athletes and were at all times truly professional with their
              treatment and advice. Likewise, we very much appreciated your follow-up telephone call today with us!”
            </blockquote>
          </div>
          <div class="gallery_img" style="margin:0 0 20px 0;"><img src="images/eventstandby_new2.JPG" /></div>
          <div class="gallery_img"><img src="images/eventstandby_new.JPG" /></div>
          <div class="text_justify" style="text-align:center;">You can count on US!</div>
        </div>

        <div id="inner_image"><img src="images/3.jpg" /></div>
      </div>
    </div>
    <div id="main_right">
      <div id="right_area">
        <whats-new-widget />
        <enquiry-box />
        <address-area />
        <facebook-widget />
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</div>
</template>
