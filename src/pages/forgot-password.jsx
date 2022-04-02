import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FloatLabel from "../components/FloatLabel";
import SuccessIcon from "../components/SuccessIcon";
import styles from "../styles/ForgotPassword.module.css"

export default function ForgotPassword() {
  const [finished, setFinished] = useState(false)
  const [done, setDone] = useState(false)

  function handleConfirm() {
    setFinished(true);
    setTimeout(() => {
      setFinished(false);
      setDone(true);
    }, 1010);
  }

  return (
    <div className="body">
      <div>
        <Head>
          <title>Esqueci minha senha - TechFinanças</title>
        </Head>

        <div id="wrapper">
          <header id="header">
            <div className={styles.logo}>
              <Image
                src="/logo_50_50.png"
                alt="Picture of the author"
                width={50}
                height={50} />
            </div>
            <div className="content">
              <div className={`inner ${finished ? styles.hiddenInner : ''}`}>
                {
                  !done &&
                  <>
                    <h1 className={styles.titulo} style={{ marginBottom: 40 }}>DEFINIR NOVA SENHA</h1>
                    <FloatLabel id="new-password" type="password" name="new-password" label="Nova senha" />
                    <FloatLabel id="confirm-new-password" type="password" name="confirm-new-password" label="Confirmar nova senha" />

                    <Link href="/">Voltar para o login</Link>
                  </>
                }

                {
                  done &&
                  <>
                    <SuccessIcon />
                    <p><strong>Solicitação de nova senha enviada para seu e-mail</strong></p>
                  </>
                }
              </div>
            </div>
            <nav className={done ? styles.hiddenNav : ''}>
              <ul className="no-border">
                <li><a className="btn-green" href="javascript:;" onClick={handleConfirm}>Confirmar alteração</a></li>
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
  );
}