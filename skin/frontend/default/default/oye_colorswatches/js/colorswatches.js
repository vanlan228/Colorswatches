jQuery(document).ready(function() {
	jQuery('.super-attribute-select').on('change', function() {
		var collection = jQuery(".super-attribute-select");
		var ProductName = jQuery('#configurable-product-name').val();
		var ImageName = '';
		var ProductOptionsWrapper = jQuery('#product-options-wrapper');
		collection.each(function() {
			var SelectValue = jQuery(this).val();
			if (SelectValue) {
				var SelectText = jQuery.trim(jQuery(this).find(':selected').text()).toLowerCase();
				ImageName += SelectText+'-';
				
			}
		});
		ImageName = ImageName.slice(0, -1);
		if (ImageName) {
			if (jQuery('#'+ProductName+'-'+ImageName).size()) {
				jQuery('#'+ProductName+'-'+ImageName).trigger('click');
			}
		}
		return false;
	});
});