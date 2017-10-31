import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    delay: 3000,
    textValue: '',
    originalText: 'величайший костылеприменитель, несравненный велосипедостроитель, абсолютного фичестрадатель, его высокопродоронятельство скарабей релизокататель семиустный',
    gruidValue: '',
    messageRequest: '',
    showErrorMessage: false,
    showAccessMessage: false,
    secondMessage: false,
    feedbackMessage: false,
    showSecondMessage: false,
    show404: false,
    showLastPopup: false,
    isRegistred: false,
    endSupport: false,
    goalsService: Ember.inject.service('goals-status-service'),
    actions: {
        changeTextValue({target: {value}}) {
            this.set('textValue', value);
            this.get('goalsService').setUserName(value)
        },
        onClickHandler() {
            if (this.textValue.trim().toLowerCase() === this.originalText.trim().toLowerCase()) {
                this.set('showErrorMessage', true)
            }
        },
        getAccessHandler() {
            this.set('showAccessMessage', true);
            setTimeout(() => this.set('secondMessage', true), this.delay)
        },
        firstAnswerHandler(message) {
            this.set('messageRequest', message)
        },
        submitFirstAnswerHandler() {
            this.set('feedbackMessage', true);
            setTimeout(() => this.set('endSupport', true), this.delay)
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
