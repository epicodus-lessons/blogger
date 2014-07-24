Blogger.ContactController = Ember.Controller.extend({
  actions: {
    sendMessage: function() {
      var message = prompt('Type your message here:');
      this.set('confirmationNumber', Math.round(Math.random() * 100000));
      this.set('messageSent', true);
    }
  }
});
