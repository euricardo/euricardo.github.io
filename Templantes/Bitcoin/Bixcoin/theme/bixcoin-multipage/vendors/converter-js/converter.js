$(document).ready(main)

var BTCINT = 100000000
var builtFiat = false
var builtCrypto = false
var cryptoSetting = 'b'
var fiat = 'USD'
var fiatDefaults = ['USD','EUR','GBP','JPY','CNY','AUD','HKD']
var fiatLabels = {}
var fiatSearchData = []
var rates = {}
var shown = {
  crypto: false,
  fiat: false
}
var btcUnits = {
  'b': {
    d: 8,
    i: 100000000
  },
  'm': {
    d: 5,
    i: 100000
  },
  'u': {
    d: 2,
    i: 100
  },
  's': {
    d: 0,
    i: 1
  }
}
var last = null
var cacheTime = 1800*1000
var fuse = null
var historicMode = false
var historicRate = 0
var historicRates = {}
var spotFiat

// Load user settings from localStorage, with defaults for user language
function loadSettings() {
  var gotFiat = false
  if('localStorage' in window) {
    if(window.localStorage['converter-fiat']) {
      fiat = window.localStorage['converter-fiat']
      gotFiat = true
    }
    if(window.localStorage['converter-crypto']) {
      cryptoSetting = window.localStorage['converter-crypto']
    }
  }
  if(!gotFiat)
    setLanguage(navigator.language || navigator.userLanguage)
}

function setLanguage(lang) {
  for(var key in langMap) {
    langMap[key] = langMap[key].toLowerCase().split(',')
    for(var i=0; i<langMap[key].length; i++) {
      if(lang.indexOf(langMap[key][i]) > 0) {
        fiat = key
        setFiat()
        return
      }
    }
  }
  setFiat()
}

function saveSettings() {
  if('localStorage' in window) {
    window.localStorage['converter-fiat'] = fiat
    window.localStorage['converter-crypto'] = cryptoSetting
  }
}

var recomputeFiatThrottled = throttle(recomputeFiat, 50)

function onRate(data, cur) {
  if(typeof data.price === "undefined")
    return
  rates[cur] = data.price / 100
  if(!historicMode)
    recomputeFiatThrottled()
}

function buildFiat() {
  var fuseData = []
  for(var j=0; j<fiatList.length; j++) {
    fiatLabels[fiatList[j][0]] = fiatList[j][1]
    fuseData.push({
      code: fiatList[j][0],
      name: fiatList[j][1]
    })
  }
  // Build fuzzy search data
  fuse = new Fuse(fuseData, {
    keys: ['code', 'name'],
    id: 'code',
    threshold: 0.5
  })

  showFiatDefaults()

  $('#fiat-select').on('click', function(event) { 
    if(historicMode)
      return stopEvent(event)
    if(shown.crypto) {
      hidePopup('#crypto-fieldset', '#crypto-popup')
      shown.crypto = false
    }
    var R = selectClick('fiat', event) 
    // Focus the search box on non-mobile screen width
    if($(window).width() > 768)
      $('#fiat-popup input').focus()
    return R
  })

  function onInput(event) {
    recomputeCrypto(event)
    last = 'fiat'
  }
  
  $('#fiat-fieldset input')
    .on('change', onInput)
    .on('keyup', onInput)

  $('#fiat-select .label').text(fiat)

  $('#fiat-popup input')
    .on('keyup', searchFiat)

  builtFiat = true
}

function showFiatDefaults() {
  var items = [fiat]
  for(var j=0; j<fiatDefaults.length; j++) {
    if(fiatDefaults[j] != fiat) {
      items.push(fiatDefaults[j])
    }
  }
  
  populateFiatItems(items)
  registerFiatRowHandlers()
}

function populateFiatItems(items) {
  var html = [],
    i = 0
  for(var j=0; j<items.length; j++) {
    if(items[j] in fiatLabels) {
      html[i++] = '<div class="row'
      if(items[j] == fiat)
        html[i++] = ' current'
      html[i++] = '"><span class="abbr">'
      html[i++] = items[j]
      html[i++] = '</span><span class="label">'
      html[i++] = fiatLabels[items[j]]
      html[i++] = '</span></div>'
    }
  }
  $('#fiat-rows').html(html.join(''))
}

