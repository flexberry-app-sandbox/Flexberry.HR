import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-л-к-с', 'Unit | Model | i-i-s-h-r-л-к-с', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-r-анкета',
    'model:i-i-s-h-r-должности',
    'model:i-i-s-h-r-л-к-с',
    'model:i-i-s-h-r-отделы',
    'model:i-i-s-h-r-отчет-т-з',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
