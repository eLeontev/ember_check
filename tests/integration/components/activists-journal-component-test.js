import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('activists-journal-component', 'Integration | Component | activists journal component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{activists-journal-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#activists-journal-component}}
      template block text
    {{/activists-journal-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
