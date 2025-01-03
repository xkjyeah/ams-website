<script setup>
useHead({
  title: 'Fleet Information | Ambulance Medical Service',
  meta: [
    { name: 'description', content: 'Ambulance Medical Service offers pre-hospital care and comfort for our patients. Learn more about the medical equipment and treatment we use for rescue operations here.' },
    { rel: 'alternate', href: 'https://www.ambulanceservice.com.sg/fleet-information/', hreflang: 'x-default' },
    { rel: 'alternate', href: 'https://www.ambulanceservice.com.sg/fleet-information/', hreflang: 'en-SG' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.ambulanceservice.com.sg/fleet-information/' },
  ],
});
</script>

<template>
  <default-page>
    <h1>Fleet Information</h1>
    <p>
      AMS currently owns 60 ambulances that are equipped to the highest standards of pre-hospital care and comfort.
      Here's how our ambulances are different:
    </p>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/eq_icon.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Well-equipped</h2>
          <p>
            Every ambulance is extensively equipped to provide pre-hospital care. Our full equipment list within each
            ambulance can be found <a href="/ambulance-equipment-list/" class="text_link">here.</a>
          </p>
        </div>

        <div style="clear:both;" />
      </div>
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/confort_icon.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Comfortable, quiet</h2>
          <p>Our ambulances are high-roofed and wide bodied to give ample cabin room for our patients and their medics
            looking after them. We sound-proof our vehicles to avoid resonance and provide quieter rides. </p>
        </div>

        <div style="clear:both;" />
      </div>
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/hygenic.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Hygienic</h2>
          <p>Our stretcher mattresses are covered with fresh disposable covers; in addition, every patient is carried on
            a disposable draw sheet to reduce the risk of cross contamination. </p>
          <p>We professionally disinfect our vehicles using state of the art technologies –regular misting with
            Stabilized Silver Ion Complex & annual coating of our interior with Titanium Dioxide (TiO2) to protect our
            patients.</p>
        </div>

        <div style="clear:both;" />
      </div>
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/quality_icon.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Quality-assured</h2>
          <p>
            Our ambulances are equipped with a comprehensive set of equipment capable of monitoring vital signs,
            providing oxygen, performing medical care such as suctioning, head and neck stabilization, spinal
            immobilization, resuscitation etc. We have built
            in stretcher and wheelchair locks with seatbelts to ensure safer rides for our passengers.
          </p>
        </div>

        <div style="clear:both;" />
      </div>
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/realible_icon.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Reliable</h2>
          <p>All our vehicles are tracked by GPS so that we are accountable for our patients at all times.</p>
        </div>

        <div style="clear:both;" />
      </div>
      <div class="inner_service_box">
        <div class="inner_service_left">
          <div class="service_icon">
            <img src="/images/wheelchair_icon.png">
          </div>
        </div>
        <div class="inner_service_right">
          <h2>Wheelchair Lifts</h2>
          <p>We are in the process of installing wheelchair lifts in all our ambulances.</p>
        </div>

        <div style="clear:both;" />
      </div>
    </div>

    <div id="inner_image">
      <img src="/images/fleet_info_img.jpg">
    </div>
    <template v-slot:sidebar>
      <enquiry-box />

      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
