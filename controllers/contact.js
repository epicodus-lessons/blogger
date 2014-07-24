Blogger.ContactController = Ember.Controller.extend({
  actions: {
    sendMessage: function() {
      prompt('Type your message here:');
    }
  }
});
