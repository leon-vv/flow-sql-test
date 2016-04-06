/* @flow */

import {Select, Or, And, LT, GT, Equal, stringOfQuery} from "./sql.js";


// SELECT Name, Address FROM User WHERE ((Age < 18) AND (Name = Bernard)) OR ((Age > 30) AND (Name = Jannie-Jakobus))
var q = new Select("User", "Name, Address", Or(
            And(LT("Age", "18"), Equal("Name", "Bernard")),
            And(GT("Age", "30"), Equal("Name", "Jannie-Jakobus"))));


console.log(stringOfQuery(q));
