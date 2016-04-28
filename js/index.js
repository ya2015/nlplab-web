
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

$(function() {
    var und_block = '';
    for( i in members['Undergraduates']) {
        member = members['Undergraduates'][i];
        und_block +=  `<div class="col-md-3 text-center">
            <div class="thumbnail">
                <div class="caption">
                    <h4>` + member.name + `<br><small>` + member.alias + `</small></h4>
                    <p>` + member.research + `</p>
                </div>
            </div>
        </div>`;
    }
    $('div.undergrad > div:first-child').append(und_block);
});

$(function() {
    var re_block = '';
    for( i in research['Research']) {
        re = research['Research'][i];
        
        re_block +=  `<div class="col-md-4">
            <div class="research-item">
                <span class="fa-stack fa-5x">
                  <i class="fa ` + re.fa + ` text-primary"></i>
                </span>
                <h4><strong>` + re.name_chi + `</strong></h4>
                <h4><strong>` + re.name_eng + `</strong></h4>
                </div>
            </div>`;
        console.log(re_block)
    }
    $('div.research').append(re_block);
});


