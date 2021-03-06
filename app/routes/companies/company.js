
// company.js  (show route/view)
import Ember from 'ember';

export default Ember.Route.extend({

  sessionAccount: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('company', params.company_id, {include: 'leads,jobs,recommendations'});
  },

  afterModel(model) {
    return model.get('recommendations');
  }

});
