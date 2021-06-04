<script>
export default {
  head () {
    return {
      title: 'Gallery',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service provides medical coverage for events and operations. Browse our gallery here!'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/gallery/", hreflang: 'x-default'},
        {rel: "alternate", href: "https://www.ambulanceservice.com.sg/gallery/", hreflang: 'en-sg'},
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>Gallery</h1>
    <p>
      We have provided medical coverage for hundreds of events. Here are some pictures of our crew in action!
    </p>
    <p>Jump to:</p>
    <ul>
      <li>
        <nuxt-link to="/gallery/#Northeast">
          Northeast Compressport Run 2015
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gallery/#Duathlon">
          Singapore Duathlon 2014
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/gallery/#Olympic">
          Singapore Summer Youth Olympic Games 2010
        </nuxt-link>
      </li>
    </ul>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <h2 id="Northeast">
          <div class="service_icon">
            <img src="/images/gallery_icon.png">
          </div>
          Northeast Compressport Run 2015
        </h2>
        <div class="gallery_img">
          <img src="/images/sport1.jpg">
        </div>
        <p>We welcome our prominent visitor, Mr Teo Chee Hean, to our humble First Aid Tent.</p>
        <div
          id="buggy"
          class="gallery_img"
        >
          <img src="/images/sport2.jpg">
        </div>
        <p>Check out the unlimited capacity of our buggy!</p>
        <div class="gallery_img">
          <img src="/images/sport3.jpg">
        </div>
        <p>AMS will be with you, right up to the end!</p>

        <div style="clear:both;" />
      </div>
    </div>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <h2 id="Duathlon">
          <div class="service_icon">
            <img src="/images/gallery_icon.png">
          </div>
          Singapore Duathlon 2014
        </h2>
        <div class="gallery_img">
          <img src="/images/duathlon2014 3.jpg">
        </div>
        <p>Our comfortable First Aid Tent has everything the weary athlete requires. </p>
        <div class="gallery_img">
          <img src="/images/duathlon2014 1.jpg">
        </div>
        <p>Can you see our portable workstation behind our medic? It is fully equipped to provide quick medical relief!</p>
        <div class="gallery_img">
          <img src="/images/duathlon2014 2.jpg">
        </div>
        <p>
          Our privacy screens are so multi-purpose, they can even shade the participants from the sun! Our safari beds are a fixture at most sports events. They are covered with fresh clean sheets and cushy inflatable pillows for the weary athletes to sink
          into. Come take a break!
        </p>
      </div>
    </div>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <h2 id="Olympic">
          <div class="service_icon">
            <img src="/images/gallery_icon.png">
          </div>
          Singapore Summer Youth Olympic Games 2010
        </h2>
        <div class="gallery_img">
          <img src="/images/YOG 2010.jpg">
        </div>
        <p>That’s us on national TV!</p>
      </div>
    </div>
    <div slot="sidebar">
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </div>
  </default-page>
</template>
