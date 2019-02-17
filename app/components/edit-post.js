import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  DS: service('store'),

  actions:{
    openModal: function(post) {
      $('.ui.editPost.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          // alert($('#editPostTitle').val());
          this.get('DS').findRecord('post', this.ID).then(function (post) {
            post.set('title', $('#editPostTitle').val());
            post.set('body', $('#editPostBody').val());
            post.save();
          });
          return true;
        }
      }).modal('show');
    },
  }
});
