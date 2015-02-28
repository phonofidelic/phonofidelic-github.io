var HTMLprojectStart = '<div class="project-entry col-md-12"></div>';
var HTMLprojectTitle = '<h2>Projects</h2>';
var HTMLprojectThumb = '<div class="col-xs-1 col-sm-1 col-md-1"><img src="images/%modalImage%.jpg" data-toggle="modal" data-target="%modalId%" class="thumb"></div>';

var HTMLmodalStart = '<div class="modal-entry">';
var HTMLmodal = '<div class="modal fade" id="%modalLink%" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="myModalLabel">"%modalTitle%"</h4></div><div class="modal-body"><img src="%modalImage%" class="img-responsive"></div><div class="modal-footer"></div></div></div></div>';

/*var HTMLprojectNavNext = '<a href="%nextProj%" data-target="%modalId%"><span class="glyphicon glyphicon-circle-arrow-right"></span></a>';
var HTMLprojectNavPrev = '<a href="%prevProj%"><span class="glyphicon glyphicon-circle-arrow-left"></span></a>';*/

var HTMLprojectNavNext = '<span class="glyphicon glyphicon-circle-arrow-right"></span>';
var HTMLprojectNavPrev = '<span class="glyphicon glyphicon-circle-arrow-left"></span>';

var HTMLprojectNav = '<nav> <ul class="pagination"> <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li> <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li> <li><a href="#">2</a></li> <li><a href="#">3</a></li> <li><a href="#">4</a></li> <li><a href="#">5</a></li> <li> <a href="#" aria-label="Next"> <span aria-hidden="true">&raquo;</span> </a> </li></ul> </nav>';