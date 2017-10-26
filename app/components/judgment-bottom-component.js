import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    textValue: '',
    gruidValue: '',
    showErrorMessage: false,
    showAccessMessage: false,
    secondMessage: false,
    feedbackMessage: false,
    showSecondMessage: false,
    show404: false,
    showLastPopup: false,
    isRegistred: false,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        onClickHandler: function() {
            this.set('showErrorMessage', true)
        },
        getAccessHandler: function () {
            this.set('showAccessMessage', true);
            setTimeout(() => this.set('secondMessage', true), 1000)
        },
        firstAnswerHandler: function (message) {
            if (message.length > 10) {
                this.set('feedbackMessage', true)
            }
        },
        closeFirstPopupHandler: function () {
            this.set('showAccessMessage', false);
            this.set('showErrorMessage', false);
            this.set('feedbackMessage', false);
            this.set('textValue', '');

            this.set('showSecondMessage', true)
        },
        checkAccessHandler: function () {
            if (this.gruidValue === 'qwerty123') {
                this.set('show404', true)
            } else {
                alert('Получить значение в "Регистрационный журнал регистраций регистрируемых частей тела сущностей"')
            }
        },
        openLastPopupHandler: function () {
            this.set('showLastPopup', true)
        },
        wrongAnswerHAndler: function () {
            alert('И ЧО, ЭТО ФСЁ???7777')
        },
        closeLastPopupHandler: function () {
            this.set('showLastPopup', false);
            this.set('show404', false);

            this.set('showAccessMessage', false);
            this.set('showErrorMessage', false);
            this.set('feedbackMessage', false);
            this.set('isRegistred', true);

            this.get('goalsService').changeStatus(0)
        }
    }
});
