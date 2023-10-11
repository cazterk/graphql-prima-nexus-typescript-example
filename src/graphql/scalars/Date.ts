import { asNexusMethod } from "nexus";
import { GraphQLDateTime } from "graphql-scalars";

export const GQDate = asNexusMethod(GraphQLDateTime, "dateTime");
