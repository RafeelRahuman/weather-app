import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {

    mode: "development",

    entry : "./src/index.js",

    output : {
        filename :"bundle.js",
        path : path.resolve("dist"),
        clean : true
    },

    plugins : [
        new HtmlWebpackPlugin({
            template : "index.html"
        })
    ],

    module : {
        rules : [
            {
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    }
};