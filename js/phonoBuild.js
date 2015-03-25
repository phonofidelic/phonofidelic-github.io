var headerContent = {
	'text' : '<p>Phonofidelic is a design project started by Chris Clemons and is dedicated to making quality design for bands, booking agencies and clubs. The main focus is on screen-printed concert posters and flyers, album art, illustrations etc.<br> welcome!<br><div align="right"><p>/Christopher Clemons</p></div>',

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
		"header" : "Kilroy",
		"image" : "images/p2.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p3",
		"link" : "p3",
		"header" : "The Vanjas",
		"image" : "images/p3.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p4",
		"link" : "p4",
		"header" : "Scrags",
		"image" : "images/p4.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p5",
		"link" : "p5",
		"header" : "Poster",
		"image" : "images/p5.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p6",
		"link" : "p6",
		"header" : "Poster",
		"image" : "images/p6.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p7",
		"link" : "p7",
		"header" : "Poster",
		"image" : "images/p7.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p8",
		"link" : "p8",
		"header" : "Poster",
		"image" : "images/p8.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p9",
		"link" : "p9",
		"header" : "Poster",
		"image" : "images/p9.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p10",
		"link" : "p10",
		"header" : "Poster",
		"image" : "images/p10.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p11",
		"link" : "p11",
		"header" : "Dovolution",
		"image" : "images/p11.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p12",
		"link" : "p12",
		"header" : "Poster",
		"image" : "images/p12.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p13",
		"link" : "p13",
		"header" : "Poster",
		"image" : "images/p13.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p14",
		"link" : "p14",
		"header" : "Poster",
		"image" : "images/p14.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p15",
		"link" : "p15",
		"header" : "Poster",
		"image" : "images/p15.jpg",
		"footer" : "%modalFooter%"
	},
	{
		"id" : "#p16",
		"link" : "p16",
		"header" : "Poster",
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
			$(".entry-block").append(formattedThumb);
		}
	},
	appendModals : function() {
		if (projects.modals.length > 0) {
			var formattedModalStart = HTMLmodalStart;
			$("#modals").append(formattedModalStart);


			for (modal in projects.modals) {

				var formattedModal = HTMLmodal
				.replace("%modalLink%", projects.modals[modal].link)
				.replace("%modalImage%", projects.modals[modal].image)
				.replace("%modalTitle%", projects.modals[modal].header);
				$(".modal-entry").append(formattedModal);
			}
		}
	}
};
projects.displayThumbs();
projects.appendModals();

var contact = {
	displayContact : function() {
		$("#contact-info").append(
		'<p><a href="mailto:info@phonofidelic.com" title="email"><span class="icon-social-email icon"></span></a></p>',
		'<p><a href="https://www.facebook.com/phonofidelic" title="facebook" target="blank"><span class="icon-social-facebook icon"></span></a></p>',
		'<p><a href="http://www.phonofidelic.tumblr.com/" title="tumblr" target="blank"><span class="icon-social-tumblr icon"></span></a></p>',
		'<p><a href="https://github.com/phonofidelic" title="GitHub" target="blank"><span class="icon-social-github icon"></span></a></p>'
		);
	}
};
contact.displayContact();