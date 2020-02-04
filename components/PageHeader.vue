<template>
<header id="main_header">
  <div class="site">
    <div id="logo_call_area">
      <div id="logo_area">
        <nuxt-link to="/"><img src="/images/logo.png" /></nuxt-link>
        <div class="certification-logos">
          <img src="/images/bizsafe_enterprise_level_4_thumb.jpg" alt="Biz SAFE Enterprise Level 4" class="cert-logo" />
          <img src="/images/qms_vertical_sac_thumb.jpg" alt="QMS Vertical Sac" class="cert-logo"/>
        </div>
      </div>
      <div id="call_area">
        <div id="call_icon_text_area">
          <div id="call_icon"><img src="/images/tele_icon.png" /></div>
          <div id="call_text_area">

            <div id="call_number">6281&nbsp;8111</div>
          </div>
        </div>

      </div>
    </div>
    <!--logo_call_area-->
    <div id="nav_area">
      <div id="cssmenu" :class="{opened: menuOpened}">
        <button class="toggle-navigation" @click="menuOpened = !menuOpened">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <ul>
          <nuxt-link tag="li" active-class="active" to="/"><a>Home</a></nuxt-link>
          <NavMenuList label="About Us">
            <nuxt-link tag="li" active-class="active" to="/companyprofile-crew"><a>Company Profile &amp; Crew</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/fleet-information"><a>Fleet Information</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/ambulance-equipment-list"><a>Ambulance Equipment List</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/whats-new"><a>What's New</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/join-us"><a>Jobs</a></nuxt-link>
          </NavMenuList>
          <NavMenuList label="Transport">
            <nuxt-link tag="li" active-class="active" to="/transport"><a>Local Transport</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/transport#critically-ill"><a>Transport of Critically Ill</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/transport#overseas-transport"><a>Overseas Transport</a></nuxt-link>
          </NavMenuList>
          <NavMenuList label="Event Standby">
            <nuxt-link tag="li" active-class="active" to="/event-standby"><a>Information</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/gallery"><a>Gallery</a></nuxt-link>
          </NavMenuList>
          <NavMenuList label="Sales &amp; Rental">
            <nuxt-link tag="li" active-class="active" to="/sales-purchase"><a>Rental of Oxygen Cylinders</a></nuxt-link>
            <nuxt-link tag="li" active-class="active" to="/sales-purchase#purchaseAED"><a>Sales of AED</a></nuxt-link>
          </NavMenuList>
          <nuxt-link tag="li" active-class="active" to="/contact-us"><a>Contact Us</a></nuxt-link>
        </ul>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--nav area-->
  </div>
</header>
</template>

<script>
export default {
  data () {
    return {
      menuOpened: false
    }
  },
  created () {
    this.$router.afterEach(() => {
      this.menuOpened = false
    })
  }
}
</script>

<style>
  .certification-logos {
    margin: 10px 0 0;
  }

  .certification-logos .cert-logo {
    width: 80px !important;
    margin-right: 10px !important;
  }
</style>
