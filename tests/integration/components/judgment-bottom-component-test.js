import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('judgment-bottom-component', 'Integration | Component | judgment bottom component', {
    integration: true
});

test('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{judgment-bottom-component}}`);

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(hbs`
    {{#judgment-bottom-component}}
      template block text
    {{/judgment-bottom-component}}
  `);

    assert.equal(this.$().text().trim(), 'template block text');
});
