var fs = require('fs');
var names = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
//states represent seven north eastern states



var obj=[];
//var names = ["India2011.csv","IndiaSC2011.csv","IndiaST2011.csv"];
names.forEach(function (entry) {
    var data=[];
    var fileContents = fs.readFileSync(entry);
    var lines = fileContents.toString().split('\n');



    

for (i = 0; i < lines.length; i++) {
    data.push(lines[i].toString().split(','));

}
j=1;
for(j=1;j<lines.length-1;j++)
{
    var index=verify(data[j][3]);
    console.log(index+" "+data[j][3]);
    if(index==-1)
    {
        console.log("here")
        obj.push({"state":data[j][3],"illiterate": parseInt(data[j][9], 10),"literate":parseInt(data[j][12], 10),
            "illiterate_male":parseInt(data[j][10], 10),"illiterate_female":parseInt(data[j][11], 10),
            "literate_male":parseInt(data[j][13], 10),"literate_female":parseInt(data[j][14], 10)});
    }
    else
    {
        console.log(data[j][9]+" yyyyy   "+i)
        console.log("dddddd"+parseInt(obj[index].illiterate)+parseInt(data[j][9], 10));
        obj[index].illiterate+=parseInt(data[j][9], 10);
        obj[index].literate+=parseInt(data[j][12], 10);
        obj[index].illiterate_male+=parseInt(data[j][10], 10);
        obj[index].illiterate_female+=parseInt(data[j][11], 10);
        obj[index].literate_male+=parseInt(data[j][13], 10);
        obj[index].literate_female+=parseInt(data[j][14], 10);


    }
}
/* for (i = 1; i < lines.length-1; i++) {
        var index=verify(data[i][3]);
        console.log(index+data[i][3]);
        if(index==-1)
        {
            console.log("here")
            obj.push({"state":data[i][3],"illiterate": parseInt(data[i][9], 10),"literate":parseInt(data[i][12], 10)});
        }
    /*  else
        {
            obj[index].illiterate+=parseInt(data[i][9], 10);
            obj[index].literate+=parseInt(data[i][12], 10);
        }
        }
        */
        
       
        });
 console.log(obj);


        var outputFilename = 'statewise1.json';

        fs.writeFile(outputFilename, JSON.stringify(obj, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        console.log(JSON.stringify(obj));

    });

        var json1=[];
        var sum_literateMale=0;
        var sum_illiterateMale=0;
        var sum_literateFemale=0;
        var sum_illiterateFemale=0;

        for(var i=0;i<obj.length;i++)
        {
            console.log(obj[i].state+"   "+obj[i].literate+" "+obj[i].illiterate_female);
            sum_illiterateFemale+=parseInt(obj[i].illiterate_female,10);
            sum_illiterateMale+=parseInt(obj[i].illiterate_male,10);

            sum_literateFemale+=parseInt(obj[i].literate_female,10);
            sum_literateMale+=parseInt(obj[i].literate_male,10);

        }

        console.log(sum_literateMale+"     "+sum_literateFemale);

        json1=[
        {  
            state:'literate',
            male:sum_literateMale,
            female:sum_literateFemale
        },
        {
            state:'illiterate',
            male:sum_illiterateMale,
            female:sum_illiterateFemale
        }
        ];

        var outputFilename = 'total1.json';

        fs.writeFile(outputFilename, JSON.stringify(json1, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        console.log(JSON.stringify(json1));
         });




        var json2=[];
        var total_illiterateMale=0;
        var total_literateMale=0;
        var total_illiterateFemale=0;
        var total_literateFemale=0;

       var states = ['State - ARUNACHAL PRADESH','State - ASSAM','State - MEGHALAYA','State - TRIPURA','State - MIZORAM','State - NAGALAND','State - MANIPUR'];



        for(var i=0;i<obj.length;i++)
        {

            states.forEach(function (states) {

            if(obj[i].state==states)
            {
            console.log(obj[i].state+"   "+obj[i].literate+" "+obj[i].illiterate_female);
            total_illiterateFemale+=parseInt(obj[i].illiterate_female,10);
            total_illiterateMale+=parseInt(obj[i].illiterate_male,10);

            total_literateFemale+=parseInt(obj[i].literate_female,10);
            total_literateMale+=parseInt(obj[i].literate_male,10);
           }
        });

        }

         json2=[
         {name:"literate",value:total_literateMale/total_literateFemale*1000},
         {name:"illiterate",value:total_illiterateMale/total_illiterateFemale*1000}];
         var outputFilename = 'b1.json';

        fs.writeFile(outputFilename, JSON.stringify(json2, null, 4), function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("JSON saved to " + outputFilename);
            }
        console.log(JSON.stringify(json2));
         });
         console.log("gggggggg"+total_illiterateMale/total_illiterateFemale +"     "+total_literateMale/total_literateFemale);

         var json3=[];
         var r1=total_literateMale/total_literateFemale;
         var r2=total_illiterateMale/total_illiterateFemale;

        console.log(r1);
         console.log(r2);
    json3.push({ name: "Literate Male/Female ratio", value: (r1/(r1+r2)*100)},
        { name: "ILLiterate Male /female ratio", value: (r2)/(r1+r2)*100});

    console.log(json3);
    

    var outputFilename1 = 'b2.json';

    fs.writeFile(outputFilename1, JSON.stringify(json3, null, 4), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputFilename1);
        }

    });

    function verify(check)
    { var ret;
        console.log(check+"   "+obj.length)
        if(obj.length==0)
        {
            ret=-1;
        }
        else
        {
            console.log("len is"+obj.length);
            for(i=0;i<obj.length;i++)
            {
                //console.log(obj[i].state)

                if(obj[i].state==check)
                    {console.log("yes");

                ret=i;
                break;

            }
            else {
                console.log("no");
                ret=-1;

            }
        }
    }   
    return ret;
}

