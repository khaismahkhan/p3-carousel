import { useTheme, useMediaQuery } from '@mui/material'

export const INSURANCE_TYPES = [
    {
        name: "Direct",
        value: "DIRECT"
    }
]
export function getYears() {
    var currentYear = new Date().getFullYear(), years = [];
    let YEAR_COUNT = 40;
    for (var i = 0; i <= YEAR_COUNT; i++) {
        years.push({
            name: `${currentYear}`,
            value: `${currentYear}`
        }
        );
        currentYear--;
    }
    return years;
}
export function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });

    return blob;
}

export function downloadDocument(data) {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(data.blob);
    link.download = data.fileName;
    document.body.appendChild(link);
    link.click();
}

export function setLocalStorgeValue(key, value) {
    window.localStorage.setItem(key, value)
}

export function getLocalStorageValue(key) {
    return window.localStorage.getItem(key)
}

export function getRandomNumber() {
    let randomNumber = Math.floor(1000 + Math.random() * 9000); // generate a 4 digit random number
    return randomNumber
}
export const displayMinutes = (minutes) => {
    var num = minutes;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutesTemp = (hours - rhours) * 60;
    var rminutes = Math.round(minutesTemp);
    if (rhours === 0) {
        return rminutes + " mins";
    }
    else if (rminutes === 0) {
        return `${rhours} hour`;
    }
    else {
        return `${rhours} hour ${rminutes} mins`;
    }
}
export function frmtDate(date) {
    date = new Date(date);
    let year = date.getFullYear();
    var datePart = date.getDate();
    var month = date.getMonth() + 1;
    month = ('0' + month).slice(-2);
    datePart = ('0' + datePart).slice(-2);
    return `${year}-${month}-${datePart}`
}

export function formatDate(date) {
    date = new Date(date);
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return monthNames[monthIndex] + ` , ` + day + ' ' + year;
}
export function formatAmount(amount, offset = 3) {
    if (amount === "0")
        return "";
    if (amount === undefined || amount === null || amount === "")
        return "";
    var re = new RegExp("\\B(?=(\\d{" + offset + "})+(?!\\d))", "g");
    var amount = parseFloat(amount);
    return amount && amount.toFixed(2) && amount.toFixed(2).toString() && amount.toFixed(2).toString().replace(re, ",");
}

export function format12HrTime(time) {
    if (Object.prototype.toString.call(time) === "[object Date]") {
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    else {
        // Check correct time format and split into components
        time = time && time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time.splice(3)

            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
}

export function format24HrTime(date) {
    date = new Date(date)
    var hours = date.getHours()
    hours = ('0' + hours).slice(-2)
    var minutes = date.getMinutes()
    minutes = ('0' + minutes).slice(-2)
    return hours + ':' + minutes
}


export function getFutureDate(days) {
    var fromDate = new Date();
    fromDate.setDate(fromDate.getDate() + days);
    return frmtDate(fromDate);
}
export const differenceBetweenDatesInMinutes = (startDate, endDate) => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);
    const ms = Math.abs(date2 - date1);
    var diffMins = Math.round(((ms % 86400000) % 3600000) / 60000); // minutes
    return diffMins;
}

export function getFutureDateFromDate(date, days) {
    var fromDate = new Date(date);
    fromDate.setDate(fromDate.getDate() + days);
    return fromDate;
}

export function checkExecutionStatus(context, action) {
    if (context && context.executions && context.executions.size > 0) {
        const execution = context.executions.find(
            (execution) => execution.get('name') === action,
        )
        if (execution !== undefined && execution !== null) {
            return {
                status: execution.get('status'),
                error: execution.get('errorId'),
                errorDetail: execution.get('error'),
            }
        }
        return {
            status: '',
            error: '',
            errorDetail: '',
        }
    }
    return {
        status: '',
        error: '',
        errorDetail: '',
    }
}
export function getCookieValue(key) {
    var b = document.cookie.match('(^|[^;]+)\\s*' + key + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}

export function getQueryStringValue(key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}
export const LANGUAGES = [
    'English', 'Arabic', 'French', 'German', 'Chinese/Cantonese', 'Chinese/Mandarin'
]

export const IsMobileWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('xs', 'sm'));
}

export const IsDesktopWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('lg', 'xl'));
}

export const IsTabletWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('sm', 'md'));
}

export const IsDesktopSmallWidth = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.between('md', 'lg'));
}


export const combineDateWithTime = (date, time) => {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time[0] + time[1],
        time[3] + time[4],
        time[6] + time[7],
    );
}