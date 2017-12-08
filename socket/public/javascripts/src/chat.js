var socket,
	Chat = {};

Chat.init = function (setup){
	socket = new io.connect(setup.host);
	socket.on('meesage', function (data){
		setup.dom.count.text(data.clients);
	});
	Chat.username = Chat.getUsername();
	Chat.messages = new Chat.Messages();
	Chat.messagesView = new Chat.MessagesView({
		collection: Chat.messages
	});
	setup.dom.form.submit(Chat.submit);
	Chat.$chatroom = setup.dom.room;
	socket.on('chat', Chat.addMessage);
};
Chat.getUsername = function (){
	return prompt('What\'s your name?', '') || 'Anonymous';
}
Chat.submit = function (e){
	e.preventDefault();
	var $message = $(e.target.message),
		text = $message.val();

	$message.val('');
	socket.emit('newchat', {
		name: Chat.username,
		text: text
	});
};

Chat.Message = Backbone.Model.extend({
	text: ''
});
Chat.Messages = Backbone.Collection.extend({
	model: Chat.Message
});
Chat.MessageView = Backbone.View.extend({
	tagName: 'p',
	render: function (){
		var ustext = JST["public/templates/src/username"](this.model.toJSON());

		this.$el.html(ustext);
		this.parentView.$el.append(this.$el);
		return this;
	}
});
Chat.MessagesView = Backbone.View.extend({
	el: '#chatroom',
	initialize: function (){
		_.bindAll(this, 'render');

		this.collection.on('change', this.render);
		this.collection.on('add', this.render);
		this.collection.on('remove', this.render);
	},
	render: function (){
		this.$el.empty();
		this.collection.each(function (message){
			var messageView = new Chat.MessageView({
				model: message
			});

			messageView.parentView = this;
			messageView.render();
		}, this);
		this.$el.animate({
			scrollTop: this.$el.height()
		}, 100);
		return this;
	}
});
Chat.addMessage = function (data){
	Chat.messages.add(data);
}

$(function (){
	Chat.init({
		host: 'http://localhost:3000',
		dom: {
			count: $('#client-count'),
			form: $('.chatbox'),
			room: $('#chatroom')
		}
	});
});