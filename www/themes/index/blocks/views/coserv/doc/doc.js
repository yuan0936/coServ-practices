ctrl.startup = function() {
	ctrl.embed('.viewside', '/coserv/docList', {params:{"_loc":"<%=bi.locale%>", "ngID":"<%=bi.id%>", "byTime":1}});

	$( window ).scroll(function() {
	    var  y = window.pageYOffset;
	    if (y){
	    	ctrl.sel(".gotop").fadeIn(300);
	    }
	    else {
	    	ctrl.sel(".gotop").fadeOut(300);
	    }
	});	 

	if ('<%=bi.client.category%>' === 'mobile') { 
		ctrl.sel(".wrapper").addClass('mobile');
	}
};
