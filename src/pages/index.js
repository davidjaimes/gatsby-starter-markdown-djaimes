import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>
          <p style={{color: "#24292e", fontSize: 50, fontWeight: 'bold'}}>
            Husband. Scientist. Trail Runner.
          </p>
          <h3>Creativity and imagination are great starting places, but hard-headed thinking and extreme attention to detail are essential to success.</h3>
          <h5>Jet Propulsion Laboratory</h5>
          <br/>
          <Link to="/macOS/data-science-env-setup">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Get Started</Button>
          </Link>
          <Button type="primary" size="large" icon="github" href="https://github.com/davidjaimes">davidjaimes</Button>
          <br/><br/><br/>
          <p>© 2020 David Jaimes. <Link to="/legal/terms">Terms</Link></p>
          <p>Made with <a href="https://www.gatsbyjs.org">Gatsby</a>. Hosted with <a href="https://github.com">Github</a>.</p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
