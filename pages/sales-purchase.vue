<script>
export default {
  head: {
    title: 'Sales & Rental',
    category: 'sales-purchase',
  }
}
</script>

<template>
<div class="site">
  <div id="main_body_area">
    <div id="main_left">
      <div id="left_area">
        <div class="inner_service_area">
          <div class="inner_service_box">
            <h2>
                <div class="service_icon"><img src="images/oxygen-cylinder.png" /></div>
                <a name="rentOxygen"></a>Rental of Oxygen Cylinders
              </h2>

            <p><img src="images/oxygen cylinder.jpg" width="200" border="0" hspace="15" vspace="10" align="left" /> AMS offers rental of oxygen cylinders for home care. Our oxygen cylinder is made of aluminium alloy and comes with an attached flow regulator.
              It has a carrying handle for easy handling; it does not rust therefore it is not possible for the patient to inhale rust particles. Our cylinders come in the following sizes according to the volume of liquid oxygen within: 2.9L, 4.6L and
              10.5L.
              <br clear="both" />
            </p>


            <table-wrap>
            <table style="width:100%; min-width: 600px">
              <tbody>
                <tr>
                  <td rowspan="2" style="text-align:center;"><strong><i>Cylinder Size <br />
(Liquid<br />Volume<br /> in Litres)
</i></strong></td>
                  <td rowspan="2" style="text-align:center;"><strong>Pressure when full<br />(In Atm)</strong></td>
                  <td rowspan="2" style="text-align:center;"><strong>Volume of Gaseous O2 <br />(in Litres)</strong></td>
                  <td colspan="3" style="text-align:center;"><strong><i>Approximate</i> Duration based on Flow <br />(Litres/minute)</strong></td>

                </tr>
                <tr>

                  <td style="text-align:center;"><strong>2</strong></td>
                  <td style="text-align:center;"><strong>5</strong></td>
                  <td style="text-align:center;"><strong>10</strong></td>
                </tr>
                <tr>

                  <td style="text-align:center;">2.9</td>
                  <td style="text-align:center;">134 </td>
                  <td style="text-align:center;">388.6</td>
                  <td style="text-align:center;">1 hr(s) 37 min(s)</td>
                  <td style="text-align:center;">0 hr(s) 38 min(s)</td>
                  <td style="text-align:center;">0 hr(s) 19 min(s)</td>
                </tr>
                <tr>

                  <td style="text-align:center;">4.6</td>
                  <td style="text-align:center;">134 </td>
                  <td style="text-align:center;">616.4</td>
                  <td style="text-align:center;">2 hr(s) 34 min(s)</td>
                  <td style="text-align:center;">1 hr(s) 01 min(s)</td>
                  <td style="text-align:center;">0 hr(s) 30 min(s)</td>
                </tr>
                <tr>

                  <td style="text-align:center;">10</td>
                  <td style="text-align:center;">134 </td>
                  <td style="text-align:center;">1340</td>
                  <td style="text-align:center;">5 hr(s) 35 min(s)</td>
                  <td style="text-align:center;">2 hr(s) 14 min(s)</td>
                  <td style="text-align:center;">1 hr(s) 07 min(s)</td>
                </tr>
              </tbody>
            </table>
            </table-wrap>
            <h3>Details to Provide When Calling Us</h3>
            <p>
              To help us advise you better, please provide us the answers to the following questions when making the rental:<br> - What is the medical condition that the patient suffering from? <br> - What oxygen flow rate does his doctor prescribe?


            </p>
            <h3>Pricing Schedule</h3>
            <p>
              The rental fee of each cylinder varies from <strong>$60 - $100</strong> depending on the size of the cylinder. There will be no charge if clients pick up the oxygen cylinder from our warehouse; alternatively a delivery charge of $30-40 will
              be imposed.
            </p>
            <h3>Replacement of depleted oxygen cylinders</h3>
            <p>
              You can contact us 24/7 to replace your depleted oxygen cylinders with full oxygen cylinders.
            </p>
          </div>
          <div class="inner_service_box">
            <h2 id="purchaseAED">
                <div class="service_icon"><img src="images/aed.png" /></div>
                Sale of Automated External Defibrillator (AED)
              </h2>
            <p style="text-align: center">
              <img src="images/AED_Small.png" width="250" />
            </p>
            <p>
              AMS is the appointed sales agent for HeartSine Automated External Defibrillator (AED). The device comes with a 7-year warranty provided by HeartSine against device malfunction.
            </p>
            <p>Each AED comes with:<br> - 1 lithium battery (non-rechargeable) <br> - 1 pair of adult defibrillation pads<br>
            </p>
            <p>We also sell consumables such as the <strong>battery and a pair of adult defibrillation pads together.</strong></p>
            <p>We do not stock the paediatric defibrillation pads.</p>
          </div>
        </div>
        <!--<div id="bottom_call_action_area">
                      <div id="bottom_call_action_text">call our <span>hotline</span> at</div>
                        <div id="bottom_call_number"><a href="tel:6281 8111">6281 8111</a></div>
                    <div style="clear:both;"></div>
                    </div>-->

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
