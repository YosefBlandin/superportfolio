const React = require("react")
const { Layout } = require("./src/components/Layout")
require("./src/styles/globalStyles.scss")

exports.wrapPageElement = ({ element, props}) => {
    return <Layout {...props}>
        {element}
    </Layout>
}