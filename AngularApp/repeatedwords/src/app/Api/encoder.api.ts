import { HttpUrlEncodingCodec } from '@angular/common/http';


export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k: string): string {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v: string): string {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}

