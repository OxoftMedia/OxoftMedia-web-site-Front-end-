!function(e){e.fn.sidebar=function(i){var s=this;if(s.length>1)return s.each(function(){e(this).sidebar(i)});var n=s.outerWidth(),o=s.outerHeight(),r=e.extend({speed:200,side:"left",range:{left:[-n,0],right:[-n,0],top:[-o,0],bottom:[-o,0]},isClosed:!1,close:!0},i);return r.range=r.range[r.side],s.on("sidebar:open",function(){var e={};e[r.side]=r.range[1],r.isClosed=null,s.stop().animate(e,r.speed,function(){r.isClosed=!1,s.trigger("sidebar:opened")})}),s.on("sidebar:close",function(e){var i={};i[r.side]=r.range[0],r.isClosed=null,s.stop().animate(i,r.speed,function(){r.isClosed=!0,s.trigger("sidebar:closed")})}),s.on("sidebar:toggle",function(e){r.isClosed?s.trigger("sidebar:open"):s.trigger("sidebar:close")}),!r.isClosed&&r.close&&s.hide().trigger("sidebar:close").one("sidebar:closed",function(){e(this).show()}),s},e.fn.sidebar.version="3.0.0"}(jQuery);