import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  дата_проверки: DS.attr('date')
});

export let ValidationRules = {
  дата_проверки: {
    descriptionKey: 'models.i-i-s-h-r-отчет-т-з.validations.дата_проверки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
};
