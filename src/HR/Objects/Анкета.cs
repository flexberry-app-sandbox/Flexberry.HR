﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.HR
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Анкета.
    /// </summary>
    // *** Start programmer edit section *** (Анкета CustomAttributes)

    // *** End programmer edit section *** (Анкета CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class Анкета : ICSSoft.STORMNET.DataObject
    {
        
        private string fФИО;
        
        private string fКонтакты;
        
        private string fОбразование;
        
        private int fОпыт_работы;
        
        private string fЛичные_качества;
        
        private string fВакансия;
        
        // *** Start programmer edit section *** (Анкета CustomMembers)

        // *** End programmer edit section *** (Анкета CustomMembers)

        
        /// <summary>
        /// Вакансия.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.Вакансия CustomAttributes)

        // *** End programmer edit section *** (Анкета.Вакансия CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Вакансия
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.Вакансия Get start)

                // *** End programmer edit section *** (Анкета.Вакансия Get start)
                string result = this.fВакансия;
                // *** Start programmer edit section *** (Анкета.Вакансия Get end)

                // *** End programmer edit section *** (Анкета.Вакансия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.Вакансия Set start)

                // *** End programmer edit section *** (Анкета.Вакансия Set start)
                this.fВакансия = value;
                // *** Start programmer edit section *** (Анкета.Вакансия Set end)

                // *** End programmer edit section *** (Анкета.Вакансия Set end)
            }
        }
        
        /// <summary>
        /// Контакты.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.Контакты CustomAttributes)

        // *** End programmer edit section *** (Анкета.Контакты CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Контакты
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.Контакты Get start)

                // *** End programmer edit section *** (Анкета.Контакты Get start)
                string result = this.fКонтакты;
                // *** Start programmer edit section *** (Анкета.Контакты Get end)

                // *** End programmer edit section *** (Анкета.Контакты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.Контакты Set start)

                // *** End programmer edit section *** (Анкета.Контакты Set start)
                this.fКонтакты = value;
                // *** Start programmer edit section *** (Анкета.Контакты Set end)

                // *** End programmer edit section *** (Анкета.Контакты Set end)
            }
        }
        
        /// <summary>
        /// Личные_качества.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.Личные_качества CustomAttributes)

        // *** End programmer edit section *** (Анкета.Личные_качества CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Личные_качества
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.Личные_качества Get start)

                // *** End programmer edit section *** (Анкета.Личные_качества Get start)
                string result = this.fЛичные_качества;
                // *** Start programmer edit section *** (Анкета.Личные_качества Get end)

                // *** End programmer edit section *** (Анкета.Личные_качества Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.Личные_качества Set start)

                // *** End programmer edit section *** (Анкета.Личные_качества Set start)
                this.fЛичные_качества = value;
                // *** Start programmer edit section *** (Анкета.Личные_качества Set end)

                // *** End programmer edit section *** (Анкета.Личные_качества Set end)
            }
        }
        
        /// <summary>
        /// Образование.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.Образование CustomAttributes)

        // *** End programmer edit section *** (Анкета.Образование CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string Образование
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.Образование Get start)

                // *** End programmer edit section *** (Анкета.Образование Get start)
                string result = this.fОбразование;
                // *** Start programmer edit section *** (Анкета.Образование Get end)

                // *** End programmer edit section *** (Анкета.Образование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.Образование Set start)

                // *** End programmer edit section *** (Анкета.Образование Set start)
                this.fОбразование = value;
                // *** Start programmer edit section *** (Анкета.Образование Set end)

                // *** End programmer edit section *** (Анкета.Образование Set end)
            }
        }
        
        /// <summary>
        /// Опыт_работы.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.Опыт_работы CustomAttributes)

        // *** End programmer edit section *** (Анкета.Опыт_работы CustomAttributes)
        [NotNull()]
        public virtual int Опыт_работы
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.Опыт_работы Get start)

                // *** End programmer edit section *** (Анкета.Опыт_работы Get start)
                int result = this.fОпыт_работы;
                // *** Start programmer edit section *** (Анкета.Опыт_работы Get end)

                // *** End programmer edit section *** (Анкета.Опыт_работы Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.Опыт_работы Set start)

                // *** End programmer edit section *** (Анкета.Опыт_работы Set start)
                this.fОпыт_работы = value;
                // *** Start programmer edit section *** (Анкета.Опыт_работы Set end)

                // *** End programmer edit section *** (Анкета.Опыт_работы Set end)
            }
        }
        
        /// <summary>
        /// ФИО.
        /// </summary>
        // *** Start programmer edit section *** (Анкета.ФИО CustomAttributes)

        // *** End programmer edit section *** (Анкета.ФИО CustomAttributes)
        [StrLen(255)]
        [NotNull()]
        public virtual string ФИО
        {
            get
            {
                // *** Start programmer edit section *** (Анкета.ФИО Get start)

                // *** End programmer edit section *** (Анкета.ФИО Get start)
                string result = this.fФИО;
                // *** Start programmer edit section *** (Анкета.ФИО Get end)

                // *** End programmer edit section *** (Анкета.ФИО Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Анкета.ФИО Set start)

                // *** End programmer edit section *** (Анкета.ФИО Set start)
                this.fФИО = value;
                // *** Start programmer edit section *** (Анкета.ФИО Set end)

                // *** End programmer edit section *** (Анкета.ФИО Set end)
            }
        }
    }
}
