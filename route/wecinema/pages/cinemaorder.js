var util            = require('util');
var model           = require(process.cwd()+"/libs/model.js");
var chk_login       = require(process.cwd() + "/libs/check_login_middle.js");

var os       = require('os');
var pid      = process.pid;
var hostname = os.hostname();
var my_name  = hostname + ':' + pid;

//
app.get(["/cinemaorder/index"], function(req, res){
    var render_data = {};
    var my_api_addr = "/queryOrder.aspx";
    
    var options = {
        uri: my_api_addr,
        args: {
             
        }
    };
    render_data.data = {
        
    }
   
    // console.log(orders.orderID );
    // res.render("wecinema/cinemaorder", render_data);
    model.getDataFromPhp(options, function (err, data) {
        console.log(data);
        render_data.data.err = err;
        if (!err && data) {
            render_data.data = data;
            render_data.data.reversion = global.reversion;
            render_data.data.staticBase = global.staticBase;
            
        }
         
        res.render("wecinema/cinemaorder", render_data);
        
    });
     
   
});