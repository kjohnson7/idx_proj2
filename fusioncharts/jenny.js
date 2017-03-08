FusionCharts.ready(function () {
    var salesHMChart = new FusionCharts({
        type: 'heatmap',
        renderAt: 'chart-container',
        width: '600',
        height: '570',
        dataFormat: 'json',
        dataSource:  {
            "chart": {
                //"caption": "My Time",
                "subcaption": "01/30/17 - 02/05/17",
                "xAxisName":"Days",
                "yAxisName":"Time",
                "showplotborder": "1",
                "xAxisLabelsOnTop": "1",
                "plottooltext":"<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel: </div>{br}$columnLabel: $tlLabel{br}$trLabel",
                "showValues" : "0",
                 //Cosmetics
                "baseFontColor" : "#333333",
                "baseFont" : "Helvetica Neue,Arial",
                "captionFontSize" : "10",
                "subcaptionFontSize" : "10",
                "subcaptionFontBold" : "0",
                "showBorder" : "0",
                "bgColor" : "#ffffff",
                "showShadow" : "0",
                "usePlotGradientColor" :"0",
                "canvasBgColor" : "#ffffff",
                "canvasBorderAlpha" : "0",
                "legendBgAlpha" : "0",
                "legendBorderAlpha" : "0",
                "legendShadow" : "0",
                "legendItemFontSize" : "10",
                "legendItemFontColor" : "#666666",
                "toolTipColor" : "#ffffff",
                "toolTipBorderThickness" : "0",
                "toolTipBgColor" : "#000000",
                "toolTipBgAlpha" : "80",
                "toolTipBorderRadius" : "2",
                "toolTipPadding" : "5",
                
            },
            "dataset": [
                {
                    "data": [
                        {
                            "rowid": "5 am",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "8hr 7min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Monday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to Oakland"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Monday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to Oakland"
                        },
                        {
                            "rowid": "8 am",
                            "columnid": "Monday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to Oakland"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Catalysts for Change"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Monday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Oakland to SF"
                        },
                        {
                            "rowid": "4 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Data Viz"
                        },
                        {
                            "rowid": "5 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Data Viz"
                        },
                        {
                            "rowid": "6 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Data Viz"
                        },
                        {
                            "rowid": "7 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
                        {
                            "rowid": "8 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
                        {
                            "rowid": "9 pm",
                            "columnid": "Monday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
                        {
                            "rowid": "10 pm",
                            "columnid": "Monday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                         {
                            "rowid": "11 pm",
                            "columnid": "Wednesday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        {
                            "rowid": "Midnight",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "1 am",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "2 am",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "3 am",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "4 am",
                            "columnid": "Monday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                         {
                            "rowid": "5 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Tuesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "7 pm",
                            "columnid": "Tuesday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "French"
                        },
                        {
                            "rowid": "8 pm",
                            "columnid": "Tuesday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "French"
                        },
                        {
                            "rowid": "1 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "2 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "3 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "4 am",
                            "columnid": "Tuesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                        {
                            "rowid": "5 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Wednesday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "5 pm",
                            "columnid": "Wednesday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to SF"
                        },
                        {
                            "rowid": "6 pm",
                            "columnid": "Wednesday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to SF"
                        },
                        {
                            "rowid": "7 pm",
                            "columnid": "Wednesday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
 						{
                            "rowid": "8 pm",
                            "columnid": "Wednesday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
                        {
                            "rowid": "9 pm",
                            "columnid": "Wednesday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Advanced Viz Design"
                        },
                        {
                            "rowid": "10 pm",
                            "columnid": "Wednesday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        
                        {
                            "rowid": "Midnight",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                         {
                            "rowid": "1 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                         {
                            "rowid": "2 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                         {
                            "rowid": "3 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                         {
                            "rowid": "4 am",
                            "columnid": "Wednesday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "5 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 23min"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Thursday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "Midnight",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "1 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "2 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "3 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                         {
                            "rowid": "4 am",
                            "columnid": "Thursday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
						{
                            "rowid": "5 am",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 49min"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to SF"
                        },
                        {
                            "rowid": "8 am",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to SF"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Class",
                            "trlabel": "Thesis"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        {
                            "rowid": "4 pm",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        {
                            "rowid": "5 pm",
                            "columnid": "Friday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        {
                            "rowid": "6 pm",
                            "columnid": "Friday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "7 pm",
                            "columnid": "Friday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "8 pm",
                            "columnid": "Friday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "9 pm",
                            "columnid": "Friday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Gig"
                        },
                        {
                            "rowid": "Midnight",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "1 am",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "2 am",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "3 am",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "4 am",
                            "columnid": "Friday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "5 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 59min"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Saturday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Saturday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Saturday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Band Practice"
                        },
                        {
                            "rowid": "Midnight",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "1 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "2 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "3 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "4 am",
                            "columnid": "Saturday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "5 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "6 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "7 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "6hr 54min"
                        },
                        {
                            "rowid": "9 am",
                            "columnid": "Sunday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "Dixon to SF"
                        },
                        {
                            "rowid": "10 am",
                            "columnid": "Sunday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Field Trip"
                        },
                        {
                            "rowid": "11 am",
                            "columnid": "Sunday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Field Trip"
                        },
                        {
                            "rowid": "Noon",
                            "columnid": "Sunday",
                            "value": "4",
                            "tllabel": "Class",
                            "trlabel": "Field Trip"
                        },
                        {
                            "rowid": "1 pm",
                            "columnid": "Sunday",
                            "value": "7",
                            "tllabel": "Driving",
                            "trlabel": "SF to Dixon"
                        },
                        {
                            "rowid": "2 pm",
                            "columnid": "Sunday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "3 pm",
                            "columnid": "Sunday",
                            "value": "9",
                            "tllabel": "Work",
                            "trlabel": "Intuit Remote"
                        },
                        {
                            "rowid": "10 pm",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "11 pm",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "Midnight",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "1 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "2 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "3 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },
                        {
                            "rowid": "4 am",
                            "columnid": "Sunday",
                            "value": "11",
                            "tllabel": "Sleep",
                            "trlabel": "7hr 48 min"
                        },

                    ]
                }
            ],
            "colorrange": {
                "gradient": "0",
                "minvalue": "0",
                "code": "E24B1A",
                "startlabel": "Class Time",
                "endlabel": "Sleep Time",
                "color": [
                    {
                        "code": "8F206D",
                        "minvalue": "1",
                        "maxvalue": "5",
                        "label": "Class Time"
                    },
                    {
                        "code": "CE0037",
                        "minvalue": "5",
                        "maxvalue": "8.5",
                        "label": "Driving Time"
                    },
                    {
                        "code": "EA5529",
                        "minvalue": "8.5",
                        "maxvalue": "10",
                        "label": "Work Time"
                    },
                    {
                        "code": "FDBA00",
                        "minvalue": "10.5",
                        "maxvalue": "12",
                        "label": "Sleep Time"
                    }
                ]
            }
        }
    });
    salesHMChart.render();
});