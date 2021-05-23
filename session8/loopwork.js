var animal=["cat","lion","tiger","goat","elephant"];
var feed=["carnivorous","carnivorous","carnivorou","herbivorous","herbivorous"];

for(i=0;i<animal.length;i++)
{
    if(feed[i] == "carnivorous")
    {
        console.log(animal[i] +" is a " +`${feed[i]}`);
    }
    else
    {
        console.log(animal[i]+" is a " +feed[i]);
    }
}

//using objects
console.log("\n");
console.log("this is in object");
var animalfeed=[{animal:"cat",feed:"carnivorous"},{animal:"lion",feed:"carnivorous"},{animal:"tiger",feed:"carnivorous"},{animal:"goat",feed:"herbivorous"},{animal:"elephant",feed:"herbivorous"}];
for(key in animalfeed)
{
    if(`${animalfeed[key].feed}`== "carnivorous")
    {
        console.log(`${animalfeed[key].animal}` +" is a " + `${animalfeed[key].feed}`);
    }
    else
    {
        console.log(`${animalfeed[key].animal}` +" is a " + `${animalfeed[key].feed}`);
    }
}