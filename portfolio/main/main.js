if ( Meteor.isClient ) {

	Template.main.events({
		'click .overlay' : function(){
			$('body').attr('data-item','');
			appendTextToCode("$('body').attr('data-item','');");
		}
	});
}
