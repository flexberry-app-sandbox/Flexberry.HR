import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-отчет-т-з', 'Unit | Serializer | i-i-s-h-r-отчет-т-з', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-r-отчет-т-з',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
