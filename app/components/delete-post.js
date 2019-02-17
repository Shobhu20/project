import Component from '@ember/component';
import {inject as service} from '@ember/service';
import $ from 'jquery';

export default Component.extend({
  DS: service('store'),

  actions:{
    openModal: function() {
      $('.ui.deletePost.modal').modal({
        closable: false,
        detachable: false,

        onDeny: () => {
          return true;
        },

        onApprove: () => {
          this.get('DS').findRecord('post', this.ID).then(function (post) {
            post.deleteRecord();
            post.get('isDeleted');
            post.save();
          });
          return true;
        }
      }).modal('show');
    },
  }
});
