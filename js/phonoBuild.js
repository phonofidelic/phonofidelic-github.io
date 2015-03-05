var headerContent = {
	'text' : 'Phonofidelic is a design project started by Chris Clemons and is dedicated to making quality design for bands, booking agencies and clubs. The main focus is on screen-printed concert posters and flyers, album art, illustrations etc.<br> welcome!<br><div align="right">/Christopher Clemons</div>',

	displayHeaderContent : function() {
		var formattedHeaderContent = headerContent.text;
		$("#header-content").append(formattedHeaderContent);
	}
};
headerContent.displayHeaderContent();

var projects = {
	'thumbs' : ['p1_s', 'p2_s', 'p3_s', 'p4_s', 'p5_s', 'p6_s', 'p7_s', 'p8_s', 'p9_s', 'p10_s', 'p11_s', 'p12_s', 'p13_s', 'p14_s', 'p15_s', 'p16_s'],
	'modals' : [
	{
		"id" : "#p1",
		"link" : "p1",
		"header" : "Vetet 4",
		"image" : "images/p1.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p2",
		"link" : "p2",
		"header" : "%modalHeader%",
		"image" : "images/p2.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p3",
		"link" : "p3",
		"header" : "%modalHeader%",
		"image" : "images/p3.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p4",
		"link" : "p4",
		"header" : "%modalHeader%",
		"image" : "images/p4.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p5",
		"link" : "p5",
		"header" : "%modalHeader%",
		"image" : "images/p5.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p6",
		"link" : "p6",
		"header" : "%modalHeader%",
		"image" : "images/p6.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p7",
		"link" : "p7",
		"header" : "%modalHeader%",
		"image" : "images/p7.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p8",
		"link" : "p8",
		"header" : "%modalHeader%",
		"image" : "images/p8.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p9",
		"link" : "p9",
		"header" : "%modalHeader%",
		"image" : "images/p9.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p10",
		"link" : "p10",
		"header" : "%modalHeader%",
		"image" : "images/p10.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p11",
		"link" : "p11",
		"header" : "%modalHeader%",
		"image" : "images/p11.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p12",
		"link" : "p12",
		"header" : "%modalHeader%",
		"image" : "images/p12.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p13",
		"link" : "p13",
		"header" : "%modalHeader%",
		"image" : "images/p13.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p14",
		"link" : "p14",
		"header" : "%modalHeader%",
		"image" : "images/p14.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p15",
		"link" : "p15",
		"header" : "%modalHeader%",
		"image" : "images/p15.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p16",
		"link" : "p16",
		"header" : "%modalHeader%",
		"image" : "images/p16.jpg",
		"footer" : "%modalFooter%"
	}
	],


	displayThumbs : function() {
		$("#project-thumbs").append(HTMLprojectStart);

		for (thumb in projects.thumbs) {

			var formattedThumb = HTMLprojectThumb
			.replace("%modalImage%", projects.thumbs[thumb])
			.replace("%modalId%", projects.modals[thumb].id);
			$(".project-entry").append(formattedThumb);
		}
	},
	appendModals : function() {
		if (projects.modals.length > 0) {
			var formattedModalStart = HTMLmodalStart;
			$("#modals").append(formattedModalStart);


			for (modal in projects.modals) {

				var formattedModal = HTMLmodal
				.replace("%modalLink%", projects.modals[modal].link)
				.replace("%modalImage%", projects.modals[modal].image);
				$(".modal-entry").append(formattedModal);
			}
		}
	},

	displayTitle : function() {
		// $(".modal-title").append('Vetet 4');

		var formattedModalTitle = HTMLmodal.replace("%modalTitle%", "Vetet 4");
		$(".modal-title").append(formattedModalTitle);
	},

	projectNav : function() {

		$(".modal-footer").append(HTMLprojectNav);

		/*var formattedNavNext = HTMLprojectNavNext.replace("%nextProj%", projects.modals[modal].link);functoin that returns an increment of modalId by 1 based on current modalId)
		$(".modal-footer").append(formattedNavNext);*/

		/*for (modal in projects.modals) {
			$(".glyphicon-circle-arrow-right").append('<a href="' + projects.modals[modal].link) + '"></a>';
		}	*/

	}
};
projects.displayThumbs();
projects.appendModals();
projects.displayTitle();
projects.projectNav();


var contact = {
	"email" :'<h3><p><a href="mailto:info@phonofidelic.com"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> Email</a></p>',
	"facebook" : '<h3><p><a href="https://www.facebook.com/phonofidelic" target="blank"><span class="social social-facebook"></span> Facebook</a></p>',
	"blog" : '<h3><p><a href="http://phonofidelic.tumblr.com" target="blank">tumblr</a></p></h3>',

	displayContact : function() {
		var formattedEmail = contact.email;
		var formattedFacebook = contact.facebook;
		var formattedBlog = contact.blog;
		$("#contact-info").append(formattedEmail);
		$("#contact-info").append(formattedFacebook);
		$("#contact-info").append(formattedBlog);
	}
};
contact.displayContact();