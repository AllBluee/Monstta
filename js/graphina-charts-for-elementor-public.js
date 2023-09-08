if(function(e){"use strict";e(window).on("load",(function(){let a=e(".chart-card");addRemoveClass(a.find("h4"),"graphina-chart-heading"),addRemoveClass(a.find("p"),"graphina-chart-sub-heading")})),document.addEventListener("DOMContentLoaded",(function(){if(null!==parent.document.querySelector(".elementor-editor-active")){let e="",a="https://iqonic.design/feature-request/?for_product=graphina";setInterval((function(){null!=parent.document.querySelector("[class*=elementor-control-iq]")&&(e=parent.document.querySelector("#elementor-panel__editor__help__link"),null!=e&&e.getAttribute("href")!==a&&(e.setAttribute("href",a),e.innerHTML="<b> Graphina Feature Request <i class='eicon-editor-external-link'></i> </b>"))}),3e3)}}))}(jQuery),void 0===fadein)var fadein={};if(void 0===fadeout)var fadeout={};if(void 0===isInit)var isInit={};const googleChartList=["area_google","bar_google","column_google","line_google","pie_google","donut_google","gauge_google","geo_google","org_google"],manualChartList=["mixed","brush","gantt_google"];function graphinNumberWithCommas(e,a,i=-1){if(isNaN(e))return e;var t=e.toString().split(".");let n=t[0].replace(/\B(?=(\d{3})+(?!\d))/g,a);return t[1]&&(-1===i?n=n+"."+t[1]:0!==i&&(n=n+"."+t[1].substring(0,i))),n}function resetGraphinaVars(){void 0===graphina_localize.graphinaAllGraphs&&(graphina_localize.graphinaAllGraphs={}),void 0===graphina_localize.graphinaAllGraphsOptions&&(graphina_localize.graphinaAllGraphsOptions={}),void 0===graphina_localize.graphinaBlockCharts&&(graphina_localize.graphinaBlockCharts={})}function addRemoveClass(e,a="",i=""){""!==i&&e.hasClass(a)&&e.removeClass(i),""===a||e.hasClass(a)||e.addClass(a)}function dateFormat(e,a=!1,i=!1){let t=new Date(e),n=t.getHours(),r="0"+t.getMinutes(),l=t.getDate(),o=t.getMonth()+1,s=t.getFullYear();return(i?l+"-"+o+"-"+s:"")+(i&&a?" ":"")+(a?n+":"+r.substr(-2):"")}function timeDifference(e,a){let i=new Date(a).getTime()-new Date(e).getTime(),t=Math.floor(i/1e3/60/60/24);i-=1e3*t*60*60*24;let n=Math.floor(i/1e3/60/60);i-=1e3*n*60*60;let r=Math.floor(i/1e3/60);return getPostfix(t,"day","days")+(t>0&&n>0?" ":"")+getPostfix(n,"hour","hours")+(n>0&&r>0?" ":"")+getPostfix(r,"minute","minutes")}function getPostfix(e,a,i){let t="";switch(!0){case 0===e:break;case 1===e:t+=e+" "+a;break;case e>1:t+=e+" "+i}return t}function isInViewport(e){if(null!=graphina_localize.is_view_port_disable&&"on"==graphina_localize.is_view_port_disable)return!0;const a=e.getBoundingClientRect();return a.top-(window.innerHeight||document.documentElement.clientHeight)/2.1>=0&&a.bottom-(window.innerHeight||document.documentElement.clientHeight)/1.9<=(window.innerHeight||document.documentElement.clientHeight)||a.top>=0&&a.bottom<=(window.innerHeight||document.documentElement.clientHeight)}function initNowGraphina(e,a,i){resetGraphinaVars(),i in graphina_localize.graphinaAllGraphs&&(graphina_localize.graphinaAllGraphs[i].destroy(),delete graphina_localize.graphinaAllGraphs[i],delete graphina_localize.graphinaBlockCharts[i]),graphina_localize.graphinaAllGraphsOptions[i]=a,isInit[i]=!1,getChart(graphina_localize.graphinaAllGraphsOptions[i].ele,i)}function getChart(e,a){if("function"==typeof ApexCharts&&null!==e&&a in isInit&&!1===isInit[a])if(null!=graphina_localize.is_view_port_disable&&"on"==graphina_localize.is_view_port_disable||void 0!==graphina_localize.graphinaAllGraphsOptions[a].type&&"brush"===graphina_localize.graphinaAllGraphsOptions[a].type)initGraphinaCharts(a);else{new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&!1===isInit[a]&&initGraphinaCharts(a)}))})).observe(e)}}function initGraphinaCharts(e,a="area"){if(Object.keys(graphina_localize.graphinaBlockCharts).includes(e))googleChartList.includes(a)||!0===isInit[e]&&graphina_localize.graphinaAllGraphs[e].destroy(),graphina_localize.graphinaAllGraphsOptions[e].ele.innerHTML="",graphina_localize.graphinaAllGraphsOptions[e].ele.innerHTML=graphina_localize.graphinaBlockCharts[e];else if(!0===isInit[e]||graphina_localize.graphinaAllGraphs[e])if(googleChartList.includes(a))graphina_localize.graphinaAllGraphs[e].draw(graphina_localize.graphinaAllGraphsOptions[e].series,graphina_localize.graphinaAllGraphsOptions[e].options);else{let i=graphina_localize.graphinaAllGraphsOptions[e].options,t=i.series;"mixed"===a?graphina_localize.graphinaAllGraphs[e].updateOptions({series:i.series,labels:graphina_localize.graphinaAllGraphsOptions[e].options.category}):(graphina_localize.graphinaAllGraphs[e].updateOptions(i,!0,graphina_localize.graphinaAllGraphsOptions[e].animation),graphina_localize.graphinaAllGraphs[e].updateSeries(t,graphina_localize.graphinaAllGraphsOptions[e].animation))}else googleChartList.includes(a)?graphinaGoogleChartRender(e,a):instantInitGraphinaCharts(e,a)}function updateGoogleChartType(e,a,i){if(graphina_localize.graphinaAllGraphsOptions[i]){let e=a.value;graphina_localize.graphinaAllGraphsOptions[i].renderType=e,graphinaGoogleChartRender(i,e)}}function updateChartType(e,a,i){var t=a.value;e!=t?"area"==t?graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},fill:{opacity:.4,pattern:{width:6,height:6,strokeWidth:2}},dataLabels:{offsetY:0,offsetX:0},stroke:{show:!0,colors:graphina_localize.graphinaAllGraphsOptions[i].options.colors,width:2}}):"line"==t?graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},dataLabels:{offsetY:0,offsetX:0},stroke:{show:!0,colors:graphina_localize.graphinaAllGraphsOptions[i].options.colors,width:5}}):"bar"==t?graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},fill:{opacity:.9},stroke:{show:!0,width:2}}):"pie"==t||"donut"==t?graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},fill:{opacity:1}}):"polarArea"==t?graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},fill:{opacity:.4},stroke:{show:!0,width:2,colors:graphina_localize.graphinaAllGraphsOptions[i].options.colors}}):"scatter"==t&&graphina_localize.graphinaAllGraphs[i].updateOptions({chart:{type:t},stroke:{show:!0,width:2,colors:["transparent"]},fill:{opacity:1},markers:{size:10}}):graphina_localize.graphinaAllGraphs[i].updateOptions(graphina_localize.graphinaAllGraphsOptions[i].options)}function chartDatalabelsFormat(e,a,i,t,n,r,l,o,s=!1,p=0){return e.dataLabels.formatter="yes"==a&&"yes"==i?function(e,a){let i=a.w.config.series[a.seriesIndex];if(i="yes"==t?graphinNumberWithCommas(i,graphina_localize.thousand_seperator):"no"==l?i:graphinaAbbrNum(i,o),s){let e=a.w.globals.seriesTotals.reduce(((e,a)=>e+a),0);""===r.trim()&&(r="%"),i=parseFloat(i/e*100).toFixed(parseInt(p))+r,r=""}return n+a.w.config.labels[a.seriesIndex]+"-"+i+r}:"yes"==a?function(e,a){if(s){let i=a.w.globals.seriesTotals.reduce(((e,a)=>e+a),0);""===r.trim()&&(r="%"),e=parseFloat(e/i*100).toFixed(parseInt(p))+r,r=""}return n+a.w.config.labels[a.seriesIndex]+"-"+parseFloat(e).toFixed(1)+r}:"yes"==i?function(e,a){let i=a.w.config.series[a.seriesIndex];if(i="yes"==t?graphinNumberWithCommas(i,graphina_localize.thousand_seperator):"no"==l?i:graphinaAbbrNum(i,o),s){let e=a.w.globals.seriesTotals.reduce(((e,a)=>e+a),0);""===r.trim()&&(r="%"),i=parseFloat(i/e*100).toFixed(parseInt(p))+r,r=""}return n+i+r}:function(e,a){if(s){let i=a.w.globals.seriesTotals.reduce(((e,a)=>e+a),0);""===r.trim()&&(r="%"),e=parseFloat(e/i*100).toFixed(parseInt(p))+r,r=""}return n+parseFloat(e).toFixed(1)+r}}function axisTitle(e,a,i,t,n=0){return e[a].title={text:i,offsetX:0,offsetY:"xaxis"===a?n:0,style:t}}function instantInitGraphinaCharts(e,a){graphina_localize.graphinaAllGraphs[e]=new ApexCharts(graphina_localize.graphinaAllGraphsOptions[e].ele,graphina_localize.graphinaAllGraphsOptions[e].options),graphina_localize.graphinaAllGraphs[e].render(),isInit[e]=!0}function isObject(e){return e&&"object"==typeof e&&!Array.isArray(e)}function mergeDeep(e,...a){if(!a.length)return e;const i=a.shift();if(isObject(e)&&isObject(i))for(const a in i)i.hasOwnProperty(a)&&(isObject(i[a])?(e[a]||Object.assign(e,{[a]:{}}),mergeDeep(e[a],i[a])):Object.assign(e,{[a]:i[a]}));return mergeDeep(e,...a)}function chunk(e,a){if(!e)return[];const i=e.slice(0,a);return i.length?[i].concat(chunk(e.slice(a,e.length),a)):e}function graphinaAbbrNum(e,a){if(void 0===e||null==e)return e;var i="";if(e<0&&(i="-",e=Math.abs(e)),e<1e3)return i+parseFloat(e).toFixed(a);a=Math.pow(10,a);for(var t=["k","m","b","t"],n=t.length-1;n>=0;n--){var r=Math.pow(10,3*(n+1));if(r<=e){1e3==(e=Math.round(e*a/r)/a)&&n<t.length-1&&(e=1,n++),e+=t[n];break}}return i+e}function getDataForChartsAjax(e,a,i,t="",n=""){if(jQuery("body").hasClass("elementor-editor-active")){let e=parent.document.querySelector('[data-setting="iq_'+a+'_chart_sql_builder_x_columns"]'),i=parent.document.querySelector('[data-setting="iq_'+a+'_chart_sql_builder_y_columns"]');null!==e&&null!==i&&(e.innerHTML="",i.innerHTML="");let t=parent.document.querySelector('[data-setting="iq_'+a+'_chart_csv_x_columns"]'),n=parent.document.querySelector('[data-setting="iq_'+a+'_chart_csv_y_columns"]');null!==t&&null!==n&&(t.innerHTML="",n.innerHTML="")}null!=e["iq_"+a+"_chart_filter_enable"]&&"yes"==e["iq_"+a+"_chart_filter_enable"]&&(t=graphinaGetSelectOptionValue(i)),jQuery.ajax({url:graphina_localize.ajaxurl,type:"post",dataType:"json",data:{action:"get_graphina_chart_settings",selected_field:t,button_filter_value:n,chart_type:a,chart_id:i,fields:e},success:function(t){if(0===document.getElementsByClassName(a+"-chart-"+i).length)return 0;if(!0===t.status&&t.category_count>0)jQuery(document).find("."+a+"-chart-"+i+"-loader").addClass("d-none"),jQuery(document).find("."+a+"-chart-"+i).removeClass("d-none"),jQuery(document).find("."+a+"-chart-"+i).parents(".chart-box").removeClass("d-none");else if(!["heatmap","candle","bubble","timeline"].includes(a)&&(jQuery(document).find("."+a+"-chart-"+i).parents(".chart-box").addClass("d-none"),jQuery(document).find("."+a+"-chart-"+i).addClass("d-none"),jQuery(document).find("."+a+"-chart-"+i+"-loader").find("img").addClass("d-none"),jQuery(document).find("."+a+"-chart-"+i+"-loader").removeClass("d-none"),jQuery(document).find("."+a+"-chart-"+i+"-loader").find("p").removeClass("d-none"),!jQuery("body").hasClass("elementor-editor-active")))return;if(!0===t.status){if(!0===t.fail)graphina_localize.graphinaBlockCharts[t.chart_id]=t.fail_message,initGraphinaCharts(t.chart_id);else if(googleChartList.includes(a)){if(!["pie_google","donut_google","gauge_google","geo_google","org_google"].includes(a)){let e=graphina_localize.graphinaAllGraphsOptions[i].series.getNumberOfColumns();e>0&&graphina_localize.graphinaAllGraphsOptions[i].series.removeColumns(0,e),graphina_localize.graphinaAllGraphsOptions[i].series.addColumn("string",t.googlechartData.title),t.googlechartData.title_array.map(((e,a)=>{graphina_localize.graphinaAllGraphsOptions[i].series.addColumn("number",e),"yes"===t.googlechartData.annotation_show&&graphina_localize.graphinaAllGraphsOptions[i].series.addColumn({role:"annotation"})}))}let n=graphina_localize.graphinaAllGraphsOptions[i].series.getNumberOfRows();if(n>0&&graphina_localize.graphinaAllGraphsOptions[i].series.removeRows(0,n),graphina_localize.graphinaAllGraphsOptions[i].series.addRows(t.googlechartData.data),["pie_google","donut_google","gauge_google"].includes(a)){let t="gauge_google"===a?{prefix:e["iq_"+a+"_google_chart_value_prefix"],suffix:e["iq_"+a+"_google_chart_value_postfix"],fractionDigits:e["iq_"+a+"_google_chart_value_decimal"]}:{prefix:e["iq_"+a+"_chart_label_prefix"],suffix:e["iq_"+a+"_chart_label_postfix"],fractionDigits:0};if(graphina_localize.graphinaAllGraphsOptions[i].series.getNumberOfRows()>0)new google.visualization.NumberFormat(t).format(graphina_localize.graphinaAllGraphsOptions[i].series,1)}initGraphinaCharts(t.chart_id,a)}else!0===t.instant_init&&(graphina_localize.graphinaAllGraphsOptions[t.chart_id].animation=!1,instantInitGraphinaCharts(t.chart_id,a)),graphina_localize.graphinaAllGraphsOptions[t.chart_id].options=mergeDeep(graphina_localize.graphinaAllGraphsOptions[t.chart_id].options,t.chart_option),!0===isInit[t.chart_id]&&initGraphinaCharts(t.chart_id,a);void 0!==e["iq_"+a+"_chart_dynamic_data_option"]&&"sql-builder"===e["iq_"+a+"_chart_dynamic_data_option"]&&jQuery("body").hasClass("elementor-editor-active")&&setFieldsFromSQLStateMent(e,t,a),void 0!==e["iq_"+a+"_chart_dynamic_data_option"]&&("csv"!==e["iq_"+a+"_chart_dynamic_data_option"]&&"remote-csv"!==e["iq_"+a+"_chart_dynamic_data_option"]&&"google-sheet"!==e["iq_"+a+"_chart_dynamic_data_option"]||jQuery("body").hasClass("elementor-editor-active")&&setFieldsForCSV(e,t,a)),void 0!==e["iq_"+a+"_chart_data_option"]&&"forminator"===e["iq_"+a+"_chart_data_option"]&&jQuery("body").hasClass("elementor-editor-active")&&setFieldsFromForminator(e,t,a)}},error:function(){console.log("fail")}})}function setFieldsFromSQLStateMent(e,a,i){let t=manualChartList;if(t.includes(i)){if(void 0!==a.sql_fail&&""!==a.sql_fail){let e=document.querySelector('[id="'+i+'-chart"]');return void(null!==e&&(e.innerHTML="",e.innerHTML="<div class='text-center' style='color:red'> No data found, Please check your sql statement. </div>"))}}else if(void 0!==a.extra&&void 0!==a.extra.sql_fail&&""!==a.extra.sql_fail){let e=document.querySelector('[id="'+i+'-chart"]');return void(null!==e&&(e.innerHTML="",e.innerHTML="<div class='text-center' style='color:red'> No data found, Please check your sql statement. </div>"))}let n=t.includes(i)?a.db_column:a.extra.db_column,r=parent.document.querySelector('[data-setting="iq_'+i+'_chart_sql_builder_x_columns"]'),l=parent.document.querySelector('[data-setting="iq_'+i+'_chart_sql_builder_y_columns"]');null!=r&&null!=l&&(x_option_tag="",y_option_tag="",void 0!==n&&void 0!==n.length&&n.length>0&&n.forEach((function(a,t,n){x_axis_selected_field="",y_axis_selected_field="",e["iq_"+i+"_chart_sql_builder_x_columns"].includes(a)&&(x_axis_selected_field="selected"),e["iq_"+i+"_chart_sql_builder_y_columns"].includes(a)&&(y_axis_selected_field="selected"),x_option_tag+='<option value="'+a.toLowerCase()+'" '+x_axis_selected_field+" > "+a+"</option>",y_option_tag+='<option value="'+a.toLowerCase()+'" '+y_axis_selected_field+" > "+a+"</option>"})),r.innerHTML=x_option_tag,l.innerHTML=y_option_tag)}function setFieldsForCSV(e,a,i){let t=manualChartList.includes(i)?a.column:a.extra.column;if(void 0!==t&&void 0!==t.length&&t.length>0){let a=parent.document.querySelector('[data-setting="iq_'+i+'_chart_csv_x_columns"]'),n=parent.document.querySelector('[data-setting="iq_'+i+'_chart_csv_y_columns"]');if(null==a||null==n)return;x_option_tag="",y_option_tag="",t.forEach((function(a,t,n){x_axis_selected_field="",y_axis_selected_field="",e["iq_"+i+"_chart_csv_x_columns"].includes(a)&&(x_axis_selected_field="selected"),e["iq_"+i+"_chart_csv_y_columns"].includes(a)&&(y_axis_selected_field="selected"),x_option_tag+='<option value="'+a.toLowerCase()+'" '+x_axis_selected_field+" > "+a+"</option>",y_option_tag+='<option value="'+a.toLowerCase()+'" '+y_axis_selected_field+" > "+a+"</option>"})),a.innerHTML=x_option_tag,n.innerHTML=y_option_tag}}function graphinasetCookie(e,a,i){var t=new Date;t.setTime(t.getTime()+24*i*60*60*1e3);var n="expires="+t.toUTCString();document.cookie=e+"="+a+";"+n+";path=/"}function graphinaRestrictedPasswordAjax(e,a){a.preventDefault(),jQuery.ajax({url:graphina_localize.ajaxurl,type:"post",data:jQuery(e).serialize(),success:function(a){!0===a.status?(graphinasetCookie(a.chart,!0,1),location.reload()):jQuery(e).find(".graphina-error").css("display","flex")}})}function graphinaChartFilter(e,a,i){jQuery(document).find("."+e+"-chart-"+i+"-loader").removeClass("d-none"),jQuery(document).find("."+e+"-chart-"+i+"-loader").find("img").removeClass("d-none"),jQuery(document).find("."+e+"-chart-"+i+"-loader").find("p").addClass("d-none"),jQuery(document).find("."+e+"-chart-"+i).addClass("d-none"),jQuery(document).find("."+e+"-chart-"+i).parents(".chart-box").addClass("d-none"),getDataForChartsAjax(graphina_localize.graphinaAllGraphsOptions[i].setting_date,e,i,graphinaGetSelectOptionValue(i))}function graphinaGetSelectOptionValue(e){let a=[],i=document.querySelectorAll(".graphina_filter_select"+e);for(let e=0;e<i.length;e++)if(void 0!==i[e].type&&["datetime-local","date"].includes(i[e].type)){if(void 0!==i[e].value){let t="-",n=new Date(i[e].value);if(void 0!==n){let r="";r="date"===i[e].type?n.getFullYear()+t+("00"+(n.getMonth()+1)).slice(-2)+t+("00"+n.getDate()).slice(-2):n.getFullYear()+t+("00"+(n.getMonth()+1)).slice(-2)+t+("00"+n.getDate()).slice(-2)+" "+("00"+n.getHours()).slice(-2)+":"+("00"+n.getMinutes()).slice(-2)+":"+("00"+n.getSeconds()).slice(-2),a.push(r)}}}else void 0===i[e].value&&null===i[e].value||("default"!==i[e].value?a.push(i[e].value):a.push(""));return a}function graphinaGoogleChartInit(e,a,i,t){if(resetGraphinaVars(),i in graphina_localize.graphinaAllGraphs&&(graphina_localize.graphinaAllGraphs[i].clearChart(),delete graphina_localize.graphinaAllGraphs[i],delete graphina_localize.graphinaBlockCharts[i]),isInit[i]=!1,graphina_localize.graphinaAllGraphsOptions[i]=a,null!==e)if(null!=graphina_localize.is_view_port_disable&&"on"==graphina_localize.is_view_port_disable)graphinaGoogleChartRender(i,t);else{new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&!1===isInit[i]&&graphinaGoogleChartRender(i,t)}))})).observe(e)}}function graphinaGoogleChartRender(e,a){!0===isInit[e]||graphina_localize.graphinaAllGraphs[e],graphina_localize.graphinaAllGraphs[e]=new google.visualization[graphina_localize.graphinaAllGraphsOptions[e].renderType](graphina_localize.graphinaAllGraphsOptions[e].ele),graphina_localize.graphinaAllGraphs[e].draw(graphina_localize.graphinaAllGraphsOptions[e].series,graphina_localize.graphinaAllGraphsOptions[e].options),isInit[e]=!0,"gauge_google"===a&&void 0!==graphina_localize.graphinaAllGraphs[e]&&(Array.prototype.forEach.call(graphina_localize.graphinaAllGraphsOptions[e].ele.getElementsByTagName("circle"),(function(a){"#4684ee"===a.getAttribute("fill")&&a.setAttribute("fill",void 0!==graphina_localize.graphinaAllGraphsOptions[e].ballColor?graphina_localize.graphinaAllGraphsOptions[e].ballColor:"#4684ee"),"#f7f7f7"===a.getAttribute("fill")&&a.setAttribute("fill",void 0!==graphina_localize.graphinaAllGraphsOptions[e].innerCircleColor?graphina_localize.graphinaAllGraphsOptions[e].innerCircleColor:"#f7f7f7"),"#cccccc"===a.getAttribute("fill")&&a.setAttribute("fill",void 0!==graphina_localize.graphinaAllGraphsOptions[e].outerCircleColor?graphina_localize.graphinaAllGraphsOptions[e].outerCircleColor:"#cccccc")})),Array.prototype.forEach.call(graphina_localize.graphinaAllGraphsOptions[e].ele.getElementsByTagName("path"),(function(a){"#c63310"===a.getAttribute("stroke")&&(a.setAttribute("stroke",void 0!==graphina_localize.graphinaAllGraphsOptions[e].needleColor?graphina_localize.graphinaAllGraphsOptions[e].needleColor:"#c63310"),a.setAttribute("fill",void 0!==graphina_localize.graphinaAllGraphsOptions[e].needleColor?graphina_localize.graphinaAllGraphsOptions[e].needleColor:"#c63310"))})))}function setFieldsFromForminator(e,a,i){if(void 0!==e["iq_"+i+"_section_chart_forminator_aggregate"]&&"yes"===e["iq_"+i+"_section_chart_forminator_aggregate"]){let t=parent.document.querySelector('[data-setting="iq_'+i+'_section_chart_forminator_aggregate_column"]');if(null==t)return;let n=manualChartList,r=n.includes(i)?a.forminator_columns:a.extra.forminator_columns,l=n.includes(i)?a.forminator_columns_labels:a.extra.forminator_columns_labels;if(aggregate_column_option_tag="",void 0!==r&&void 0!==r.length&&r.length>0){let a="";r.forEach((function(t,n,r){a="",a=void 0!==l&&l.length>0&&void 0!==l[n]?l[n]:t,aggregate_column_selected_field="",e["iq_"+i+"_section_chart_forminator_aggregate_column"].includes(t)&&(aggregate_column_selected_field="selected"),aggregate_column_option_tag+='<option value="'+t+'" '+aggregate_column_selected_field+" > "+a+"</option>"}))}t.innerHTML=aggregate_column_option_tag}else{let t=parent.document.querySelector('[data-setting="iq_'+i+'_section_chart_forminator_x_axis_columns"]'),n=parent.document.querySelector('[data-setting="iq_'+i+'_section_chart_forminator_y_axis_columns"]');if(null==t||null==n)return;let r=manualChartList,l=r.includes(i)?a.forminator_columns:a.extra.forminator_columns,o=r.includes(i)?a.forminator_columns_labels:a.extra.forminator_columns_labels;if(x_option_tag="",y_option_tag="",void 0!==l&&void 0!==l.length&&l.length>0){let a="";l.forEach((function(t,n,r){a="",a=void 0!==o&&o.length>0&&void 0!==o[n]?o[n]:t,x_axis_selected_field="",y_axis_selected_field="",e["iq_"+i+"_section_chart_forminator_x_axis_columns"].includes(t)&&(x_axis_selected_field="selected"),e["iq_"+i+"_section_chart_forminator_y_axis_columns"].includes(t)&&(y_axis_selected_field="selected"),x_option_tag+='<option value="'+t+'" '+x_axis_selected_field+" > "+a+"</option>",y_option_tag+='<option value="'+t+'" '+y_axis_selected_field+" > "+a+"</option>"}))}t.innerHTML=x_option_tag,n.innerHTML=y_option_tag}}function graphina_google_chart_ajax_reload(e,a,i,t,n){let r=graphina_localize.graphinaAllGraphsOptions[i].setting_date;void 0!==getDataForChartsAjax&&"1"===e&&(getDataForChartsAjax(r,a,i),"true"===t&&(window["ajaxIntervalGraphina_"+i]=setInterval((function(){getDataForChartsAjax(r,a,i)}),parseInt(1e3*n))))}resetGraphinaVars();