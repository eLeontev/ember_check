import Component from '@ember/component';

export default Component.extend({
    textHeader: 'Уважаемые. коллеги и друзья! ',
    textDescription: 'Спасибо, что поучаствовали. Сейчас вы прошли через юмористическую аллегорию на ежедневную работу тестировщика, если вам интересно узнать больше о реальной работе - Ждем вас на QA Open.',
    showPopup: false,
    actions: {
        onOpenPopupHandler() {
            this.set('showPopup', true);
        },
        onClosePopupHandler() {
            this.set('showPopup', false);
        },
    }
});
