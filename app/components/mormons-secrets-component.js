import Component from '@ember/component';

export default Component.extend({
    showFirst: true,
    showSecond: false,
    actions: {
        showSecondHandler() {
            this.set('showFirst', false);
            this.set('showSecond', true);
        },
        hideSecondHandler() {
            this.set('showSecond', false);
        }
    }
});
