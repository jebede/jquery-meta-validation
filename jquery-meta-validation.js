/**
 * This script automatically checks for meta_title or meta_description tags and makes sure it'll be validated for max resp 55 or 160 characters.
 */

$("input[name*='meta_title']").on('keyup', function() {
	metaCheck($(this), 55, 'De meta titel is te lang, houd hem tussen de 50 tot 55 tekens');
});

$("input[name*='meta_description']").on('keyup', function() {
	metaCheck($(this), 160, 'De meta beschrijving is te lang, houd hem tussen de 150 en 160 tekens');
});

function metaCheck(these, desiredLength, text)
{
	var possibleFormError = $(these).parent().children(".form-error");
	if (these.val().length > desiredLength)
	{
		if (!possibleFormError.length)
		{
			$(these).parent('.form-group').append('<span class="form-error">' + text + '</span>');
		}
		
	}
	else
	{
		if (possibleFormError.length)
		{
			possibleFormError.remove();
		}
	}
}