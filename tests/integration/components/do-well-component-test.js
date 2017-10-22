import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('do-well-component', 'Integration | Component | do well component', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{do-well-component}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
        {{#do-well-component}}
          template block text
        {{/do-well-component}}
    `);

    assert.equal(this.$().text().trim(), 'template block text');
});
