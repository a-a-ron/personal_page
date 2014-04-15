
		// ----------- Number Counter--------------
		// ----------------------------------------
		<script>
		$({numberCount: $('#counter').text()}).animate({numberCount: 10000}, 
			{
			  duration: 3500,
			  step: function() {
			    $('#counter').text(Math.floor(this.numberCount));
			  },
			  complete: function() {
			    $('#counter').text("10,000");
			  }
			});
		</script>
		
