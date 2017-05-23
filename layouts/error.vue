<script>
export default {
  title: '404 Error',
  category: '',
}
</script>
<template>
<default-page>
  <div id="left_area">
    <div id="enquiry" style="margin:0 0 20px 0 !important;">
      <table border="0" width="90%" cellspacing="0" cellpadding="0" style="border:none; text-align:left;">
        <tbody>
        <tr style="border:none;text-align:left;">
          <td height="20" style="border:none;"></td>
        </tr>
        <tr style="border:none;text-align:left;">
          <td style="border:none;text-align:left;"><span style="font-size:20px; line-height:50px; text-align:left;">The requested page was not found</span></td>
        </tr>
        <tr style="border:none;text-align:left;">
          <td height="20" style="border:none;"></td>
        </tr>
        <tr style="border:none;text-align:left;">
          <td style="border:none;text-align:left;"><span style="font-size:16px; line-height:22px;">Over time there have been changes to the architecture of this web server and despite our best efforts some older links may bring you to this page.</span></td>
        </tr>
        <tr style="border:none;text-align:left;">
          <td height="20" style="border:none;"></td>
        </tr>
        <tr style="border:none;">
          <td style="font-size:16px; line-height:22px;border:none;text-align:left;">
            <b>You may not be able to visit this page because of:</b>
            <ul type="disc">
              <li>an out-of-date bookmark/favorite</li>
              <li>a search engine that has an <b>out-of-date listing for this site</b></li>
              <li>a <b>mistyped address</b> you have <b>no access</b> to this page</li>
              <li>the requested resource was not found</li>
              <li>an error has occurred while processing your request</li>
            </ul>
          </td>
        </tr>
        <tr style="border:none;">
          <td height="20" style="border:none;"></td>
        </tr>
        <tr style="border:none;">
          <td style="border:none;text-align:left;">
            <nuxt-link to="/">Return to the homepage</nuxt-link>
          </td>
        </tr>
        <tr style="border:none;">
          <td height="20" style="border:none;"></td>
        </tr>
      </tbody>
      </table>
      <div style="clear:both;"></div>
    </div>
    <div class="inner_service_box">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.737575813785!2d103.88555031533105!3d1.3336209119974474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178daeef4207%3A0x5d4be4b51a1b033!2sCitimac+Industrial+Complex!5e0!3m2!1sen!2ssg!4v1469789694051"
          width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
      <div style="clear:both;"></div>
    </div>

    <div id="bottom_call_action_area" style="margin:30px 0 0 0;">
      <div id="bottom_call_action_text">call our <span>hotline</span> at</div>
      <div id="bottom_call_number"><a href="tel:6281 8111">6281 8111</a></div>
      <div style="clear:both;"></div>
    </div>
  </div>
  <!-- left area -->

  <div slot="sidebar">
    <div id="right_area">

      <div class="address_gradient" style="margin:0 0 20px 0 !important;">
        <div id="address_area">
          <div class="address_block">
            <div id="title_Purple_normal">
              Ambulance Medical Service
            </div>
            <div id="address_black">
              605 Macpherson Road, #01-10 Citimac, Singapore 368239
            </div>
            <div id="address_black">
              <div class="tele_block">
                <div class="tele_name">Tel</div>
                <div class="semi_col">:</div>
                <div class="tele_no">(65) 6281 8111 (24-hr Hotline and General Enquiries)</div>
                <div style="clear:both;"></div>
              </div>
              <div class="tele_block">
                <div class="tele_name">Tel</div>
                <div class="semi_col">:</div>
                <div class="tele_no">(65) 6281 3132 (General Enquiries during Office Hours)</div>
                <div style="clear:both;"></div>
              </div>
            </div>
            <div id="address_black">
              <div class="tele_block">
                <div class="tele_name">Fax</div>
                <div class="semi_col">:</div>
                <div class="tele_no">(65) 6281 1357</div>
                <div style="clear:both;"></div>
              </div>
              <div class="tele_block">
                <div class="tele_name">Email</div>
                <div class="semi_col">:</div>
                <div class="tele_no"><a href="mailto:mail@ambulanceservice.com.sg">mail@ambulanceservice.com.sg</a></div>
                <div style="clear:both;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="iframe_facebook">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAMS-Ambulance-Medical-Service-Pte-Ltd-587840834594309%2F&width=336&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
      </div>
    </div>
  </div>
</default-page>
</template>
