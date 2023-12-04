import {
  defineNamespace,
  Model as ОтделыMixin
} from '../mixins/regenerated/models/i-i-s-h-r-отделы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделыMixin, {
});

defineNamespace(Model);

export default Model;
