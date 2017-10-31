import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    textHeader: 'Уважаемые. коллеги и друзья! ',
    textDescription: 'Спасибо, что поучаствовали. Сейчас вы прошли через юмористическую аллегорию на ежедневную работу тестировщика, если вам интересно узнать больше о реальной работе - Ждем вас на QA Open.',
    showPopup: false,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        onOpenPopupHandler() {
            this.set('showPopup', true);
        },
        onClosePopupHandler() {
            this.set('showPopup', false);
            this.get('goalsService').changeStatus(2);
        },
    }
});
