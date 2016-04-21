
$(function() {
    // Scrolls to the selected menu item on the page
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top-50
            }, 1000);
            return false;
        }
        }
    });
});

$(function() {
    var ms_block = '';
    for( i in members['Master Students']) {
        member = members['Master Students'][i];
        ms_block +=  `<div class="col-md-3 text-center">
            <div class="thumbnail">
                <img class="img-responsive" src="` + member.img + `" height="250" width="250" alt="` + member.name + `">
                <div class="caption">
                    <h4>` + member.name + `<br><small>` + member.alias + `</small></h4>
                    <p>` + member.research + `</p>
                </div>
            </div>
        </div>`;
    }
    $('div.ms-students > div:first-child').append(ms_block);
});