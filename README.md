tbtoverlay
==========

1. require jquery
<pre>
<script type="text/javascript" src="js/jquery/jquery-1.7.min.js"></script>
</pre>

2. require tbtoverlay
<pre>
<script type="text/javascript" src="js/jquery/jquery.extend.tbtoverlay.js"></script>
<link type="text/css" href="js/jquery/jquery.extend.tbtoverlay.css" rel="stylesheet" />
</pre>

3. bind event
<pre>
$("#openOverlay").click(function(){
    $.tbtoverlay({
        "width":800,
        "height":600,
        "url":"/ztry/sleep5"
    });
});
</pre>