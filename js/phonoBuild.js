var projects = {
	'thumbs' : ['p1_s', 'p2_s', 'p3_s', 'p4_s', 'p5_s', 'p6_s', 'p7_s', 'p8_s', 'p9_s', 'p10_s', 'p11_s', 'p12_s', 'p13_s', 'p14_s', 'p15_s', 'p16_s'],

	displayThumbs : function() {
		$("#project-thumbs").append(HTMLprojectStart);

		for (thumb in projects.thumbs) {

			var formattedThumb = HTMLprojectThumb.replace("%data%", projects.thumbs[thumb]);
			$(".project-entry").append(formattedThumb);
		}
	}
};
projects.displayThumbs();

// var projectModal = {
// 	{
// 		"id" : "%modalId",
// 		"header" : "%modalHeader%",
// 		"image" : "%modalImage%",
// 		"footer" : "%modalFooter"
// 	}
// };