function searchFiat(event) {
  switch(event.which) {
    case 13:
      // Enter
      $('#fiat-popup .row:first-child').click()
      return
    case 27:
      // Escape
      shown.fiat = false
      clearSearch()
      showFiatDefaults()
      registerFiatRowHandlers()
      hidePopup('#fiat-fieldset', '#fiat-popup')
      return
  }
  var s = $('#fiat-popup input').val()
  if(s.length == 0) {
    showFiatDefaults()
    return
  }
  var r = fuse.search(s)
  if(typeof r === 'string') {
    showFiatDefaults()
    return
  }
  r = r.slice(0,6)
  populateFiatItems(r)
  registerFiatRowHandlers()
}

function clearSearch() {
  $('#fiat-popup input').val('')
}

function registerFiatRowHandlers() {
  $('#fiat-popup .row').on('click', fiatRowClick)
}

function fiatRowClick(event) {
  var T = $(event.currentTarget)

  try {
    var cur = $('.abbr', T).text()
    if(cur in fiatLabels) {
      setFiatCurrency(cur)
    }
  } catch(e) {}

  clearSearch()
  showFiatDefaults()

  hidePopup('#fiat-fieldset', '#fiat-popup')
  shown.fiat = false

  return stopEvent(event)
}

function setFiatCurrency(cur) {
  fiat = cur
  subscribeFiat()
  recomputeFiat()
  $('#fiat-select .label').text(fiat)
  saveSettings()
  try {
    ga('send','event','Converter','setFiat',fiat)
  } catch(e) {}
}

function buildCrypto() {
  $('#crypto-select').on('click', function(event) { 
    if(shown.fiat) {
      hidePopup('#fiat-fieldset', '#fiat-popup')
      shown.fiat = false
    }
    return selectClick('crypto', event) 
  })
  $('#crypto-popup .row').on('click', cryptoRowClick)
  try {
    $('#crypto-popup .row').each(function(i, t) {
      if($(t).data('unit') == cryptoSetting) {
        // console.log($(t))
        last = 'btc'
        $(t).click()
      }
    })
  } catch(e) {}

  function onInput(event) {
    recomputeFiat(event)
    last = 'btc'
  }

  $('#crypto-fieldset input')
    .on('change', onInput)
    .on('keyup', onInput)

  builtCrypto = true
}

function selectClick(prefix, event) {
  if(shown[prefix]) {
    hidePopup('#'+prefix+'-fieldset', '#'+prefix+'-popup')
    if(prefix == 'fiat') {
      clearSearch()
      showFiatDefaults()
    }
  } else {
    positionPopup('#'+prefix+'-fieldset', '#'+prefix+'-popup', '#'+prefix+'-fieldset p.note')
  }
  shown[prefix] = !shown[prefix]

  return stopEvent(event)
}

function cryptoRowClick(event) {
  hidePopup('#crypto-fieldset', '#crypto-popup')
  shown.crypto = false
  $('#crypto-popup .row').each(function(i, t) {
    $(t).removeClass('current')
  })
  var T = $(event.currentTarget)
  T.addClass('current')

  try {
    var unit = T.data('unit')
    if(unit in btcUnits) {
      cryptoSetting = unit
      $('#crypto-select .label').text($('.abbr', T).text())
      if(builtCrypto) {
        try {
          ga('send','event','Converter','setCrypto',$('.abbr', T).text())
        } catch(e) {}
      }
    }
    if(last == 'btc') {
      recomputeFiat()
    } else {
      recomputeCrypto()
    }
    saveSettings()
  } catch(e) {}

  return stopEvent(event)
}

function hidePopup(parent, child) {
  $(parent).removeClass('popped')
  $(child).css('display', 'none')
}

function positionPopup(parent, child, minus) {
  var P = $(parent),
    O = P.offset(),
    M = $(minus)
  $(child)
    .css('display', 'block')
    .width(P.width())
    .offset({
      top: O.top + P.height() - (isNaN(M.height()) ? 0 : M.height()),
      left: O.left
    })
  P.addClass('popped')
}

function setFiat() {
  $('#fiat-select .label').text(fiat)
  hidePopup('#fiat-fieldset', '#fiat-popup')
}

