        function getOption() { 
            window.selectElement =  
                    document.querySelector('#select1'); 
                      
            window.output = window.selectElement.value; 
  
            document.querySelector('.output').textContent 
                    = window.output;
		}
		if(window.selectElement=="English")
		{
		function random1()
		{
    var window.rand = 
    Math.floor(Math.random() * 10) + 1; 
					
        } 
		}
				if(window.selectElement=="Hindi")
		{
		function random2()
		{
    var window.randd = 
    Math.floor(Math.random() * 7) + 1; 
					
        } 
		}
if(window.selectElement=="English")
{
function eng()
{
var sentence;
switch(window.rand)
{
	case 1:	sentence = [
  "John ate an apple before afternoon",
  "before afternoon John ate an apple",
  "John before afternoon ate an apple"
];
	case 2: sentence =[
"some students like to study in the night",
"at night some students like to study"
];
	case 3: sentence = [
"John and Mary went to church",
"Mary and John went to church"
];
	case 4: sentence = [
"John went to church after eating",	
"after eating John went to church",
"John after eating went to church"
];
	case 5: sentence = [
"did he go to market",	
"he did go to market"
];
	case 6: sentence = [
"the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"
];
	case 7: sentence = [
"John goes to the library and studies",
"John studies and goes to the library"
];
	case 8: sentence = [
"John ate an apple so did she",
"she ate an apple so did John"
];
	case 9: sentence = [
"the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"
];
	case 10: sentence = [
"I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her",
"yesterday I bought a book that I told her"
];
}
document.querySelector('.sentencee').textContent=sentence;
}
}
if(window.selectElement=="Hindi")
{
function hind()
{
var sentence1;
switch(window.randd)
{
	case 1: sentence1 = [
	"राम और श्याम बाजार गयें",
	"राम और श्याम गयें बाजार",
	"बाजार गयें राम और श्याम",
	"गयें बाजार राम और श्याम"
	];
	case 2: sentence1 = [
	"राम सोया और श्याम भी",
	"श्याम सोया और राम भी",
	"सोया श्याम और राम भी",
	"सोया राम और श्याम भी"
	];
	case 3: sentence1 = [
	"मैंने उसे बताया कि राम सो रहा है",
	"मैंने उसे बताया कि सो रहा है राम",
	"उसे मैंने बताया कि राम सो रहा है",
	"उसे मैंने बताया कि सो रहा है राम",
	"मैंने बताया उसे कि राम सो रहा है",
	"मैंने बताया उसे कि सो रहा है राम",
	"उसे बताया मैंने कि राम सो रहा है",
	"उसे बताया मैंने कि सो रहा है राम",
	"बताया मैंने उसे कि राम सो रहा है",
	"बताया मैंने उसे कि सो रहा है राम",
	"बताया उसे मैंने कि राम सो रहा है",
	"बताया उसे मैंने कि सो रहा है राम"
	];
	case 4: sentence1 = [
	"राम खाकर सोया",
	"खाकर राम सोया",
	"राम सोया खाकर",
	"खाकर सोया राम",
	"सोया राम खाकर",
	"सोया खाकर राम"
	];
	case 5: sentence1 = [
	"बिल्लियों को मारकर कुत्ता सो गया",
	"मारकर बिल्लियों को कुत्ता सो गया",
	"बिल्लियों को मारकर सो गया कुत्ता",	
	"मारकर बिल्लियों को सो गया कुत्ता",	
	"कुत्ता सो गया बिल्लियों को मारकर",	
	"कुत्ता सो गया मारकर बिल्लियों को",	
	"सो गया कुत्ता बिल्लियों को मारकर",
	"सो गया कुत्ता मारकर बिल्लियों को"
	];
	case 6: section1 = [
	"एक लाल किताब वहाँ है",
	"एक लाल किताब है वहाँ",
	"वहाँ है एक लाल किताब",
	"है वहाँ एक लाल किताब"
	];
	case 7:sentence1 = [
	"एक बड़ी सी किताब वहाँ है",
	"एक बड़ी सी किताब है वहाँ",
	"बड़ी सी एक किताब वहाँ है",
	"बड़ी सी एक किताब है वहाँ",
	"वहाँ है एक बड़ी सी किताब",
	"वहाँ है बड़ी सी एक किताब",
	"है वहाँ एक बड़ी सी किताब",
	"है वहाँ बड़ी सी एक किताब"
	];
}
document.querySelector('.sentencee').textContent=sentence1;
}
}









