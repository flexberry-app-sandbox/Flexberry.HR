package HR.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import HR.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ЛКС
 */
@Entity(name = "IISHRЛКС")
@Table(schema = "public", name = "ЛКС")
public class LKS {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Должность")
    private String должность;

    @Column(name = "Отдел")
    private String отдел;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "Образование")
    private String образование;

    @Column(name = "Дата_приема")
    private Date дата_приема;


    public LKS() {
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

    public String getДолжность() {
      return должность;
    }

    public void setДолжность(String должность) {
      this.должность = должность;
    }

    public String getОтдел() {
      return отдел;
    }

    public void setОтдел(String отдел) {
      this.отдел = отдел;
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

    public Date getДата_приема() {
      return дата_приема;
    }

    public void setДата_приема(Date дата_приема) {
      this.дата_приема = дата_приема;
    }


}