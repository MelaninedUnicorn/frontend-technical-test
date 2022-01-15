import 'moment-timezone';

import moment from 'moment';

// TODO change this to french 
moment.locale('fr', {
  months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
  monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
  monthsParseExact : true,
  weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
  weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
  weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
  weekdaysParseExact : true,
  longDateFormat : {
      LT : 'HH:mm',
      LTS : 'HH:mm:ss',
      L : 'DD/MM/YYYY',
      LL : 'D MMMM YYYY',
      LLL : 'D MMMM YYYY HH:mm',
      LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
      sameDay : '[Aujourd’hui à] LT',
      nextDay : '[Demain à] LT',
      nextWeek : 'dddd [à] LT',
      lastDay : '[Hier à] LT',
      lastWeek : 'dddd [dernier à] LT',
      sameElse : 'L'
  },
  relativeTime : {
      future : 'dans %s',
      past : '%s',
      s : 'il y a quelques secondes',
      m : 'il y a une minute',
      mm : 'il y a %d minutes',
      h : 'il y a une heure',
      hh : 'il y a %d heures',
      d : 'il y a un jour',
      dd : 'il y a %d jours',
      M : 'il y a un mois',
      MM : 'il y a %d mois',
      y : 'il y a un an',
      yy : 'il y a %d ans'
  },
  dayOfMonthOrdinalParse : /\d{1,2}(er|e)/,
  ordinal : function (number) {
      return number ;
  },
  meridiemParse : /PD|MD/,
  isPM : function (input) {
      return input.charAt(0) === 'M';
  },
  // In case the meridiem units are not separated around 12, then implement
  // this function (look at locale/id.js for an example).
  // meridiemHour : function (hour, meridiem) {
  //     return /* 0-23 hour, given meridiem token and hour 1-12 */ ;
  // },
  // meridiem : function (hours, minutes, isLower) {
  //     return hours < 12 ? 'AM' : 'PM';
  // },
  week : {
      dow : 1, // Monday is the first day of the week.
      doy : 4  // The week that contains Jan 4th is the first week of the year.
  }
});


export const monthDayYear = (timestamp,  timezone=null) => (
  !timezone ? moment(timestamp).format('dddd [le] D MMMM, YYYY') :
    moment(timestamp).tz(timezone).format('dddd [le] D MMMM, YYYY')
);

export const monthDayYearAtTime = (timestamp,  timezone=null) => (
  !timezone ? moment(timestamp).format('dddd [le] D MMMM, YYYY [à] hh:mm a') :
    moment(timestamp).tz(timezone).format('dddd [le] D MMMM, YYYY [à] hh:mm a')
);

export const timeago = (timestamp, timezone=null) => (
  !timezone ? moment(timestamp).fromNow() :
    moment(timestamp).tz(timezone).fromNow()
);

export const add = (timestamp, amount, range,  timezone=null) => (
  !timezone ? moment(timestamp).add(amount, range).format() :
    moment(timestamp).tz(timezone).add(amount, range).format()
);

export const year = (timestamp, timezone) => (
  !timezone ? moment(timestamp).format('YYYY') :
    moment(timestamp).tz(timezone).format('YYYY')
);