function recomputeFiat() {
  var cryptoValue = +$('#crypto-fieldset input').val()
  if(isNaN(cryptoValue) || Math.abs(cryptoValue) < 1e-8) {
    $('#fiat-fieldset input').val(0)
    return
  }
  if(cryptoValue < 0) {
    cryptoValue *= -1
    $('#crypto-fieldset input').val(cryptoValue)
  }
  var rate = historicMode ? historicRate : rates[fiat]
  if(isNaN(rate) || typeof rate == "undefined") {
    $('#fiat-fieldset input').val(0)
    return
  }
  var fiatValue = cryptoValue * rate * (btcUnits[cryptoSetting].i / BTCINT)
  var places = 1
  while(fiatValue < Math.pow(10, -places)) {
    places++
  }
  places++
  if(places > 20)
    places = 20
  $('#fiat-fieldset input').val(fiatValue.toFixed(places))
}
function recomputeCrypto() {
  var fiatValue = +$('#fiat-fieldset input').val()
  if(isNaN(fiatValue) || Math.abs(fiatValue) < 1e-8) {
    $('#crypto-fieldset input').val(0)
    return
  }
  if(fiatValue < 0) {
    fiatValue *= -1
    $('#fiat-fieldset input').val(fiatValue)
  }
  var rate = historicMode ? historicRate : rates[fiat]
  if(isNaN(rate) || typeof rate == 'undefined') {
    $('#crypto-fieldset input').val(0)
    return
  }
  var cryptoValue = fiatValue / rate * (BTCINT / btcUnits[cryptoSetting].i)
  $('#crypto-fieldset input').val(cryptoValue.toFixed(btcUnits[cryptoSetting].d))
}

function stopEvent(e) {
  e.preventDefault()
  e.stopPropagation()

  return false
}

function resizePopups() {
  if(shown.fiat)
    positionPopup('#fiat-fieldset', '#fiat-popup', '#fiat-fieldset p.note')
  if(shown.crypto)
    positionPopup('#crypto-fieldset', '#crypto-popup')
}

var resizeFn = throttle(resizePopups, 50)

var finalID = -1
$(window).on('resize', function() {
  resizeFn()
  window.clearTimeout(finalID)
  finalID = window.setTimeout(resizePopups, 50)
})

var channels = {}
function subscribeFiat() {
  var channel = 'price:'+fiat.toLowerCase()
  if(channels[channel]) {
    recomputeFiat()
    return
  }
  var handler = (function(FIAT) {
    return function(data) {
      onRate(data, FIAT)
    }
  })(fiat)
  register(channel, handler)
  subscribe(channel)
  subscribe('source:tools-converter')
  channels[channel] = true
}

//// https://bootstrap-datepicker.readthedocs.io/en/latest/options.html
//
//function initializeDatePicker() {
//  $('#picker')
//    .datepicker({
//      assumeNearbyYear: true,
//      autoclose: true,
//      clearBtn: true,
//      disableTouchKeyboard: true,
//      endDate: 'yesterday',
//      format: 'yyyy-mm-dd',
//      maxViewMode: 'decade',
//      startDate: '2010-07-18',
//      zIndexOffset: 1200
//    })
//    .on('changeDate', onChangeDate)
//    .on('focus', function() {
//      hidePopup('#fiat-fieldset', '#fiat-popup')
//      hidePopup('#crypto-fieldset', '#crypto-popup')
//    })
//}

function onChangeDate(e) {
  if(typeof e.date === 'undefined') {
    if(historicMode) {
      // Date has been cleared: resume real-time
      endHistoricMode()
    }
    historicRecompute()
  } else {
    if(!historicMode) {
      // Entering historic mode, leaving real-time
      startHistoricMode()
    }
    var dateStr = dateToString(e.date)
    if(historicRates[dateStr]) {
      historicRate = historicRates[dateStr]
      historicFinal(dateStr)
    } else {
      getHistoric(dateStr)
    }
    try {
      ga('send','event','Converter','setDate',dateStr)
    } catch(e) {}
  }
}

function historicRecompute() {
  if(last == 'btc') {
    recomputeFiat()
  } else {
    recomputeCrypto()
  }
}

function getHistoric(dateStr) {
  var successFn = (function(D) {
    return function(data) {
      historicSuccess(data, dateStr)
    }
  })(dateStr)
  $.ajax({
    url: 'https://index.bitcoin.com/api/v0/lookup?time='+dateStr,
    dataType: 'json',
    crossDomain: true
  })
  .done(successFn)
  .fail()
  .always()
}

function historicSuccess(data, dateStr) {
  if(data.close && data.close.price) {
    historicRate = +data.close.price / 100
    historicRates[dateStr] = historicRate
    historicFinal(dateStr)
  }
}

