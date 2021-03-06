// Copyright 2009 Opera Software.
// This code is released under the BSD license found in the license.txt file.

function test(){ /** Returns how many times JSON.parse() ran on a simple input text during one second */
	var source='{ "key1":"value1", "array1":[1,2,null,3,"4"], "nestedObject":{ "key1":"value1", "array1":[1,2,null,3,"4"] }  }';
	var count=0, goOn=true;
	var start=(new Date()).getTime();
	do{
		JSON.parse(source);
		count++;
		// to avoid turning this into a Date() performance test.. we do a date check only once per 1000 loops
		if(count%1000==0)goOn=((new Date()).getTime()-start) <1000;
	}while( goOn );
	var time = (new Date()).getTime()-start;
	return 'Got score of '+ 100000*time/count+'. The input was parsed '+count+' times in ' + time +'ms' ;
}
