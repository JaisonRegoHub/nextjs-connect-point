import styles from "../../styles/About.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>About ConnectPoint</h1>
      <div className={styles.content}>
        <p>
          ConnectPoint is a professional communication platform designed to
          streamline how users connect and share messages. Our mission is to
          empower individuals and businesses with a reliable, simple, and secure
          interface for managing communications.
        </p>
        <p>
          Built with a focus on clarity and performance, ConnectPoint leverages
          modern technologies to ensure your messages are handled safely and
          efficiently. Whether it’s for customer inquiries, feedback, or
          personal connections, our platform aims to make communication seamless
          and effective.
        </p>
        <p>
          We continuously iterate and enhance our features based on user
          feedback to provide an experience that fits professional and casual
          needs alike. Thank you for choosing ConnectPoint as your trusted
          communication partner.
        </p>
      </div>

      <a href="/contact" className={styles.callToAction}>
        Contact Us
      </a>
    </main>
  );
}
