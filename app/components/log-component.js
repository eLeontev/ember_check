import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    GRUID: 'ssddf5515621hgg551236k7993112596j',
    buttonLabel: 'ЗАРЕГЕСТРИРОВАТЬ',
    showPopup: false,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        onOpenPopupHandler() {
            this.set('showPopup', true);
        },
        onClosePopupHandler() {
            this.set('showPopup', false);
        },
        onChoseGruidHandler() {
            this.get('goalsService').onChoseGruid()
        }
    }
});
