import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: process.env.API_BASE_URL ?? 'https://magento.test/graphql',
    documents: ['./src/**/*.{ts,tsx}'],
    generates: {
        './src/lib/magento/generated/': {
            preset: 'client',
            presetConfig: {
                fragmentMasking: {
                    unmaskFunctionName: 'getFragmentData'
                }
            },
            config: {
                useTypeImport: true,
                nonOptionalTypename: true,
                avoidOptionals: {
                    field: true,
                    object: true,
                    inputValue: false
                }
            }
        }
    }
}

export default config;
