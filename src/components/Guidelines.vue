<template>
  <div id="guidelines" class="guidelines">
    <div class="guidelines__item gutter" identify-item="bottom">
      <div class="guidelines__item" identify-item="bottom">
        <div class="guidelines__item wrapper" identify-item="bottom">
          <div class="guidelines__item gutter" identify-item="bottom">
            <div class="guidelines__item" identify-item="bottom">
              <div class="guidelines__item wrapper max-copy" identify-item="bottom">
                <div class="guidelines__center" identify-item></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  [identify] .guidelines {
    position: fixed;
    inset: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  [identify] .guidelines__item {
    position: relative;
    display: flex;
    flex: 1 0 auto;
  }

  [identify] .guidelines__item::before {
    display: none;
    content: unset;
  }

  [identify] .guidelines > .guidelines__item::before {
    display: flex;
    content: "Site";
  }

  [identify] .guidelines__item.wrapper::before {
    display: flex;
    content: "wrapper";
  }

  [identify] .guidelines__item.gutter > .guidelines__item::before {
    display: flex;
    translate: 0 -100%;
    content: "gutter";
  }

  [identify] .guidelines__center {
    margin: 0 auto;
    max-width: 1px;
    flex: 1 0 auto;
  }
</style>
