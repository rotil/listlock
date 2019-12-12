Java.perform(function(){
    console.log("\nlistlock detection bypass with Frida");
    var Attack = Java.use("com.historypeats.listlock.classes.Authenticate");
    console.log("\nHijacking com.historypeats.listlock.classes.Authenticate function in Attack class");

    Attack.validatePassword.overload('java.lang.String', 'java.lang.String').implementation = function(password,getSavedPassword){
        console.log("\nInside the onCreateOptionsMenu function");
        console.log("the hard code password: "+getSavedPassword);
		console.log("the password you entered: "+password);
        return true;
    };



});


//frida -Uf com.historypeats.listlock -l list.js --no-pause
