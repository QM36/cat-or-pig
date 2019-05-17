## cat-or-pig

### Description

* You can deliver some names, then the function will return some sentences to tell you which is cat and which is pig.
* You need to note that the type of the incoming parameter is a string or an array.
* If you enter a number, there will be a warning and the input will be forced to string.
* The following input types are allowed：
	* `jack`
	* `jack, mark`
	* `[jack, mark]`

### examples
* One string
	```
	catOrPig('qm'); 
	//qm is cat
	```
* Multiple strings
	```
	catOrPig('qm','counter'); 
	//qm is cat
	//counter is pig
	```
* One array
	```
	catOrPig(['qm','counter','jack']); 
	//qm is cat
	//counter is pig
	//jack: I do not know him or her
	```