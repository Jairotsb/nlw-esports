import Document, { Html, Main, NextScript, Head } from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;600;900&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="icon" href="logo.svg" />
                </Head>
                <body className="bg-[#121214] bg-galaxy bg-cover bg-no-repeat">
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}