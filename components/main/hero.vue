<template>
  <div class="container mx-auto py-4">
    <div class="flex items-center flex-col">
      <div class="m-image rounded-full mx-auto overflow-hidden">
        <img width="550" height="550" src="../../public/mohin.jpg" alt="mohin-photo" />
      </div>
      <div class="intro">
        <h2><em>Hi.</em> I am Mohin</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.m-image {
  width: 280px;
  height: 280px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.intro {
  h2 {
    font-size: 48px;
    line-height: 1.2;
    text-align: center;
    em {
      margin-top: -72px;
      font-size: 172px;
      line-height: 0.9;
      letter-spacing: -12px;
      text-shadow: 9px -9px 0 #fff;
      display: block;
      font-weight: 700;
      font-style: normal;
    }
  }
}
</style>
