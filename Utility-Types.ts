// Extract 

type A = "apple" | "banana" | "cherry";
type B = "banana" | "cherry" | "date";

// Extracts only the common types: "banana" | "cherry"
type CommonFruits = Extract<A, B>;

let fruit1: CommonFruits = "banana"; // ✅ Valid
let fruit2: CommonFruits = "cherry";  // ✅ Valid
// let fruit3: CommonFruits = "apple"; // ❌ Error: "apple" is not part of Extracted type


// Exclude =========================================================

type A = "apple" | "banana" | "cherry";
type B = "banana" | "cherry";

// Excludes "banana" and "cherry", keeping only "apple"
type UniqueFruits = Exclude<A, B>;

let fruit4: UniqueFruits = "apple";  // ✅ Valid
// let fruit5: UniqueFruits = "banana"; // ❌ Error: "banana" is excluded


// Awaited  =========================================================

type PromiseExample = Promise<string>;

type Result = Awaited<PromiseExample>; // string


// Parameters  =========================================================

function add(a: number, b: string): boolean {
    return a.toString() === b;
}

type Params = Parameters<typeof add>; // [number, string]


// NonNullable  =========================================================

type Example = string | number | null | undefined;

type Cleaned = NonNullable<Example>; // string | number


// ReturnType  =========================================================

function getUser(): { id: number; name: string } {
    return { id: 1, name: "Alice" };
}

type UserType = ReturnType<typeof getUser>;
// { id: number; name: string }


type MyFunction = () => boolean;

type FuncReturn = ReturnType<MyFunction>; // boolean



// InstanceType  =========================================================

class Person {
    name: string = "John";
    age: number = 30;
}

type PersonInstance = InstanceType<typeof Person>;
// { name: string; age: number; }

