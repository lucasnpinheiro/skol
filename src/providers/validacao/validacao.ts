import {Injectable} from '@angular/core';

/*
  Generated class for the ValidacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidacaoProvider {

    constructor() {
    }


    isEmpty(mixedVar) {
        let undef
        let key
        let i
        let len
        let emptyValues = [undefined, 'undefined', undef, 'undef', NaN, 'NaN', null, false, 0, '', 'false', 'null', '0', '[]', '{}']

        if (!mixedVar) {
            return true;
        }

        if (typeof mixedVar === 'string') {
            mixedVar = mixedVar.trim();
        }

        for (i = 0, len = emptyValues.length; i < len; i++) {
            if (mixedVar === emptyValues[i]) {
                return true
            }
        }

        if (typeof mixedVar === 'object') {
            for (key in mixedVar) {
                if (mixedVar.hasOwnProperty(key)) {
                    return false
                }
            }
            return true
        }

        return false
    }

    maskNumber(newValue, limit = 0) {
        newValue = new String(newValue);
        newValue = newValue.replace(/\./gi, "\,");
        newValue = newValue.replace(/[^0-9\,]/gi, '');

        let ex = newValue.split(',');
        if (ex.length > 1) {
            ex[1] = this.rtrim(ex[1], '0');
            newValue = ex.join('.');
            if (limit > 0) {
                newValue = this.number_format(newValue, limit);
            } else {
                newValue = this.number_format(newValue, parseInt(ex[1].length));
            }
        }
        return newValue;
    }

    maskNumberPonto(newValue, limit = 0) {
        newValue = new String(newValue);
        newValue = newValue.replace(/\,/gi, "\.");
        newValue = newValue.replace(/[^0-9\.]/gi, '');
        let ex = newValue.split('.');
        if (ex.length > 1) {
            ex[1] = this.rtrim(ex[1], '0');
            newValue = ex.join('.');
            if (limit > 0) {
                newValue = (parseFloat(newValue)).toFixed(limit);
            } else {
                newValue = (parseFloat(newValue)).toFixed(parseInt(ex[1].length));
            }
        }
        return parseFloat(newValue);
    }

    number_format(numero, decimals = 10, decPoint = ',', thousandsSep = '.') { // eslint-disable-line camelcase
        numero = (numero + '').replace(/[^0-9+\-Ee.]/g, '')
        var n = !isFinite(+numero) ? 0 : +numero
        var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
        var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
        var dec = (typeof decPoint === 'undefined') ? '.' : decPoint
        var s: any = ''
        var toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec)
            return '' + (Math.round(n * k) / k)
                .toFixed(prec)
        }
        // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
        if (s[0].length > 3) {
            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
        }
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || ''
            s[1] += new Array(prec - s[1].length + 1).join('0')
        }
        return s.join(dec)
    }

    rtrim(str, charlist = '') {
        charlist = !charlist ? ' \\s\u00A0' : (charlist + '')
            .replace(/([[\]().?/*{}+$^:])/g, '\\$1')
        var re = new RegExp('[' + charlist + ']+$', 'g')
        return (str + '').replace(re, '')
    }

    trim(str, charlist = ' ') {
        var whitespace = [
            ' ',
            '\n',
            '\r',
            '\t',
            '\f',
            '\x0b',
            '\xa0',
            '\u2000',
            '\u2001',
            '\u2002',
            '\u2003',
            '\u2004',
            '\u2005',
            '\u2006',
            '\u2007',
            '\u2008',
            '\u2009',
            '\u200a',
            '\u200b',
            '\u2028',
            '\u2029',
            '\u3000'
        ].join('')
        var l = 0
        var i = 0
        str += ''
        if (charlist) {
            whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1')
        }
        l = str.length
        for (i = 0; i < l; i++) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(i)
                break
            }
        }
        l = str.length
        for (i = l - 1; i >= 0; i--) {
            if (whitespace.indexOf(str.charAt(i)) === -1) {
                str = str.substring(0, i + 1)
                break
            }
        }
        return whitespace.indexOf(str.charAt(0)) === -1 ? str : ''
    }

    removerAcentos(newStringComAcento) {
        let _string = newStringComAcento;
        let mapaAcentosHex = {
            a: /[\xE0-\xE6]/g,
            A: /[\xC0-\xC6]/g,
            e: /[\xE8-\xEB]/g,
            E: /[\xC8-\xCB]/g,
            i: /[\xEC-\xEF]/g,
            I: /[\xCC-\xCF]/g,
            o: /[\xF2-\xF6]/g,
            O: /[\xD2-\xD6]/g,
            u: /[\xF9-\xFC]/g,
            U: /[\xD9-\xDC]/g,
            c: /\xE7/g,
            C: /\xC7/g,
            n: /\xF1/g,
            N: /\xD1/g,
        };

        for (let letra in mapaAcentosHex) {
            let expressaoRegular = mapaAcentosHex[letra];
            _string = _string.replace(expressaoRegular, letra);
        }

        return _string;
    }
}
