
$('.subprice').click(
    function (){
        var itemHtml = $('#' + this.value ).html();
        $('#modal20 .item').html(itemHtml);
        
        //$.post(url, {'var1':this.value}, 0, 'json').done( function (data){ alert(data.par1) } );
        var b  = $.parseJSON('{"a":"1"}');
        
        switch (b.a) {
                case '1':
                $('#modal20 .alert-warning').toggle(); 
                 setTimeout(function (){ $('#modal20 .alert-warning').toggle(3000);  }, 15000);
                break;
                case '2':
                $('#modal20 .alert-success').toggle();
                setTimeout(function (){ $('#modal20 .alert-success').toggle(3000);  }, 15000);
                break;
                 case '3':
                $('#modal20 .alert-info').toggle();
                setTimeout(function (){ $('#modal20 .alert-info').toggle(3000);  }, 15000);
                break;
                default:
                 $('#modal20 .alert-danger').toggle();
                 setTimeout(function (){ $('#modal20 .alert-danger').toggle(3000);  }, 15000);
                break;
        }
   
        

    });
     

