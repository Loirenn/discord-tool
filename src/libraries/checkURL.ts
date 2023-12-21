import { URLRegex } from "../urlRegex";

export function CheckURL(text: string) {
    return URLRegex.test(text);
};