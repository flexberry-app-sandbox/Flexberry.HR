package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Анкета
 */
@Entity(name = "IISHRАнкета")
@Table(schema = "public", name = "Анкета")
public class Anketa {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "Образование")
    private String образование;

    @Column(name = "Опыт_работы")
    private Integer опыт_работы;

    @Column(name = "Личные_качества")
    private String личные_качества;

    @Column(name = "Вакансия")
    private String вакансия;


    public Anketa() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getКонтакты() {
      return контакты;
    }

    public void setКонтакты(String контакты) {
      this.контакты = контакты;
    }

    public String getОбразование() {
      return образование;
    }

    public void setОбразование(String образование) {
      this.образование = образование;
    }

    public Integer getОпыт_работы() {
      return опыт_работы;
    }

    public void setОпыт_работы(Integer опыт_работы) {
      this.опыт_работы = опыт_работы;
    }

    public String getЛичные_качества() {
      return личные_качества;
    }

    public void setЛичные_качества(String личные_качества) {
      this.личные_качества = личные_качества;
    }

    public String getВакансия() {
      return вакансия;
    }

    public void setВакансия(String вакансия) {
      this.вакансия = вакансия;
    }


}