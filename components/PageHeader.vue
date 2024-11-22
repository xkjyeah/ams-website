<script>
export default {
  data() {
    return {
      menuOpened: false
    }
  },
  created() {
    this.$router.afterEach(() => {
      this.menuOpened = false
    })
  }
}
</script>

<template>
  <header id="main_header">
    <div class="site">
      <div id="logo_call_area">
        <div id="logo_area">
          <NuxtLink to="/">
            <img src="/images/logo.png">
          </NuxtLink>
          <div class="certification-logos">
            <img src="/images/bizsafe_enterprise_level_4_thumb.jpg" alt="Biz SAFE Enterprise Level 4" class="cert-logo">
            <img src="/images/qms_vertical_sac_thumb.jpg" alt="QMS Vertical Sac" class="cert-logo">
          </div>
        </div>
        <div id="call_area">
          <div id="call_icon_text_area">
            <div id="call_icon">
              <img src="/images/tele_icon.png">
            </div>
            <div id="call_text_area">
              <div id="call_number">
                <a href="tel:+6562818111">6281&nbsp;8111</a><br>
                <a href="tel:+6562061188">6206&nbsp;1188</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--logo_call_area-->
      <div id="nav_area">
        <div id="cssmenu" :class="{ opened: menuOpened }">
          <button class="toggle-navigation" @click="menuOpened = !menuOpened">
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>
          <ul>
            <PageHeaderLink to="/">
              Home
            </PageHeaderLink>
            <NavMenuList label="About Us">
              <PageHeaderLink to="/companyprofile-crew/">
                Company Profile &amp; Crew
              </PageHeaderLink>
              <PageHeaderLink to="/fleet-information/">
                Fleet Information
              </PageHeaderLink>
              <PageHeaderLink to="/ambulance-equipment-list/">
                Ambulance Equipment List
              </PageHeaderLink>
              <PageHeaderLink to="/whats-new/">
                What's New
              </PageHeaderLink>
              <PageHeaderLink to="/join-us/">
                Jobs
              </PageHeaderLink>
            </NavMenuList>
            <NavMenuList label="Transport">
              <PageHeaderLink to="/transport/">
                Local Transport
              </PageHeaderLink>
              <PageHeaderLink to="/transport/#critically-ill">
                Transport of Critically Ill
              </PageHeaderLink>
              <PageHeaderLink to="/transport/#overseas-transport">
                Overseas Transport
              </PageHeaderLink>
            </NavMenuList>
            <NavMenuList label="Event Standby">
              <PageHeaderLink to="/event-standby/">
                Information
              </PageHeaderLink>
              <PageHeaderLink to="/gallery/">
                Gallery
              </PageHeaderLink>
            </NavMenuList>
            <NavMenuList label="Sales &amp; Rental">
              <PageHeaderLink to="/sales-purchase/">
                Rental of Oxygen Cylinders
              </PageHeaderLink>
              <PageHeaderLink to="/sales-purchase/#purchaseAED">
                Sales of AED
              </PageHeaderLink>
            </NavMenuList>
            <PageHeaderLink to="/contact-us/">
              Contact Us
            </PageHeaderLink>
          </ul>
        </div>
        <div style="clear:both;" />
      </div>
      <!--nav area-->
    </div>
  </header>
</template>
<style>
.certification-logos {
  margin: 10px 0 0;
}

.certification-logos .cert-logo {
  width: 80px !important;
  margin-right: 10px !important;
}
</style>
