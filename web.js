


function initRoutes(app)
{

    app.get("/", (req,res)=>{

        res.render("home");
    
    });
    
    
    app.get("/cart", (req,res)=>{
        res.render("customer/cart");
    });
    
    
    app.get("/login", (req,res)=>{
        res.render("Auth/login");
    });
    
    app.get("/register", (req,res)=>{
        res.render("Auth/register");
    });
    
    





};



module.exports=initRoutes;