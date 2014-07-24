Blogger.AboutController = Ember.Controller.extend({
  isAuthorShowing: false,
  actions: {
    showAuthor: function() {
      this.set('isAuthorShowing', true);
    },
    hideAuthor: function() {
      this.set('isAuthorShowing', false);
    }
  }
});
