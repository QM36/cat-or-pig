## cat-or-pig

### Description

* Support Chinese and English output: 
	* The first parameter you pass will be considered a language configuration parameter. 
	* Please ensure that this parameter is `en` for English or `zh` for Chinese.
* For content parameter, you can deliver some names, then the function will return some sentences to tell you which is cat and which is pig.
* You need to note that the type of the incoming parameter is a string or an array.
* If you enter a number, there will be a warning and the input will be forced to string.
* The following input types are allowed：
	* `jack`
	* `jack, mark`
	* `[jack, mark]` or `[jack,[mark, mary]]`
* Supporting command line operations: 
	* Input `cop` to run the program.
	* Each line needs to input a language configuration parameter(`zh`or`en`) and a name separated by commas(`,`)

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
* Command line operations
	```
	➜  cat-or-pig git:(master) ✗ cop
	cop> zh,qm
	qm是猫
	cop> en,qm
	qm is cat
	cop>
	```