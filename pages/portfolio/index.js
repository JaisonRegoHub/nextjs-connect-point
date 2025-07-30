import styles from "../../styles/Portfolio.module.css";

export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/projects");
  const data = await response.json();

  return {
    props: {
      projects: data.projects || [],
    },
  };
}

export default function Portfolio({ projects }) {
  return (
    <div className={styles.mainContent}>
      <h1 className={styles.title}>My Portfolio</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
