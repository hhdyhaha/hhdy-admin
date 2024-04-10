// src/types/env.d.ts
interface ImportMetaEnv {
    /**
     * 应用标题
     */
    VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
