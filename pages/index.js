import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title}>ConnectPoint</h1>
      <p className={styles.description}>
        Seamless Communication Made Simple.
        <br />
        Empower your users to reach out effortlessly through a streamlined
        contact interface backed by secure and reliable message management.
      </p>

      <section className={styles.featuresSection}>
        <h2>Features</h2>
        <ul className={styles.featureList}>
          <li>
            <strong>Easy Messaging:</strong> Simple, intuitive contact form and
            real-time validations.
          </li>
          <li>
            <strong>Secure Storage:</strong> Reliable backend powered by MongoDB
            for message safety.
          </li>
          <li>
            <strong>Fully Responsive:</strong> Looks great on any device or
            screen size.
          </li>
          <li>
            <strong>Blazing Fast:</strong> Optimized load times and snappy user
            experience.
          </li>
        </ul>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonials}>
          <blockquote>
            “ConnectPoint streamlines all my business communications! Highly
            recommended.”
            <footer>- Sarah, Freelancer</footer>
          </blockquote>
          <blockquote>
            “So easy to use and secure. I love the fast, modern interface.”
            <footer>- Mike, Business Owner</footer>
          </blockquote>
        </div>
      </section>

      <footer className={styles.footer}>
        © 2025 ConnectPoint. All rights reserved.
      </footer>
    </div>
  );
}
