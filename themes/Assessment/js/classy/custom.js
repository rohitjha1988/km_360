(function ($, Drupal, drupalSettings) {
  /**
   * @namespace
   */
  Drupal.behaviors.assessAccessData = {
    attach: function (context) {
      var data = parseInt(drupalSettings.myname);
      var data2 = drupalSettings.myname2;
    // alert(data2);
      // if(data2 == "productivity-collaborations"){
      //     var data_vals = [{"y":data,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":0,"label":"MOBILITY"}];
      // }else{
      //     var data_vals = [{"y":0,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":data,"label":"MOBILITY"}];
      // }
      
      
      window.onload = function() {

 

          if(data2 == "productivity-collaborations"){
              var data_vals = [{"y":data,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":0,"label":"MOBILITY"}];
           }else if(data2 == "mobility"){
              var data_vals = [{"y":0,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":data,"label":"MOBILITY"}];
          }else if(data2 == "analytics-intelligence"){
              var data_vals = [{"y":0,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":data,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":0,"label":"MOBILITY"}];    
          }else if(data2 == "flexibility-efficiency"){
            var data_vals = [{"y":0,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":0,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":data,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":0,"label":"MOBILITY"}];    
        }else if(data2 == "security_and_compliance"){
          var data_vals = [{"y":0,"label":"PRODUCTIVITY AND COLLABORATION"},{"y":data,"label":"SECURITY & COMPLIANCE"},{"y":0,"label":"ANALYTICS AND INTELLIGENCE"},{"y":0,"label":"FLEXIBILITY, EFFICIENCY & SUSTAINABILITY"},{"y":0,"label":"MOBILITY"}];    
      }
          
     
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Your Digital Maturity Score Is:"
            },
            axisY: {
                title: "Your Digital Maturity Score Is:"
            },
            data: [{
                type: "column",
                yValueFormatString: data + " %",
                dataPoints: data_vals
            }]
        });
        chart.render();
         
        }
    }
  };
})



(jQuery, Drupal, drupalSettings);