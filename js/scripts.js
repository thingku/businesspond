function showCustomSelectSearch( params ) {
	var dataVal = '';
	$( params ).click( function(e) {
		e.stopPropagation();
		if ($(this).find( '.customSelectContentsHolder' ).hasClass( 'hidden' ) ) {
			$(this).find( '.customMenuCaret' ).html( '<img src="images/caret-up.png" />' );
			$(this).find( '.customSelectContentsHolder' ).removeClass( 'hidden' );
			$(this).find( '.customSelectContentsHolder ul li' ).each( function() {
				$(this).click( function(e) {
					e.stopPropagation();
					dataVal = $(this).attr( 'data-value' );
					$(this).closest( '.customSelectHolder' ).children( '.customMenuLabel' ).html( dataVal );
					$(this).closest( '.customSelectContentsHolder' ).addClass( 'hidden' );
					$(this).closest( '.customSelectHolder' ).children( '.customMenuCaret' ).html( '<img src="images/caret-down.png" />' );
					//console.log( dataVal );
				} );
			} );
		} else {
			$(this).find( '.customMenuCaret' ).html( '<img src="images/caret-down.png" />' );
			$(this).find( '.customSelectContentsHolder' ).addClass( 'hidden' );
		}
	} );
	$( 'body' ).click( function() {
		if ( dataVal === '' ) {
			$(this).find( '.customMenuCaret' ).html( '<img src="images/caret-down.png" />' );
			$(this).find( '.customSelectContentsHolder' ).addClass( 'hidden' );
			$(this).find( '.customMenuLabel' ).html( 'Please Select' );
		}
	} );
}
function addFavorites() {
	$('.favoriteIcon').each( function() {
		$(this).click( function() {
			$(this).toggleClass( 'on' );
			if ( $(this).hasClass( 'on' ) ) {
				$(this).html( '<img src="images/fav-icon-on.png" />' );
			} else {
				$(this).html( '<img src="images/fav-icon-off.png" />' );
			}
		} );
	} );
}
function selectLanguage(params1, params2) {
	$( params1 ).children( 'li' ).each( function() {
		$(this).click( function(e) {
			e.stopPropagation();				
			var flag = $(this).children( '.langIcon' ).html();
			var label = $(this).children( '.languageLabel' ).html();				
			if ( $( params1 ).hasClass( 'open' ) ) {	
				$(  params2 + ' .langIcon').html( flag );
				$( params2 +  ' .languageLabel').html( label );
				$( params1 ).removeClass( 'open' );							
			} else {			
				$( params1 ).addClass( 'open' );
			}
		} );
	} );	
	$( 'body' ).click( function() {
		$( params1 ).removeClass( 'open' );					
	} );
}
function randomAnimation() {
		var ctr = 0;	
		$('.subContainer.popularContentsHolder').mouseover( function() {
			var classInterVal = setInterval( function(){
				var listLength = $('.popularCategoriesListHolder > ul > li').length
				ctr += 1;
				$('.popularCategoriesListHolder > ul > li:nth-child('+ ctr +')').addClass( 'popularCatIn' );
				if ( ctr === 10 ) {
					clearInterval();
				}
			},400 );
		} );	
}