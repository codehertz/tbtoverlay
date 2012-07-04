$.extend({
    tbtoverlay : function(p) {
        var divTbtOverlay = $("#tbtoverlay");
        if (divTbtOverlay == undefined || divTbtOverlay.length == 0) {
            divTbtOverlay = $.tbtoverlayCreateOverlay();
            $("body").append(divTbtOverlay);
        }

        var iFrame = divTbtOverlay.find("iframe");
        iFrame.attr({
            "width" : p.width,
            "height" : p.height,
            "src" : p.url
        }).css({
            "width" : p.width + "px",
            "height" : p.height + "px"
        });

        divTbtOverlay.css({
            "display" : "block"
        });
    },

    tbtoverlayCreateOverlay : function() {
        var divTbtOverlay = $("<div id='tbtoverlay'></div>");
        var divD1Table = $("<div class='d1-table'></div>");
        var divD2Cell = $("<div class='d2-cell'></div>");
        var divLoader = $("<div class='loader'></div>");
        var iFrame = $("<iframe class='iframe'></iframe>");
        var divClose = $("<div class='close'></div>");

        iFrame.load(function() {
            if (divTbtOverlay.css("display") == "block") {
                divLoader.css({
                    "display" : "none"
                });
                iFrame.css({
                    "display" : "inline-block"
                });
                divClose.css({
                    "display" : "inline-block"
                });
            }
        });

        divD2Cell.append(divLoader);
        divD2Cell.append(iFrame);
        divD2Cell.append(divClose);
        divD1Table.append(divD2Cell);
        divTbtOverlay.append(divD1Table);

        divTbtOverlay.click(function() {
            divTbtOverlay.css({
                "display" : "none"
            });
            iFrame.css({
                "display" : "none"
            });
            divClose.css({
                "display" : "none"
            });
            divLoader.css({
                "display" : "inline-block"
            });
        });

        return divTbtOverlay;
    }

});
