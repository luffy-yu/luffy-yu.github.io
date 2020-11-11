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
        var $post = $('.main-block')
        var h = $(window).scrollTop() - $post.position().top
        var total = $post.height() - document.documentElement.clientHeight
        var percent = Math.round(h / total * 100)
        if (percent < 0) percent = 0
        if (percent > 100) percent = 100
        $('.reading-progress-bar').css('width', percent + '%')
    }, passive ? {passive: true} : false)
});