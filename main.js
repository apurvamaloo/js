    var fs = require('fs');
    var names = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
    //states represent seven north eastern states
    var states = ['State - ARUNACHAL PRADESH','State - ASSAM','State - MEGHALAYA','State - TRIPURA','State - MIZORAM','State - NAGALAND','State - MANIPUR'];





    //this function is to calculate total no of males and females and total no of literate and illeterate people
    function indiaPopulation(){
    var sum_male=0;
    var sum_female=0;
    var sum_literate = 0;
    var sum_illiterate = 0;
    var json1=[];
    names.forEach(function (entry) {

    var fileContents = fs.readFileSync(entry);
    var lines = fileContents.toString().split('\n');
    var data = [];
    for (i = 0; i < lines.length; i++) {
        data.push(lines[i].toString().split(','));

    }


    for (var i = 1; i < lines.length - 1; i++) {
        console.log(data[i][3] + "    " + parseInt(data[i][7], 10) + "    " + parseInt(data[i][8], 10) + "    " + parseInt(data[i][9], 10) + "    " + parseInt(data[i][12], 10));
        sum_male += parseInt(data[i][7], 10);
        sum_female += parseInt(data[i][8], 10);
        sum_literate += parseInt(data[i][9], 10);
        sum_illiterate += parseInt(data[i][12], 10);

            console.log(data[0][7] + sum_male);
            console.log(data[0][8] + sum_female);
            console.log(data[0][9] + sum_literate);
            console.log(data[0][12] + sum_illiterate);
    }
    });


    json1.push({name:'total_male',value: sum_male},
               {name:'total_female',value: sum_female},
                {name:'total_literate',value: sum_literate},
               {name:'total_illiterate',value: sum_illiterate});

    var outputFilename = 'first.json';
    console.log("json1 is"+json1)
    fs.writeFile(outputFilename, JSON.stringify(json1, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
    });
   




    


    }





var sum_IlliterateFemale=0;
var sum_IlliterateMale=0;
var sum_LiterateMale = 0;
var sum_LiterateFemale= 0;

    function sevenNorthEasternStates()
    {
        var json2=[];
    names.forEach(function (entry) {
    
    

    var fileContents = fs.readFileSync(entry);
    var lines = fileContents.toString().split('\n');
    var data = [];
    for (i = 0; i < lines.length; i++) {
        data.push(lines[i].toString().split(','));

    }

        for (var i = 1; i < lines.length - 1; i++) {
        // console.log(data[i][3]);
        states.forEach(function (states) {
            /*if (data[i][3] == states) {

                console.log("done");
                console.log(data[i][3] + "    " + parseInt(data[i][10], 10) + "    " + parseInt(data[i][11], 10) + "    " + parseInt(data[i][13], 10) + "    " + parseInt(data[i][14], 10));
            }*/
            if (data[i][3] == states) {
                console.log(data[i][3] + "    " + parseInt(data[i][10], 10) + "    " + parseInt(data[i][11], 10) + "    " + parseInt(data[i][13], 10) + "    " + parseInt(data[i][14], 10));
                sum_IlliterateMale += parseInt(data[i][10], 10);
                sum_IlliterateFemale += parseInt(data[i][11], 10);
                sum_LiterateMale += parseInt(data[i][13], 10);
                sum_LiterateFemale += parseInt(data[i][14], 10);
            }

        });

    }

    console.log(data[0][10] + sum_IlliterateMale);
    console.log(data[0][11] + sum_IlliterateFemale);
    console.log(data[0][13] + sum_LiterateMale);
    console.log(data[0][14] + sum_LiterateFemale);


 });
    json2.push({ name: "Literate", value: (sum_LiterateFemale / sum_LiterateMale) * 1000 },
        { name: "ILLiterate", value: (sum_IlliterateFemale / sum_IlliterateMale) * 1000 });


console.log(json2);

    console.log("literate_sex-ratio" + (sum_LiterateFemale / sum_LiterateMale) * 1000);
    console.log("ilLiterate_sex-ratio" + (sum_IlliterateFemale / sum_IlliterateMale) * 1000);

console.log(JSON.stringify(json2, null, 4));
var outputFilename = 'northstate.json';

    fs.writeFile(outputFilename, JSON.stringify(json2, null, 4), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename);
        }
    });
    }




    function statewise()
    {

    Array.prototype.contains = function(v) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === v) return true;
        }
        return false;
    };

    Array.prototype.unique = function() {
        var arr = [];
        for(var i = 0; i < this.length; i++) {
            if(!arr.contains(this[i])) {
                arr.push(this[i]);
            }
        }
        return arr; 
    }

     var data = [];
     var literate=0;
     var illiterate=0;
     var uniques;
     var out = [];
   // var names = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
    names.forEach(function (entry) {
     var fileContents = fs.readFileSync(entry);
     var lines = fileContents.toString().split('\n');
        
     var duplicates=[];

    for (i = 0; i < lines.length; i++) {
            data.push(lines[i].toString().split(','));

     }
    for (i = 1; i < lines.length-1; i++) {
           console.log(data[i][3]);
            duplicates.push(data[i][3]);

    }
        console.log(duplicates);
         uniques = duplicates.unique();
        
    });
     console.log("unique element are"+uniques)

     uniques.forEach(function (state) {

         var literate = 0;
         var illiterate = 0;

         //var names = ["India2011.csv", "IndiaSC2011.csv", "IndiaST2011.csv"];
         names.forEach(function (entry) {
             var fileContents = fs.readFileSync(entry);
             var lines = fileContents.toString().split('\n');

             var duplicates = [];

             for (i = 0; i < lines.length; i++) {
                 data.push(lines[i].toString().split(','));

             }

             for (var i = 1; i < lines.length - 1; i++) {
                 // console.log(data[i][3]);

                 if (data[i][3] == state) {

                     console.log("done");
                     console.log(data[i][3] + "    " + parseInt(data[i][9], 10) + "    " + parseInt(data[i][12], 10));
                      literate += parseInt(data[i][9], 10);
                 illiterate += parseInt(data[i][12], 10);

                 }

                
             }

     
         });

        
         console.log("here is vghhhhhhhjhgjuj" + uniques.indexOf(state));
         console.log(uniques.indexOf(state) + " " + literate + "   " + illiterate);

         out.push({"state":state,"literate":literate,"illiterate":illiterate});



     });


     console.log(out);
        var outputFilename = 'statewise.json';

        fs.writeFile(outputFilename, JSON.stringify(out, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        });
    console.log(JSON.stringify(out));


    }

    var call1=indiaPopulation();
    sevenNorthEasternStates();
    statewise();