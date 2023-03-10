<template>
  <div id="guidelines" class="guidelines">
    <div class="guidelines__item px-page" identify-item="guideline bottom">
      <div class="guidelines__item" identify-item="guideline bottom">
        <div class="guidelines__item page-wrapper" identify-item="guideline bottom">
          <div class="guidelines__item px-page" identify-item="guideline bottom">
            <div class="guidelines__item" identify-item="guideline bottom">
              <div class="guidelines__item page-wrapper max-w-copy" identify-item="guideline bottom">
                <div class="guidelines__center" identify-item="guideline"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  [identify*="guidelines"] .guidelines {
    position: fixed;
    inset: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  [identify*="guidelines"] .guidelines__item {
    position: relative;
    display: flex;
    flex: 1 0 auto;
  }

  [identify*="guidelines"] .guidelines__item::before {
    content: unset;
  }

  [identify*="guidelines"] .guidelines > .guidelines__item::before {
    content: "site";
  }

  [identify*="guidelines"] .guidelines__item.page-wrapper::before {
    content: "page-wrapper";
  }

  [identify*="guidelines"] .guidelines__item.page-wrapper.max-w-copy::before {
    content: "copy page-wrapper";
  }

  [identify*="guidelines"] .guidelines__item.px-page > .guidelines__item::before {
    translate: 0 -100%;
    content: "px-page";
  }

  [identify*="guidelines"] .guidelines__center {
    margin: 0 auto;
    max-width: 1px;
    flex: 1 0 auto;
  }
</style>
