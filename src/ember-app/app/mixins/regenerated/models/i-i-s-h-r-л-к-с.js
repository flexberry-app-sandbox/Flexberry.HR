import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  дата_приема: DS.attr('date'),
  должность: DS.attr('string'),
  контакты: DS.attr('string'),
  образование: DS.attr('string'),
  отдел: DS.attr('string'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  дата_приема: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отдел: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.отдел.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-л-к-с.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
