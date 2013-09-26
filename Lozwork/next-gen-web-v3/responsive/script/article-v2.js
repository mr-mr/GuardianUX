$(function () {
	var ow = $(window).width();
	var mediumLarge = 960;
	
	var commentsOpen = $('a[href="#article-comments-container"]');
	var commentTeaserReply = $('a[href="#comment-reply-container"]');
	var commentsClose = $('.article-comments-close-control');
	var comments = $('#article-comments-container');
	var clicked;
	
	var breaking = $('.breaking-news');
	
	function commentsShowHide() {
		ow = $(window).width();
		
		if(ow < mediumLarge) {
			comments.hide();
			
			commentsOpen.add(commentTeaserReply).click(function () {
				comments.slideDown();
				
				commentsClose.parent('p').show();
				
				clicked = $(this);
				replyTo(clicked);
			});
			
			commentsClose.click(function () {
				comments.slideUp();
				commentsClose.parent('p').hide();
			});
		} else {
			comments.show();
			commentsClose.parent('p').hide();
			
			commentsOpen.click(function() {
				scrollToComments('#article-comments-container');
			});
			
			commentTeaserReply.click(function () {
				clicked = $(this);
				replyTo(clicked);
			});
		}
		
	}
	
	function replyTo(clicked) {
		if (clicked.attr('href') === '#comment-reply-container') {
			var quoted = clicked.parentsUntil('.comment-teaser','ul').prev('.comment');
						
			quoted.clone().insertBefore('#comment-form').prev('h3').html('Post comment in reply to:');
			
			
			scrollToComments('#comment-reply-container');
		} else if (clicked.attr('href') === '#article-comments-container') {
			scrollToComments('#article-comments-container');
		}
	}
	
	function scrollToComments(elementId) {
		$('html, body').animate({
			scrollTop: $(elementId).offset().top
		}, 2000);
	}
	
	commentsShowHide();
	
	if (breaking.length === 1) {
		breaking.delay(5000).slideDown('slow', function () {
			if ($('body').is('#uk-edition-football')) {
				$('h1 .score').hide().text('1 - 1').fadeIn('slow');
				$('.live-blog-match-details .away').hide().html('Suarez 77&#x27;').fadeIn('slow');
				$('.football-scores-update-score').hide().text('1-1').fadeIn('slow');
			}
		}).delay(4000).slideUp('slow');
	}
	
	$(window).resize(function () {
		if (ow !== $(window).width()) {
			commentsShowHide();
		}
	});
});

$(function () {
	var link;
	var linkHash;
	var controls;
	var parent;
	var container;
	var originalLabel;
	
	var loadMore = $('.load-more-control');
	
	function initShowHideLinks() {
		controls = $('a.show-hide-control');
		parent = $('.show-hide-parent');
		
		controls.click(function (e) {
			link = $(this);
			linkHash = $(this.hash);

			showHideLinks(link,linkHash,controls,parent,e);
		});
	}
	
	function showHideLinks(link,linkHash,controls,parent,e) {
		link = link;
		linkHash = linkHash;
		controls = controls;
		parent = parent;
		
		if (linkHash.is(":visible")) {
			
			linkHash.slideUp().removeClass('is-expanded');
		
			if (linkHash === '#wrapper-live-blog-summary') {
				link.removeClass('is-current').html('Show').closest(parent).removeClass('is-expanded');
			} else {
				link.removeClass('is-current').html(originalLabel).closest(parent).removeClass('is-expanded');
			}
		} else {
			linkHash.slideDown().addClass('is-expanded');
			originalLabel = link.html();
		
			if (linkHash === '#wrapper-live-blog-summary') {
				link.addClass('is-current').html('Hide').closest(parent).addClass('is-expanded');
			} else {
				link.addClass('is-current').html('Close').closest(parent).addClass('is-expanded');
			}
		}

		e.preventDefault();
	}
	
	initShowHideLinks();
	

	loadMore.click(function (e) {
		var url = $(this).attr('href');
		var element = $(this).parent().prev('.load-more-destination');

		$.get(url, function (data) {
			$(data).appendTo(element);
			
			container = $('.live-blog-stream-item .show-hide');
			parent = container.prev('div');
		
			container.on("click","a",function (e) {
				link = $(this);
				linkHash = $(this.hash);
				
				showHideLinks(link,linkHash,controls,parent,e);
			});
		});

		e.preventDefault();
	});
});