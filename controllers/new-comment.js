Blogger.NewCommentController = Ember.ObjectController.extend({
  actions: {
    save: function() {
      var comment = this.get('model');
      comment.save();
      var post = comment.get('post');
      post.save();
      this.transitionToRoute('post', post);
    }
  }
});
