import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mormons-secrets-component', 'Integration | Component | mormons secrets component', {
    integration: true
});

test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{mormons-secrets-component}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#mormons-secrets-component}}
      template block text
    {{/mormons-secrets-component}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
