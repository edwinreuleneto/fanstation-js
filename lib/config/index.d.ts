export declare type Env = 'production' | 'PRODUCTION' | 'development' | 'DEVELOPMENT' | 'local' | 'LOCAL' | 'homolog' | 'HOMOLOG';
export declare type AvailableLocales = 'pt_br' | 'PT_BR' | 'en_us' | 'EN_US';
export interface Config {
    readonly env?: Env;
    readonly port?: number;
    readonly locale: AvailableLocales;
    readonly legacy?: boolean;
    readonly url?: string;
}
