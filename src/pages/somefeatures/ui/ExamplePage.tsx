// relative
//import { ExampleButton } from "../../../shared/ui/" // This is OK(relative import from public api)
//import { ExampleButton } from "../../../shared/ui/ExampleButton" // This is NG(relative import from private api)
// absolute
//import { ExampleButton } from "src/shared/ui" // This is OK.
//import { ExampleButton } from "src/shared/ui/ExampleButton" // I want this to be lint error.

// alias
//import { ExampleButton } from "@/shared/ui" // This is OK(import with alias from public api)
import { ExampleButton } from "@/shared/ui/ExampleButton" // I want this to be lint error.


export const ExamplePage = () => {
    return (<div><ExampleButton /></div>)
}