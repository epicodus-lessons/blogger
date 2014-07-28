Blogger.AboutController = Ember.Controller.extend({
  isAuthorShowing: false,
  actions: {
    showRealName: function() {
      alert("Dracula is fictional, but was inspired by the 15th-century Romanian general and Wallachian Prince Vlad III the Impaler.")
    },
    showAuthor: function() {
      this.set('isAuthorShowing', true);
    },
    hideAuthor: function() {
      this.set('isAuthorShowing', false);
    }
  }
});
