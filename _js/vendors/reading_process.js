$(document).ready(function () {
    if (!$('.reading-progress-bar').length) return
    var passive = false
    try {
        var opts = Object.defineProperty({}, 'passive', {
            get: function () {
                passive = true
            }
        })
        window.addEventListener("test", null, opts)
    } catch (e) {
    }
    window.addEventListener('scroll', function () {
        var $landing = $('#landing')
        var $main = $('.main-block')
        var h = $landing.height() + $(window).scrollTop() - $main.position().top
        var total = document.documentElement.scrollHeight - document.documentElement.clientHeight
        var percent = Math.round(h / total * 100)
        if (percent < 0) percent = 0
        if (percent > 100) percent = 100
        $('.reading-progress-bar').css('width', percent + '%')
    }, passive ? {passive: true} : false)
});