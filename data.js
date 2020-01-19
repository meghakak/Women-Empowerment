function randomizer(){
  var dictPeople = {"Margaret Hamilton": "Margaret Hamilton is a computer scientist, systems engineer, and a business owner. She was director of the software engineering division of the MIT instrumentation laboratory, which developed onboard flight software for NASA's Apollo Space Program.",
                    "Mimi Aung": "Mimi Aung is the project manager for the Mars Helicopter mission. She has been with JPL since her graduation from University of Illinois, Urbana Champaign. The mission started in 2014 and will launch in July 2020!",
                    "Sheryl Sandberg": "Sheryl Sandberg is an American social media executive, author, and billionare. She is the COO of Facebook. She was selected in 2012 and became the first woman to serve on the board.",
                    "Susan Wojcicki": "Susan Wojcicki is a technology executive who has been the CEO of YouTube since 2014. She was involved in the founding of Google and became Google's first marketing manager. She proposed the acquisition of YouTube by Google in 2006."};
  var randValue = Math.floor(Math.random()*4);
  var key = Object.keys(dictPeople)[randValue];
  var value = dictPeople[key];
  return [key, value];
}
var answer = randomizer();

var quoteData = ["\"Women shouldn't be afraid to put themselves forward\"",
 "\"You are braver than you believe, stronger than you seem, smarter than you think\"",
 "\"If we do not share our stories and shine a light on inequities, things will not change\"",
 "\"Love what you do and do what you love\"",
 "\"The question isn't who is going to let me, it is who is going to stop me\"",
 "\"No one can make you feel inferior without your consent\"",
 "\"She believed she could so she did\"",
 "\"Empowered women empower women\"",
 "\"Trust in yourself, believe that your voice matters, and know that your words are good enough\"",
"\"Do the thing you think you cannot do\""];
