import Big from "big.js";
import { GraphQLScalarType, Kind } from "graphql";

export default new GraphQLScalarType({
    name: "Decimal",
    description: "The `Decimal` scalar type to represent currency values",

    serialize(value) {
        return new Big(value);
    },

    parseLiteral(ast) {
        if (ast.kind !== Kind.STRING) {
            // @ts-ignore | TS2339
            throw new TypeError(`${String(ast.value)} is not a valid decimal value.`);
        }

        return Big(ast.value);
    },

    parseValue(value) {
        return Big(value);
    }
});