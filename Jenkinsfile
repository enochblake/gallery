pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy to Render') {
      steps {
        // Start the server (replace this with Render deployment command later)
        sh 'node server'
      }
    }
  }

  post {
    success {
      echo 'Build and deployment successful!'
    }
    failure {
      echo 'Build failed!'
    }
  }
}
