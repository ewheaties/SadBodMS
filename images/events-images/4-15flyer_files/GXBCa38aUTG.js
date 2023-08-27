;/*FB_PKG_DELIM*/

__d("CometUnitFooter.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={root:{paddingBottom:"xx6bls6",$$css:!0},rootWithAddOn:{paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",paddingTop:"x1cnzs8",$$css:!0}};function a(a){a=a.addOn;return h.jsx("div",{className:c("stylex")(i.root,a!=null&&i.rootWithAddOn),children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLocalDate",["DateConsts","formatDate"],(function(a,b,c,d,e,f,g){"use strict";var h=1e3;a=function(){function a(a,b,c){a=new Date(a,b,c);this.year=a.getFullYear();this.month=a.getMonth();this.date=a.getDate()}a.fromDate=function(b){b===void 0&&(b=new Date());return new a(b.getFullYear(),b.getMonth(),b.getDate())};a.fromTimestamp=function(a){return this.fromDate(new Date(a*h))};a.fromFacebookBirthdayString=function(b){b=b.split("/").map(Number);var c=b[0],d=b[1];b=b[2];return a.fromYearMonthDay(b,c,d)};a.fromInstagramBirthdayString=function(b){b=b.split("-").map(Number);var c=b[0],d=b[1];b=b[2];return a.fromYearMonthDay(c,d,b)};a.fromYearMonthDay=function(b,c,d){c=c-1;return new a(b,c,d)};a.fromISOString=function(b){b=(b=/^(\d+)-(\d+)-(\d+)/.exec(b))!=null?b:[];b[0];var c=b[1],d=b[2];b=b[3];return new a(+c,+d-1,+b)};var b=a.prototype;b.getYear=function(){return this.year};b.getMonth=function(){return this.month};b.getDate=function(){return this.date};b.getDayOfWeekFromMonday=function(){return(this.getJSDate().getDay()-1+d("DateConsts").DAYS_PER_WEEK)%d("DateConsts").DAYS_PER_WEEK};b.getNumDaysInThisMonth=function(){return new Date(this.year,this.month+1,0).getDate()};b.getNumDaysInPrevMonth=function(){return new Date(this.year,this.month,0).getDate()};b.getWithDaysAdded=function(b){return new a(this.year,this.month,this.date+b)};b.getWithWeeksAdded=function(a){return this.getWithDaysAdded(a*d("DateConsts").DAYS_PER_WEEK)};b.getWithMonthsAdded=function(b){return new a(this.year,this.month+b,this.date)};b.getWithYearsAdded=function(b){return new a(this.year+b,this.month,this.date)};b.getJSDate=function(){return new Date(this.year,this.month,this.date)};b.toUTCDate=function(){return new Date(Date.UTC(this.year,this.month,this.date))};b.format=function(a,b){return c("formatDate")(this.getJSDate(),a,b)};b.toISOString=function(){return this.format("Y-m-d",{skipPatternLocalization:!0})};b.getHash=function(){return this.year*372+this.month*31+this.date};b.getNumDaysInThisYear=function(){return this.isLeapYear()?366:365};b.isLeapYear=function(){return this.year%4===0&&this.year%100!==0||this.year%400===0};b.isValid=function(){return!isNaN(this.getJSDate().getTime())};b.isEqual=function(a){return this.compareTo(a)===0};b.daysBetween=function(a){a=a.getJSDate()-this.getJSDate();return Math.round(Math.abs(a/d("DateConsts").MS_PER_DAY))};b.compareTo=function(a){var b=this.getJSDate();a=a.getJSDate();return b>a?1:b<a?-1:0};return a}();g["default"]=a}),98);
__d("GoodwillMemoriesAndCelebrationsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GoodwillMemoriesAndCelebrationsLoggerConfig")}),null);
__d("LiveEventUtils.react",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b===void 0&&(b="Got unexpected null or undefined");if(a==null)throw c("unrecoverableViolation")(b,"live_events");return a}g.nullthrows=a}),98);