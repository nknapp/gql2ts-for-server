export namespace schema {
    export interface Query {
        stringField: string | Promise<string> | { (): string } | { (): Promise<string> }
        booleanField: boolean | Promise<boolean> | { (): boolean } | { (): Promise<boolean> }
        intField: number | Promise<number> | { (): number } | { (): Promise<number> }
        floatField: number | Promise<number> | { (): number } | { (): Promise<number> }
        idField: string | Promise<string> | { (): string } | { (): Promise<string> }
    }
}
