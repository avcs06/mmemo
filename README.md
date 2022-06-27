# Micro / Mini / Map Memo (No Shit, Memoize)

A much much simpler memorizing utility which does nothing but memorize. 

## Usage
```
import memo from '@avcs/memo';

const memorizedFunction = memo(originalFunction, { onlyOnce?: boolean })

// optionally you can do this
memorizedFunction.reset()
```

## Features
1. Supports any number of arguments
2. Arguments and return values can be literally anything and everything
3. Works by reference, so does not support `different objects/arrays/functions` with `same values`



**PS**: If anyone can think of anything else that's aboslutely necessary to be supported, this plugin probably is not what you want
