import {
  defineNamespace,
  Model as ДолжностиMixin
} from '../mixins/regenerated/models/i-i-s-h-r-должности';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиMixin, {
});

defineNamespace(Model);

export default Model;
