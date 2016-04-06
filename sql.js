/* @flow */

class EqualConstraint {
    left: string;
    right: string;

    constructor(left: string, right: string) {
        this.left = left;
        this.right = right;
    }
}

export function Equal(left: string, right: string): EqualConstraint {
    return new EqualConstraint(left, right);
}

class GreaterThanConstraint {
    left: string;
    right: string;

    constructor(left: string, right: string) {
        this.left = left;
        this.right = right;
    }
}

export function GT(left: string, right: string): GreaterThanConstraint{
    return new GreaterThanConstraint(left, right);
}

class LessThanConstraint {
    left: string;
    right: string;

    constructor(left: string, right: string) {
        this.left = left;
        this.right = right;
    }
}

export function LT(left: string, right: string): LessThanConstraint {
    return new LessThanConstraint(left, right);
}

class AndConstraint {
    left: Constraint;
    right: Constraint;

    constructor(left: Constraint, right: Constraint) {
        this.left = left;
        this.right = right;
    }
}

export function And(left: Constraint, right: Constraint): AndConstraint {
    return new AndConstraint(left, right);
}

class OrConstraint {
    left: Constraint;
    right: Constraint;

    constructor(left: Constraint, right: Constraint) {
        this.left = left;
        this.right = right;
    }
}

export function Or(left: Constraint, right: Constraint): OrConstraint {
    return new OrConstraint(left, right);
}


type Constraint =
    EqualConstraint
    | GreaterThanConstraint
    | LessThanConstraint
    | AndConstraint
    | OrConstraint;

export function stringOfConstraint(cons: Constraint): string {
    var withinParen  = s => "(" + s + ")";

    if(cons instanceof EqualConstraint) {
        return cons.left + " = " + cons.right;
    }
    else if(cons instanceof GreaterThanConstraint) {
        return cons.left + " > " + cons.right;
    }
    else if(cons instanceof LessThanConstraint) {
        return cons.left + " < " + cons.right;
    }
    else if(cons instanceof AndConstraint) {
        return withinParen(stringOfConstraint(cons.left))
            + " AND " +
            withinParen(stringOfConstraint(cons.right));
    }
    else if(cons instanceof OrConstraint) {
        return withinParen(stringOfConstraint(cons.left))
            + " OR " +
            withinParen(stringOfConstraint(cons.right));
    }

    throw "Argument exception";
}

export class Select {
    table: string;
    target: string;
    where: Constraint;

    constructor(table: string, target: string, where: Constraint) {
        this.table = table;
        this.target = target;
        this.where = where;
    }
}

export type Query = Select;

export function stringOfQuery(query: Query): string {
    if(query instanceof Select) {

        return "SELECT " + query.target + " FROM " + query.table +
            " WHERE " + stringOfConstraint(query.where);
    }

    throw "Argument exception";
}

