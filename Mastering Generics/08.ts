type FunctionKeys<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type AllFunctions<T> = Pick<T, FunctionKeys<T>>;

type test1 = {
    name: string;
    age: number;
    test: () => string;
};
type extracted1 = AllFunctions<test>;
type Employee1 = {
    name: string;

    salary: number;

    work: () => void;

    takeBreak: () => string;
};

type extracted22 = AllFunctions<Employee>;
