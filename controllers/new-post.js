Blogger.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var nextId = parseInt(posts[posts.length - 1]['id']) + 1;
      var newPost = {
        id: nextId,
        title: this.get('title'),
        body: this.get('body')
      };
      posts.push(newPost);
      this.transitionTo('posts');
    }
  }
});
