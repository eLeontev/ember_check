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
        changeTextValue(e) {
            this.get('goalsService').setUserName(e.target.value)
        },
        onClickHandler() {
            this.set('showErrorMessage', true)
        },
        getAccessHandler() {
            this.set('showAccessMessage', true);
            setTimeout(() => this.set('secondMessage', true), 1000)
        },
        firstAnswerHandler(message) {
            if (message.length > 10) {
                this.set('feedbackMessage', true)
            }
        },
        closeFirstPopupHandler() {
            this.set('showAccessMessage', false);
            this.set('showErrorMessage', false);
            this.set('feedbackMessage', false);
            this.set('textValue', '');

            this.set('showSecondMessage', true)
        },
        checkAccessHandler() {
            if (this.gruidValue === 'ssddf5515621hgg551236k7993112596j') {
                this.set('show404', true)
            } else {
                alert('Получить значение в "Регистрационный журнал регистраций регистрируемых частей тела сущностей"')
            }
        },
        openLastPopupHandler() {
            this.set('showLastPopup', true)
        },
        gotoHellLevelHandler() {
            window.location.href = '/'
        },
        wrongAnswerHAndler() {
            alert('И ЧО, ЭТО ФСЁ???7777')
        },
        closeLastPopupHandler() {
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
