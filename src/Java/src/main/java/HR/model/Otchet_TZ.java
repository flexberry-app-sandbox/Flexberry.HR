package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: Отчет_ТЗ
 */
@Entity(name = "IISHRОтчет_ТЗ")
@Table(schema = "public", name = "Отчет_ТЗ")
public class Otchet_TZ {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата_проверки")
    private Date дата_проверки;


    public Otchet_TZ() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата_проверки() {
      return дата_проверки;
    }

    public void setДата_проверки(Date дата_проверки) {
      this.дата_проверки = дата_проверки;
    }


}