// Student: Hoon Kim
// Date:    March 4, 2016
// Class:   IPD_356_801_0965 - WEB DEV JAVASCRIPT & HTML5 PRG - 
// Term:    2015-2016 Winter

$(document).ready(function() {
    function log( message ) {
      // $( "<div>" ).text( message ).prependTo( "#log" );
      $( "<div>" ).text( message ).prependTo( "#log" );
      $( "#log" ).scrollTop( 0 );
    }
 
    $( "#city" ).autocomplete({
      source: function( request, response ) {
        $.ajax({
          url: "http://gd.geobytes.com/AutoCompleteCity",
          dataType: "jsonp",
          data: {
            q: request.term
          },
          success: function( data ) {
            response( data );
          }
        });
      },
      minLength: 3,
      select: function( event, ui ) {
        log( ui.item ?
          "Selected: " + ui.item.label :
          "Nothing selected, input was " + this.value);
      },
      open: function() {
        $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
});

$(document).ready(function(){
    $(":button").click(function(){
    	  var days = $("select[name='selNumberDays']").val();
        var nation = $("select[name='selNationality']").val();
        var city = $(".ui-corner-all").val();
        var firstClass = $("input[name='chkFirst']").is(':checked');
        var spouse = $("input[name='chkSpouse']").get(0).checked;

        // var citySurcharge = 0;
        // var firstClassSurcharge = 0;
        // var tripCost = days * 150.00;
        // var totalCost = tripCost + citySurcharge + firstClassSurcharge;
        // var dblCost = 2 * totalCost;
        //also works
        // var firstClass = $("input[name='chkFirst']").get(0).checked;
        
    	  // var cost = days * 150.00;
    	// alert("Cost = $" + cost.toString());
     //    alert(city.toString());
     //    alert("# of days = " + days);
     //    alert("nationality = " + nation);
    	// alert("firstClass = " + firstClass);
    	// alert("spouse = " + spouse);

        
        if(city === undefined) {
            $("table:last").append("<p>City is undefined. Please choose a city to begin.</p>");
        } else {
                var citySurcharge = 0;
                var firstClassSurcharge = 0;
                var tripCost = days * 150.00;
                var Cost = 0;
                var totalCost = 0;
                var dblCost = 0;


                if(nation.toString() === "amer" || nation.toString() === "can") {
                    $("table:last").append("<p>Passport is not required.</p>");                    
                } else if (nation.toString() !== "amer" && nation.toString() !== "can") {
                    $("table:last").append("<p>Passport is required.</p>"); 
                }
                if(city.toString() === "San Francisco, CA, United States" || city.toString() === "Los Angeles, CA, United States") {
                    citySurcharge = 200.00;                    
                } else if (city.toString() !== "San Francisco, CA, United States" && city.toString() !== "Los Angeles, CA, United States") {
                    citySurcharge = 0; 
                }
                if(firstClass == true) {
                    firstClassSurcharge = 500;
                } else if (firstClass == false) {
                    firstClassSurcharge = 0;
                }
                if(spouse == true) {
                    totalCost = 2*(tripCost + citySurcharge + firstClassSurcharge);
                } else if (spouse == false) {
                     totalCost = (tripCost + citySurcharge + firstClassSurcharge);
                }    

                console.log("nationality is " + nation);
                console.log("city is " + city);
                console.log("spouse is "+ spouse);
                console.log('citSurcharge = '+ citySurcharge);
                console.log('firstClassSurcharge = '+ firstClassSurcharge);
                console.log("totalCost = " + totalCost);
                $("table:last").append("<p>Cost for your trip to " + city + " for " + days + " days " + "= $"+ totalCost +"</p>");    
        }//end else  
        
        // console.log("nationality is " + nation);
        // console.log("city is " + city);
        // console.log("spouse is "+ spouse);
        // console.log('citSurcharge = '+ citySurcharge);
        // console.log('firstClassSurcharge = '+ firstClassSurcharge);
        // console.log("totalCost = " + totalCost);
        // $("table:last").append("<p>Cost for your trip to " + city + " for " + days + " days " + "= $"+ totalCost +"</p>");
        
    });
});