function historicFinal(dateStr) {
  historicRecompute()
  $('#fiat-fieldset .note .historic').text('* '+dateStr+' UTC Close')
}

function historicFail() {
  historicRate = 0
  historicRecompute()
}

function startHistoricMode() {
  historicMode = true
  spotFiat = fiat
  setFiatCurrency('USD')
  $('#fiat-select .arrow').css('display','none')
  $('#fiat-select').css('cursor','default')
  $('#fiat-fieldset .note .real-time').css('display', 'none')
  $('#fiat-fieldset .note .historic').css('display', 'inline')
}

function endHistoricMode() {
  historicMode = false
  setFiatCurrency(spotFiat)
  $('#fiat-select .arrow').css('display','')
  $('#fiat-select').css('cursor','')
  $('#fiat-fieldset .note .real-time').css('display', 'inline')
  $('#fiat-fieldset .note .historic').css('display', 'none').text('')
}

function dateToString(d) {
  if(!d instanceof Date) {
    return ''
  }
  return [
    d.getFullYear(),
    leadingZero10(d.getMonth()+1),
    leadingZero10(d.getDate())
  ].join('-')
}

function leadingZero10(val) {
  if(val < 10) {
    return '0'+val
  }
  return val
}

function main() {
  loadSettings()
  buildCrypto()
  buildFiat()
  subscribeFiat()
}

function throttle (callback, limit) {
  var wait = false
  return function () {
    if (!wait) {
      callback.call()
      wait = true
      setTimeout(function () {
        wait = false
      }, limit)
    }
  }
}

