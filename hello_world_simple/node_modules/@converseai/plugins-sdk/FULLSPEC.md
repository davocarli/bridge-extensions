# JSON Definitions
The JSON definition is submited to the Converse.AI platform and defines the plugin, modules, and parameters. 
Below is the definitions for each.

## Plugin Definition
```JSON
{
  "name": "pluginId",
  "displayName": "Plugin Name",
  "invoker": {
    "webhook": {
      "headers": {
        "Content-Type": "application/json"
      },
      "webhookURL": "http://link.to.docs"
    }
  },
  "description": "A description for the plugin.",
  "category": "Plugin Category",
  "module": []
}

```

## Module Definition
```JSON
{
  "id": "moduleId",
  "name": "Module Name",
  "description": "A description for the module.",
  "param": []
}
```

## Param Definition
There are multiple types of params to choose from depending on the input data you wish to recieve for your module. 
Each of the following param types are converted to user friendly inputs on Converse.AI.

### Basic Param Definition
The following JSON definition is shared by all param types. 
Optionally `readOnly` and `optional` can be set to `true` to disable input or make an input not required respectively.
```JSON
{
  "param": "param",
  "displayName": "Param",
  "type": "<INSERT_TYPE>",
  "description": "A description for the string param."
}
```

#### Basic Types
The basic types of a param are the following:

`STRING`, `PASSWORD`, `TEXT`, `HTML`, `NUMBER`, `BOOLEAN`, `MAP`

These values can be accessed in your javascript as:
```Javascript
// STRING, PASSWORD, TEXT, HTML
/** @type {String} stringParam*/
var stringParam = body.payload.moduleParam.<param>;
/** @type {String} passwordParam*/
var passwordParam = body.payload.moduleParam.<param>;
/** @type {String} textParam*/
var textParam = body.payload.moduleParam.<param>;
/** @type {String} htmlParam*/
var htmlParam = body.payload.moduleParam.<param>;

// NUMBER
/** @type {Number} numberParam*/
var numberParam = body.payload.moduleParam.<param>;

// BOOLEAN
/** @type {Boolean} booleanParam*/
var booleanParam = body.payload.moduleParam.<param>;

// MAP { key: value }
/** @type {Object} mapParam*/
var mapParam = body.payload.moduleParam.<param>;
```

#### Advanced Types
##### ENUM Param
An enum type should be given a `value` property of an array of strings. 
This will be represented to the user as a drop down in the Converse.AI platform and will be represented as a string in your javascript module function.
```JSON
{
  "param": "enumParam",
  "displayName": "Enum Param",
  "type": "ENUM",
  "description": "A description for the enum param.",
  "value": [
    "Value 1",
    "Value 2",
    "Value 3"
  ]
}
```
```Javascript
/** @type {String} enumParam*/
var enumParam = body.payload.moduleParam.enumParam;
```

##### Grouping Params
It is possible to group params into a sub categories by using the param type `PARAM`.
`valueParams` is an array that consists of other param types, each of the params in this array will be grouped by the parent param.
```JSON
{
  "param": "groupedParam",
  "displayName": "Grouped Param",
  "type": "PARAM",
  "description": "A description for the grouped param.",
  "valueParams": [
    {
      "param": "subStringParam",
      "displayName": "Sub String Param",
      "type": "STRING",
      "description": "A description for the sub string param."
    }
  ]
}
```
```Javascript
/** @type {Object} groupedParam*/
var groupedParam = body.payload.moduleParam.groupedParam;
/** @type {String} subStringParam*/
var subStringParam = body.payload.moduleParam.groupedParam.subStringParam;
```

#### Array Types
Certain param types can use another property called `allowArray`. 
When set to true it turns the param into an array of params.

`minItems` and `maxItems` can also be set to limit the min and max items in the array respectively.

#### String Array Param
With the definition below the user will be allowed to enter up to 5 strings.
```JSON
{
  "param": "stringArrayParam",
  "displayName": "String Array Param",
  "type": "STRING",
  "description": "A description for the string array param.",
  "allowArray": true,
  "minItems": 0,
  "maxItems": 5
}
```
```Javascript
/** @type {String[]} stringArrayParam*/
var stringArrayParam = body.payload.moduleParam.stringArrayParam;
```

#### Array PARAM Param
The definition below will create an array of grouped params that a user can fill in. 
Each item in the array will consist of the entire `valueParams` array.
```JSON
{
  "param": "arrayParam",
  "displayName": "Array Param",
  "type": "PARAM",
  "description": "A description for the array param.",
  "allowArray": true,
  "minItems": 0,
  "maxItems": 3,
  "valueParams": [
    {
      "param": "subStringParam",
      "displayName": "Sub String Param",
      "type": "STRING",
      "description": "A description for the sub string param."
    },
    {
      "param": "subNumberParam",
      "displayName": "Sub Number Param",
      "type": "NUMBER",
      "description": "A description for the sub number param."
    }
  ]
}
```
User Input:
```
Array Param #1
- Sub String Param
- Sub Number Param
Array Param #2
- Sub String Param
- Sub Number Param
Array Param #3
- Sub String Param
- Sub Number Param
```
Javascript
```Javascript
/** @type {Object[]} arrayParam*/
var arrayParam = body.payload.moduleParam.arrayParam;
/** @type {String} subStringParam1*/
var subStringParam1 = body.payload.moduleParam.arrayParam[0].subStringParam;
```
