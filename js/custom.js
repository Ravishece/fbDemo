$(document).ready(function(){
   // alert('cuistom js file');
   $('.share-btn').click(function(){
       $('#shareInFacebookBtn').show();
       $('.custom-dropdown').show();
       var selectedItems = [];
       var selectedItemsString = '';
       $('.custom-checkbox').each(function(i){
           if(this.checked){
            selectedItems.push(this.name);   
            //$(this).parents('.col-md-3').attr('class')
            selectedItemsString += '<div class="col-md-4">' +  $(this).parents('.col-md-3').html() + '</div>';
           }
       });
       //alert(selectedItemsString);
       $('#modalBody .content').html('<div class="row selected-items">'+ selectedItemsString + '</div>');
   });
   
   
   $('#shareInFacebookBtn').click(function(){
       // /orderDetails/order_1256/4
       var orderId = 'order' + Math.floor(Math.random() * 1000) + 1;
       var orderQualifyVoteCount = $('#qualifyOrderCount').val() || 5;
       var request = $.ajax({
          url: "/orderDetails/"+ orderId + '/'+ orderQualifyVoteCount,
          type: "GET",
          dataType: 'text'
        });
        
        request.done(function(msg) {
          //alert(msg);
            $('#modalBody .content').html('Order created successfully with orderId :' + orderId + '. Your order will be placed once the qualify count crosses 5 automatically');
            $('#shareInFacebookBtn').hide();
            $('.custom-dropdown').hide();
        });
        
        request.fail(function(jqXHR, textStatus) {
            $('#modalBody .content').html( "Order creation failed: " + textStatus );
            $('#shareInFacebookBtn').hide();
            $('.custom-dropdown').hide();
        });
   })
});