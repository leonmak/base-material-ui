import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
BrowserPolicy.content.allowOriginForAll( 'www.gstatic.com' );

BrowserPolicy.content.allowInlineScripts()
BrowserPolicy.content.allowEval()
BrowserPolicy.content.allowInlineStyles()
