# JS Style guide
## Second level heading

1. Statement
2. Variable
3. Comments
4. Operators
5. Conditional structure - if
6. Code indentation
7. Line length
8. Naming conventions


### 1. Statement
##### Each statement must end with a semicolon.
##### Statement is followed by line break.

##### bad example
Var name “Yoobee” ; var place = “Wellington” (No line break or semicolon)


#### bad example 2

Var name = “Yoobee”
Var place = “Wellington” (No semicolon)

##### good example
var name =“Yoobee” ;
var place = “Wellington” ;


### 2. Variable

##### Variables are value holders they may change during the course of execution (eg:age)

*Always declare variables with the keyword var. Declare at the top of a code block. Declare a loop variable before using in the loop instead of inline.*

##### bad example 1
name =“Yoobee” ; (No var )


#### bad example 2
Function(){
adffrgtgth
Var = 0;
Grgerhh
}

#### bad example 3
For (var i=o, i<10, i++){
}



##### good example 1
var name =“Yoobee” ; (var is used)


#### good example 2
funct(){       (var is on top of code)
Var x=o;
Dgtdhth
}


#### good example 3
For (var i=o, i<10, i++){
}



### 3. Comments

##### Good comments allow us to maintain the code well, come back to it after a delay and use it more effectively.

*Use // to write single line comments Multi-line comments start with / and end with / Use comments for each code block or para Write comments between a series of asterisk above and below each block*

##### bad example
// display age greater than 20

#### good example
********************************
// display age greater than 20
*********************************


### 4. Operators
*Keep a space before and after any operator.*

###### bad example
var x=y+2;  


###### good example
var x = y + 2;

### 5. Condition structure - if
*use space after the keyword if.*
*Use space after the parenthesis.*
*Use open curly braces at the end of first line.*
*Use closed curly braces in a new line.*
*Keep the else keyword on the same line as the closed curly braces at the previous set of brackets*
*Indent the code as given in the good example*
##### bad example
if(age>17)
{

}

else{alert('hello');}

##### good example
if ( age > 17 ) {
    alert ( 'hi' );
} else {
    alert ( 'hello' );
}