var fiatList = [
  ["USD","US Dollar"],
  ["EUR","Eurozone Euro"],
  ["GBP","Pound Sterling"],
  ["JPY","Japanese Yen"],
  ["CAD","Canadian Dollar"],
  ["AUD","Australian Dollar"],
  ["CNY","Chinese Yuan"],
  ["CHF","Swiss Franc"],
  ["SEK","Swedish Krona"],
  ["NZD","New Zealand Dollar"],
  ["KRW","South Korean Won"],
  ["AED","UAE Dirham"],
  ["AFN","Afghan Afghani"],
  ["ALL","Albanian Lek"],
  ["AMD","Armenian Dram"],
  ["ANG","Netherlands Antillean Guilder"],
  ["AOA","Angolan Kwanza"],
  ["ARS","Argentine Peso"],
  ["AWG","Aruban Florin"],
  ["AZN","Azerbaijani Manat"],
  ["BAM","Bosnia-Herzegovina Convertible Mark"],
  ["BBD","Barbadian Dollar"],
  ["BDT","Bangladeshi Taka"],
  ["BGN","Bulgarian Lev"],
  ["BHD","Bahraini Dinar"],
  ["BIF","Burundian Franc"],
  ["BMD","Bermudan Dollar"],
  ["BND","Brunei Dollar"],
  ["BOB","Bolivian Boliviano"],
  ["BRL","Brazilian Real"],
  ["BSD","Bahamian Dollar"],
  ["BTN","Bhutanese Ngultrum"],
  ["BWP","Botswanan Pula"],
  ["BYR","Belarusian Ruble"],
  ["BZD","Belize Dollar"],
  ["CDF","Congolese Franc"],
  ["CLF","Chilean Unit of Account (UF)"],
  ["CLP","Chilean Peso"],
  ["COP","Colombian Peso"],
  ["CRC","Costa Rican Colón"],
  ["CUP","Cuban Peso"],
  ["CVE","Cape Verdean Escudo"],
  ["CZK","Czech Koruna"],
  ["DJF","Djiboutian Franc"],
  ["DKK","Danish Krone"],
  ["DOP","Dominican Peso"],
  ["DZD","Algerian Dinar"],
  ["EEK","Estonian Kroon"],
  ["EGP","Egyptian Pound"],
  ["ETB","Ethiopian Birr"],
  ["FJD","Fijian Dollar"],
  ["FKP","Falkland Islands Pound"],
  ["GEL","Georgian Lari"],
  ["GHS","Ghanaian Cedi"],
  ["GIP","Gibraltar Pound"],
  ["GMD","Gambian Dalasi"],
  ["GNF","Guinean Franc"],
  ["GTQ","Guatemalan Quetzal"],
  ["GYD","Guyanaese Dollar"],
  ["HKD","Hong Kong Dollar"],
  ["HNL","Honduran Lempira"],
  ["HRK","Croatian Kuna"],
  ["HTG","Haitian Gourde"],
  ["HUF","Hungarian Forint"],
  ["IDR","Indonesian Rupiah"],
  ["ILS","Israeli Shekel"],
  ["INR","Indian Rupee"],
  ["IQD","Iraqi Dinar"],
  ["IRR","Iranian Rial"],
  ["ISK","Icelandic Króna"],
  ["JEP","Jersey Pound"],
  ["JMD","Jamaican Dollar"],
  ["JOD","Jordanian Dinar"],
  ["KES","Kenyan Shilling"],
  ["KGS","Kyrgystani Som"],
  ["KHR","Cambodian Riel"],
  ["KMF","Comorian Franc"],
  ["KPW","North Korean Won"],
  ["KWD","Kuwaiti Dinar"],
  ["KYD","Cayman Islands Dollar"],
  ["KZT","Kazakhstani Tenge"],
  ["LAK","Laotian Kip"],
  ["LBP","Lebanese Pound"],
  ["LKR","Sri Lankan Rupee"],
  ["LRD","Liberian Dollar"],
  ["LSL","Lesotho Loti"],
  ["LTL","Lithuanian Litas"],
  ["LVL","Latvian Lats"],
  ["LYD","Libyan Dinar"],
  ["MAD","Moroccan Dirham"],
  ["MDL","Moldovan Leu"],
  ["MGA","Malagasy Ariary"],
  ["MKD","Macedonian Denar"],
  ["MMK","Myanma Kyat"],
  ["MNT","Mongolian Tugrik"],
  ["MOP","Macanese Pataca"],
  ["MRO","Mauritanian Ouguiya"],
  ["MUR","Mauritian Rupee"],
  ["MVR","Maldivian Rufiyaa"],
  ["MWK","Malawian Kwacha"],
  ["MXN","Mexican Peso"],
  ["MYR","Malaysian Ringgit"],
  ["MZN","Mozambican Metical"],
  ["NAD","Namibian Dollar"],
  ["NGN","Nigerian Naira"],
  ["NIO","Nicaraguan Córdoba"],
  ["NOK","Norwegian Krone"],
  ["NPR","Nepalese Rupee"],
  ["OMR","Omani Rial"],
  ["PAB","Panamanian Balboa"],
  ["PEN","Peruvian Nuevo Sol"],
  ["PGK","Papua New Guinean Kina"],
  ["PHP","Philippine Peso"],
  ["PKR","Pakistani Rupee"],
  ["PLN","Polish Zloty"],
  ["PYG","Paraguayan Guarani"],
  ["QAR","Qatari Rial"],
  ["RON","Romanian Leu"],
  ["RSD","Serbian Dinar"],
  ["RUB","Russian Ruble"],
  ["RWF","Rwandan Franc"],
  ["SAR","Saudi Riyal"],
  ["SBD","Solomon Islands Dollar"],
  ["SCR","Seychellois Rupee"],
  ["SDG","Sudanese Pound"],
  ["SGD","Singapore Dollar"],
  ["SHP","Saint Helena Pound"],
  ["SLL","Sierra Leonean Leone"],
  ["SOS","Somali Shilling"],
  ["SRD","Surinamese Dollar"],
  ["STD","São Tomé and Príncipe Dobra"],
  ["SVC","Salvadoran Colón"],
  ["SYP","Syrian Pound"],
  ["SZL","Swazi Lilangeni"],
  ["THB","Thai Baht"],
  ["TJS","Tajikistani Somoni"],
  ["TMT","Turkmenistani Manat"],
  ["TND","Tunisian Dinar"],
  ["TOP","Tongan Paʻanga"],
  ["TRY","Turkish Lira"],
  ["TTD","Trinidad and Tobago Dollar"],
  ["TWD","New Taiwan Dollar"],
  ["TZS","Tanzanian Shilling"],
  ["UAH","Ukrainian Hryvnia"],
  ["UGX","Ugandan Shilling"],
  ["UYU","Uruguayan Peso"],
  ["UZS","Uzbekistan Som"],
  ["VEF","Venezuelan Bolívar Fuerte"],
  ["VND","Vietnamese Dong"],
  ["VUV","Vanuatu Vatu"],
  ["WST","Samoan Tala"],
  ["XAF","CFA Franc BEAC"],
  ["XAG","Silver (troy ounce)"],
  ["XAU","Gold (troy ounce)"],
  ["XCD","East Caribbean Dollar"],
  ["XOF","CFA Franc BCEAO"],
  ["XPF","CFP Franc"],
  ["YER","Yemeni Rial"],
  ["ZAR","South African Rand"],
  ["ZMW","Zambian Kwacha"],
  ["ZWL","Zimbabwean Dollar"]
]

