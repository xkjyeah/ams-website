<script>
export default {
  title: 'Contact Us',
  category: 'contact',
}
</script>

<template>
<div class="site">
  <div id="main_body_area">
    <div id="main_left">
      <div id="left_area">
        <div id="enquiry" style="margin:0 0 50px 0 !important;">
          <form action="http://enquiry.ambulanceservice.com.sg/enquiry"
            method="post" name='form1' id="form1">

            <input type="hidden" name="redirect" value="http://www.ambulanceservice.com.sg/contact-success.html" />
            <label class="enquiry_text_area">
              <span>Name:</span>
              <input name="name" size="32" type="text" placeholder="John" />
            </label>
            <label class="enquiry_text_area">
              <span>Contact No:</span>
              <input type="tel" name="telephone" size="32" placeholder="6123 4567" />
            </label>
            <label class="enquiry_text_area">
              <span>Email:</span>
              <input name="email" size="32" type="email" placeholder="john@example.com" />
            </label>
            <label class="enquiry_text_area">
              <span>Organization:</span>
              <input name="organization" size="32" type="text" placeholder="ACME Corporation" />
            </label>
            <label class="enquiry_text_area">
              <span>Service:</span>
              <select name="service">
                <option selected="selected">Services (Please select one)</option>
                <option value="Local Transport">Local Transport</option>
                <option value="Transport of Critically Ill">Transport of Critically Ill</option>
                <option value="Overseas Transport">Overseas Transport</option>
                <option value="Event StandBy">Event StandBy</option>
                <option value="Rent Oxygen Cylinders">Rent Oxygen Cylinders</option>
                <option value="Purchase AED">Purchase AED</option>
              </select>
            </label>
            <label class="enquiry_text_area">
              <span>Message:</span>
              <textarea name="message" placeholder="Message"></textarea>
            </label>

            <div class="g-recaptcha" data-sitekey="6LcZNygTAAAAAKPt757U3VcKOzCXGkLyl2sC2jCp"></div>

            <label class="enquiry_text_area">
              <button type="submit">
                Submit
              </button>
            </label>
          </form>
          <div style="clear:both;"></div>
        </div>

        <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.737575813785!2d103.88555031533105!3d1.3336209119974474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da178daeef4207%3A0x5d4be4b51a1b033!2sCitimac+Industrial+Complex!5e0!3m2!1sen!2ssg!4v1469789694051"
              width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
          <div style="clear:both;"></div>
        </p>

        <!--<div id="bottom_call_action_area" style="margin:30px 0 0 0;">
                          	<div id="bottom_call_action_text">call our <span>hotline</span> at</div>
                              <div id="bottom_call_number"><a href="tel:6281 8111">6281 8111</a></div>
                          <div style="clear:both;"></div>
                          </div>-->
      </div>
    </div>
    <div id="main_right">
      <div id="right_area">
        <whats-new-widget />
        <address-area />
        <facebook-widget />
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</div>
</template>
