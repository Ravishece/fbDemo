$(document).ready(function(){
   // alert('cuistom js file');
   $('.share-btn').click(function(){
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
       $('#modalBody').html('<div class="row">'+ selectedItemsString + '</div>');
   })
});