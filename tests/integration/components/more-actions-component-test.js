import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('more-actions-component', 'Integration | Component | more actions component', {
    integration: true
});

test('it renders', function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(hbs`{{more-actions-component}}`);

    assert.equal(this.$('p').text().trim(), 'Еще 154992632640 активностей');

    // Template block usage:
    this.render(hbs`
        {{#more-actions-component}}
          template block text
        {{/more-actions-component}}
    `);

    assert.equal(this.$('select').text().trim(), 'Выбрать одну из');
});
