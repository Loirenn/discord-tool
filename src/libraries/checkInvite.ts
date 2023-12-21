import { InviteRegex } from "../inviteRegex";

export function CheckInvite(text: string) {
    return InviteRegex.test(text);
};