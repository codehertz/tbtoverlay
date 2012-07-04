1. require jquery
<script type="text/javascript" src="js/jquery/jquery-1.7.min.js"></script>

2. require tbtoverlay
<script type="text/javascript" src="js/jquery/jquery.extend.tbtoverlay.js"></script>
<link type="text/css" href="js/jquery/jquery.extend.tbtoverlay.css" rel="stylesheet" />

3. bind event
$("#openOverlay").click(function(){
    $.tbtoverlay({
        "width":800,
        "height":600,
        "url":"/ztry/sleep5"
    });
});