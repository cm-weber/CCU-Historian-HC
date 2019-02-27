var ChhLanguage = {
    'default': {
        'interface': {
            'search': 'Suche',
            'today': 'Heute',
            'clear': 'Zurücksetzen',
            'close': 'Schließen',
            'favorites' : 'Favoriten',
            'openLink' : 'Link erzeugen',
            pageTitle: 'CCU-historian: HighChart',
        },
        'historian': {
            //Datenpunkte
            'interfaceId': 'Schnittstelle',
            'address': 'Seriennummer:Kanal',
            'identifier': 'Parameter',
            'preprocType': 'preprocType', //?
            'preprocParam': 'preprocParam', //?
            'displayName': 'Kanalname',
            'room': 'Raum',
            'function': 'Gewerk',
            'comment': 'Kommentar',
            'paramSet': 'Parameter Set', // ?
            'tabOrder': 'Tab Reihenfolge', // ?
            'maximum': 'Maximum',
            'unit': 'Einheit',
            'minimum': 'Minimum',
            'control': 'Typ', //?
            'operations': 'Operations', //??
            'flags': 'Flags', //?
            'type': 'Datentyp',
            'defaultValue': 'Standard Wert',
            'idx': 'Historian Id',

            // Std. Gewerke
            '${funcHeating}': 'Heizung',
            '${funcButton}': 'Schalter',
            '${funcLight}': 'Licht',
            '${funcEnergy}': 'Energiemanagement',
            '${funcWeather}': 'Wetter',

            //Std. Räume
            '${roomBedroom}': 'Schlafzimmer',
            '${roomOffice}': 'Büro',
            '${roomKitchen}': 'Küche',
            '${roomChildrensRoom1}': 'Kinderzimmer 1',
            '${roomGarden}': 'Garten',
            '${funcSecurity}': 'Sicherheit',

            // Select Option Filter default
            roomALL: 'Datenpunkte von allen Räumen',
            sysvarALL: 'Systemvariablen',
            functionALL: 'Datenpunkte von allen Gewerken',

            // Button and Screen text
            buttonDay: 'Tag',
            buttonWeek: 'Woche',
            buttonMonth: 'Monat',
            buttonALL: 'Alles',
            buttonRefresh: 'Refresh',
            buttonLink: 'Link erzeugen',
            labelValues: 'Werte',
            filterPlaceHolder: 'Suchen ...',
            yaxis0:  'Standard Y-Achse',
            yaxis1:  'Raum Temperatur 10-30°C',
            yaxis2:  'Außen Temperatur -20-50°C',
            yaxis3:  'Heizung Temperatur 20-90°C',
            yaxis4:  'Prozent 0-100%',
            yaxis5:  'Status 0-1',
            yaxis6:  'Luftfeuchtigkeit 20%-100%',
            yaxis7:  'Luftdruck 900-1000',
            yaxis8:  'Helligkeit 0-???',
            yaxis9:  'CO2 300-3000',
            yaxis10: 'Luftfeuchtigkeit g/kg',
            yaxis11: 'min-Max ± 5%',
            yaxis12: 'min-Max ± 2%',
            linetype0:  'SP-Line',
            linetype1:  'Line',
            linetype2:  'Line step left',
            linetype3:  'Line step center',
            linetype4:  'Line step right',
            linetype5:  'Scatter',
            linetype6:  'SP-Area',
            linetype7:  'Area',
            linetype8:  'Area step left',
            linetype9:  'Area step center',
            linetype10: 'Area step right',
            linetype11: 'column',
            linewidth0: 'Linenstärke 0',
            linewidth1: 'Linenstärke 1',
            linewidth2: 'Linenstärke 2',
            linewidth3: 'Linenstärke 3',
            linewidth4: 'Linenstärke 4',
            linewidth5: 'Linenstärke 5',
            linewidth6: 'Linenstärke 6',
            linewidth7: 'Linenstärke 7',
            linewidth8: 'Linenstärke 8',
            linewidth9: 'Linenstärke 9',
            linewidth10: 'Linenstärke 10',
            comptype0:  'kein Vergleich',
            comptype1:  'Vergleich -1 Tag',
            comptype2:  'Vergleich -2 Tage',
            comptype3:  'Vergleich -3 Tage',
            comptype4:  'Vergleich -4 Tage',
            comptype5:  'Vergleich -1 Woche',
            comptype6:  'Vergleich -2 Wochen',
            comptype7:  'Vergleich -3 Wochen',
            comptype8:  'Vergleich -4 Wochen',
            comptype9:  'Vergleich -1 Monat',
            comptype10: 'Vergleich -2 Monate',
            comptype11: 'Vergleich -3 Monate',
            comptype12: 'Vergleich -4 Monate',
            comptype13: 'Vergleich -1 Jahr',
            comptypeC0:  '',
            comptypeC1:  '-1T',
            comptypeC2:  '-2T',
            comptypeC3:  '-3T',
            comptypeC4:  '-4T',
            comptypeC5:  '-1W',
            comptypeC6:  '-2W',
            comptypeC7:  '-3W',
            comptypeC8:  '-4W',
            comptypeC9:  '-1M',
            comptypeC10: '-2M',
            comptypeC11: '-3M',
            comptypeC12: '-4M',
            comptypeC13: '-1J',


        },
        'highcharts': {
            decimalPoint: ',',
            thousandsSep: '.',
            loading: 'Daten werden geladen...',
            months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
            weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
            shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            exportButtonTitle: 'Exportieren',
            printButtonTitle: 'Drucken',
            rangeSelectorFrom: 'Von',
            rangeSelectorTo: 'Bis',
            rangeSelectorZoom: '', //'Zeitraum',
            yaxis0:  null,
            yaxis1:  'Temperatur',
            yaxis2:  'Außen Temperatur',
            yaxis3:  'Heizung Temperatur',
            yaxis4:  'Prozent %',
            yaxis5:  'Status',
            yaxis6:  'Luftfeuchtigkeit',
            yaxis7:  'Luftdruck',
            yaxis8:  'Helligkeit',
            yaxis9:  'CO2',
            yaxis10: 'Luftfeuchtigkeit g/kg',
            yaxis11: null,
            yaxis12: null,
            downloadPNG: 'Download PNG-Bild',
            downloadJPEG: 'Download JPEG-Bild',
            downloadPDF: 'Download PDF-Dokument',
            downloadSVG: 'Download SVG-Bild',
            legendactive: 'Legende aktivieren',
            legenddeactive: 'Legende deaktivieren',
            navigatoractive: 'Navigator aktivieren',
            navigatordeactive: 'Navigator deaktivieren',
            labelsactive: 'Beschriftung aktivieren',
            labelsdeactive: 'Beschriftung deaktivieren',
            daylight0: 'Tag/Nacht deaktivieren',
            daylight1: 'Tag/Nacht 1 aktivieren',
            daylight2: 'Tag/Nacht 2 aktivieren',
            daylight3: 'Tag/Nacht 3 aktivieren',
            limitactive: 'alle DP anzeigen',
            limitdeactive: 'nur aktive DP',
            aggractive1: 'dyn. Aggregation',
            aggractive2: 'dyn. Aggr. Delta',
            aggractive3: 'dyn. Aggr. Min/Max',
            aggractive4: 'dyn. Aggr. Sum',
            aggrdeactive: 'keine Aggregation',
            aggrtxt0: 'keine Aggregation', 
            aggrtxt1: 'Dyna. Aggregation', 
            aggrtxt2: 'Delta Aggregation', 
            aggrtxt3: 'Min/Max Aggregation', 
            aggrtxt4: 'Sum Aggregation', 
            autorefresh0: 'kein Refresh', 
            autorefresh1: 'Refresh nach ', 
            autorefreshText: 'Refresh in', 
            showfilter0: 'Filterzeile ausblenden', 
            showfilter1: 'Filterzeile einblenden', 
            resetZoom: 'Zoom zurücksetzen',
            resetZoomTitle: 'Zoom zurücksetzen',
            range30M: '30M',
            rangeH: 'H',
            range6H: '6H',
            rangeD: 'D',
            rangeW: 'W',
            rangeM: 'M',
            rangeY: 'Y',
            rangeALL: 'All',
            aggrmonth: 'Monat',
            aggrweek: 'Woche',
            aggrday: 'Tag',
            aggrhour: 'Stunde',
            aggrminute: 'Minute',
            aggrsecond: 'Sekunde',
        }
    }
};
