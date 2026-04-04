import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

export function uuidValidateV7(uuid: string) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 7;
}

export function getUnixTimeFromUuidV7(uuid: string) {
    const hex = uuid.substring(0, 8) + uuid.substring(9, 13);
    return parseInt(hex, 16);
};