var langMap = {
  'USD': 'en-US,es-US',
  "EUR": 'br,co,de-FR,fr-FR,oc,da-DE,da-DE,an,ca,es-ES,eu,gl,de-IT,fr-IT,it-IT,sc,el-GR', //"name":"Eurozone Euro",
  "GBP": 'cy-GB,en-boont,en-GB,en-GB-oed,en-scouse,fr-GB,ga-GB',
  "JPY": 'ja',
  "CAD": 'cr,en-CA,fr-CA,iu',
  "AUD": 'en-AU',
  "CNY": 'bo,i-hak,ii,Yi,za,zh-CN,zh-gan,zh-guoyu,zh-hakka,zh-Hans,zh-Hant,zh-wuu,zh-xiang,zh-yue',
  "CHF": 'de-CH,fr-CH,it-CH,rm',
  "SEK": 'fi-SE,se,sma,sme,sv-SE',
  "NZD": 'en-NZ,mi',
  "KRW": 'ko-Kr',
  "AED": 'ar-AE',
  "AFN": 'fa-AF,ps,ug,uz-AF',
  "ALL": 'sq',
  "AMD": 'hy',
  "ANG": 'nl-AN',
  "AOA": 'kg,kj,pt-AO',
  "ARS": 'cy-AR,es-AR,gn',
  "AWG": 'nl-AW',
  "AZN": 'av,az,,az-Arab,az-Cyrl,az-Latn,os',
  "BAM": 'bs,hr-BA,sr-BA',
  "BBD": 'en-BB',
  "BDT": 'bn-BD',
  "BGN": 'bg,cu,tr-BG',
  "BHD": 'ar-BH',
  "BIF": '', // Burundian Franc
  "BMD": '', // Bermudan Dollar
  "BND": '', // Brunei Dollar
  "BOB": '', // Bolivian Boliviano
  "BRL": '', // Brazilian Real
  "BSD": '', // Bahamian Dollar
  "BTN": '', // Bhutanese Ngultrum
  "BWP": '', // Botswanan Pula
  "BYR": '', // Belarusian Ruble
  "BZD": '', // Belize Dollar
  "CDF": '', // Congolese Franc
  "CLF": '', // Chilean Unit of Account (UF)
  "CLP": '', // Chilean Peso
  "COP": '', // Colombian Peso
  "CRC": '', // Costa Rican Colón
  "CUP": '', // Cuban Peso
  "CVE": '', // Cape Verdean Escudo
  "CZK": '', // Czech Koruna
  "DJF": '', // Djiboutian Franc
  "DKK": '', // Danish Krone
  "DOP": '', // Dominican Peso
  "DZD": '', // Algerian Dinar
  "EEK": '', // Estonian Kroon
  "EGP": '', // Egyptian Pound
  "ETB": '', // Ethiopian Birr
  "FJD": '', // Fijian Dollar
  "FKP": '', // Falkland Islands Pound
  "GEL": '', // Georgian Lari
  "GHS": '', // Ghanaian Cedi
  "GIP": '', // Gibraltar Pound
  "GMD": '', // Gambian Dalasi
  "GNF": '', // Guinean Franc
  "GTQ": '', // Guatemalan Quetzal
  "GYD": '', // Guyanaese Dollar
  "HKD": 'en-HK,zh-Hant,zh-Hant-HK,zh-HK',
  "HNL": '', // Honduran Lempira
  "HRK": '', // Croatian Kuna
  "HTG": '', // Haitian Gourde
  "HUF": '', // Hungarian Forint
  "IDR": '', // Indonesian Rupiah
  "ILS": 'ar-IL,en-IL,he,yi',
  "INR": 'ar-IN,as,bh,bn-IN,en-IN,gu,hi,kn,kok,ks,ml,mr,ne,or,pa,pi,sa,sd-IN,ta-IN,te,ur-IN',
  "IQD": '', // Iraqi Dinar
  "IRR": '', // Iranian Rial
  "ISK": '', // Icelandic Króna
  "JEP": '', // Jersey Pound
  "JMD": '', // Jamaican Dollar
  "JOD": '', // Jordanian Dinar
  "KES": '', // Kenyan Shilling
  "KGS": '', // Kyrgystani Som
  "KHR": '', // Cambodian Riel
  "KMF": '', // Comorian Franc
  "KPW": '', // North Korean Won
  "KWD": '', // Kuwaiti Dinar
  "KYD": '', // Cayman Islands Dollar
  "KZT": '', // Kazakhstani Tenge
  "LAK": '', // Laotian Kip
  "LBP": '', // Lebanese Pound
  "LKR": '', // Sri Lankan Rupee
  "LRD": '', // Liberian Dollar
  "LSL": '', // Lesotho Loti
  "LTL": '', // Lithuanian Litas
  "LVL": '', // Latvian Lats
  "LYD": '', // Libyan Dinar
  "MAD": '', // Moroccan Dirham
  "MDL": '', // Moldovan Leu
  "MGA": '', // Malagasy Ariary
  "MKD": '', // Macedonian Denar
  "MMK": '', // Myanma Kyat
  "MNT": '', // Mongolian Tugrik
  "MOP": '', // Macanese Pataca
  "MRO": '', // Mauritanian Ouguiya
  "MUR": '', // Mauritian Rupee
  "MVR": '', // Maldivian Rufiyaa
  "MWK": '', // Malawian Kwacha
  "MXN": '', // Mexican Peso
  "MYR": '', // Malaysian Ringgit
  "MZN": '', // Mozambican Metical
  "NAD": '', // Namibian Dollar
  "NGN": '', // Nigerian Naira
  "NIO": '', // Nicaraguan Córdoba
  "NOK": 'nb,nn,no,no-bok,no-nyn',
  "NPR": '', // Nepalese Rupee
  "OMR": '', // Omani Rial
  "PAB": '', // Panamanian Balboa
  "PEN": '', // Peruvian Nuevo Sol
  "PGK": '', // Papua New Guinean Kina
  "PHP": '', // Philippine Peso
  "PKR": '', // Pakistani Rupee
  "PLN": 'de-PL,pl',
  "PYG": '', // Paraguayan Guarani
  "QAR": '', // Qatari Rial
  "RON": '', // Romanian Leu
  "RSD": '', // Serbian Dinar
  "RUB": 'av,ba,ce,cu,cv,kv,os,ru-RU,tt',
  "RWF": '', // Rwandan Franc
  "SAR": '', // Saudi Riyal
  "SBD": '', // Solomon Islands Dollar
  "SCR": '', // Seychellois Rupee
  "SDG": '', // Sudanese Pound
  "SGD": 'bn-SG,en-SG,ms-SG,ta-SG,zh-Hans-SG,zh-SG',
  "SHP": '', // Saint Helena Pound
  "SLL": '', // Sierra Leonean Leone
  "SOS": '', // Somali Shilling
  "SRD": '', // Surinamese Dollar
  "STD": '', // São Tomé and Príncipe Dobra
  "SVC": '', // Salvadoran Colón
  "SYP": '', // Syrian Pound
  "SZL": '', // Swazi Lilangeni
  "THB": 'si,th',
  "TJS": '', // Tajikistani Somoni
  "TMT": '', // Turkmenistani Manat
  "TND": '', // Tunisian Dinar
  "TOP": '', // Tongan Paʻanga
  "TRY": 'tr-TR',
  "TTD": '', // Trinidad and Tobago Dollar
  "TWD": '', // New Taiwan Dollar
  "TZS": '', // Tanzanian Shilling
  "UAH": '', // Ukrainian Hryvnia
  "UGX": '', // Ugandan Shilling
  "UYU": '', // Uruguayan Peso
  "UZS": '', // Uzbekistan Som
  "VEF": 'es-VE', // Venezuelan Bolívar Fuerte
  "VND": 'vi', // Vietnamese Dong
  "VUV": '', // Vanuatu Vatu
  "WST": '', // Samoan Tala
  "XAF": '', // CFA Franc BEAC
  "XCD": 'en-KN', // East Caribbean Dollar
  "XOF": '', // CFA Franc BCEAO
  "XPF": '', // CFP Franc
  "YER": '', // Yemeni Rial
  "ZAR": 'af,en-ZA,nr,ss-ZA,tn-ZA,ts,ve,xh',
  "ZMW": '', // Zambian Kwacha
  "ZWL": '', // Zimbabwean Dollar
}
