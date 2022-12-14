import svelte from "rollup-plugin-svelte"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"
import del from "rollup-plugin-delete"
import html from "@axel669/rollup-html-input"
import copy from "@axel669/rollup-copy-static"
import $path from "@axel669/rollup-dollar-path"

export default {
    input: "src/index.html",
    output: {
        file: `build/app-d${Date.now()}.js`,
        format: "iife",
    },
    plugins: [
        html(),
        del({ targets: "build/*" }),
        $path({
            root: "src",
        }),
        svelte(),
        resolve(),
        commonjs(),
        copy("static"),
    ]
}
