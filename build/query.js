"use strict";

var _sql = require("./sql.js");

var q = new _sql.Select("User", "Name, Address", (0, _sql.Or)((0, _sql.And)((0, _sql.LT)("Age", "18"), (0, _sql.Equal)("Name", "Bernard")), (0, _sql.And)((0, _sql.GT)("Age", "30"), (0, _sql.Equal)("Name", "Jannie-Jakobus"))));

console.log((0, _sql.stringOfQuery)(q));
