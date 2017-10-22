import Component from '@ember/component';

export default Component.extend({
    GRUID: 'qwerty123',
    buttonLabel: 'ЗАРЕГЕСТРИРОВАТЬ',
    showPopup: false,
    actions: {
        onOpenPopupHandler() {
            this.set('showPopup', true);
        },
        onClosePopupHandler() {
            this.set('showPopup', false);
        }
    }
});
