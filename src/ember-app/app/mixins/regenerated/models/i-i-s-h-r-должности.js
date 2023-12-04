import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  название: DS.attr('string'),
  оклад: DS.attr('decimal')
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-h-r-должности.validations.название.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оклад: {
    descriptionKey: 'models.i-i-s-h-r-должности.validations.оклад.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true }),
    ],
  },
};
