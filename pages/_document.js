import React from 'react'
import Document, {Html,Head,Main,NextScript} from "next/document";

export default class CustomDocument extends Document{
    render(){

        return (
            <Html lang="en">
                <Head/>
                <body className="login-main-body" id="page-top">
                    <Main/>
                <NextScript/>
                <script type="text/javascript" src="https://s.skimresources.com/js/216756X1697598.skimlinks.js"></script>
                </body>
            </Html>
        )
    }
}