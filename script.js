$( document ).ready(function() {
				
	/* mouse over sulll'elemento circle1 */

	$( "#circle1" ).hover(
		function() {
			/* serie di azioni da eseguire all'entrata del mouse */

			$( "#circle1" ).addClass( "circle1pushed" );
			$( "#circle3" ).addClass( "circle3inandoutred" );
			$( "#triangle1" ).addClass( "triangle1inred" );
            $( "#triangle2" ).addClass( "triangle2inandoutred" );
            $( "#rect1" ).addClass( "rect1inred" );
            $( "#rect2" ).addClass( "rect2inred" );
            $( "#rect3" ).addClass( "rect3inandoutred" );
            $( "#rect4" ).addClass( "rect4inandoutred" );
            $( "#circle2" ).removeClass( "circle2pushed" );
			$( "#circle3" ).removeClass( "circle3inandoutgreen" );
			$( "#triangle1" ).removeClass( "triangle1inandoutgreen" );
            $( "#triangle2" ).removeClass( "triangle2ingreen" );
            $( "#rect1" ).removeClass( "rect1ingreen" );
            $( "#rect2" ).removeClass( "rect2inandoutgreen" );
            $( "#rect3" ).removeClass( "rect3ingreen" );
            $( "#rect4" ).removeClass( "rect4inandoutgreen" );
            

			/* ------------------------------------------------- */
		}, function() {
			/* serie di azioni da eseguire all'uscita del mouse */

			$( "#circle1" ).removeClass( "circle1pushed" );
			$( "#triangle1" ).removeClass( "triangle1inred" );
            $( "#triangle1" ).removeClass( "triangle1inred" );
			$( "#rect1" ).removeClass( "rect1inred" );
            $( "#rect2" ).removeClass( "rect2inred" );

			/* ------------------------------------------------ */
		}
	);
    
    /* mouse over sulll'elemento circle2 */

	$( "#circle2" ).hover(
		function() {
			/* serie di azioni da eseguire all'entrata del mouse */

			$( "#circle2" ).addClass( "circle2pushed" );
			$( "#circle3" ).addClass( "circle3inandoutgreen" );
			$( "#triangle1" ).addClass( "triangle1inandoutgreen" );
            $( "#triangle2" ).addClass( "triangle2ingreen" );
            $( "#rect1" ).addClass( "rect1ingreen" );
            $( "#rect2" ).addClass( "rect2inandoutgreen" );
            $( "#rect3" ).addClass( "rect3ingreen" );
            $( "#rect4" ).addClass( "rect4inandoutgreen" );
            
            $( "#circle1" ).removeClass( "circle1pushed" );
			$( "#circle3" ).removeClass( "circle3inandoutred" );
			$( "#triangle1" ).removeClass( "triangle1inred" );
            $( "#triangle2" ).removeClass( "triangle2inandoutred" );
            $( "#rect1" ).removeClass( "rect1inred" );
            $( "#rect2" ).removeClass( "rect2inred" );
            $( "#rect3" ).removeClass( "rect3inandoutred" );
            $( "#rect4" ).removeClass( "rect4inandoutred" );

			/* ------------------------------------------------- */
		}, function() {
			/* serie di azioni da eseguire all'uscita del mouse */

			$( "#circle2" ).removeClass( "circle2pushed" );
            $( "#triangle2" ).removeClass( "triangle2ingreen" );
			$( "#rect1" ).removeClass( "rect1ingreen" );
            $( "#rect3" ).removeClass( "rect3ingreen" );
            $( "#rect3" ).addClass( "rect3normal" );

			/* ------------------------------------------------ */
		}
	);
    
    /* mouse over sulll'elemento circle3 */

	$( "#circle3" ).hover(
		function() {
			/* serie di azioni da eseguire all'entrata del mouse */

			$( "#circle3" ).addClass( "circle3normal" );
			$( "#triangle1" ).addClass( "triangle1normal" );
            $( "#triangle2" ).addClass( "triangle2normal" );
            $( "#rect1" ).addClass( "rect1normal" );
            $( "#rect2" ).addClass( "rect2normal" );
            $( "#rect3" ).addClass( "rect3normal" );
            $( "#rect4" ).addClass( "rect4normal" );
            
            $( "#circle3" ).removeClass( "circle3inandoutgreen" );
			$( "#circle3" ).removeClass( "circle3inandoutred" );
			$( "#triangle1" ).removeClass( "triangle1inandoutgreen" );
            $( "#triangle1" ).removeClass( "triangle1inred" );
            $( "#triangle2" ).removeClass( "triangle2inandoutred" );
            $( "#triangle2" ).removeClass( "triangle2ingreen" );
            $( "#rect1" ).removeClass( "rect1inred" );
            $( "#rect1" ).removeClass( "rect1ingreen" );
            $( "#rect2" ).removeClass( "rect2inred" );
            $( "#rect2" ).removeClass( "rect2inandoutgreen" );
            $( "#rect3" ).removeClass( "rect3inandoutred" );
            $( "#rect3" ).removeClass( "rect3ingreen" );
            $( "#rect4" ).removeClass( "rect4inandoutred" );
            $( "#rect4" ).removeClass( "rect4inandoutgreen" );

		
		}
	);




});