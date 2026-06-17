const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skillGroups = [
  {
    category: 'Programming',
    skills: [
      { name: 'Java', logo: `${DEVICON}/java/java-original.svg` },
      { name: 'Python', logo: `${DEVICON}/python/python-original.svg` },
      { name: 'JavaScript', logo: `${DEVICON}/javascript/javascript-original.svg` },
      { name: 'TypeScript', logo: `${DEVICON}/typescript/typescript-original.svg` },
      { name: 'SQL', logo: `${DEVICON}/mysql/mysql-original.svg` },
    ],
  },
  {
    category: 'Frontend & Backend',
    skills: [
      { name: 'React.js', logo: `${DEVICON}/react/react-original.svg` },
      { name: 'Node.js', logo: `${DEVICON}/nodejs/nodejs-original.svg` },
      { name: 'REST API', logo: `${DEVICON}/fastapi/fastapi-original.svg` },
      { name: 'GraphQL', logo: `${DEVICON}/graphql/graphql-plain.svg` },
      { name: 'Vite', logo: `${DEVICON}/vitejs/vitejs-original.svg` },
      { name: 'Tailwind CSS', logo: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'TensorFlow', logo: `${DEVICON}/tensorflow/tensorflow-original.svg` },
      { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
      { name: 'NumPy', logo: `${DEVICON}/numpy/numpy-original.svg` },
      { name: 'Pandas', logo: `${DEVICON}/pandas/pandas-original.svg` },
      { name: 'MediaPipe', logo: 'https://developers.google.com/static/mediapipe/images/mediapipe_icon.svg' },
      { name: 'LLM', logo: 'https://cdn.simpleicons.org/openai/10B981' },
      { name: 'AI Agents', logo: 'https://cdn.simpleicons.org/langchain/34D399' },
    ],
  },
  {
    category: 'Cloud & Database',
    skills: [
      { name: 'AWS', logo: `${DEVICON}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: 'Google Cloud', logo: `${DEVICON}/googlecloud/googlecloud-original.svg` },
      { name: 'Firebase', logo: `${DEVICON}/firebase/firebase-plain.svg` },
      { name: 'PostgreSQL', logo: `${DEVICON}/postgresql/postgresql-original.svg` },
      { name: 'DynamoDB', logo: 'https://cdn.simpleicons.org/amazondynamodb/527FFF' },
    ],
  },
  {
    category: 'MLOps',
    skills: [
      { name: 'Docker', logo: `${DEVICON}/docker/docker-original.svg` },
      { name: 'Model Deployment', logo: `${DEVICON}/kubernetes/kubernetes-plain.svg` },
      { name: 'Vector Database', logo: 'https://cdn.simpleicons.org/pinecone/34D399' },
      { name: 'RAG', logo: 'https://cdn.simpleicons.org/huggingface/FFD21E' },
      { name: 'LLMOps', logo: 'https://cdn.simpleicons.org/mlflow/0194E2' },
    ],
  },
]
