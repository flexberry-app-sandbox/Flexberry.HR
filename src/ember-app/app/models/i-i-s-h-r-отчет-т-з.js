import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as Отчет_ТЗMixin
} from '../mixins/regenerated/models/i-i-s-h-r-отчет-т-з';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(Отчет_ТЗMixin, Validations, {
});

export default Model;
