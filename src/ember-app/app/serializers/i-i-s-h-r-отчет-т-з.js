import { Serializer as Отчет_ТЗSerializer } from
  '../mixins/regenerated/serializers/i-i-s-h-r-отчет-т-з';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(Отчет_ТЗSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
