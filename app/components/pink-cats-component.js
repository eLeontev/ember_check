import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    goalsService:  Ember.inject.service('goals-status-service')
});
