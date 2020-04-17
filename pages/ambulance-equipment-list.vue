<script>
export default {
  head () {
    return {
      title: 'Ambulance Equipment',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Our ambulances are fully equipped with modern medical equipment and medications necessary for emergency situations. View our full list of ambulance equipment here. '
      }],
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
<div class="site">
  <div id="main_body_area">
    <div id="main_left">
      <div id="left_area">
        <p>We have a hygienic, comfortable, and modern
          <nuxt-link to="/fleet-information/">fleet</nuxt-link> of ambulances extensively equipped with the following in each ambulance:
        </p>
        <div class="inner_service_area">
          <div class="inner_service_box">

            <div class="inner_service_left">
              <div class="service_icon"><img src="/images/eq_icon.png" /></div>
            </div>
            <div class="inner_service_right">
              <h3>Ambulance features</h3>
              <p>Barlight, siren &amp; strobe lights<br /> 220V AC power supply on board<br /> Digital video recorder for the ambulance cabin as well as the road in front<br /> Real time Global Position System (GPS) and GPS
                navigator
                <br /> GPS navigator
              </p>
              <h3>Patient Transfer</h3><p> Wheelchair and stretcher locking devices<br /> Wheelchair Lifts<br /> Wheelchair with drip stand and safety belt<br /> Standard automatic loading stretcher, scoop stretcher, 2-fold stretcher, soft
                stretcher

              </p>
              <h3>Monitors</h3><p> Physiologic monitor (ECG, NIBP & SPO2)<br /> Glucometer to determine blood sugar level<br /> Thermometer – tympanic and ThermoFlash<sup>TM</sup>

              </p>
              <h3>Oxygen and Airway devices</h3><p> Minimum three 10-L aluminium oxygen cylinders, each with an oxygen regulator<br /> Two 2.9-L aluminium oxygen cylinders, each with an oxygen regulator<br /> Oxygen delivery devices<br />                Two self inflating adult and child resuscitation bags <br /> Airway management accessories<br /> Anesthetic grade suction machine (SpencerJet<sup>TM</sup>)<br /> Stethoscope

              </p>
              <h3>Treatment</h3><p> Standard First Aid Bag with first aid items<br /> Medication Bag with over-the-counter medications<br /> Spinal board, head immobilizer, Kendrick Extrication Device (KED) & cervical collar for immobilization
                of spinal injury victim<br /> Traction splint, Blue Splint™ (Spencer™) & Fixo Splint™ (Spencer™) for long bone fracture immobilization<br /> Fire blanket and 2 fire distinguishers<br /> One stainless steel all-purpose scissors<br /> Automated
                External Defibrillator (AED – Philips<sup>TM</sup> HeartStart HS1), for adult & child<br /> External Defibrillator Cardioverter and Cardiac Pacer –Philips MRx<sup>TM</sup> or Zoll<sup>TM</sup>


              </p>
              <h3>Hygiene</h3><p> Personal protection equipment (gowns, surgical masks & gloves)<br /> Disinfectant for equipment & hands<br /> Disposable urinals and vomit bag<br /> Disposable ambulance stretcher cover and drawsheet<br />                Annual Titanium Dioxide coating for disinfection<br /> Monthly silver ion misting for disinfection

              </p>
              <h3>Search and Rescue</h3><p> One powerful LED Pelican<sup>TM</sup> torch light <br /> Petzl
                <sup>TM</sup> Headlamps for night rescue, one for each ambulance crew

              </p>

            </div>

            <div style="clear:both;"></div>
          </div>
        </div>

        <div id="inner_image"><img src="/images/3.jpg" /></div>
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
