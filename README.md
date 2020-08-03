# table-sort
Demonstration of table data sorting in vanilla JavaScript.

* No dependencies, vanilla JavaScript + HTML5.
* It uses JavaScript modules so it won't work offline in a browser. Start a live-server or copy it directly to a server and open the index.htm file.
* Click on table headers to sort (ascending/descending).
* Click on any row of the table to instantly remove it from the list.

***

<details>
<summary><strong>SCREENSHOT</strong></summary>

[see here](./tablesort.png)
</details>

<details>
<summary><strong>TROUBLESHOOTING</strong></summary>

You may get one of those errors in the browser console and the script won't run:

<code>Loading module from “xxxxx/modules/xxxxx.mjs” was blocked because of a disallowed MIME type (“”).</code>

<code>Failed to load module script: The server responded with a non-JavaScript MIME type of "". Strict MIME type checking is enforced for module scripts per HTML spec.</code>

In such cases the server does not know the MIME type of JavaScript modules. A simple renaming to .js (instead of .mjs) won't help. If you are running an Apache server put this into your .htaccess file:
```apache
RewriteEngine on

AddType text/javascript js mjs
```
</details>
