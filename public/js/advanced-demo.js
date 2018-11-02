
$(document).ready(function () {
  var pdf = (function() {
    var button = $('#load-pdf');
    var modal = $('#modal-for-pdf');
    var iframe = modal.find('.pdf-viewer').eq(0);
    var modalsTopMargin = 120;
    var resizeHandler;

    function disableButton() {
      button
        .prop('disabled', true)
        .blur();
    }

    function enableButton() {
      button
        .prop('disabled', false)
        .blur();
    }

    function onPageRender(options) {
      iframe
        .contents()
        .get(0)
        .addEventListener('pagerendered', options.callback);
    }

    function openPdfModal() {
      modal.modal('show');
    }

    function resizeIframe() {
      var newHeight = ($(window).innerHeight() || 500) - modalsTopMargin;
      iframe.height(newHeight);
    }

    function responsiveIFrame() {
      $(window)
        .off('resize.responsiveIFrame')
        .on('resize.responsiveIFrame', function () {
          clearTimeout(resizeHandler);

          resizeHandler = setTimeout(resizeIframe, 50);
        });
    }

    function loadPDF(options) {
      function onError() {
        iframe.attr('data-iframe-ready', 'true');
        enableButton();
      }

      function onLoad() {
        iframe.attr('data-iframe-ready', 'true');

        onPageRender({
          callback: function() {
            iframe.attr('data-page-rendered', 'true');
            enableButton();
          }
        });
      }

      iframe
        .off('error.loadPDF')
        .on('error.loadPDF', onError)
        .off('load.loadPDF')
        .on('load.loadPDF', onLoad)
        .attr('src', options.src);
    }

    function onButtonClick(e) {
      e && e.preventDefault();

      disableButton();
      openPdfModal();
      loadPDF({src: $(this).attr('data-src')});
      resizeIframe();
    }

    function bindButton() {
      button
        .off('click.bind')
        .on('click.bind', onButtonClick);
    }

    function init() {
      bindButton();
      responsiveIFrame();
    }

    return {
      init: init
    };
  }());


  pdf.init();

});
