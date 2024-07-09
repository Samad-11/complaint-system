import { ZodIssue } from "zod";

export const findErrors = (fieldName: string, errors: ZodIssue[] | undefined) => {
    // if (!errors) return null
    if (!errors) {
        return null
    }
    return errors
        .filter((item) => {
            return item.path.includes(fieldName)
        })
        .map((item) => item.message)
}