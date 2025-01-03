<script>
export default {
  head() {
    return {
      title: 'Equipment for Sale & Rent | AED & Oxygen Cylinders',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Ambulance Medical Service sells and rents certain medical equipment for home use in Singapore, such as oxygen cylinders & AEDs. View more details here.'
      }],
      link: [
        {
          rel: 'canonical',
          href: process.env.baseUrl + this.$route.path + '/'
        },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/sales-purchase/", hreflang: 'x-default' },
        { rel: "alternate", href: "https://www.ambulanceservice.com.sg/sales-purchase/", hreflang: 'en-sg' }
      ]
    }
  }
}
</script>

<template>
  <default-page>
    <h1>Equipment for Sale &amp; Rent</h1>
    <div class="inner_service_area">
      <div class="inner_service_box">
        <h2>
          <div class="service_icon">
            <img src="/images/oxygen-cylinder.png">
          </div>
          <a name="rentOxygen" />Rental of Oxygen Cylinders
        </h2>

        <p>
          AMS offers rental of oxygen cylinders for home care. Our oxygen cylinder is made of aluminium alloy and comes
          with an attached flow regulator.
          It has a carrying handle for easy handling; it does not rust therefore it is not possible for the patient to
          inhale rust particles. Our cylinders come in the following sizes according to the volume of liquid oxygen
          within: 2.9L, 3.4L, 4.6L and 10.5L.
          <br clear="both">
        </p>

        <h3>Rent and Sales of Oxygen Cylinders & Regulartors</h3>
        <table-wrap>
          <table style="width:100%; min-width: 600px">
            <thead>
              <tr>
                <td rowspan="2">
                  <strong>
                    RENTAL<br>
                    (Cylinder + regular)
                  </strong>
                </td>
                <td rowspan="2">
                  RENTAL FEE<br>
                  (max 1 week)
                </td>
                <td rowspan="2">
                  DEPOSIT
                </td>
                <td rowspan="2">
                  TROLLEY
                </td>
                <td colspan="2" style="text-align: center;">
                  DELIVERY CHARGE
                </td>
                <td rowspan="2" style="text-align: center;">
                  SURCHARGE PER WEEK
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">1 way</td>
                <td style="text-align: center;">2 ways</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.9L</td>
                <td style="text-align: center;">$90</td>
                <td style="text-align: center;">$200</td>
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$30</td>
              </tr>
              <tr>
                <td>3.4L w bag</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$200</td>
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$30</td>
              </tr>
              <tr>
                <td>4.6L</td>
                <td style="text-align: center;">$110</td>
                <td style="text-align: center;">$200</td>
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$30</td>
              </tr>
              <tr>
                <td>10.5L or 10L</td>
                <td style="text-align: center;">$120</td>
                <td style="text-align: center;">$300</td>
                <td style="text-align: center;">-</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$50</td>
              </tr>
            </tbody>
          </table>
        </table-wrap>

        <ol>
          <li>Encourage customers to deal with office for Rent or Sales of Oxygen Cylinders and self collection if
            possible.</li>
          <li>Each rental period is 1 week maximum, need to return to office whether utilised or not in or before 1 week
            time.</li>
          <li>To extend the rental after 1 week will be charged same rental fee for another 1 week.</li>
          <li>Deposit will be refundable if the oxygen Is returned in good condition.</li>
          <li>No re-fill cost, rental of another oxygen cylinder is charged according to the rental fee.</li>
          <li>Additional cost for Rental with trolley</li>
          <li>Collection of cylinder will be charged for another 1 way.</li>
          <li>Rental fee (with gst) to issue Green Receipt.</li>
          <li>The deposit (no gst), will be issued in separate Green Receipt.</li>
        </ol>
        <br>

        <table-wrap>
          <table style="width:100%; min-width: 600px">
            <thead>
              <tr>
                <td rowspan="2" style="text-align: center;">
                  <strong>
                    SALES
                  </strong>
                </td>
                <td rowspan="2" style="text-align: center;">
                  CYLINDER
                </td>
                <td rowspan="2" style="text-align: center;">
                  REGULATOR
                </td>
                <td rowspan="2" style="text-align: center;">
                  1 SET
                </td>
                <td rowspan="2" style="text-align: center;">
                  REFILL<br>
                  per cylinder
                </td>
                <td rowspan="2" style="text-align: center;">
                  1 to 1 exchange <br>total top up<br>
                  <strong>2 cylinders</strong>
                </td>
                <td colspan="2" style="text-align: center;">
                  DELIVERY CHARGE
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">1 way</td>
                <td style="text-align: center;">2 ways</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.9L w bag</td>
                <td style="text-align: center;">$320 + $100</td>
                <td style="text-align: center;">$130</td>
                <td style="text-align: center;">$550</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
              </tr>
              <tr>
                <td>3.4L w bag</td>
                <td style="text-align: center;">$350 + $100</td>
                <td style="text-align: center;">$130</td>
                <td style="text-align: center;">$580</td>
                <td style="text-align: center;">$60</td>
                <td style="text-align: center;">$120</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
              </tr>
              <tr>
                <td>4.6L</td>
                <td style="text-align: center;">$420</td>
                <td style="text-align: center;">$130</td>
                <td style="text-align: center;">$550</td>
                <td style="text-align: center;">$70</td>
                <td style="text-align: center;">$140</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
              </tr>
              <tr>
                <td>10.5L ir 10L</td>
                <td style="text-align: center;">$520</td>
                <td style="text-align: center;">$130</td>
                <td style="text-align: center;">$650</td>
                <td style="text-align: center;">$80</td>
                <td style="text-align: center;">$160</td>
                <td style="text-align: center;">$50</td>
                <td style="text-align: center;">$100</td>
              </tr>
            </tbody>
          </table>
        </table-wrap>

        <ol>
          <li>For Refill, will take at least 5 days for collection.</li>
          <li>If customer needs to get cylinder Immediately, would suggest to exchange 1 to 1 and pay for 2 cylinders
            top up.</li>
          <li>Customer will collect back their cylinder when it's filled up and return our cylinder. </li>
        </ol>
        <h3>ALL QUOTES ARE SUBJECT TO GST</h3><br>

        <h3>Details to Provide When Calling Us</h3>
        <p>
          To help us advise you better, please provide us the answers to the following questions when making the
          rental:<br> - What is the medical condition that the patient suffering from? <br> - What oxygen flow rate does
          his doctor prescribe?
        </p>

        <h3>Replacement of depleted oxygen cylinders</h3>
        <p>
          You can contact us 24/7 to replace your depleted oxygen cylinders with full oxygen cylinders.
        </p>
      </div>
      <div class="inner_service_box">
        <h2 id="purchaseAED">
          <div class="service_icon">
            <img src="/images/aed.png">
          </div>
          Sale of Automated External Defibrillator (AED)
        </h2>
        <p style="text-align: center">
          <img src="/images/AED_Small.png" width="250">
        </p>
        <p>
          AMS is the appointed sales agent for HeartSine Automated External Defibrillator (AED). The device comes with a
          8-year warranty provided by HeartSine against device malfunction.
        </p>
        <p>
          Each AED comes with:
        <ol>
          <li>1 lithium battery (non-rechargeable) </li>
          <li>1 pair of adult defibrillation pads</li>
          <li>Optional AED cabinet &mdash; installation included</li>
        </ol>
        </p>
        <p>We also sell consumables such as the <strong>battery and a pair of adult defibrillation pads
            together.</strong></p>
        <p>We do not stock the paediatric defibrillation pads.</p>
      </div>
    </div>

    <template v-slot:sidebar>
      <enquiry-box />
      <address-area />
      <facebook-widget />
    </template>
  </default-page>
</template>
