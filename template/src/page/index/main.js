define('page/index/main', ['common/lib/jquery'], function ($) {

      function init() {
            console.log('init');
            document.getElementById('index').innerHTML = 'main.js is init!';
      }

      return {
            init:init
      }
});