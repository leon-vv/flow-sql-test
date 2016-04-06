"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Equal = Equal;
exports.GT = GT;
exports.LT = LT;
exports.And = And;
exports.Or = Or;
exports.stringOfConstraint = stringOfConstraint;
exports.stringOfQuery = stringOfQuery;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EqualConstraint = function EqualConstraint(left, right) {
    _classCallCheck(this, EqualConstraint);

    this.left = left;
    this.right = right;
};

function Equal(left, right) {
    return new EqualConstraint(left, right);
}

var GreaterThanConstraint = function GreaterThanConstraint(left, right) {
    _classCallCheck(this, GreaterThanConstraint);

    this.left = left;
    this.right = right;
};

function GT(left, right) {
    return new GreaterThanConstraint(left, right);
}

var LessThanConstraint = function LessThanConstraint(left, right) {
    _classCallCheck(this, LessThanConstraint);

    this.left = left;
    this.right = right;
};

function LT(left, right) {
    return new LessThanConstraint(left, right);
}

var AndConstraint = function AndConstraint(left, right) {
    _classCallCheck(this, AndConstraint);

    this.left = left;
    this.right = right;
};

function And(left, right) {
    return new AndConstraint(left, right);
}

var OrConstraint = function OrConstraint(left, right) {
    _classCallCheck(this, OrConstraint);

    this.left = left;
    this.right = right;
};

function Or(left, right) {
    return new OrConstraint(left, right);
}

function stringOfConstraint(cons) {
    var withinParen = function withinParen(s) {
        return "(" + s + ")";
    };

    if (cons instanceof EqualConstraint) {
        return cons.left + " = " + cons.right;
    } else if (cons instanceof GreaterThanConstraint) {
        return cons.left + " > " + cons.right;
    } else if (cons instanceof LessThanConstraint) {
        return cons.left + " < " + cons.right;
    } else if (cons instanceof AndConstraint) {
        return withinParen(stringOfConstraint(cons.left)) + " AND " + withinParen(stringOfConstraint(cons.right));
    } else if (cons instanceof OrConstraint) {
        return withinParen(stringOfConstraint(cons.left)) + " OR " + withinParen(stringOfConstraint(cons.right));
    }

    throw "Argument exception";
}

var Select = exports.Select = function Select(table, target, where) {
    _classCallCheck(this, Select);

    this.table = table;
    this.target = target;
    this.where = where;
};

function stringOfQuery(query) {
    if (query instanceof Select) {

        return "SELECT " + query.target + " FROM " + query.table + " WHERE " + stringOfConstraint(query.where);
    }

    throw "Argument exception";
}
