import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  вакансия: DS.attr('string'),
  контакты: DS.attr('string'),
  личные_качества: DS.attr('string'),
  образование: DS.attr('string'),
  опыт_работы: DS.attr('number'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  вакансия: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.вакансия.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  контакты: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.контакты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  личные_качества: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.личные_качества.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  образование: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.образование.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  опыт_работы: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.опыт_работы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-h-r-анкета.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
