<template>
<div id="enquiry_box">
  <div id="enquiry_area">
    <div id="title_white">Send us an enquiry</div>
    <div id="white_text">Please fill up the form below and we will get back to you as soon as possible.</div>
    <div id="enquiry">
      <!-- <form action="http://ebasoft.com.sg/activamedia/admin/mailscript.asp" -->
      <form action="http://enquiry.ambulanceservice.com.sg/enquiry"
        method="post" name='form1' id="form1">
        <input type="hidden" name="redirect" value="http://www.ambulanceservice.com.sg/contact-success.html" />
        <input type="hidden" name="redirect_error" value="http://www.ambulanceservice.com.sg/contact-error.html" />
        <label class="enquiry_text_area">
          <input name="name" size="32" type="text" placeholder="Name:" />
        </label>
        <label class="enquiry_text_area">
          <input type="tel" name="telephone" size="32" placeholder="Contact No:" />
        </label>
        <label class="enquiry_text_area">
          <input name="email" size="32" type="email" placeholder="Email:" />
        </label>
        <label class="enquiry_text_area">
          <input name="organization" size="32" type="text" placeholder="Organisation:" />
        </label>
        <label class="enquiry_text_area">
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
  </div>
</div>
</template>

<script>
export default {}
</script>
