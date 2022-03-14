import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FloatLabel from "../components/FloatLabel";
import styles from "../styles/Login.module.css"

export default function Index() {
  const [loading, setLoading] = useState('is-loading')

  setTimeout(function () {
    setLoading("")
  }, 100)

  return (
    <div className={`body ${loading}`}>
      <div>
        <Head>
          <title>Login - TechFinanças</title>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
        </Head>

        <div id="wrapper">
          {/* <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} /> */}
          <header id="header">
            <div className={styles.logo}>
              <Image
                src="/logo_50_50.png"
                alt="Picture of the author"
                width={50}
                height={50} />
            </div>
            <div className="content">
              <div className="inner">
                <h1 style={{ marginBottom: 25 }}>LOGIN</h1>
                <FloatLabel id="email" type="email" name="email" text="E-mail" />
                <FloatLabel id="password" type="password" name="password" text="Senha" />

                <Link href="/">Esqueci minha senha</Link>
              </div>
            </div>
            <nav>
              <ul className="no-border">
                <li><a className="btn-green" href="javascript:;" onClick={() => { console.log('about') }}>Acessar o sistema</a></li>
              </ul>
            </nav>
          </header>
          <footer id="footer">
            <p className="copyright">&copy; TechnologyON. CONSTRUÍDO COM: <a href="https://github.com/zeit/next.js">Next.js</a></p>
          </footer>
        </div>

        <div id="bg" />
      </div>
    </div>
  )
}