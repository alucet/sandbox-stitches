$(function() {
    $('#accordion').liteAccordion({
                        onTriggerSlide : function() {
                            this.find('figcaption').fadeOut();
                        },
                        onSlideAnimComplete : function() {
                            this.find('figcaption').fadeIn();
                        },
                        theme : 'stitch',
                        rounded : true,
                        enumerateSlides : true,
                        containerWidth : 1000,
                        containerHeight : 400
                        
                    }).find('figcaption:first').show();
	
});
