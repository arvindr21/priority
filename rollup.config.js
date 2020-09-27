import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import autoPreprocess from "svelte-preprocess";
import typescript from "rollup-plugin-typescript";
import json from '@rollup/plugin-json';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require("./package.json");
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/svelte.js",
    output: {
        sourcemap: true,
        format: "iife",
        name: packageJSON.name,
        file: "public/build/bundle.js",
        banner: "/**!\n" +
            "* @license\n" +
            "* The MIT License (MIT)\n" +
            "* \n" +
            "* Copyright (c) 2020 Arvind Ravulavaru - https://github.com/arvindr21/priority\n" +
            "* \n" +
            "* Permission is hereby granted, free of charge, to any person obtaining a copy\n" +
            '* of this software and associated documentation files (the "Software"), to deal\n' +
            "* in the Software without restriction, including without limitation the rights\n" +
            "* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n" +
            "* copies of the Software, and to permit persons to whom the Software is\n" +
            "* furnished to do so, subject to the following conditions:\n" +
            "* \n" +
            "* The above copyright notice and this permission notice shall be included in all\n" +
            "* copies or substantial portions of the Software.\n" +
            "* \n" +
            '* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n' +
            "* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n" +
            "* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n" +
            "* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n" +
            "* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n" +
            "* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n" +
            "* SOFTWARE.\n" +
            "* \n" +
            "* More information can be found at https://github.com/arvindr21/priority \n" +
            "*/",
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
            // we'll extract any component CSS out into
            // a separate file - better for performance
            css: (css) => {
                css.write("public/build/bundle.css");
            },
            preprocess: autoPreprocess(),
        }),
        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            browser: true,
            dedupe: ["svelte"],
        }),
        commonjs(),

        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload("public"),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),

        typescript(),

        json()
    ],
    watch: {
        clearScreen: false,
    },
};

function serve() {
    let started = false;

    return {
        writeBundle() {
            if (!started) {
                started = true;

                // eslint-disable-next-line @typescript-eslint/no-var-requires
                require("child_process").spawn(
                    "npm", ["run", "svelte-start", "--", "--dev"], {
                        stdio: ["ignore", "inherit", "inherit"],
                        shell: true,
                    }
                );
            }
        },
    };
}