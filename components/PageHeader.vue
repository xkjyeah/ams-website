<template>
<header id="main_header">
  <div class="site">
    <div id="logo_call_area">
      <div id="logo_area">
        <a href="index.html"><img src="images/logo.png" /></a>
      </div>
      <div id="call_area">
        <div id="call_icon_text_area">
          <div id="call_icon"><img src="images/tele_icon.png" /></div>
          <div id="call_text_area">

            <div id="call_number">6281&nbsp;8111</div>
          </div>
        </div>

      </div>
    </div>
    <!--logo_call_area-->
    <div id="nav_area">
      <div id="cssmenu">
        <button class="toggle-navigation" onclick="toggleMenu()">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <ul>
          <li :class="{active: page.category == 'home'}">
            <a href="index.html">Home</a>
          </li>
          <li  :class="{active: page.category == 'about'}"
              class="has-sub"><a href="javascript:void(0)">About Us</a>
            <ul>
              <li><a href="companyprofile-crew.html">Company Profile & Crew</a></li>
              <li><a href="fleet-information.html">Fleet Information</a></li>
              <li><a href="ambulance-equipment-list.html">Ambulance Equipment List</a></li>

              <li><a href="whats-new.html">What's New</a></li>
              <li><a href="join-us.html">Join Us</a></li>

            </ul>
          </li>
          <li  :class="{active: page.category == 'transport'}" class="has-sub"><a href="javascript:void(0)">Transport</a>
            <ul>
              <li><a href="transport.html">Local Transport</a></li>

              <li><a href="transport.html#critical-ill">Transport of Critically Ill</a></li>
              <li><a href="transport.html#overSeas">Overseas Transport</a></li>

            </ul>
          </li>
          <li class="has-sub"
           :class="{active: page.category == 'event-standby'}"
           ><a href="javascript:void(0)">Event Standby</a>
            <ul>
              <li><a href="event-standby.html">Information</a></li>

              <li><a href="gallery.html">Gallery</a></li>

            </ul>
          </li>
          <li class="has-sub"
           :class="{active: page.category == 'sales-purchase'}"><a href="javascript:void(0)">Sales & Rental</a>
            <ul>
              <li><a href="sales-purchase.html">Rental of Oxygen Cylinders</a></li>
              <li><a href="sales-purchase.html#purchaseAED">Sales of AED</a></li>

            </ul>
          </li>
          <li  :class="{active: page.category == 'contact'}"><a href="contact-us.html">Contact Us</a></li>

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
  props: ['page']
}
</script>
