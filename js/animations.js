

		jQuery(function($) {		

	

		$.fn.themeple_waypoints = function(options_passed)
		{
			if(! $('html').is('.css3transitions')) return;

			var defaults = { offset: '90%' , triggerOnce: true},
				options  = $.extend({}, defaults, options_passed);

			return this.each(function()
			{
				var element = $(this);

				setTimeout(function()
				{
					element.waypoint(function(direction)
					{
					 	$(this).addClass('start_animation').trigger('start_animation');

					}, options );

				},100)
			});
		}; 
		
		$('.animate_onoffset').not('.parallax_section .row-dynamic-el').themeple_waypoints();
		


		
		$.fn.chart_skill = function(options)
		{
			
			return this.each(function()
			{
				var container = $(this), elements = container.find('.chart');


				//trigger displaying of thumbnails
				container.on('start_animation', function()
				{
					elements.each(function(i)
					{
						var $chart = $(this);
				
						var color = $(this).data('color');
						var color2 = $(this).data('color2');
						
						
							$chart.easyPieChart({
					        	lineWidth: 6, 
					        	size: 190,
					        	trackColor: "#f1f1f1",
					        	scaleColor: false,
					        	barColor: color,
					        	barColor2: color2,
					        	animate:2000
					    	});
						
						
					});
				});
			});	
		}

		$.fn.counters = function(options)
		{
			
			return this.each(function()
			{
				var container = $(this), elements = container.find('.count_to .timer');


				//trigger displaying of thumbnails
				container.on('start_animation', function()
				{
					elements.each(function(i)
					{
						var $count = $(this);
						
						$count.countTo();
						
						
						
					});
				});
			});	
		
		};

			
		if($.fn.chart_skill)
		{
			$('.w-row').chart_skill();

		}	
				
		if($.fn.counters)
		{
			$('.w-row').counters();

		}
	
	});



