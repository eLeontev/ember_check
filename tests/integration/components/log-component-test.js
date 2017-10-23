import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('log-component', 'Integration | Component | log component', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{log-component}}`);

    assert.equal(this.$().text().trim(), 'ЗАРЕГЕСТРИРОВАТЬ');
});
