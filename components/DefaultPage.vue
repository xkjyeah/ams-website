<template>
  <div class="site">
    <div id="main_body_area">
      <div id="main_left">
        <div id="left_area">
          <slot />
        </div>
      </div>
      <div id="main_right">
        <div id="right_area">
          <slot name="sidebar" />
        </div>
      </div>
      <br clear="both">
    </div>
  </div>
</template>
